# Fikriye & Muzaffer — Dijital Düğün Davetiyesi

Statik (HTML/CSS/JS) bir düğün davetiye sitesi. GitHub'a yükleyip Vercel ile
ücretsiz şekilde yayına alabilirsin.

## Klasör Yapısı

```
index.html
assets/
  css/style.css       -> tasarım
  js/script.js        -> ayarlar, geri sayım, müzik, form
  img/
    floral-corner.svg -> köşe süslemeleri (hazır)
    bride.jpg         -> gelin fotoğrafı (EKLENECEK)
    groom.jpg         -> damat fotoğrafı (EKLENECEK)
    gallery1-4.jpg    -> hatıra fotoğrafları (EKLENECEK)
  music/
    song.mp3          -> arka plan müziği (EKLENECEK)
```

## 1. Müzik Ekleme

`assets/music/` klasörüne `song.mp3` adıyla istediğin şarkıyı (örn. Yalın –
En Mükemmel Misafirim) ekle. Telif hakkı nedeniyle dosya bu projeye dahil
edilmemiştir, kendi satın aldığın/lisanslı dosyayı kullanmalısın.

Not: Bazı tarayıcılar (özellikle iPhone/Safari) kullanıcı bir butona
basmadan otomatik müzik çalmaya izin vermez. Bu yüzden "Davetiyeyi Aç"
butonuna basıldığında müzik başlatılır; yine de çalmazsa sağ üstteki
müzik ikonuna dokunulduğunda başlar.

## 2. Fotoğraf Ekleme

`assets/img/` klasörüne şu dosyaları aynı isimlerle ekle:

- `bride.jpg` — Fikriye'nin fotoğrafı
- `groom.jpg` — Muzaffer'in fotoğrafı
- `gallery1.jpg`, `gallery2.jpg`, `gallery3.jpg`, `gallery4.jpg` — hatıra
  fotoğrafları (kare/1:1 oranında en iyi görünür)

Fotoğraf eklemezsen, o alanlarda zarif bir yer tutucu (isim / kamera ikonu)
görünür — site bozulmaz.

## 3. İçerik / Ayarlar Değiştirme

- **İsimler, tarih, mekan, mesajlar** → `index.html` içinde ilgili metinleri
  doğrudan değiştirebilirsin.
- **Geri sayım hedefi, RSVP form adresi, anı yükleme bağlantısı** →
  `assets/js/script.js` dosyasının en üstündeki `CONFIG` nesnesinden
  yönetilir.

### Katılım Formu (RSVP)

Form şu an sadece tarayıcıda "Teşekkürler" mesajı gösterir. Cevapların
sana e-posta/tablo olarak ulaşmasını istersen ücretsiz
[Formspree](https://formspree.io) hesabı aç, oluşturduğun form adresini
`CONFIG.rsvpFormEndpoint` alanına yapıştır.

### Kişiye Özel Davet Linki

Her misafire özel bir link gönderebilirsin. Linkin sonuna
`?to=Ahmet+Yılmaz` eklemen yeterli — kapak ekranındaki "Sayın" kısmında
otomatik olarak "Ahmet Yılmaz" görünür.

Örnek:
```
https://siteadi.vercel.app/?to=Ahmet+Yılmaz
```

## 4. GitHub'a Yükleme

```bash
git init
git add .
git commit -m "İlk davetiye sitesi"
git branch -M main
git remote add origin <github-repo-url>
git push -u origin main
```

## 5. Vercel ile Yayına Alma

1. [vercel.com](https://vercel.com) hesabınla giriş yap (GitHub ile).
2. "Add New Project" → GitHub reponu seç.
3. Framework olarak **Other** seç (statik site, build gerekmez).
4. Deploy'a bas. Birkaç saniye içinde `*.vercel.app` adresinle site
   yayında olur.

Her `git push` sonrası Vercel otomatik olarak yeniden yayınlar.

## Bölümler

1. **Kapak** — "Evleniyoruz Fikriye & Muzaffer" + Davetiyeyi Aç
2. **Anasayfa** — tarih, konum, kısa söz
3. **Söz** — Bismillah ve özel mesaj
4. **Gelin & Damat** — fotoğraflar ve isimler
5. **Büyük Güne Kalan** — canlı geri sayım
6. **Merasim Detayları**
   - Kına Gecesi — 30 Temmuz 2026, Perşembe, 18:30, Saltanat Düğün Salonu (Etimesgut/Ankara)
   - Düğün Merasimi — 31 Temmuz – 1 Ağustos 2026, 08:00–24:00, aynı mekan
7. **Hatıralarımız** — fotoğraf galerisi
8. **Davet Mesajı** — teşekkür ve aile isimleri
9. **Katılım Durumu** — RSVP formu + dijital anı defteri yükleme

## Yeni Müşteri İçin Kopyalama Rehberi (Instagram İşi)

Her çift için bu projenin ayrı bir kopyasını oluşturup kendi Vercel
adresiyle (örn. `ahmet-elif.vercel.app`) yayınlıyorsun. Adımlar:

### A) GitHub'da "Template Repository" yap (bir kerelik)

1. Bu repo GitHub'da: **Settings** → **General** → "Template repository"
   kutusunu işaretle.
2. Artık her yeni müşteri için repo sayfasında **"Use this template"**
   butonuna basıp tek tıkla temiz bir kopya oluşturabilirsin (Fikriye &
   Muzaffer'in foto/müzik dosyaları da kopyaya gelir — adım B'de bunları
   değiştireceksin).

### B) Yeni müşteri için değiştirilecekler (checklist)

**1. Fotoğraflar** (`assets/img/`)
- `bride.jpg`, `groom.jpg` — gelin & damat
- `gallery1.jpg` … `gallery4.jpg` — hatıra fotoğrafları

**2. Müzik** (`assets/music/song.mp3`)
- Çiftin istediği şarkı (mp3, ffmpeg ile `-b:a 160k` sıkıştırılabilir)

**3. `index.html` içinde metinler**
- `<title>` ve `<meta>` (og:title, og:description, description)
- Kapaktaki isimler (`Fikriye` / `Muzaffer` → yeni çiftin isimleri, 2 yerde geçiyor: kapak + hero)
- `hero-date`, `hero-location` — tarih ve mekan(lar)
- `quote-author` — "— Ad Soyad" imzası
- Kına Gecesi ve Düğün Merasimi kartları: tarih, saat, gün, mekan adı,
  adres, harita linki (`map-btn` href — Google Maps arama linki)
- "Davet Mesajı" bölümü: `cursive-names`, `hosts-names` (aile büyükleri),
  `copyright`
- Sayfa `<title>` ve tüm `Fikriye & Muzaffer` geçen yerler (footer-credit
  hariç tutulabilir veya o da değiştirilebilir)

**4. `assets/js/script.js` içindeki `CONFIG`**
- `countdownTarget` — geri sayımın hedef tarihi/saati (ISO format)
- `rsvpFormEndpoint` — `https://formsubmit.co/ajax/MUSTERI_EMAIL` (müşterinin
  kendi e-postası — RSVP ve anı defteri cevapları buraya gider)
- `driveUploadUrl` — müşterinin kendi Google Drive klasör linki (paylaşım:
  "Bağlantıya sahip olan herkes - Düzenleyici"). Boş bırakılırsa buton
  gizlenir.

> Not: `rsvpFormEndpoint`'i değiştirdikten sonra ilk form gönderiminde
> FormSubmit.co müşterinin e-postasına bir **onay maili** gönderir — bu
> maildeki linke tıklamaları gerekir, yoksa sonraki cevaplar düşmez.

### C) Yeni Vercel Projesi

1. Yeni repoyu GitHub'a push et.
2. [vercel.com](https://vercel.com) → "Add New Project" → bu repoyu seç.
3. Framework: **Other**, build/install komutları boş bırak → Deploy.
4. İstersen Vercel'in proje ayarlarından özel bir alt alan adı
   (`musteri-adi.vercel.app`) belirle.

### D) Kişiye Özel Davet Linkleri

Her misafire `?to=Ad+Soyad` parametresiyle özel link gönder (bkz. yukarıdaki
"Kişiye Özel Davet Linki" bölümü) — bu kısım her müşteri için otomatik
çalışır, ekstra ayar gerekmez.

## İleride Daha Ölçeklenebilir Yapı

Müşteri sayısı artarsa, her biri için ayrı repo/Vercel projesi yönetmek
yerine tek bir kod tabanı + veritabanı/JSON ile her çiftin bilgilerini
dinamik çekildiği bir yapıya (örn. Next.js) geçilebilir. Şimdilik "her
müşteri = ayrı repo" yöntemi daha hızlı ve bakımı basittir.
