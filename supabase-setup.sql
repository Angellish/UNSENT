-- ============================================================
-- UNSENT - Supabase database setup
-- Version: 2026-11-28
--
-- PURPOSE
-- Recreates the database structure and core submission workflow
-- for a NEW / RESTORED Supabase project.
--
-- IMPORTANT
-- 1. Do NOT run this file on the live UNSENT database as a routine
--    update. It is a setup/restore script, not a migration.
-- 2. Review the Telegram webhook setup notes at the end. The webhook
--    is intentionally NOT created here because its secret must never
--    be stored in a public GitHub SQL file.
-- 3. This file contains no API keys, bot tokens, passwords, or secrets.
-- ============================================================


-- ------------------------------------------------------------
-- 1. messages table
-- ------------------------------------------------------------

create table if not exists public.messages (
    id uuid primary key,
    recipient_name text not null,
    song_title text,
    artist text,
    song_url text not null,
    message text not null,
    mood text,
    created_at timestamptz default now(),
    is_approved boolean not null default false,

    -- Automatically normalized from recipient_name.
    -- This is a STORED generated column; do not insert into it directly.
    recipient_key text generated always as (
        regexp_replace(
            lower(trim(recipient_name)),
            '\s+',
            ' ',
            'g'
        )
    ) stored,

    constraint recipient_not_empty
        check (length(trim(recipient_name)) > 0),

    constraint song_not_empty
        check (song_title is null or length(trim(song_title)) > 0),

    constraint artist_not_empty
        check (artist is null or length(trim(artist)) > 0),

    constraint message_not_empty
        check (length(trim(message)) > 0),

    constraint valid_music_url
        check (
            song_url ~* '^https://(www\.)?(youtube\.com|youtu\.be|music\.youtube\.com|open\.spotify\.com)/'
        )
);


-- ------------------------------------------------------------
-- 2. private_sender_details table
-- ------------------------------------------------------------

create table if not exists public.private_sender_details (
    message_id uuid primary key
        references public.messages(id) on delete cascade,
    sender_name text,
    created_at timestamptz default now()
);


-- ------------------------------------------------------------
-- 3. Row Level Security
-- ------------------------------------------------------------

alter table public.messages enable row level security;
alter table public.private_sender_details enable row level security;

-- Public visitors can read only approved messages.
drop policy if exists "Anyone can read approved messages"
    on public.messages;

create policy "Anyone can read approved messages"
    on public.messages
    for select
    to anon
    using (is_approved = true);

-- The policy allows only unapproved direct inserts.
-- The normal website submission flow uses the SECURITY DEFINER RPC below.
drop policy if exists "Anyone can submit messages"
    on public.messages;

create policy "Anyone can submit messages"
    on public.messages
    for insert
    to anon
    with check (is_approved = false);

-- Sender details can be submitted, but there is no public SELECT policy.
drop policy if exists "Anyone can submit sender details"
    on public.private_sender_details;

create policy "Anyone can submit sender details"
    on public.private_sender_details
    for insert
    to anon
    with check (true);


-- ------------------------------------------------------------
-- 4. Automatic approval trigger
-- ------------------------------------------------------------

create or replace function public.auto_approve_unsent_message()
returns trigger
language plpgsql
security definer
set search_path = public
as $function$
begin
    new.is_approved := true;
    return new;
end;
$function$;

drop trigger if exists auto_approve_unsent_message_trigger
    on public.messages;

create trigger auto_approve_unsent_message_trigger
before insert on public.messages
for each row
execute function public.auto_approve_unsent_message();


-- ------------------------------------------------------------
-- 5. Main submission function
-- ------------------------------------------------------------

-- p_sender_private is retained because the current website calls this
-- eight-argument function. The current database schema stores sender_name
-- only; it does not have a sender-privacy column.
create or replace function public.submit_unsent_message(
    p_recipient_name text,
    p_song_title text,
    p_artist text,
    p_song_url text,
    p_message text,
    p_mood text,
    p_sender_name text,
    p_sender_private boolean
)
returns uuid
language plpgsql
security definer
set search_path = ''
as $function$
declare
    new_message_id uuid;
    clean_recipient text;
begin
    clean_recipient :=
        regexp_replace(
            lower(trim(p_recipient_name)),
            '\s+',
            ' ',
            'g'
        );

    if clean_recipient = ''
       or length(clean_recipient) > 70 then
        raise exception 'Invalid recipient name';
    end if;

    if trim(coalesce(p_message, '')) = '' then
        raise exception 'Message is required';
    end if;

    if p_song_url is null
       or p_song_url !~* '^https://(www\.)?(youtube\.com|music\.youtube\.com|youtu\.be|open\.spotify\.com)/'
    then
        raise exception 'Invalid music link';
    end if;

    new_message_id := gen_random_uuid();

    insert into public.messages (
        id,
        recipient_name,
        song_title,
        artist,
        song_url,
        message,
        mood,
        is_approved
    )
    values (
        new_message_id,
        trim(p_recipient_name),
        nullif(trim(coalesce(p_song_title, '')), ''),
        nullif(trim(coalesce(p_artist, '')), ''),
        trim(p_song_url),
        trim(p_message),
        coalesce(nullif(trim(p_mood), ''), 'unspoken'),
        false
    );

    insert into public.private_sender_details (
        message_id,
        sender_name
    )
    values (
        new_message_id,
        nullif(trim(coalesce(p_sender_name, '')), '')
    );

    return new_message_id;
end;
$function$;


-- ------------------------------------------------------------
-- 6. Grants
-- ------------------------------------------------------------

-- Public website reads approved messages through the anon role.
grant select on table public.messages to anon;

-- The Edge Function uses the service_role key to retrieve message details.
grant select on table public.messages to service_role;

-- The browser submits through the RPC, not by directly inserting rows.
grant execute on function public.submit_unsent_message(
    text, text, text, text, text, text, text, boolean
) to anon, authenticated;

-- Do not grant public read access to private sender details.
revoke all on table public.private_sender_details from anon, authenticated;


-- ------------------------------------------------------------
-- 7. Telegram notification integration - MANUAL DASHBOARD SETUP
-- ------------------------------------------------------------

-- The production project uses a Supabase Database Webhook:
--
--   Name:   unsent_telegram_notification
--   Table:  public.private_sender_details
--   Event:  INSERT
--   Target: Edge Function "telegram-notify"
--   Method: POST
--   Header: x-webhook-secret
--
-- The Edge Function expects these Supabase secrets:
--   TELEGRAM_BOT_TOKEN
--   TELEGRAM_CHAT_ID
--   WEBHOOK_SECRET
--
-- Also ensure the Edge Function has access to:
--   SUPABASE_URL
--   SUPABASE_SERVICE_ROLE_KEY
--
-- Configure the webhook and secrets in the Supabase Dashboard.
-- NEVER paste real secret values into this file or commit them to GitHub.
--
-- The webhook trigger is intentionally omitted from this SQL script.
-- Recreate it through Supabase Dashboard after deploying the Edge Function.
--
-- End of UNSENT database setup.
