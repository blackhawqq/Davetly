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

## İleride Birden Fazla Davetiye (İş Fikri)

Bu site tek bir çift için kişiselleştirildi. İleride başkalarına da
hizmet vermek istersen:

- Her müşteri için bu reponun bir kopyasını (template) oluşturup
  `CONFIG`, metinler, fotoğraflar ve müzik dosyasını değiştirip ayrı bir
  Vercel projesi olarak yayınlayabilirsin.
- Daha ölçeklenebilir bir yapı istersen (tek kod tabanı + birden fazla
  davetiye verisi) ileride bunu Next.js + bir veritabanı/JSON ile
  dinamik hale getirebiliriz.
