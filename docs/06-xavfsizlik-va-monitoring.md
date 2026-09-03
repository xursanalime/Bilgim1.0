# Bilgim — Xavfsizlik, Moderatsiya, Log va Backup

## 7.5 Xavfsizlik va Moderatsiya
- Kontent moderatsiyasi: MVP'da faqat shikoyat (report) asosida
- Admin panel inspection: to'liq tekshiruv, har bir ko'rish audit logda qayd etiladi
- Audit log: o'zgartirib/o'chirib bo'lmaydigan (immutable), 5 yil saqlanadi
- Ilova/xato loglari: Sentry (30-90 kun)
- Kirish/trafik loglari: Cloudflare (30 kun)
- Real-time alert: CRITICAL va HIGH hodisalar Telegram botga yuboriladi
- Backup: PostgreSQL kunlik avtomatik backup (30 kun aylanma, 12 oy oylik backup). Cloudflare R2 versiyalash yoqilgan.
