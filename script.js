const translations = {
  en: {
    navArchive:"The archive",navDiscover:"Discover",navRandom:"Random",navSend:"Send a song",
    eyebrow:"AN ANONYMOUS MUSIC & MESSAGE ARCHIVE",
    heroTitle:'Some songs were never meant to stay <em>unsent.</em>',
    heroDescription:"Somewhere in this archive, someone might have left a song for you. You just don't know it yet.",
    findButton:'Find what was left for you <span>↗</span>',howLink:'How it works <span>↓</span>',
    heroNote:"No profiles. No pressure. Just words and music.",
    searchEyebrow:"FIRST, A LITTLE CURIOSITY",searchTitle:'Did someone leave<br><em>something for you?</em>',
    searchLabel:"SEARCH THE ARCHIVE",searchButton:'Search <span>↗</span>',
    searchHint:"Try your first name, a nickname, or the name only your friends use.",
    sendEyebrow:"LEAVE A TRACE",sendTitle:'There is something<br>you never <em>said?</em>',
    sendDescription:"Leave a song. Write a message. Let it find its way to someone.",
    sendButton:'Leave a song for someone <span>↗</span>',postcardText:'If this song<br>finds you,<br>it was meant to.',
    archiveEyebrow:"A FEW THINGS LEFT BEHIND",archiveTitle:'From the <em>archive.</em>',viewArchive:'Explore all <span>↗</span>',
    demoNote:"These are sample cards for the design preview. Real messages will appear here after the archive is connected.",
    discoverEyebrow:"NOT EVERYTHING NEEDS A NAME",discoverTitle:'Find a <em>feeling.</em>',
    discoverDescription:"Explore the archive by the feeling you're carrying today.",
    mood1:"The ones we miss",mood1desc:"For someone you wish was here.",mood2:"Things never said",mood2desc:"Words that stayed inside.",
    mood3:"A little gratitude",mood3desc:"For someone who mattered.",mood4:"Memories of home",mood4desc:"Places we carry with us.",
    randomEyebrow:"A SMALL COINCIDENCE, MAYBE",randomTitle:'Let the archive<br><em>surprise you.</em>',
    randomDescription:"No searching. No expectations. Just one message, chosen at random.",
    randomButton:'Surprise me <span>↗</span>',howEyebrow:"NOTHING COMPLICATED",howTitle:'A little note.<br><em>A little music.</em>',
    step1:"Leave a song",step1desc:"Choose someone, add a song, and write what you couldn't say.",
    step2:"Let it find them",step2desc:"Your note joins the archive, quietly waiting to be found.",
    step3:"Open the letter",step3desc:"Someone searches their name and discovers what was left.",
    footerLine:"For everything you couldn't say.",backTop:"BACK TO TOP ↑",footerNote:"A quiet corner of the internet."
  },
  ar: {
    navArchive:"الأرشيف",navDiscover:"اكتشف",navRandom:"رسالة عشوائية",navSend:"أرسل أغنية",
    eyebrow:"أرشيف مجهول للأغاني والرسائل",
    heroTitle:'بعض الأغاني لم يكن مقدّراً لها أن تبقى <em>دون إرسال.</em>',
    heroDescription:"في مكان ما داخل هذا الأرشيف، ربما ترك شخصٌ أغنية لك. لكنك لا تعرف ذلك بعد.",
    findButton:'اكتشف ما تُرك لك <span>↗</span>',howLink:'كيف يعمل الموقع؟ <span>↓</span>',
    heroNote:"لا حسابات شخصية، لا ضغوط. فقط كلمات وموسيقى.",
    searchEyebrow:"لنبدأ ببعض الفضول",searchTitle:'هل ترك أحدهم<br><em>شيئاً من أجلك؟</em>',
    searchLabel:"ابحث في الأرشيف",searchButton:'ابحث <span>↗</span>',
    searchHint:"جرّب اسمك الأول أو لقبك أو الاسم الذي يناديك به أصدقاؤك.",
    sendEyebrow:"اترك أثراً",sendTitle:'هل هناك شيء<br>لم <em>تقله؟</em>',
    sendDescription:"اترك أغنية، واكتب رسالة، ودعها تصل إلى شخص ما.",
    sendButton:'اترك أغنية لشخص ما <span>↗</span>',postcardText:'إن وصلت إليك<br>هذه الأغنية،<br>فربما كان ذلك لسبب.',
    archiveEyebrow:"أشياء تُركت هنا",archiveTitle:'من <em>الأرشيف.</em>',viewArchive:'استكشف الكل <span>↗</span>',
    demoNote:"هذه بطاقات تجريبية لمعاينة التصميم. ستظهر الرسائل الحقيقية بعد ربط الأرشيف.",
    discoverEyebrow:"ليس كل شيء يحتاج إلى اسم",discoverTitle:'ابحث عن <em>شعور.</em>',
    discoverDescription:"استكشف الأرشيف بحسب الشعور الذي تحمله اليوم.",
    mood1:"لمن نفتقدهم",mood1desc:"لشخص تتمنى لو كان هنا.",mood2:"كلمات لم تُقال",mood2desc:"كلمات بقيت في الداخل.",
    mood3:"شيء من الامتنان",mood3desc:"لشخص كان له أثر.",mood4:"ذكريات الوطن",mood4desc:"أماكن نحملها بداخلنا.",
    randomEyebrow:"ربما تكون مصادفة جميلة",randomTitle:'دع الأرشيف<br><em>يفاجئك.</em>',
    randomDescription:"لا بحث ولا توقعات. رسالة واحدة يختارها الأرشيف عشوائياً.",
    randomButton:'فاجئني <span>↗</span>',howEyebrow:"الأمر بسيط",howTitle:'رسالة صغيرة.<br><em>وموسيقى.</em>',
    step1:"اترك أغنية",step1desc:"اختر شخصاً، وأضف أغنية، واكتب ما لم تستطع قوله.",
    step2:"دعها تصل إليه",step2desc:"تنضم رسالتك إلى الأرشيف وتنتظر بهدوء من يجدها.",
    step3:"افتح الرسالة",step3desc:"يبحث شخص عن اسمه ويكتشف ما تُرك له.",
    footerLine:"لكل ما لم تستطع قوله.",backTop:"العودة للأعلى ↑",footerNote:"زاوية هادئة من الإنترنت."
  }
};

const languageToggle = document.getElementById("languageToggle");
const menuToggle = document.getElementById("menuToggle");
const nav = document.querySelector(".desktop-nav");
let currentLanguage = "en";

function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) element.innerHTML = translations[language][key];
  });
  const searchInput = document.getElementById("recipientSearch");
  searchInput.placeholder = language === "ar" ? "اكتب اسماً..." : "Enter a name...";
  languageToggle.textContent = language === "en" ? "عربي" : "EN";
  languageToggle.setAttribute("aria-label", language === "en" ? "Switch to Arabic" : "Switch to English");
  document.title = language === "ar" ? "UNSENT — لكل ما لم تستطع قوله." : "UNSENT — For everything you couldn't say.";
}
languageToggle.addEventListener("click", () => setLanguage(currentLanguage === "en" ? "ar" : "en"));

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

// Demo-only search: the shared archive and real name search will be connected to Supabase later.
document.getElementById("searchForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const name = document.getElementById("recipientSearch").value.trim();
  const feedback = document.getElementById("searchFeedback");
  if (!name) return;
  feedback.textContent = currentLanguage === "ar"
    ? `واجهة البحث جاهزة، لكن الأرشيف المشترك لم يُربط بقاعدة البيانات بعد. (بحث تجريبي عن: ${name})`
    : `The search interface is ready. The shared archive will work after database setup. (Demo search: ${name})`;
});

document.getElementById("randomButton").addEventListener("click", () => {
  const feedback = document.getElementById("searchFeedback");
  document.getElementById("search").scrollIntoView({behavior:"smooth"});
  feedback.textContent = currentLanguage === "ar"
    ? "ميزة الرسالة العشوائية ستعمل بعد إضافة الرسائل الحقيقية إلى الأرشيف."
    : "Random discovery will work once real messages are added to the archive.";
});

setLanguage("en");
