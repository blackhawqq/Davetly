/* =========================================================
   Fikriye & Muzaffer — Düğün Davetiyesi
   ========================================================= */

// ------------------------------------------------------------------
// AYARLAR — Bu siteyi başka bir çift için kullanmak istersen
// burada gerekli değişiklikleri yapman yeterli.
// ------------------------------------------------------------------
const CONFIG = {
  // Geri sayımın hedef tarihi (Kına gecesi)
  countdownTarget: "2026-07-30T18:30:00",

  // Misafir formu cevapları ve anı defteri fotoğrafları bu adrese e-posta
  // olarak gönderilir (FormSubmit.co). İlk gönderimden sonra bu e-posta
  // adresine bir onay maili gelir, onayladıktan sonra sonraki tüm
  // cevaplar/fotoğraflar otomatik düşer.
  rsvpFormEndpoint: "https://formsubmit.co/ajax/keskin3084@gmail.com",
};

// ------------------------------------------------------------------
// Misafir adı — URL'den ?to=Ad+Soyad parametresi ile kişiselleştirme
// ------------------------------------------------------------------
(function setGuestName() {
  const params = new URLSearchParams(window.location.search);
  const to = params.get("to");
  if (to) {
    const el = document.getElementById("guest-name");
    if (el) el.textContent = to.replace(/\+/g, " ");
  }
})();

// ------------------------------------------------------------------
// Davetiyeyi Aç -> kapak ekranını gizle, içeriği göster, müziği başlat
// ------------------------------------------------------------------
const cover = document.getElementById("cover");
const mainContent = document.getElementById("main-content");
const bottomNav = document.getElementById("bottom-nav");
const openBtn = document.getElementById("open-invite");
const music = document.getElementById("bg-music");

openBtn.addEventListener("click", () => {
  cover.classList.add("hidden");
  mainContent.classList.remove("hidden");
  bottomNav.classList.remove("hidden");
  window.scrollTo({ top: 0 });

  music.volume = 0.6;
  music.play().catch(() => {
    // Tarayıcı otomatik oynatmayı engellediyse kullanıcı müzik
    // butonuna basarak başlatabilir.
    setMusicIcon(false);
  });
});

// ------------------------------------------------------------------
// Müzik aç/kapat
// ------------------------------------------------------------------
const musicToggle = document.getElementById("music-toggle");
const musicIcon = musicToggle.querySelector(".music-icon");

function setMusicIcon(playing) {
  musicIcon.classList.toggle("playing", playing);
  musicIcon.classList.toggle("paused", !playing);
}

musicToggle.addEventListener("click", () => {
  if (music.paused) {
    music.play().then(() => setMusicIcon(true)).catch(() => {});
  } else {
    music.pause();
    setMusicIcon(false);
  }
});

// ------------------------------------------------------------------
// Geri sayım
// ------------------------------------------------------------------
const targetDate = new Date(CONFIG.countdownTarget).getTime();

const cdDays = document.getElementById("cd-days");
const cdHours = document.getElementById("cd-hours");
const cdMins = document.getElementById("cd-mins");
const cdSecs = document.getElementById("cd-secs");

function pad(n) { return String(n).padStart(2, "0"); }

function updateCountdown() {
  const now = Date.now();
  let diff = targetDate - now;

  if (diff < 0) diff = 0;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  cdDays.textContent = pad(days);
  cdHours.textContent = pad(hours);
  cdMins.textContent = pad(mins);
  cdSecs.textContent = pad(secs);
}

updateCountdown();
setInterval(updateCountdown, 1000);

// ------------------------------------------------------------------
// Alt menü — aktif bölüm vurgusu
// ------------------------------------------------------------------
const navItems = document.querySelectorAll(".nav-item");
const sections = ["home", "couple", "schedule", "rsvp"].map(id => document.getElementById(id));

function highlightNav() {
  let current = sections[0];
  const scrollPos = window.scrollY + window.innerHeight / 2;

  sections.forEach(sec => {
    if (sec && sec.offsetTop <= scrollPos) current = sec;
  });

  navItems.forEach(item => {
    item.classList.toggle("active", item.dataset.target === current.id);
  });
}

window.addEventListener("scroll", highlightNav);
highlightNav();

// ------------------------------------------------------------------
// Katılım formu
// ------------------------------------------------------------------
const rsvpForm = document.getElementById("rsvp-form");
const formSuccess = document.getElementById("form-success");

rsvpForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const data = new FormData(rsvpForm);

  if (CONFIG.rsvpFormEndpoint) {
    try {
      await fetch(CONFIG.rsvpFormEndpoint, {
        method: "POST",
        body: data,
        headers: { "Accept": "application/json" },
      });
    } catch (err) {
      // sessizce devam et, kullanıcıya yine de teşekkür mesajı göster
    }
  }

  rsvpForm.classList.add("hidden");
  formSuccess.classList.remove("hidden");
});

// ------------------------------------------------------------------
// Dijital anı defteri — fotoğraf/video yükleme
// ------------------------------------------------------------------
const memoryForm = document.getElementById("memory-form");
const memorySuccess = document.getElementById("memory-success");

memoryForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const submitBtn = memoryForm.querySelector(".form-submit");
  submitBtn.disabled = true;
  submitBtn.textContent = "Gönderiliyor...";

  const data = new FormData(memoryForm);

  try {
    await fetch(CONFIG.rsvpFormEndpoint, {
      method: "POST",
      body: data,
      headers: { "Accept": "application/json" },
    });
  } catch (err) {
    // sessizce devam et, kullanıcıya yine de teşekkür mesajı göster
  }

  memoryForm.classList.add("hidden");
  memorySuccess.classList.remove("hidden");
});
