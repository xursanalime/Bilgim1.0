import { Language } from '../types';

export interface Translations {
  nav: {
    features: string;
    howItWorks: string;
    pricing: string;
    testimonials: string;
    faq: string;
    login: string;
    register: string;
    createSchool: string;
    tagline: string;
  };
  hero: {
    badge: string;
    titlePart1: string;
    titleAccent: string;
    titlePart2: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trialBadge: string;
    zeroCommission: string;
    stat1Label: string;
    stat1Sub: string;
    stat2Label: string;
    stat2Sub: string;
    stat3Label: string;
    stat3Sub: string;
  };
  showcase: {
    badge: string;
    title: string;
    subtitle: string;
    tabDashboard: string;
    tabDrm: string;
    tabStreak: string;
    dashboardMonthlyRevenue: string;
    dashboardActiveStudents: string;
    dashboardCompletionRate: string;
    drmTitle: string;
    drmSub: string;
    drmNotice: string;
    streakDays: string;
    streakSub: string;
    streakLeaderboard: string;
    tryDemoBtn: string;
  };
  puzzle: {
    eyebrow: string;
    title: string;
    titleAccent: string;
    description: string;
    leftTitle: string;
    leftSubtitle: string;
    leftItem1: string;
    leftItem2: string;
    leftItem3: string;
    rightTitle: string;
    rightSubtitle: string;
    rightItem1: string;
    rightItem2: string;
    rightItem3: string;
    cta: string;
    ctaSub: string;
  };
  toolkit: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: {
      step: string;
      title: string;
      description: string;
      badge: string;
    }[];
  };
  roadmap: {
    badge: string;
    title: string;
    subtitle: string;
    steps: {
      step: string;
      title: string;
      description: string;
      badge: string;
    }[];
    cta: string;
  };
  calculator: {
    badge: string;
    title: string;
    subtitle: string;
    coursePriceLabel: string;
    studentsCountLabel: string;
    monthlyRevenueLabel: string;
    annualRevenueLabel: string;
    zeroCommissionTag: string;
    savingsBadge: string;
    savingsNote: string;
    cta: string;
  };
  audience: {
    badge: string;
    title: string;
    subtitle: string;
    fitTitle: string;
    fitSubtitle: string;
    notFitTitle: string;
    notFitSubtitle: string;
    fitItems: string[];
    notFitItems: string[];
  };
  reasons: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      number: string;
      title: string;
      description: string;
      highlight: string;
    }[];
  };
  pricing: {
    badge: string;
    title: string;
    subtitle: string;
    monthly: string;
    annual: string;
    twoMonthsFree: string;
    monthSuffix: string;
    annualNotice: string;
    freeTrial: string;
    planAction: string;
    planActionGo: string;
    transparencyNote: string;
    plans: {
      id: string;
      name: string;
      badge?: string;
      popular?: boolean;
      studentsLimit: string;
      coursesLimit: string;
      liveHours: string;
      recordingInfo: string;
      storageInfo: string;
      features: string[];
    }[];
  };
  testimonials: {
    badge: string;
    title: string;
    subtitle: string;
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    items: {
      question: string;
      answer: string;
    }[];
  };
  auth: {
    loginTitle: string;
    loginSubtitle: string;
    registerTitle: string;
    registerSubtitle: string;
    forgotPasswordTitle: string;
    roleTeacher: string;
    roleTeacherDesc: string;
    roleStudent: string;
    roleStudentDesc: string;
    phoneOrEmail: string;
    phone: string;
    fullName: string;
    schoolName: string;
    subdomain: string;
    password: string;
    confirmPassword: string;
    rememberMe: string;
    forgotPassword: string;
    loginBtn: string;
    registerTeacherBtn: string;
    registerStudentBtn: string;
    noAccount: string;
    hasAccount: string;
    signUpNow: string;
    signInNow: string;
    termsAgreement: string;
    trialBadge: string;
  };
  footer: {
    about: string;
    copyright: string;
    madeForTeachers: string;
  };
}

export const TRANSLATIONS: Record<Language, Translations> = {
  uz: {
    nav: {
      features: "Imkoniyatlar",
      howItWorks: "Qanday ishlaydi",
      pricing: "Tariflar",
      testimonials: "Sharhlar",
      faq: "FAQ",
      login: "Kirish",
      register: "Ro'yxatdan o'tish",
      createSchool: "Maktab Ochish",
      tagline: "Onlayn Maktab Platformasi",
    },
    hero: {
      badge: "Mustaqil O'qituvchi va Murabbiylar Uchun",
      titlePart1: "O'z Onlayn Maktabingizni",
      titleAccent: "5 Daqiqada",
      titlePart2: "Ishga Tushiring",
      description: "O'quvchilar, video darslar, to'lovlar va jonli efirlar — barchasi o'z shaxsiy brendingiz ostida. 0% komissiya, yashirin to'lovlar yo'q.",
      ctaPrimary: "14 Kun Bepul Sinab Ko'rish",
      ctaSecondary: "Platforma Simulyatori",
      trialBadge: "Hech qanday karta talab qilinmaydi",
      zeroCommission: "0% Kurs Komissiyasi",
      stat1Label: "14 Kun Bepul",
      stat1Sub: "To'liq funksional sinov",
      stat2Label: "0% Komissiya",
      stat2Sub: "Barcha daromad o'zingizga",
      stat3Label: "HLS + DRM",
      stat3Sub: "Video himoyasi va suv belgisi",
    },
    showcase: {
      badge: "Jonli Interfeys Simulyatori",
      title: "Bilgim Edu Ichidan Qanday Ko'rinadi?",
      subtitle: "O'qituvchi va o'quvchi kabinetlari qulay, zamonaviy va xavfsiz.",
      tabDashboard: "O'qituvchi Paneli",
      tabDrm: "Video Himoyasi (DRM)",
      tabStreak: "O'quvchi Gamifikatsiyasi",
      dashboardMonthlyRevenue: "Oylik tushum",
      dashboardActiveStudents: "Faol talabalar",
      dashboardCompletionRate: "Darslarni tugatish",
      drmTitle: "Dinamik Suv Belgisi (Watermark)",
      drmSub: "Talaba ismi, telefon raqami va IP ekranda harakatlanadi. Skrinshot va videoga yozishning oldi olinadi.",
      drmNotice: "Video yuklab olinmaydigan HLS shifrlash orqali uzatiladi",
      streakDays: "Kunlik Zanjir (Streak)",
      streakSub: "Talabalar har kuni dars o'qib, XP va nishonlar yig'ishadi.",
      streakLeaderboard: "Maktab peshqadamlar jadvali",
      tryDemoBtn: "O'z Maktabingizda Boshlang",
    },
    puzzle: {
      eyebrow: "Mukammal Hamkorlik",
      title: "Sizning Bilimingiz + Bizning Tizim =",
      titleAccent: "Muvaffaqiyatli Maktab",
      description: "Siz o'z sohangizning eng zo'r mutaxassisisiz. Biz esa texnik qiyinchiliklar, serverlar, xavfsizlik va to'lovlarni o'z zimmamizga olamiz.",
      leftTitle: "Sizning Tomoningiz",
      leftSubtitle: "Ekspertlik va Ta'lim",
      leftItem1: "Mualliflik videodarslari va materiallar",
      leftItem2: "Jonli amaliy mashg'ulotlar",
      leftItem3: "O'quvchilar bilan jonli muloqot",
      rightTitle: "Bilgim Edu Tizimi",
      rightSubtitle: "Infratuzilma va Xavfsizlik",
      rightItem1: "Shifrlangan HLS video himoyasi & Suv belgisi",
      rightItem2: "Payme, Click, Uzcard va Humo to'lovlari",
      rightItem3: "Jonli darslar, uy ishi va gamifikatsiya",
      cta: "Hoziroq O'z Maktabingizni Yarating",
      ctaSub: "14 kun bepul • Sinab ko'rish hech qanday majburiyat yuklamaydi",
    },
    toolkit: {
      eyebrow: "Yagona Ekosistema",
      title: "Hamma Narsa Bitta Joyda",
      subtitle: "Barcha kerakli vositalar bitta maktab platformasida jamlangan — boshqa xizmatlarga pul to'lashga hojat yo'q",
      items: [
        {
          step: "01",
          title: "Video Himoyasi & Player",
          description: "HLS shifrlash, yuklab olishdan himoya va talabaning ismi tushirilgan dinamik suv belgisi.",
          badge: "Anti-Pirat",
        },
        {
          step: "02",
          title: "Jonli Darslar (WebRTC)",
          description: "Brauzerning o'zida jonli efirlar, doska va darslarni audio/video formatda yozib olish.",
          badge: "Jonli Dars",
        },
        {
          step: "03",
          title: "Mahalliy To'lovlar",
          description: "Payme, Click, Uzcard va Humo integratsiyasi. To'lov qilingan zahoti darslar avtomatik ochiladi.",
          badge: "0% Komissiya",
        },
        {
          step: "04",
          title: "Vazifalar & Baholash",
          description: "Uyga vazifa topshirish, ustoz tekshiruvi, ovozli izohlar va avtomatik testlar.",
          badge: "LMS",
        },
        {
          step: "05",
          title: "O'quvchi Motivatsiyasi",
          description: "Kunlik o'qish zanjiri (Streak), tajriba ballari (XP), yutuq nishonlari va sertifikatlar.",
          badge: "Gamifikatsiya",
        },
        {
          step: "06",
          title: "Shaxsiy Subdomen",
          description: "O'z nomingizdagi subdomen (masalan: ali-ielts.bilgimedu.uz) va to'liq o'z brendingiz.",
          badge: "Oq Yorliq",
        },
      ],
    },
    roadmap: {
      badge: "Oddiy 3 Bosqich",
      title: "Maktabingizni Ishga Tushirish Yo'li",
      subtitle: "Murakkab texnik sozlamalarsiz, bir kunda o'z kurslaringizni e'lon qiling va daromad olishni boshlang.",
      steps: [
        {
          step: "01",
          title: "Maktab yarating va kurs yuklang",
          description: "Nomingiz va subdomenni tanlang. Tayyor darslaringizni yuklang — tizim ularni avtomatik shifrlaydi va himoyalaydi.",
          badge: "5 daqiqa",
        },
        {
          step: "02",
          title: "Narxlarni va to'lovni sozlang",
          description: "Kurs narxini belgilang. Payme yoki Click hamyoningizni ulang. Talabalar to'lov qilgach avtomatik darsga qo'shiladi.",
          badge: "0% Komissiya",
        },
        {
          step: "03",
          title: "O'quvchilarni jalb qiling va o'qiting",
          description: "Telegram kanalingiz yoki ijtimoiy tarmoqlarda havolangizni ulashing. Darslar, uy ishlari va natijalarni nazorat qiling.",
          badge: "Daromad",
        },
      ],
      cta: "1-Qadamni Hozir Boshlang",
    },
    calculator: {
      badge: "Daromad Kalkulyatori",
      title: "Qancha Daromad Olishingizni Hisoblang",
      subtitle: "Bilgim Edu 0% komissiya oladi. Barcha pul to'g'ridan-to'g'ri sizning hisobingizga tushadi.",
      coursePriceLabel: "O'rtacha kurs narxi (so'm)",
      studentsCountLabel: "Oylik talabalar soni",
      monthlyRevenueLabel: "Sizning oylik sof daromadingiz",
      annualRevenueLabel: "Yillik prognoz daromad",
      zeroCommissionTag: "0% Platforma Komissiyasi",
      savingsBadge: "Boshqa platformalardan tejalgan mablag':",
      savingsNote: "Agar 15-20% komissiya oladigan platformada bo'lsangiz, har oy shu pulni yo'qotgan bo'lardingiz!",
      cta: "Ushbu Daromadni O'zingizda Saqlang",
    },
    audience: {
      badge: "Aniq Mo'ljal",
      title: "Bilgim Edu Kimlar Uchun?",
      subtitle: "Biz faqat natija beradigan mustaqil ustozlar uchun eng qulay sharoitni quramiz.",
      fitTitle: "Kimlar uchun mos:",
      fitSubtitle: "Agar siz quyidagi toifaga kirsangiz, platforma sizga 100% mos keladi:",
      notFitTitle: "Kimlar uchun mos emas:",
      notFitSubtitle: "Quyidagi holatlarda Bilgim Edu sizga to'g'ri kelmasligi mumkin:",
      fitItems: [
        "O'z kurslarini Telegram guruh va kanallarda zo'rg'a boshqarayotgan repetitorlar",
        "Darslari tarqalib ketishidan qo'rqadigan professional ekspertlar",
        "O'quvchilari natijasi va uy ishlarini tizimli nazorat qilmoqchi bo'lganlar",
        "Har bir sotuvdan 15-20% komissiya to'lashni istamaydigan mualliflar",
        "O'z shaxsiy brendi va subdomeni ostida maktab yurgizmoqchi bo'lganlar",
      ],
      notFitItems: [
        "Faqat bitta 10 daqiqalik video sotib, qaytib kirmaydigan havaskorlar",
        "Talabalari bilan hech qanday aloqa va amaliyot qilmoqchi bo'lmaganlar",
        "Bepul darslarni ommaviy tarqatish uchun oddiy hosting qidirayotganlar",
        "Tizimga jiddiy qaramay, darhol mo''jiza kutayotganlar",
      ],
    },
    reasons: {
      badge: "Nega Bilgim Edu?",
      title: "Ustozlar Nima Uchun Bizni Tanlaydi?",
      subtitle: "Oddiy sayt emas, haqiqiy ta'lim ekotizimi.",
      items: [
        {
          number: "01",
          title: "O'zbekiston bank kartalariga to'g'ridan-to'g'ri to'lov",
          description: "Payme, Click, Uzcard va Humo to'liq integratsiya qilingan. Pul to'g'ridan-to'g'ri o'zingizning hisobingizga keladi.",
          highlight: "Tezkor To'lov",
        },
        {
          number: "02",
          title: "O'g'irlashdan himoyalangan video-player",
          description: "Videoni brauzer kodi orqali yuklab olib bo'lmaydi. Ekranda o'quvchining telefon raqami suv belgisi bo'lib aylanadi.",
          highlight: "100% Himoya",
        },
        {
          number: "03",
          title: "Telegram ekotizimi bilan uyg'unlik",
          description: "Yangi uy ishi, dars jadvali yoki to'lov haqida o'qituvchi va o'quvchiga Telegram bot orqali bildirishnoma boradi.",
          highlight: "Telegram Bot",
        },
        {
          number: "04",
          title: "O'quvchi darsni tashlab ketmasligi uchun gamifikatsiya",
          description: "Kunlik o'qish zanjiri (Streak), ballar va reyting tizimi o'quvchilarni kursni oxirigacha bitirishiga undaydi.",
          highlight: "Yuqori Natija",
        },
      ],
    },
    pricing: {
      badge: "Shaffof Tariflar",
      title: "Oddiy va Halol Narxlar",
      subtitle: "Dollar kursiga bog'liq bo'lmagan, so'mda qat'iy belgilangan oylik tariflar. Hech qanday yashirin to'lovlar yo'q.",
      monthly: "Oylik To'lov",
      annual: "Yillik To'lov",
      twoMonthsFree: "2 oy bepul",
      monthSuffix: "so'm / oy",
      annualNotice: "(Yillik tarifda hisoblanganda)",
      freeTrial: "Dastlabki 14 kun mutlaqo bepul",
      planAction: "Rejasini Tanlash",
      planActionGo: "14 Kun Bepul Boshlash",
      transparencyNote: "Eslatma: Bilgim Edu platformasi to'lov komissiyasini o'z zimmasiga oladi. O'qituvchilar belgilangan sof summani olishadi.",
      plans: [
        {
          id: "go",
          name: "Go",
          badge: "14 kun bepul sinov",
          studentsLimit: "25 tagacha talaba",
          coursesLimit: "2 tagacha faol kurs",
          liveHours: "6 soat/oy (max 12 kishi/sessiya)",
          recordingInfo: "Faqat audio recording (3 soat/oy)",
          storageInfo: "2 GB xavfsiz Cloudflare R2 saqlash",
          features: [
            "Shaxsiy subdomen ({slug}.bilgimedu.uz)",
            "Payme, Click, Uzcard, Humo integratsiyasi",
            "Uy ishi topshirish va tekshirish",
            "Gamifikatsiya (XP, Streak, Badge)",
            "Telegram bot xabarnomalari",
          ],
        },
        {
          id: "pro",
          name: "Pro",
          badge: "Eng ommabop",
          popular: true,
          studentsLimit: "100 tagacha talaba",
          coursesLimit: "8 tagacha faol kurs",
          liveHours: "25 soat/oy (max 25 kishi/sessiya)",
          recordingInfo: "Audio recording (20 soat/oy)",
          storageInfo: "20 GB xavfsiz Cloudflare R2 saqlash",
          features: [
            "Barcha Go tarifi imkoniyatlari",
            "Ichki daromad va talabalar analitikasi",
            "Talabalar ro'yxatini Excel/PDF eksport qilish",
            "O'qituvchi referal chegirmasi (25% 1 oy)",
            "Birinchi navbatdagi texnik yordam",
          ],
        },
        {
          id: "max",
          name: "Max",
          badge: "Katta auditoriyalar uchun",
          studentsLimit: "300 tagacha talaba",
          coursesLimit: "Cheksiz kurslar",
          liveHours: "50 soat/oy (max 40 kishi/sessiya)",
          recordingInfo: "To'liq HD Video recording (30 soat/oy)",
          storageInfo: "60 GB xavfsiz Cloudflare R2 saqlash",
          features: [
            "Barcha Pro tarifi imkoniyatlari",
            "HD Video dars yozib olish (Egress)",
            "Individual chegirma va vaucherlar",
            "Shaxsiy menejer va maxsus yordam",
            "Cheksiz jonli guruhlar",
          ],
        },
      ],
    },
    testimonials: {
      badge: "Haqiqiy Tajribalar",
      title: "Bizga Ishongan Ustozlar Fikri",
      subtitle: "Bilgim Edu orqali o'z maktabini ochgan o'qituvchilarning real sharhlari.",
    },
    faq: {
      badge: "Ko'p Beriladigan Savollar",
      title: "Savollaringiz bormi? Javob beramiz",
      subtitle: "Qo'shimcha savollar bo'lsa, Telegram qo'llab-quvvatlash xizmatimiz doimo tayyor.",
      items: [
        {
          question: "Bilgim Edu kurs sotuvlaridan necha foiz komissiya oladi?",
          answer: "0%! Biz daromadingizdan hech qanday foiz olmaymiz. Siz faqat oylik yoki yillik qat'iy tarif rejasini to'laysiz, barcha tushumlar 100% sizda qoladi.",
        },
        {
          question: "Darslarim Telegram kanallarga tarqalib ketishidan qanday himoyalangan?",
          answer: "Videolar HLS (HTTP Live Streaming) formatida shifrlanadi. Brauzerdan to'g'ridan-to'g'ri yuklab olib bo'lmaydi. Bundan tashqari, videoning ustida talabaning ismi, telefon raqami va IP manzili dinamik suv belgisi bo'lib aylanadi — ekranni yozib olganda kim tarqatgani bir zumda oshkor bo'ladi.",
        },
        {
          question: "To'lovlarni qanday qabul qilaman?",
          answer: "O'z kabinetingizga Payme yoki Click ma'lumotlarini kiritasiz. Talaba to'lov qilganda pul to'g'ridan-to'g'ri sizning hisob raqamingiz yoki kartangizga tushadi va tizim darsni avtomatik ochadi.",
        },
        {
          question: "Bepul sinov muddati bormi?",
          answer: "Ha, yangi ro'yxatdan o'tgan har bir o'qituvchi uchun 14 kunlik to'liq bepul sinov muddati beriladi. Bank kartangizni kiritish talab qilinmaydi.",
        },
        {
          question: "Texnik bilimim yo'q, maktabni o'zim yurita olamanmi?",
          answer: "Albatta! Platforma o'qituvchilar uchun maksimal sodda qilingan. Dars qo'shish xuddi Telegram ga fayl yuborish kabi oson.",
        },
      ],
    },
    auth: {
      loginTitle: "Tizimga Kirish",
      loginSubtitle: "Kabinetga kirish uchun telefon raqam va parolingizni kiriting",
      registerTitle: "Ro'yxatdan O'tish",
      registerSubtitle: "O'z maktabingizni oching yoki mavjud darslarga qo'shiling",
      forgotPasswordTitle: "Parolni Tiklash",
      roleTeacher: "O'qituvchi / Markaz",
      roleTeacherDesc: "O'z maktabimni ochish va dars sotish uchun",
      roleStudent: "O'quvchi / Talaba",
      roleStudentDesc: "Kurslarni ko'rish va o'qish uchun",
      phoneOrEmail: "Telefon raqam yoki E-mail",
      phone: "Telefon raqam",
      fullName: "Ism va Familiya",
      schoolName: "Maktab yoki Markaz nomi",
      subdomain: "Shaxsiy subdomen manzili",
      password: "Parol",
      confirmPassword: "Parolni tasdiqlang",
      rememberMe: "Eslab qolish",
      forgotPassword: "Parolni unutdingizmi?",
      loginBtn: "Kirish",
      registerTeacherBtn: "Maktab Ochish (14 Kun Bepul)",
      registerStudentBtn: "Talaba Sifatida Ro'yxatdan O'tish",
      noAccount: "Hisobingiz yo'qmi?",
      hasAccount: "Allaqachon hisobingiz bormi?",
      signUpNow: "Ro'yxatdan o'tish",
      signInNow: "Tizimga kirish",
      termsAgreement: "Ro'yxatdan o'tish orqali foydalanish shartlariga rozilik bildirasiz",
      trialBadge: "14 kunlik bepul sinov davri • Karta talab qilinmaydi",
    },
    footer: {
      about: "Mustaqil o'qituvchi va murabbiylar uchun 0% komissiyali milliy ta'lim platformasi.",
      copyright: "Barcha huquqlar himoyalangan.",
      madeForTeachers: "O'zbekiston ustozlari uchun mehr bilan yaratilgan.",
    },
  },

  ru: {
    nav: {
      features: "Возможности",
      howItWorks: "Как это работает",
      pricing: "Тарифы",
      testimonials: "Отзывы",
      faq: "FAQ",
      login: "Войти",
      register: "Регистрация",
      createSchool: "Создать школу",
      tagline: "Платформа для онлайн-школ",
    },
    hero: {
      badge: "Для Независимых Преподавателей и Экспертов",
      titlePart1: "Запустите Свою Онлайн-Школу За",
      titleAccent: "5 Минут",
      titlePart2: "Без Сложностей",
      description: "Студенты, видеоуроки, платежи через Payme/Click и живые вебинары — всё под вашим собственным брендом. 0% комиссии с продаж.",
      ctaPrimary: "Попробовать 14 Дней Бесплатно",
      ctaSecondary: "Симулятор Платформы",
      trialBadge: "Банковская карта не требуется",
      zeroCommission: "0% Комиссии с Продаж",
      stat1Label: "14 Дней Бесплатно",
      stat1Sub: "Полный доступ без ограничений",
      stat2Label: "0% Комиссии",
      stat2Sub: "100% выручки остаётся вам",
      stat3Label: "HLS + DRM",
      stat3Sub: "Защита видео и водяной знак",
    },
    showcase: {
      badge: "Интерактивный Демо-Симулятор",
      title: "Как Устроена Платформа Bilgim Edu?",
      subtitle: "Удобные, современные и защищённые кабинеты для преподавателя и студента.",
      tabDashboard: "Кабинет Преподавателя",
      tabDrm: "Защита Видео (DRM)",
      tabStreak: "Геймификация Студентов",
      dashboardMonthlyRevenue: "Доход за месяц",
      dashboardActiveStudents: "Активные студенты",
      dashboardCompletionRate: "Проходимость уроков",
      drmTitle: "Динамический Водяной Знак",
      drmSub: "Имя, телефон и IP студента плавно перемещаются по видео. Защита от записи экрана и сливов.",
      drmNotice: "Видео транслируется через защищённый HLS-поток",
      streakDays: "Дней Непрерывного Обучения (Streak)",
      streakSub: "Студенты учатся каждый день, зарабатывают XP и соревнуются за лидерство.",
      streakLeaderboard: "Таблица лидеров школы",
      tryDemoBtn: "Создать Свою Школу",
    },
    puzzle: {
      eyebrow: "Идеальное Партнёрство",
      title: "Ваши Знания + Наша Платформа =",
      titleAccent: "Успешная Школа",
      description: "Вы делитесь своими знаниями и экспертностью. Мы берём на себя серверы, защиту контента, платежи и техническую поддержку.",
      leftTitle: "С Вашей Стороны",
      leftSubtitle: "Экспертиза и Обучение",
      leftItem1: "Авторские видеоуроки и учебные материалы",
      leftItem2: "Живые практические занятия и вебинары",
      leftItem3: "Общение и менторство студентов",
      rightTitle: "Система Bilgim Edu",
      rightSubtitle: "Инфраструктура и Безопасность",
      rightItem1: "Шифрование видео HLS и динамический водяной знак",
      rightItem2: "Приём платежей Payme, Click, Uzcard и Humo",
      rightItem3: "Домашние задания, тесты и геймификация",
      cta: "Создать Свою Школу Прямо Сейчас",
      ctaSub: "14 дней бесплатно • Пробный период без обязательств",
    },
    toolkit: {
      eyebrow: "Единая Экосистема",
      title: "Всё Необходимое в Одном Месте",
      subtitle: "Все инструменты уже встроены — вам больше не нужно оплачивать отдельные сторонние сервисы",
      items: [
        {
          step: "01",
          title: "Защищённый Видеоплеер",
          description: "Шифрование HLS, запрет на скачивание и динамический водяной знак с данными зрителя.",
          badge: "Антипират",
        },
        {
          step: "02",
          title: "Живые Вебинары (WebRTC)",
          description: "Прямые эфиры прямо в браузере, интерактивная доска и запись аудио/видео.",
          badge: "Живой Урок",
        },
        {
          step: "03",
          title: "Местные Платежи",
          description: "Интеграция с Payme, Click, Uzcard и Humo. Автоматическое открытие доступа после оплаты.",
          badge: "0% Комиссии",
        },
        {
          step: "04",
          title: "Домашние Задания и Тесты",
          description: "Сдача заданий, ручная проверка преподавателем, голосовые комментарии и автотесты.",
          badge: "LMS",
        },
        {
          step: "05",
          title: "Мотивация Студентов",
          description: "Серии непрерывного обучения (Streak), баллы опыта (XP), бейджи и сертификаты.",
          badge: "Геймификация",
        },
        {
          step: "06",
          title: "Персональный Субдомен",
          description: "Собственный адрес школы (например: math.bilgimedu.uz) и оформление под ваш бренд.",
          badge: "White Label",
        },
      ],
    },
    roadmap: {
      badge: "Простые 3 Шага",
      title: "Как Запустить Свою Школу",
      subtitle: "Без программистов и сложных настроек — опубликуйте первый курс за 1 день.",
      steps: [
        {
          step: "01",
          title: "Создайте школу и загрузите уроки",
          description: "Выберите название и субдомен. Загрузите видео — платформа автоматически зашифрует их.",
          badge: "5 минут",
        },
        {
          step: "02",
          title: "Укажите цены и подключите оплату",
          description: "Установите стоимость курса. Привяжите Payme или Click. Деньги поступают сразу вам.",
          badge: "0% Комиссии",
        },
        {
          step: "03",
          title: "Приглашайте студентов и обучайте",
          description: "Отправьте ссылку в свой Telegram-канал. Проверяйте домашние задания и ведите живые уроки.",
          badge: "Прибыль",
        },
      ],
      cta: "Начать с Шага 1",
    },
    calculator: {
      badge: "Калькулятор Дохода",
      title: "Рассчитайте Вашу Чистую Прибыль",
      subtitle: "Bilgim Edu не берет комиссию с ваших продаж. Все заработанные деньги поступают напрямую к вам.",
      coursePriceLabel: "Средняя стоимость курса (сум)",
      studentsCountLabel: "Количество студентов в месяц",
      monthlyRevenueLabel: "Ваша чистая прибыль в месяц",
      annualRevenueLabel: "Прогноз годового дохода",
      zeroCommissionTag: "0% Комиссии Платформы",
      savingsBadge: "Сэкономлено по сравнению с другими сервисами:",
      savingsNote: "На платформах с комиссией 15-20% вы теряли бы эту сумму каждый месяц!",
      cta: "Сохранить Всю Прибыль Себе",
    },
    audience: {
      badge: "Точный Фокус",
      title: "Для Кого Создан Bilgim Edu?",
      subtitle: "Мы строим платформу для преподавателей, ориентированных на реальный результат студентов.",
      fitTitle: "Идеально подходит для:",
      fitSubtitle: "Платформа решит все ваши задачи, если вы:",
      notFitTitle: "Не подходит для:",
      notFitSubtitle: "Платформа может вам не подойти в следующих случаях:",
      fitItems: [
        "Репетиторы, уставшие управлять курсами вручную через группы в Telegram",
        "Эксперты, которые боятся сливов и незаконного распространения уроков",
        "Преподаватели, проверяющие домашние задания и следящие за прогрессом",
        "Авторы, не желающие отдавать 15-20% комиссии чужим платформам",
        "Те, кто хочет развивать свой личный бренд на собственном субдомене",
      ],
      notFitItems: [
        "Те, кто хочет продать разовое 10-минутное видео без обратной связи",
        "Те, кому не важно качество обучения и вовлечённость студентов",
        "Ищущие бесплатный файлообменник для массовой раздачи файлов",
        "Ожидающие чуда без подготовки качественного образовательного контента",
      ],
    },
    reasons: {
      badge: "Почему Bilgim Edu?",
      title: "Почему Преподаватели Выбирают Нас?",
      subtitle: "Не просто конструктор страниц, а полноценная образовательная экосистема.",
      items: [
        {
          number: "01",
          title: "Прямые платежи на карты Узбекистана",
          description: "Интеграция с Payme, Click, Uzcard и Humo. Оплата зачисляется моментально на ваш счёт.",
          highlight: "Быстрые Платежи",
        },
        {
          number: "02",
          title: "Защита видео от скачивания и записи",
          description: "Уроки защищены HLS-шифрованием, а динамический водяной знак защищает от сливов.",
          highlight: "100% Защита",
        },
        {
          number: "03",
          title: "Синхронизация с Telegram",
          description: "Уведомления о новых домашних заданиях, уроках и оплатах приходят прямо в Telegram-бот.",
          highlight: "Telegram Бот",
        },
        {
          number: "04",
          title: "Геймификация для завершения курсов",
          description: "Серии уроков (Streak), баллы и рейтинг мотивируют студентов доходить до конца курса.",
          highlight: "Высокая Доходимость",
        },
      ],
    },
    pricing: {
      badge: "Прозрачные Тарифы",
      title: "Честные и Фиксированные Цены",
      subtitle: "Фиксированные цены в сумах без привязки к доллару. Никаких скрытых платежей и мелкого шрифта.",
      monthly: "Ежемесячно",
      annual: "Ежегодно",
      twoMonthsFree: "2 месяца бесплатно",
      monthSuffix: "сум / мес",
      annualNotice: "(при оплате за год)",
      freeTrial: "Первые 14 дней абсолютно бесплатно",
      planAction: "Выбрать План",
      planActionGo: "Начать 14 Дней Бесплатно",
      transparencyNote: "Важно: Bilgim Edu полностью покрывает межбанковские комиссии шлюзов. Вы получаете полную сумму.",
      plans: [
        {
          id: "go",
          name: "Go",
          badge: "14 дней триал",
          studentsLimit: "До 25 студентов",
          coursesLimit: "До 2 активных курсов",
          liveHours: "6 часов/мес (до 12 чел/сессия)",
          recordingInfo: "Только аудио-запись (3 часа/мес)",
          storageInfo: "2 ГБ защищённого хранилища R2",
          features: [
            "Персональный субдомен ({slug}.bilgimedu.uz)",
            "Интеграция с Payme, Click, Uzcard, Humo",
            "Сдача и проверка домашних заданий",
            "Геймификация (XP, Streak, Бейджи)",
            "Telegram-бот уведомления",
          ],
        },
        {
          id: "pro",
          name: "Pro",
          badge: "Популярный выбор",
          popular: true,
          studentsLimit: "До 100 студентов",
          coursesLimit: "До 8 активных курсов",
          liveHours: "25 часов/мес (до 25 чел/сессия)",
          recordingInfo: "Аудио-запись (20 часов/мес)",
          storageInfo: "20 ГБ защищённого хранилища R2",
          features: [
            "Все возможности тарифа Go",
            "Аналитика доходов и вовлечённости",
            "Экспорт базы студентов в Excel/PDF",
            "Реферальная скидка для преподавателей (25%)",
            "Приоритетная техническая поддержка",
          ],
        },
        {
          id: "max",
          name: "Max",
          badge: "Для крупных школ",
          studentsLimit: "До 300 студентов",
          coursesLimit: "Неограниченно курсов",
          liveHours: "50 часов/мес (до 40 чел/сессия)",
          recordingInfo: "Запись в Full HD видео (30 часов/мес)",
          storageInfo: "60 ГБ защищённого хранилища R2",
          features: [
            "Все возможности тарифа Pro",
            "HD видеозапись уроков (Egress)",
            "Промокоды и персональные ваучеры",
            "Персональный менеджер поддержки",
            "Неограниченные онлайн-комнаты",
          ],
        },
      ],
    },
    testimonials: {
      badge: "Реальный Опыт",
      title: "Отзывы Преподавателей",
      subtitle: "Истории преподавателей, которые уже ведут свои курсы на Bilgim Edu.",
    },
    faq: {
      badge: "Частые Вопросы",
      title: "Есть Вопросы? У Нас Есть Ответы",
      subtitle: "Наша служба поддержки в Telegram всегда готова помочь вам.",
      items: [
        {
          question: "Какой процент от продаж берёт Bilgim Edu?",
          answer: "0%! Мы не берём процент с ваших продаж. Вы платите только фиксированную абонентскую плату за выбранный тариф. Вся выручка остаётся вам.",
        },
        {
          question: "Как видео защищено от сливов в Telegram?",
          answer: "Видео транслируется с помощью защищённого протокола HLS без возможности прямого скачивания. Дополнительно поверх видео динамически накладывается водяной знак с именем, телефоном и IP студента.",
        },
        {
          question: "Как я буду получать деньги от студентов?",
          answer: "Вы подключаете Payme или Click. Студент оплачивает курс картой Uzcard/Humo, деньги поступают на ваш счёт, а доступ к урокам открывается моментально.",
        },
        {
          question: "Есть ли бесплатный пробный период?",
          answer: "Да, всем новым преподавателям предоставляется 14 дней полного бесплатного доступа ко всем функциям. Ввод банковской карты не требуется.",
        },
        {
          question: "Нужны ли навыки программирования?",
          answer: "Абсолютно нет! Платформа разработана так, чтобы любой преподаватель мог загрузить курс так же просто, как отправить сообщение в мессенджер.",
        },
      ],
    },
    auth: {
      loginTitle: "Вход в Систему",
      loginSubtitle: "Введите номер телефона и пароль для входа в кабинет",
      registerTitle: "Регистрация",
      registerSubtitle: "Создайте свою онлайн-школу или присоединитесь как студент",
      forgotPasswordTitle: "Восстановление Пароля",
      roleTeacher: "Преподаватель / Центр",
      roleTeacherDesc: "Открыть свою школу и продавать курсы",
      roleStudent: "Студент / Ученик",
      roleStudentDesc: "Смотреть уроки и выполнять задания",
      phoneOrEmail: "Телефон или E-mail",
      phone: "Номер телефона",
      fullName: "Имя и Фамилия",
      schoolName: "Название школы или центра",
      subdomain: "Адрес субдомена",
      password: "Пароль",
      confirmPassword: "Подтвердите пароль",
      rememberMe: "Запомнить меня",
      forgotPassword: "Забыли пароль?",
      loginBtn: "Войти",
      registerTeacherBtn: "Создать Школу (14 Дней Бесплатно)",
      registerStudentBtn: "Зарегистрироваться как Студент",
      noAccount: "Ещё нет аккаунта?",
      hasAccount: "Уже зарегистрированы?",
      signUpNow: "Зарегистрироваться",
      signInNow: "Войти",
      termsAgreement: "Регистрируясь, вы соглашаетесь с условиями сервиса",
      trialBadge: "14 дней бесплатного периода • Без банковской карты",
    },
    footer: {
      about: "Национальная образовательная платформа с 0% комиссии для независимых преподавателей и экспертов.",
      copyright: "Все права защищены.",
      madeForTeachers: "Сделано с заботой для преподавателей Узбекистана.",
    },
  },

  en: {
    nav: {
      features: "Features",
      howItWorks: "How It Works",
      pricing: "Pricing",
      testimonials: "Reviews",
      faq: "FAQ",
      login: "Log In",
      register: "Sign Up",
      createSchool: "Launch School",
      tagline: "Online School Platform",
    },
    hero: {
      badge: "Built for Independent Educators & Experts",
      titlePart1: "Launch Your Online School In",
      titleAccent: "5 Minutes",
      titlePart2: "Without Complexity",
      description: "Students, video courses, Payme/Click payments, and live interactive classes — all under your own brand. 0% sales commission.",
      ctaPrimary: "Start 14-Day Free Trial",
      ctaSecondary: "Platform Simulator",
      trialBadge: "No credit card required",
      zeroCommission: "0% Course Sales Commission",
      stat1Label: "14 Days Free",
      stat1Sub: "Full-feature unrestricted trial",
      stat2Label: "0% Commission",
      stat2Sub: "Keep 100% of your earnings",
      stat3Label: "HLS + DRM",
      stat3Sub: "Video DRM & Dynamic Watermark",
    },
    showcase: {
      badge: "Live Interactive Simulator",
      title: "Experience Bilgim Edu From the Inside",
      subtitle: "Ergonomic, modern, and highly secure dashboards for both educators and students.",
      tabDashboard: "Teacher Dashboard",
      tabDrm: "Video DRM Protection",
      tabStreak: "Student Gamification",
      dashboardMonthlyRevenue: "Monthly Revenue",
      dashboardActiveStudents: "Active Students",
      dashboardCompletionRate: "Course Completion",
      drmTitle: "Dynamic Watermark Protection",
      drmSub: "Student's name, phone, and IP bounce dynamically across the screen to deter screen recordings.",
      drmNotice: "Streamed via encrypted HLS chunks — direct downloads impossible",
      streakDays: "Daily Study Streak",
      streakSub: "Students learn daily, earn XP, and climb the school leaderboard.",
      streakLeaderboard: "School Leaderboard",
      tryDemoBtn: "Launch Your Own School",
    },
    puzzle: {
      eyebrow: "The Perfect Fit",
      title: "Your Knowledge + Our Platform =",
      titleAccent: "A Thriving School",
      description: "You focus on exceptional teaching. We handle servers, video encryption, payment gateways, and technical infrastructure.",
      leftTitle: "Your Domain",
      leftSubtitle: "Expertise & Teaching",
      leftItem1: "Curated video lessons & course material",
      leftItem2: "Live practical webinars and workshops",
      leftItem3: "Mentoring & engaging with your students",
      rightTitle: "Bilgim Edu System",
      rightSubtitle: "Infrastructure & Security",
      rightItem1: "Encrypted HLS video DRM & dynamic watermarks",
      rightItem2: "Instant Payme, Click, Uzcard & Humo checkouts",
      rightItem3: "Interactive homework, quizzes & gamification",
      cta: "Launch Your School Today",
      ctaSub: "14 days free • No obligations or hidden fees",
    },
    toolkit: {
      eyebrow: "All-in-One Ecosystem",
      title: "Everything You Need in One Place",
      subtitle: "All essential school tools consolidated into a single platform — zero external subscriptions needed",
      items: [
        {
          step: "01",
          title: "DRM-Protected Player",
          description: "HLS encryption, download prevention, and dynamic watermark with viewer credentials.",
          badge: "Anti-Piracy",
        },
        {
          step: "02",
          title: "Live Classes (WebRTC)",
          description: "In-browser live webinars, collaborative whiteboard, and cloud audio/video recording.",
          badge: "Live Class",
        },
        {
          step: "03",
          title: "Local Payments",
          description: "Direct Payme, Click, Uzcard, and Humo checkout. Instant student enrollment upon payment.",
          badge: "0% Commission",
        },
        {
          step: "04",
          title: "Assignments & Grading",
          description: "Homework submissions, audio feedback from teachers, and automated quiz evaluations.",
          badge: "LMS",
        },
        {
          step: "05",
          title: "Gamification & Retention",
          description: "Daily learning streaks, experience points (XP), achievement badges, and certificates.",
          badge: "Gamification",
        },
        {
          step: "06",
          title: "Custom Subdomain",
          description: "Your own dedicated school address (e.g. math.bilgimedu.uz) and personalized white-label branding.",
          badge: "White Label",
        },
      ],
    },
    roadmap: {
      badge: "Simple 3-Step Process",
      title: "How to Launch Your School",
      subtitle: "No coding required. Publish your first courses and start accepting students in less than a day.",
      steps: [
        {
          step: "01",
          title: "Create your school & upload content",
          description: "Pick a name and your subdomain. Upload lessons — the platform automatically encrypts them.",
          badge: "5 minutes",
        },
        {
          step: "02",
          title: "Set prices & connect checkout",
          description: "Set your course price. Connect your Payme or Click account. Funds go directly to you.",
          badge: "0% Commission",
        },
        {
          step: "03",
          title: "Invite students & start teaching",
          description: "Share your school link on Telegram or social channels. Grade homework and host live classes.",
          badge: "Earn",
        },
      ],
      cta: "Get Started with Step 1",
    },
    calculator: {
      badge: "Revenue Calculator",
      title: "Calculate Your True Net Revenue",
      subtitle: "Bilgim Edu charges 0% commission on sales. All student payments go directly to your account.",
      coursePriceLabel: "Average course price (UZS)",
      studentsCountLabel: "Monthly student enrollments",
      monthlyRevenueLabel: "Your estimated monthly net revenue",
      annualRevenueLabel: "Projected annual revenue",
      zeroCommissionTag: "0% Platform Commission",
      savingsBadge: "Saved compared to commission-charging platforms:",
      savingsNote: "On platforms taking a 15-20% cut, you would be losing this amount every single month!",
      cta: "Keep 100% of Your Revenue",
    },
    audience: {
      badge: "Clear Fit",
      title: "Who is Bilgim Edu For?",
      subtitle: "We build specifically for high-impact educators dedicated to real student transformation.",
      fitTitle: "Ideal match for:",
      fitSubtitle: "The platform is 100% tailored for you if:",
      notFitTitle: "Not a fit for:",
      notFitSubtitle: "Bilgim Edu may not be appropriate if:",
      fitItems: [
        "Tutors struggling to manage courses and students across messy Telegram groups",
        "Experts looking for rock-solid DRM protection against course leaks and piracy",
        "Educators who want structured homework checking and student progress tracking",
        "Creators unwilling to surrender 15-20% of their revenue to marketplace platforms",
        "Educators building a lasting personal brand under their own subdomain",
      ],
      notFitItems: [
        "Those looking to dump a single 10-minute video without student interaction",
        "Creators uninterested in student outcomes or homework evaluation",
        "People seeking a free public file-hosting site for file distribution",
        "Those expecting instant passive revenue without quality curriculum",
      ],
    },
    reasons: {
      badge: "Why Bilgim Edu?",
      title: "Why Top Educators Choose Us",
      subtitle: "Not just a website builder — a complete educational ecosystem.",
      items: [
        {
          number: "01",
          title: "Direct card payments in Uzbekistan",
          description: "Native Payme, Click, Uzcard, and Humo checkout. Funds settle straight into your account.",
          highlight: "Fast Payouts",
        },
        {
          number: "02",
          title: "DRM video protection & anti-piracy",
          description: "Encrypted HLS streaming plus dynamic on-screen watermarks with the student's credentials.",
          highlight: "100% Security",
        },
        {
          number: "03",
          title: "Telegram ecosystem synergy",
          description: "Instant bot alerts for homework submissions, new enrollments, and live class schedules.",
          highlight: "Telegram Bot",
        },
        {
          number: "04",
          title: "Retention gamification engine",
          description: "Daily study streaks, XP leaderboards, and badges encourage students to complete courses.",
          highlight: "High Retention",
        },
      ],
    },
    pricing: {
      badge: "Transparent Pricing",
      title: "Honest & Predictable Rates",
      subtitle: "Fixed monthly prices in Uzbek Som (UZS) unaffected by exchange rate swings. Zero hidden fees.",
      monthly: "Monthly Billing",
      annual: "Annual Billing",
      twoMonthsFree: "2 months free",
      monthSuffix: "UZS / mo",
      annualNotice: "(when billed annually)",
      freeTrial: "First 14 days completely free",
      planAction: "Select Plan",
      planActionGo: "Start 14-Day Free Trial",
      transparencyNote: "Note: Bilgim Edu absorbs payment gateway processing fees. You receive the exact stated amount.",
      plans: [
        {
          id: "go",
          name: "Go",
          badge: "14-day free trial",
          studentsLimit: "Up to 25 students",
          coursesLimit: "Up to 2 active courses",
          liveHours: "6 hrs/mo (up to 12 people/session)",
          recordingInfo: "Audio recording only (3 hrs/mo)",
          storageInfo: "2 GB encrypted Cloudflare R2 storage",
          features: [
            "Custom subdomain ({slug}.bilgimedu.uz)",
            "Payme, Click, Uzcard, Humo checkout",
            "Homework submission & grading",
            "Gamification (XP, Streak, Badges)",
            "Telegram bot notifications",
          ],
        },
        {
          id: "pro",
          name: "Pro",
          badge: "Most Popular",
          popular: true,
          studentsLimit: "Up to 100 students",
          coursesLimit: "Up to 8 active courses",
          liveHours: "25 hrs/mo (up to 25 people/session)",
          recordingInfo: "Audio recording (20 hrs/mo)",
          storageInfo: "20 GB encrypted Cloudflare R2 storage",
          features: [
            "All Go plan features included",
            "Revenue & student engagement analytics",
            "Export student database to Excel/PDF",
            "Teacher referral discount (25% for 1 mo)",
            "Priority technical support",
          ],
        },
        {
          id: "max",
          name: "Max",
          badge: "For Large Academies",
          studentsLimit: "Up to 300 students",
          coursesLimit: "Unlimited courses",
          liveHours: "50 hrs/mo (up to 40 people/session)",
          recordingInfo: "Full HD Video recording (30 hrs/mo)",
          storageInfo: "60 GB encrypted Cloudflare R2 storage",
          features: [
            "All Pro plan features included",
            "HD Video recording (Egress)",
            "Custom discount vouchers & promo codes",
            "Dedicated account manager",
            "Unlimited interactive live rooms",
          ],
        },
      ],
    },
    testimonials: {
      badge: "Real Stories",
      title: "Trusted by Educators",
      subtitle: "See how teachers and experts are growing their academies on Bilgim Edu.",
    },
    faq: {
      badge: "Frequently Asked Questions",
      title: "Have Questions? We Have Answers",
      subtitle: "Our Telegram support team is always ready to assist you.",
      items: [
        {
          question: "What commission does Bilgim Edu charge on course sales?",
          answer: "0%! We never take a percentage of your revenue. You only pay a predictable flat subscription rate, and keep 100% of course sales.",
        },
        {
          question: "How are my videos protected from piracy and leaks?",
          answer: "Videos are encrypted using HLS (HTTP Live Streaming) and cannot be downloaded directly. Moreover, a dynamic watermark with the student's name, phone, and IP address moves continuously across the screen.",
        },
        {
          question: "How do I receive payments from students?",
          answer: "You simply connect your Payme or Click merchant credentials. When students purchase, funds deposit directly to your card/account and access unlocks instantly.",
        },
        {
          question: "Is there a free trial period?",
          answer: "Yes, every newly registered educator receives a 14-day fully featured trial. No credit card is required to sign up.",
        },
        {
          question: "Do I need coding or technical skills?",
          answer: "Not at all! The platform is designed specifically for non-technical educators. Uploading content is as straightforward as sending a file in a chat app.",
        },
      ],
    },
    auth: {
      loginTitle: "Sign In",
      loginSubtitle: "Enter your phone number and password to access your dashboard",
      registerTitle: "Create Your Account",
      registerSubtitle: "Launch your own online school or join courses as a student",
      forgotPasswordTitle: "Reset Password",
      roleTeacher: "Educator / Academy",
      roleTeacherDesc: "Launch a school and sell courses",
      roleStudent: "Student / Learner",
      roleStudentDesc: "Watch lessons and submit homework",
      phoneOrEmail: "Phone number or Email",
      phone: "Phone number",
      fullName: "Full Name",
      schoolName: "School or Academy Name",
      subdomain: "Your Subdomain Handle",
      password: "Password",
      confirmPassword: "Confirm Password",
      rememberMe: "Remember me",
      forgotPassword: "Forgot password?",
      loginBtn: "Sign In",
      registerTeacherBtn: "Create School (14 Days Free)",
      registerStudentBtn: "Register as Student",
      noAccount: "Don't have an account?",
      hasAccount: "Already have an account?",
      signUpNow: "Sign up",
      signInNow: "Sign in",
      termsAgreement: "By registering, you agree to our Terms of Service",
      trialBadge: "14-day full free trial • No card required",
    },
    footer: {
      about: "The 0% commission online school platform built for independent educators and subject matter experts.",
      copyright: "All rights reserved.",
      madeForTeachers: "Crafted with dedication for educators across Uzbekistan.",
    },
  },
};
