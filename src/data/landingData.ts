import { PricingPlan, TestimonialItem, ToolkitCard, FaqItem } from '../types';

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'go',
    name: 'Go',
    priceMonth: '149,000',
    priceRaw: 149000,
    badge: '14 kun bepul sinov',
    studentsLimit: '25 tagacha talaba',
    coursesLimit: '2 tagacha faol kurs',
    liveHours: '6 soat/oy (max 12 kishi/sessiya)',
    recordingInfo: 'Faqat audio recording (3 soat/oy)',
    storageInfo: '2 GB xavfsiz Cloudflare R2 saqlash',
    features: [
      'Shaxsiy subdomen ({slug}.bilgimedu.uz)',
      'Payme, Click, Uzcard, Humo integratsiyasi',
      'Uy ishi topshirish va qo\'lda tekshirish',
      'Gamifikatsiya (XP, Streak, Badge)',
      '1 GB chat fayllari kvotasi',
      'Telegram bot xabarnomalari',
    ],
  },
  {
    id: 'pro',
    name: 'Pro',
    priceMonth: '499,000',
    priceRaw: 499000,
    popular: true,
    badge: 'Eng ommabop',
    studentsLimit: '100 tagacha talaba',
    coursesLimit: '8 tagacha faol kurs',
    liveHours: '25 soat/oy (max 25 kishi/sessiya)',
    recordingInfo: 'Faqat audio recording (20 soat/oy)',
    storageInfo: '20 GB xavfsiz Cloudflare R2 saqlash',
    features: [
      'Barcha Go tarifi imkoniyatlari',
      'Ichki daromad va talabalar analitikasi',
      'Talabalar ro\'yxatini Excel/PDF eksport qilish',
      'O\'qituvchi referal chegirmasi (25% 1 oy)',
      '5 GB chat fayllari kvotasi',
      'Birinchi navbatdagi texnik yordam',
    ],
  },
  {
    id: 'max',
    name: 'Max',
    priceMonth: '1,299,000',
    priceRaw: 1299000,
    badge: 'Katta auditoriyalar uchun',
    studentsLimit: '300 tagacha talaba',
    coursesLimit: 'Cheksiz kurslar',
    liveHours: '50 soat/oy (max 40 kishi/sessiya)',
    recordingInfo: 'To\'liq HD Video recording (30 soat/oy)',
    storageInfo: '60 GB xavfsiz Cloudflare R2 saqlash',
    features: [
      'Barcha Pro tarifi imkoniyatlari',
      'HD Video dars yozib olish (Egress)',
      '15 GB chat fayllari kvotasi',
      'Individual chegirma va vaucherlar yaratish',
      'Shaxsiy menejer va maxsus qo\'llab-quvvatlash',
      'Cheksiz jonli guruhlar va 1ga1 chatlar',
    ],
  },
];

// Pinterest Reference 1: Stacked Angled Testimonials
export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Javohir Toshmatov',
    role: 'IELTS Instruktori (65 ta o\'quvchi)',
    avatarText: 'J',
    avatarBg: '#B5551F',
    date: '15-Avgust, 2026',
    rating: '5/5',
    text: 'Ilgari Zoom, Telegram guruhlar va to\'lov cheklarini tekshirishga kunimning yarmi ketardi. Bilgim Edu bilan o\'z maktabimni 5 daqiqada ochdim. To\'lovlar avtomatlashdi, uy ishlarini bir joyda tekshiraman.',
    angleClass: '-rotate-1 hover:rotate-0 transition-transform duration-300',
  },
  {
    id: '2',
    name: 'Dildora Alimova',
    role: 'UI/UX Dizayn ustozi (42 ta o\'quvchi)',
    avatarText: 'D',
    avatarBg: '#3B82F6',
    date: '28-Avgust, 2026',
    rating: '5/5',
    text: 'Platformaning dizayni nihoyatda didli va toza. Talabalarim gamifikatsiya va streak tizimi tufayli har kuni darslarni tomosha qilishyapti. Video himoyasi va uy ishi formati ham mukammal.',
    angleClass: 'rotate-1 hover:rotate-0 transition-transform duration-300',
  },
  {
    id: '3',
    name: 'Bekzod Fayzullayev',
    role: 'Frontend Dasturlash o\'qituvchisi',
    avatarText: 'B',
    avatarBg: '#10B981',
    date: '2-Sentabr, 2026',
    rating: '5/5',
    text: 'Telegram-bot bilan integratsiyasi juda qulay. Jonli dars boshlanishidan 15 daqiqa oldin barcha o\'quvchilarga avtomatik xabar boradi. Narxi ham O\'zbekiston bozori uchun juda adolatli!',
    angleClass: '-rotate-2 hover:rotate-0 transition-transform duration-300',
  },
];

// Pinterest Reference 2: Toolkit Grid with 3D Pin Style
export const TOOLKIT_CARDS: ToolkitCard[] = [
  {
    id: 'live',
    stepNum: '01',
    pinColor: '#B5551F',
    title: 'Interaktiv Jonli Darslar',
    description: 'LiveKit infratuzilmasi orqali uzluksiz video konferensiya, dars davomiyligini avtomatik nazorat qilish va audio/video yozib olish.',
    badge: 'Live Video',
    iconName: 'Video',
  },
  {
    id: 'lms',
    stepNum: '02',
    pinColor: '#3B82F6',
    title: 'Himoyalangan Video LMS',
    description: 'Netflix va Cloudflare darajasidagi signed URL va HLS oqimi. Video darslaringiz o\'g\'irlanishi va yuklab olinishidan to\'liq himoyalangan.',
    badge: 'DRM Himoya',
    iconName: 'ShieldCheck',
  },
  {
    id: 'payments',
    stepNum: '03',
    pinColor: '#10B981',
    title: 'Avtomatik To\'lovlar',
    description: 'Payme, Click, Uzcard va Humo integratsiyasi. Har oy 1-5 sanalarida talabalardan to\'lov yechiladi va o\'qituvchiga o\'tkazib beriladi.',
    badge: 'Payme & Click',
    iconName: 'CreditCard',
  },
  {
    id: 'homework',
    stepNum: '04',
    pinColor: '#EC4899',
    title: 'Keng Qamrovli Uy Ishlari',
    description: 'PDF, DOCX, ZIP, rasm va video formatdagi uy vazifalarini qabul qilish. O\'qituvchi uchun qulay qo\'lda tekshirish va baholash stoli.',
    badge: 'Fayllar 500MB',
    iconName: 'FileCheck',
  },
  {
    id: 'gamification',
    stepNum: '05',
    pinColor: '#F59E0B',
    title: 'Gamifikatsiya & Seriya (Streak)',
    description: 'Darslarni bajarish uchun XP ballari, haftasiga 1 marta bepul "Streak Freeze" bilan kunlik seriyalar va guruh ichidagi sog\'lom reyting.',
    badge: 'Motivatsiya',
    iconName: 'Award',
  },
  {
    id: 'telegram',
    stepNum: '06',
    pinColor: '#8B5CF6',
    title: 'Telegram Bot Xabarnomalari',
    description: 'Darsdan 15 daqiqa oldin eslatma, to\'lov xabarlari va xavfsiz 2FA bir martalik kirish kodlari bevosita rasmiy Telegram bot orqali keladi.',
    badge: 'Telegram 2FA',
    iconName: 'Send',
  },
];

// Pinterest Reference 3 & 4: 3 Steps Roadmap
export const ROADMAP_STEPS = [
  {
    step: '01',
    title: 'Maktabingizni oching',
    subtitle: '2 daqiqalik wizard',
    description: 'O\'z brendingiz nomini kiriting va shaxsiy subdomenni ({slug}.bilgimedu.uz) tanlang. Hech qanday dasturlash bilimi talab qilinmaydi.',
    icon: 'Sparkles',
    color: '#B5551F',
  },
  {
    step: '02',
    title: 'Dars va materiallarni joylang',
    subtitle: 'Video, audio, konspekt va uy ishi',
    description: 'Strukturali modullar tuzing, videolaringizni yuklang, uy vazifalari formatini belgilang va bir marta bosish bilan kursni e\'lon qiling.',
    icon: 'BookOpen',
    color: '#3B82F6',
  },
  {
    step: '03',
    title: 'Talabalarni qabul qilib, pul ishlang',
    subtitle: 'Avtomatlashgan billing',
    description: 'Talabalaringizga tayyor landing havolangizni ulashing. Ular Payme/Click orqali to\'laydi, siz esa dars o\'tishga e\'tibor qarating.',
    icon: 'TrendingUp',
    color: '#10B981',
  },
];

// Pinterest Reference 6: Vertical bead chain reasons
export const WHY_US_NODES = [
  {
    num: '01',
    title: 'Shaxsiy brend va to\'liq mustaqillik',
    desc: 'Boshqa umumiy kurs platformalaridagi kabi boshqa o\'qituvchilar bilan raqobat qilmaysiz. Sizning o\'z maktabingiz, o\'z logotipingiz va o\'z qoidalaringiz bo\'ladi.',
  },
  {
    num: '02',
    title: 'Tartibsizlikka barham bering',
    desc: 'Telegram, Zoom havolalari, daftardagi ro\'yxatlar va to\'lov cheklarini bittama-bitta so\'rab yurish o\'tmishda qoladi. Hammasi bitta panelda jamlangan.',
  },
  {
    num: '03',
    title: 'Jonli darslar va xarajat nazorati',
    desc: 'O\'quvchilaringiz bilan to\'g\'ridan-to\'g\'ri platformada jonli dars o\'ting. Xarajatlar tarif ichida oldindan hisoblangan, kutilmagan to\'lovlar bo\'lmaydi.',
  },
  {
    num: '04',
    title: 'O\'zbekiston to\'lov tizimlariga to\'liq mos',
    desc: 'Xalqaro murakkab kartalar kerak emas. Uzcard va Humo orqali 1 soniyada to\'lov qabul qilasiz, daromadingiz qonuniy va xavfsiz yuritiladi.',
  },
];

export const FAQS: FaqItem[] = [
  {
    question: 'Bilgim Edu orqali maktab ochish uchun dasturlashni bilish kerakmi?',
    answer: 'Yo\'q, mutlaqo kerak emas. 2 daqiqa ichida maktab nomi va havolangizni kiritasiz, tizim sizga tayyor veb-sayt va boshqaruv panelini taqdim etadi.',
  },
  {
    question: 'To\'lovlar qanday qabul qilinadi va menga qachon yetkaziladi?',
    answer: 'Talabalar Payme, Click, Uzcard yoki Humo orqali to\'lov qiladilar. Mablag\'lar platformaning yagona merchant hisobida xavfsiz saqlanadi va har oyning 1—5 sanalari orasida sizning bank kartangiz yoki hisob raqamingizga o\'tkazib beriladi.',
  },
  {
    question: 'Videolarim o\'g\'irlanmasligi yoki boshqa joyga tarqalmasligi qanday kafolatlanadi?',
    answer: 'Videolar maxsus shifrlangan HLS oqimi va muddati cheklangan signed URL orqali uzatiladi. Oddiy brauzer yoki yuklab oluvchi dasturlar videoni saqlab ololmaydi.',
  },
  {
    question: '14 kunlik bepul sinovda qanday imkoniyatlar bor?',
    answer: 'Go tarifi doirasida 14 kun davomida platformaning barcha funksiyalaridan (maktab ochish, kurs joylash, talaba qo\'shish) mutlaqo bepul foydalanishingiz mumkin. Karta ma\'lumotlarini kiritish shart emas.',
  },
  {
    question: 'Agar talaba oy o\'rtasida kursdan chiqib ketsa nima bo\'ladi?',
    answer: 'Tizim avtomatik proratsiya hisoblaydi: talaba o\'tgan darslar uchun pul o\'qituvchiga to\'lanadi, qolgan darslar summasi talabaning ichki balansiga qaytadi va u istalgan vaqtda yechib olishi mumkin.',
  },
];
