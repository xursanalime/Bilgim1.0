# Bilgim — Texnik Stack, Til va Server

## 4. Til va texnik joylashuv

### 4.1 Dasturlash tili/stack
- **Frontend:** Next.js (App Router) / React
- **Backend:** NestJS / Express
- **ORM/DB:** Prisma + PostgreSQL
- Monorepo tuzilishi: `apps/web`, `apps/api`, `packages/*`

### 4.2 Platforma tillari (i18n)
- **Asosiy:** o'zbek tili
- **Qo'shimcha:** rus va ingliz tillari (majburiy, birinchi bosqichdayoq to'liq yakunlanishi kerak)

### 4.3 Server/hosting bosqichlari
1. **Lokal muhit:** Loyiha to'liq lokal muhitda quriladi va yakunlanadi
2. **Cloudflare:** Foydalanuvchilar paydo bo'la boshlagach — Cloudflare (Pages/Workers, R2, Turnstile)
3. **Hetzner:** Foydalanuvchilar ko'paygach (CX/CAX seriyasi) — o'z serverida LiveKit media serveri va PostgreSQL
