const translations = {
  en: {
    navSearch:"Search",navArchive:"The archive",navDiscover:"Discover",navSend:"Send a song",
    welcomeEyebrow:"A QUIET CORNER OF THE INTERNET",welcomeTitle:"Before you enter,<br><em>take a breath.</em>",welcomeCopy:"Somewhere here, a song might be waiting for you. Search your name, leave a song for someone, or simply wander.",welcomeButton:'Enter the archive <span>↗︎</span>',
    eyebrow:"AN ANONYMOUS MUSIC & MESSAGE ARCHIVE",heroTitle:'Some songs were never meant to stay <em>unsent.</em>',heroDescription:"Somewhere in this archive, someone might have left a song for you. You just don't know it yet.",findButton:'Find what was left for you <span>↗︎</span>',howLink:'How it works <span>↓︎</span>',heroNote:"No profiles. No pressure. Just words and music.",letterGreeting:"To whoever<br>needs this song,",letterLine:"Some feelings are easier<br>to leave between the lines.",
    searchEyebrow:"FIRST, A LITTLE CURIOSITY",searchTitle:'Did someone leave<br><em>something for you?</em>',searchLabel:"SEARCH THE ARCHIVE",searchButton:'Search <span>↗︎</span>',searchHint:"Enter the name exactly as the sender wrote it.",resultsEyebrow:"SOMETHING WAS LEFT HERE",
    sendEyebrow:"LEAVE A TRACE",sendTitle:'There is something<br>you never <em>said?</em>',sendDescription:"Leave a song. Write a message. Let it find its way to someone.",sendButton:'Leave a song for someone <span>↗︎</span>',postcardText:'If this song<br>finds you,<br>it was meant to.',
    formEyebrow:"A LETTER WITH A SOUNDTRACK",formTitle:'Leave it <em>here.</em>',formIntro:"The recipient's name is required. That's how your song finds its way to them.",recipientLabel:"WHO IS THIS FOR? *",songLabel:"SONG TITLE *",artistLabel:"ARTIST *",urlLabel:"SONG LINK *",platformNote:"Supported: YouTube · YouTube Music · Spotify. Paste the normal share link.",messageLabel:"YOUR MESSAGE *",moodLabel:"A FEELING (OPTIONAL)",senderLabel:"YOUR NAME (OPTIONAL)",privacyText:"Keep my identity private from visitors.",privacyNote:"Your name will not be shown to other visitors. It is kept private and can only be accessed by the archive owner.",submitButton:'Leave it in the archive <span>↗︎</span>',
    archiveEyebrow:"A FEW THINGS LEFT BEHIND",archiveTitle:'From the <em>archive.</em>',refreshButton:"Refresh archive ↻︎",archiveLoading:"Loading the archive…",archiveEmpty:"No public letters yet. You could leave the first one.",discoverEyebrow:"NOT EVERYTHING NEEDS A NAME",discoverTitle:'Find a <em>feeling.</em>',discoverDescription:"Explore the archive by the feeling you're carrying today.",mood1:"The ones we miss",mood1desc:"For someone you wish was here.",mood2:"Things never said",mood2desc:"Words that stayed inside.",mood3:"A little gratitude",mood3desc:"For someone who mattered.",mood4:"Memories of home",mood4desc:"Places we carry with us.",randomEyebrow:"A SMALL COINCIDENCE, MAYBE",randomTitle:'Let the archive<br><em>surprise you.</em>',randomDescription:"No searching. No expectations. Just one message, chosen at random.",randomButton:'Surprise me <span>↗︎</span>',howEyebrow:"NOTHING COMPLICATED",howTitle:'A little note.<br><em>A little music.</em>',step1:"Leave a song",step1desc:"Choose someone, add a song, and write what you couldn't say.",step2:"Let it find them",step2desc:"Your note joins the archive, quietly waiting to be found.",step3:"Open the letter",step3desc:"Someone searches their name and discovers what was left.",letterEyebrow:"A LETTER FROM THE ARCHIVE",soundtrackLabel:"THE SOUNDTRACK",openSong:"Open song on its platform ↗︎",footerLine:"For everything you couldn't say.",
    needConfig:"The shared archive is not connected yet. Finish the Supabase setup in the project guide, then try again.",searching:"Searching the archive…",noResults:"No letters found for this name yet. Check the spelling, or leave a song for someone.",searchError:"Something went wrong while searching. Please try again.",sending:"Saving your letter…",sent:"Your letter has joined the archive. Thank you for leaving it here.",sendError:"Your letter could not be saved. Check the connection and try again.",badLink:"Please use a YouTube, YouTube Music, or Spotify link.",randomEmpty:"There are no public letters to surprise you with yet.",unknown:"Someone, somewhere",openLetter:"OPEN LETTER ↗︎",forLabel:"FOR",songFallback:"A song for you"
  },
  ar: {
    navSearch:"ابحث",navArchive:"الأرشيف",navDiscover:"اكتشف",navSend:"أرسل أغنية",
    welcomeEyebrow:"زاوية هادئة من الإنترنت",welcomeTitle:"قبل أن تدخل،<br><em>خذ نفساً.</em>",welcomeCopy:"ربما توجد هنا أغنية تنتظرك. ابحث عن اسمك، أو اترك أغنية لشخص ما، أو تجوّل قليلاً.",welcomeButton:'ادخل إلى الأرشيف <span>↗︎</span>',
    eyebrow:"أرشيف مجهول للأغاني والرسائل",heroTitle:'بعض الأغاني لم يكن مقدّراً لها أن تبقى <em>دون إرسال.</em>',heroDescription:"في مكان ما داخل هذا الأرشيف، ربما ترك شخصٌ أغنية لك. لكنك لا تعرف ذلك بعد.",findButton:'اكتشف ما تُرك لك <span>↗︎</span>',howLink:'كيف يعمل الموقع؟ <span>↓︎</span>',heroNote:"لا حسابات شخصية، لا ضغوط. فقط كلمات وموسيقى.",letterGreeting:"إلى من يحتاج<br>هذه الأغنية،",letterLine:"بعض المشاعر يسهل تركها<br>بين السطور.",
    searchEyebrow:"لنبدأ ببعض الفضول",searchTitle:'هل ترك أحدهم<br><em>شيئاً من أجلك؟</em>',searchLabel:"ابحث في الأرشيف",searchButton:'ابحث <span>↗︎</span>',searchHint:"اكتب الاسم بالطريقة التي قد يكتبه بها المرسل.",resultsEyebrow:"هناك شيء تُرك هنا",
    sendEyebrow:"اترك أثراً",sendTitle:'هل هناك شيء<br>لم <em>تقله؟</em>',sendDescription:"اترك أغنية، واكتب رسالة، ودعها تصل إلى شخص ما.",sendButton:'اترك أغنية لشخص ما <span>↗︎</span>',postcardText:'إن وصلت إليك<br>هذه الأغنية،<br>فربما كان ذلك لسبب.',
    formEyebrow:"رسالة ومعها موسيقى",formTitle:'اتركها <em>هنا.</em>',formIntro:"اسم الشخص المستلم إجباري. بهذه الطريقة تستطيع الأغنية أن تصل إليه.",recipientLabel:"لمن هذا الإهداء؟ *",songLabel:"اسم الأغنية *",artistLabel:"الفنان *",urlLabel:"رابط الأغنية *",platformNote:"ندعم YouTube وYouTube Music وSpotify. الصق رابط المشاركة العادي.",messageLabel:"رسالتك *",moodLabel:"الشعور (اختياري)",senderLabel:"اسمك (اختياري)",privacyText:"أبقِ هويتي مخفية عن الزوار.",privacyNote:"لن يظهر اسمك للزوار أو مع رسالتك. يبقى الاسم خاصاً ولا يمكن الاطلاع عليه إلا من قِبل صاحبة الأرشيف.",submitButton:'اتركها في الأرشيف <span>↗︎</span>',
    archiveEyebrow:"أشياء تُركت هنا",archiveTitle:'من <em>الأرشيف.</em>',refreshButton:"تحديث الأرشيف ↻︎",archiveLoading:"جارٍ تحميل الأرشيف…",archiveEmpty:"لا توجد رسائل منشورة بعد. ربما تكون أول من يترك واحدة.",discoverEyebrow:"ليس كل شيء يحتاج إلى اسم",discoverTitle:'ابحث عن <em>شعور.</em>',discoverDescription:"استكشف الأرشيف بحسب الشعور الذي تحمله اليوم.",mood1:"لمن نفتقدهم",mood1desc:"لشخص تتمنى لو كان هنا.",mood2:"كلمات لم تُقال",mood2desc:"كلمات بقيت في الداخل.",mood3:"شيء من الامتنان",mood3desc:"لشخص كان له أثر.",mood4:"ذكريات الوطن",mood4desc:"أماكن نحملها بداخلنا.",randomEyebrow:"ربما تكون مصادفة جميلة",randomTitle:'دع الأرشيف<br><em>يفاجئك.</em>',randomDescription:"لا بحث ولا توقعات. رسالة واحدة يختارها الأرشيف عشوائياً.",randomButton:'فاجئني <span>↗︎</span>',howEyebrow:"الأمر بسيط",howTitle:'رسالة صغيرة.<br><em>وموسيقى.</em>',step1:"اترك أغنية",step1desc:"اختر شخصاً، وأضف أغنية، واكتب ما لم تستطع قوله.",step2:"دعها تصل إليه",step2desc:"تنضم رسالتك إلى الأرشيف وتنتظر بهدوء من يجدها.",step3:"افتح الرسالة",step3desc:"يبحث شخص عن اسمه ويكتشف ما تُرك له.",letterEyebrow:"رسالة من الأرشيف",soundtrackLabel:"الأغنية المرافقة",openSong:"افتح الأغنية على منصتها ↗︎",footerLine:"لكل ما لم تستطع قوله.",
    needConfig:"الأرشيف المشترك غير مربوط بعد. أكمِل إعداد Supabase الموجود في دليل المشروع ثم جرّب مجدداً.",searching:"جارٍ البحث في الأرشيف…",noResults:"لم نعثر على رسائل لهذا الاسم بعد. تأكد من كتابته أو اترك أغنية لشخص ما.",searchError:"حدث خطأ أثناء البحث. حاول مرة أخرى.",sending:"جارٍ حفظ رسالتك…",sent:"وصلت رسالتك إلى الأرشيف. شكراً لأنك تركتها هنا.",sendError:"لم نتمكن من حفظ الرسالة. تحقق من الاتصال وحاول مجدداً.",badLink:"استخدم رابطاً من YouTube أو YouTube Music أو Spotify.",randomEmpty:"لا توجد رسائل منشورة لنفاجئك بها بعد.",unknown:"شخص ما، في مكان ما",openLetter:"افتح الرسالة ↗︎",forLabel:"إلى",songFallback:"أغنية لك"
  }
};

let language = "en";
let db = null;
const $ = (id) => document.getElementById(id);
const config = window.UNSENT_CONFIG || {};
const isConfigured = () => config.supabaseUrl && config.supabaseAnonKey &&
  !config.supabaseUrl.includes("YOUR_") && !config.supabaseAnonKey.includes("YOUR_");

if (isConfigured() && window.supabase?.createClient) {
  db = window.supabase.createClient(config.supabaseUrl, config.supabaseAnonKey);
}

function t(key) { return translations[language][key] || translations.en[key] || key; }
function setLanguage(next) {
  language = next;
  document.documentElement.lang = next;
  document.documentElement.dir = next === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (translations[next][key]) el.innerHTML = translations[next][key];
  });
  $("recipientSearch").placeholder = next === "ar" ? "اكتب اسم الشخص..." : "Enter your name...";
  $("recipientName").placeholder = next === "ar" ? "اسم الشخص المستلم" : "Recipient's name";
  $("songUrl").placeholder = next === "ar" ? "الصق رابط YouTube أو YouTube Music أو Spotify" : "Paste a YouTube, YouTube Music or Spotify link";
  $("languageToggle").textContent = next === "en" ? "عربي" : "EN";
  $("welcomeLanguage").textContent = next === "en" ? "عربي" : "EN";
  document.title = next === "ar" ? "UNSENT — لكل ما لم تستطع قوله." : "UNSENT — For everything you couldn't say.";
}
function normalizeName(value) {
  return value.trim().toLocaleLowerCase().replace(/\s+/g, " ");
}
function safeText(value) {
  return String(value ?? "").replace(/[&<>"']/g, char => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"
  }[char]));
}
function status(element, message, type = "") {
  element.textContent = message;
  element.className = element.className.replace(/\b(success|error)\b/g, "").trim();
  if (type) element.classList.add(type);
}
function detectMusic(urlValue) {
  let url;
  try { url = new URL(urlValue); } catch { return null; }
  const host = url.hostname.replace(/^www\./, "").toLowerCase();

  if (host === "youtu.be" || host.endsWith("youtube.com") || host === "music.youtube.com") {
    let videoId = url.searchParams.get("v");
    if (!videoId && host === "youtu.be") videoId = url.pathname.split("/").filter(Boolean)[0];
    if (!videoId) {
      const parts = url.pathname.split("/").filter(Boolean);
      if (["embed","shorts","live"].includes(parts[0])) videoId = parts[1];
    }
    if (!videoId || !/^[\w-]{6,}$/.test(videoId)) return null;
    return { platform: host === "music.youtube.com" ? "YouTube Music" : "YouTube", embed: `https://www.youtube-nocookie.com/embed/${videoId}`, url: url.href };
  }

  if (host === "open.spotify.com" || host === "spotify.link") {
    if (host === "spotify.link") return { platform:"Spotify", embed:null, url:url.href };
    const match = url.pathname.match(/^\/(track|album|playlist|episode|show)\/([A-Za-z0-9]+)$/);
    if (!match) return null;
    return { platform:"Spotify", embed:`https://open.spotify.com/embed/${match[1]}/${match[2]}`, url:url.href };
  }
  return null;
}
function renderPlayer(songUrl) {
  const info = detectMusic(songUrl);
  $("musicPlayer").innerHTML = "";
  if (info?.embed) {
    const frame = document.createElement("iframe");
    frame.src = info.embed;
    frame.title = "Music player";
    frame.loading = "lazy";
    frame.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
    frame.allowFullscreen = true;
    frame.referrerPolicy = "strict-origin-when-cross-origin";
    frame.className = "music-frame";
    $("musicPlayer").appendChild(frame);
  } else {
    $("musicPlayer").textContent = language === "ar"
      ? "قد لا يتوفر مشغل مضمّن لهذا الرابط؛ استخدم زر فتح الأغنية أدناه."
      : "An embedded player is not available for this link. Use the platform link below.";
  }
  $("externalSongLink").href = songUrl;
}
function openMessage(item) {
  $("messageRecipient").textContent = `${language === "ar" ? "إلى" : "Dear"} ${item.recipient_name},`;
  $("messageBody").textContent = item.message;
  $("messageSong").textContent = item.song_title || t("songFallback");
  $("messageArtist").textContent = item.artist || "";
  $("messageNumber").textContent = `UNSENT / ${String(item.id).slice(0,8).toUpperCase()}`;
  $("messageSignature").textContent = t("unknown");
  renderPlayer(item.song_url);
  $("messageOverlay").classList.remove("hidden");
  document.body.classList.add("modal-open");
}
function closeMessage() {
  $("messageOverlay").classList.add("hidden");
  $("musicPlayer").innerHTML = "";
  document.body.classList.remove("modal-open");
}
function createCard(item) {
  const card = document.createElement("article");
  card.className = "archive-card live-card";
  const body = document.createElement("div");
  body.className = "archive-card-body";
  const category = document.createElement("span");
  category.className = "card-category";
  category.textContent = `${item.artist || "UNSENT"} / ${item.song_title || "A NOTE"}`;
  const title = document.createElement("h3");
  title.textContent = `${t("forLabel")} ${item.recipient_name}`;
  const preview = document.createElement("p");
  preview.textContent = item.message.length > 100 ? item.message.slice(0,100) + "…" : item.message;
  const button = document.createElement("button");
  button.className = "card-open";
  button.type = "button";
  button.textContent = t("openLetter");
  button.addEventListener("click", () => openMessage(item));
  body.append(category,title,preview,button);
  const number = document.createElement("span");
  number.className = "card-number";
  number.textContent = new Date(item.created_at).toLocaleDateString(language === "ar" ? "ar-IQ" : "en", {month:"short",year:"numeric"});
  card.append(body,number);
  return card;
}
async function searchMessages(name) {
  if (!db) throw new Error("NO_CONFIG");
  const key = normalizeName(name);
  const { data, error } = await db.from("messages")
    .select("id,recipient_name,song_title,artist,song_url,message,mood,created_at")
    .eq("recipient_key", key)
    .eq("is_approved", true)
    .order("created_at", {ascending:false})
    .limit(50);
  if (error) throw error;
  return data || [];
}
async function loadArchive(mood = null) {
  const grid = $("archiveGrid");
  grid.innerHTML = "";
  if (!db) {
    const p = document.createElement("p"); p.className = "archive-empty"; p.textContent = t("needConfig"); grid.append(p); return;
  }
  let query = db.from("messages").select("id,recipient_name,song_title,artist,song_url,message,mood,created_at").eq("is_approved",true).order("created_at",{ascending:false}).limit(6);
  if (mood) query = query.eq("mood", mood);
  const {data,error} = await query;
  if (error) { const p=document.createElement("p");p.className="archive-empty";p.textContent=t("searchError");grid.append(p);return; }
  if (!data?.length) { const p=document.createElement("p");p.className="archive-empty";p.textContent=t("archiveEmpty");grid.append(p);return; }
  data.forEach(item => grid.append(createCard(item)));
}
function showResults(items, name) {
  const section = $("resultsSection"), grid = $("resultsGrid");
  grid.innerHTML = "";
  $("resultsTitle").innerHTML = language === "ar" ? `رسائل إلى <em>${safeText(name)}</em>` : `Letters for <em>${safeText(name)}.</em>`;
  $("resultCount").textContent = `${items.length} ${language === "ar" ? "رسالة" : (items.length === 1 ? "LETTER" : "LETTERS")}`;
  if (!items.length) {
    const p = document.createElement("p"); p.className="archive-empty"; p.textContent=t("noResults"); grid.append(p);
  } else items.forEach(item => grid.append(createCard(item)));
  section.classList.remove("hidden");
  section.scrollIntoView({behavior:"smooth",block:"start"});
}
$("searchForm").addEventListener("submit", async event => {
  event.preventDefault();
  const name = $("recipientSearch").value.trim();
  if (!name) return;
  if (!db) { status($("searchFeedback"), t("needConfig"), "error"); return; }
  status($("searchFeedback"), t("searching"));
  try {
    const results = await searchMessages(name);
    status($("searchFeedback"), "");
    showResults(results, name);
  } catch (error) {
    console.error(error);
    status($("searchFeedback"), t("searchError"), "error");
  }
});
$("sendForm").addEventListener("submit", async event => {
  event.preventDefault();
  const form = event.currentTarget;
  const values = Object.fromEntries(new FormData(form).entries());
  const recipient = String(values.recipient || "").trim();
  const songTitle = String(values.songTitle || "").trim();
  const artist = String(values.artist || "").trim();
  const songUrl = String(values.songUrl || "").trim();
  const message = String(values.message || "").trim();
  const senderName = String(values.senderName || "").trim();
  const music = detectMusic(songUrl);
  if (!music) { status($("formStatus"), t("badLink"), "error"); $("songUrl").focus(); return; }
  if (!db) { status($("formStatus"), t("needConfig"), "error"); return; }
  const button = $("submitMessage");
  button.disabled = true;
  status($("formStatus"), t("sending"));
  try {
    const {error} = await db.rpc("submit_unsent_message", {
      p_recipient_name: recipient,
      p_song_title: songTitle,
      p_artist: artist,
      p_song_url: music.url,
      p_message: message,
      p_mood: values.mood || "unspoken",
      p_sender_name: senderName || null,
      p_sender_private: true
    });
    if (error) throw error;
    form.reset();
    $("privacyCheck");
    status($("formStatus"), t("sent"), "success");
    await loadArchive();
  } catch (error) {
    console.error(error);
    status($("formStatus"), t("sendError"), "error");
  } finally {
    button.disabled = false;
  }
});
$("randomButton").addEventListener("click", async () => {
  if (!db) { status($("searchFeedback"), t("needConfig"), "error"); $("search").scrollIntoView({behavior:"smooth"}); return; }
  const {data,error} = await db.from("messages").select("id,recipient_name,song_title,artist,song_url,message,mood,created_at").eq("is_approved",true).limit(100);
  if (error || !data?.length) { status($("searchFeedback"), t("randomEmpty"), "error"); $("search").scrollIntoView({behavior:"smooth"}); return; }
  openMessage(data[Math.floor(Math.random() * data.length)]);
});
$("refreshArchive").addEventListener("click", () => loadArchive());
document.querySelectorAll(".mood-card").forEach(button => button.addEventListener("click", async () => {
  if (!db) { status($("searchFeedback"), t("needConfig"), "error"); $("search").scrollIntoView({behavior:"smooth"}); return; }
  await loadArchive(button.dataset.mood);
  $("archive").scrollIntoView({behavior:"smooth"});
}));
$("closeMessage").addEventListener("click", closeMessage);
$("messageOverlay").addEventListener("click", event => { if (event.target === $("messageOverlay")) closeMessage(); });
document.addEventListener("keydown", event => { if (event.key === "Escape") closeMessage(); });
$("languageToggle").addEventListener("click", () => setLanguage(language === "en" ? "ar" : "en"));
$("welcomeLanguage").addEventListener("click", () => setLanguage(language === "en" ? "ar" : "en"));
$("enterArchive").addEventListener("click", () => {
  $("welcomeOverlay").classList.add("welcome-hidden");
  sessionStorage.setItem("unsent-welcome-seen","1");
});
$("menuToggle").addEventListener("click", () => {
  const open = $("desktopNav").classList.toggle("open");
  $("menuToggle").setAttribute("aria-expanded", String(open));
});
$("desktopNav").querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  $("desktopNav").classList.remove("open");
  $("menuToggle").setAttribute("aria-expanded","false");
}));

setLanguage("en");
if (sessionStorage.getItem("unsent-welcome-seen") === "1") $("welcomeOverlay").classList.add("welcome-hidden");
loadArchive();