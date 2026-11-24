-- UNSENT database setup
-- Run this whole script in Supabase > SQL Editor > New query.
-- IMPORTANT: Replace ADMIN_EMAIL_HERE with the email you will use for your Supabase admin login.

create extension if not exists pgcrypto;

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  recipient_name text not null check (char_length(trim(recipient_name)) between 1 and 70),
  recipient_key text not null,
  song_title text not null check (char_length(trim(song_title)) between 1 and 120),
  artist text not null check (char_length(trim(artist)) between 1 and 100),
  song_url text not null check (char_length(song_url) <= 500),
  message text not null check (char_length(trim(message)) between 1 and 1200),
  mood text not null default 'unspoken',
  created_at timestamptz not null default now(),
  is_approved boolean not null default true
);

create index if not exists messages_recipient_key_idx on public.messages(recipient_key);
create index if not exists messages_created_at_idx on public.messages(created_at desc);

-- Sender details are kept in a separate table. Public visitors cannot read it.
create table if not exists public.sender_private (
  id uuid primary key default gen_random_uuid(),
  message_id uuid not null unique references public.messages(id) on delete cascade,
  sender_name text,
  keep_private boolean not null default true,
  created_at timestamptz not null default now()
);

alter table public.messages enable row level security;
alter table public.sender_private enable row level security;

revoke all on public.messages from anon, authenticated;
revoke all on public.sender_private from anon, authenticated;

grant select on public.sender_private to authenticated;
grant select on public.messages to anon, authenticated;

drop policy if exists "Public can read approved messages" on public.messages;
create policy "Public can read approved messages"
on public.messages for select
to anon, authenticated
using (is_approved = true);

-- The public website can submit through this function only.
-- The function stores the public letter and private sender details separately.
create or replace function public.submit_unsent_message(
  p_recipient_name text,
  p_song_title text,
  p_artist text,
  p_song_url text,
  p_message text,
  p_mood text default 'unspoken',
  p_sender_name text default null,
  p_sender_private boolean default true
)
returns uuid
language plpgsql
security definer
set search_path = public
as $$
declare
  new_message_id uuid;
  clean_recipient text;
begin
  clean_recipient := regexp_replace(lower(trim(p_recipient_name)), '\s+', ' ', 'g');

  if clean_recipient = '' or length(clean_recipient) > 70 then
    raise exception 'Recipient name is required (maximum 70 characters).';
  end if;
  if trim(coalesce(p_song_title,'')) = '' or length(p_song_title) > 120 then
    raise exception 'Song title is required.';
  end if;
  if trim(coalesce(p_artist,'')) = '' or length(p_artist) > 100 then
    raise exception 'Artist is required.';
  end if;
  if trim(coalesce(p_message,'')) = '' or length(p_message) > 1200 then
    raise exception 'Message is required.';
  end if;
  if p_song_url !~* '^https?://(www\.)?(youtube\.com|music\.youtube\.com|youtu\.be|open\.spotify\.com|spotify\.link)/' then
    raise exception 'Only YouTube, YouTube Music and Spotify links are accepted.';
  end if;

  insert into public.messages (
    recipient_name, recipient_key, song_title, artist, song_url, message, mood
  ) values (
    trim(p_recipient_name), clean_recipient, trim(p_song_title), trim(p_artist),
    trim(p_song_url), trim(p_message), coalesce(nullif(trim(p_mood),''),'unspoken')
  ) returning id into new_message_id;

  insert into public.sender_private (message_id, sender_name, keep_private)
  values (new_message_id, nullif(trim(coalesce(p_sender_name,'')),''), coalesce(p_sender_private,true));

  return new_message_id;
end;
$$;

revoke all on function public.submit_unsent_message(text,text,text,text,text,text,text,boolean) from public;
grant execute on function public.submit_unsent_message(text,text,text,text,text,text,text,boolean) to anon, authenticated;

-- Only the admin account whose email is written below can read private sender details.
drop policy if exists "Only UNSENT owner can read sender details" on public.sender_private;
create policy "Only UNSENT owner can read sender details"
on public.sender_private for select
to authenticated
using ((auth.jwt() ->> 'email') = 'ADMIN_EMAIL_HERE');

-- No public SELECT/UPDATE/DELETE permissions are granted on sender_private.
