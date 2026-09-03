# Bilgim — Arxitektura, Rollar, Ro'yxatdan O'tish

## 6. To'liq arxitektura va rollar

### 6.1 Domen tuzilishi
- `bilgimedu.uz` — marketing, login/signup, maktab ochish
- `{slug}.bilgimedu.uz` — har bir o'qituvchining shaxsiy onlayn maktabi
- Admin panel: g'ayrioddiy subdomen + Telegram bot OTP 2FA + geo-cheklov

Zaxiralangan slug'lar:
`www`, `api`, `admin`, `media`, `assets`, `mail`, `docs`, `status`, `support`, `app`, `cdn`, `staging`, `dev`, `test`, `blog`, `help`, `static`, `cdn-assets`, `ftp`, `smtp`

### 6.2 Rollar
- **Platform Admin**: barcha maktablar, to'lovlar, statistika
- **Teacher / Owner**: o'z maktabi, kurslar, talabalar, to'lovlar
- **Student**: kursga yozilish, o'qish, uy ishi, jonli dars

Tenant izolyatsiya: har bir so'rov `school_id` bilan chegaralanadi.

### 6.3 Ro'yxatdan o'tish
- **O'qituvchi**: ism-familiya, email, telefon, username (real-time tekshiruv), parol, parol tasdig'i, shartlarga rozilik. So'ng "Maktab ochish wizard" (nom, slug, soha, vaqt zonasi).
- **Talaba**: ism-familiya, email/telefon, username, parol, parol tasdig'i.

### 6.5 Parolni tiklash
- Telegram ulangan bo'lsa: OTP botga yuboriladi.
- Telegram ulanmagan bo'lsa: Email havolasi (15-30 daqiqa). SMS yo'q. User enumeration himoyalangan.

### 6.6 Telegram bot ulash
- Admin: Majburiy (2FA)
- O'qituvchi: Majburiy
- Talaba: Ro'yxatdan o'tishda ixtiyoriy, 3 ta darsdan keyin majburiy.
