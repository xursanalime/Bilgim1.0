# AGENTS.md — Bilgim loyihasi uchun qat'iy qoidalar

> Bu fayl repo ildizida saqlanadi. AI kodlash agenti har safar ishga tushganda buni **avtomatik** o'qiydi. Bu yerdagi qoidalar muzokara qilinmaydi — noaniqlik bo'lsa, bu fayl va `docs/` papkasidagi hujjatlar ustun turadi.

## 0. Ishlash tartibi qoidalari (majburiy)
1. **Landing page yoki istalgan vizual sahifa dizayni/kodini yozishdan OLDIN**, agent foydalanuvchidan referens (misol) so'rashi SHART. Foydalanuvchida Pinterest'dan tayyorlangan referenslar bor — ular berilgach ishga kirishilsin, taxmin qilib boshlanmasin.
2. **Har bir sahifaning dizayni va funksiyasi to'liq tugagach**, agent foydalanuvchidan ko'rib chiqishni SO'RASHI kerak — keyingi sahifaga o'zboshimchalik bilan o'tmasin.
3. **Git tartibi**: Har bir mantiqiy bosqich/qadamdan keyin kod toza saqlanishi kerak.
4. **Loyiha har doim ishga tushadigan holatda qolishi kerak.** Hech qanday o'zgarish build'ni buzmasin.
5. **Dizayn-tokens'ga qat'iy rioya qil**:
   - **Light rejim**: Canvas `#F6F2EA`, Elevated `#EDE7DA`, Matn `#1F1A12`, Aksent `#B5551F`
   - **Dark rejim**: Canvas `#0A0A0F`, Elevated `#12121A`, Border `#232332`, Aksent `#6C63FF`
   - **Shriftlar**: Display/Sarlavha: `Fraunces`, Matn/UI: `Inter`
6. **Xavfsizlik/tenant-izolyatsiya qoidalari**:
   - Har bir DB so'rovi `school_id` bilan ajratiladi — bir maktabning ma'lumoti boshqasiga oqib o'tmasligi shart.
   - Parollar hech qachon ochiq matnda saqlanmaydi.
   - Admin panel Telegram-OTP + geo-cheklov qoidasiga mos bo'lsin.
   - Fayl yuklash: faqat ruxsat etilgan turlar (maksimal 500 MB).

## 1. Hujjatlar xaritasi
- `docs/00-vizyon-va-qoidalar.md`: Umumiy vizyon, ishlash tartibi qoidalari, domenlar
- `docs/01-texnik-stack-va-server.md`: Til, texnik stack, server/hosting bosqichlari
- `docs/02-dizayn.md`: Ranglar, shriftlar, landing tuzilma
- `docs/03-arxitektura-va-rollar.md`: Domen tuzilishi, rollar, ro'yxatdan o'tish, parol, Telegram
- `docs/04-funksiyalar-va-jonli-dars.md`: MVP funksiyalar, jonli dars xarajat nazorati, gamifikatsiya
- `docs/05-tariflar-va-moliya.md`: Tarif rejalari, to'lov arxitekturasi, hosting rejasi
- `docs/06-xavfsizlik-va-monitoring.md`: Moderatsiya, admin tekshiruv, log, ogohlantirish, backup
- `docs/07-bildirishnoma-xabarlar-akkaunt.md`: Bildirishnoma, xabarlar (messaging), akkaunt boshqaruvi
- `docs/08-obuna-va-tolov-qoidalari.md`: Obuna, qaytarish, narx o'zgarishi qoidalari
- `docs/09-ochiq-savollar.md`: Hali hal qilinmagan savollar
