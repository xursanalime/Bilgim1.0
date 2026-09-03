import { SchoolLandingData, SchoolWizardData } from '../types';

export const DEMO_SCHOOLS: Record<string, SchoolLandingData> = {
  apex: {
    slug: 'apex',
    name: 'Apex Software Academy',
    tagline: 'Xalqaro IT kompaniyalar talablariga mos dasturchilar tayyorlash maktabi',
    field: 'Dasturlash va IT texnologiyalar',
    timezone: 'Asia/Tashkent (UTC+05:00)',
    teacherName: 'Sanjar Karimov',
    teacherRole: 'Senior Full-Stack Engineer, Ex-EPAM, 9 yillik dasturlash tajribasi',
    teacherBio: '9 yillik tijoriy tajribaga ega dasturchi. AQSh va Yevropa fintech startaplarida yetakchi muhandis bo\'lib ishlaganman. 400 dan ortiq shogirdlarim O\'zbekiston va xalqaro kompaniyalarda muvaffaqiyatli faoliyat yuritmoqda.',
    teacherExperience: '9+ yil',
    teacherStudentsCount: '1,450+',
    teacherRating: '4.96 / 5.0',
    heroPromise: 'Nazariyadan charchadingizmi? Real production loyihalar qurib, 6 oyda kuchli muhandis bo\'ling.',
    heroSubtext: 'Har bir kod qatori kod-revyu qilinadi, har hafta jonli mentorlik sessiyalari va portfolio uchun 4 ta yirik real-world loyiha.',
    previewVideoTitle: 'Apex Academy metodikasi va darslar jarayoni haqida 3 daqiqalik video-murojaat',
    forWhom: [
      "Dasturlash asoslarini bilgan va noldan kuchli Junior/Middle darajasiga chiqmoqchi bo'lganlar",
      "YouTube va tarqoq videolardan charchab, qat'iy intizom va tizimli mentorlik qidirayotganlar",
      "Xalqaro masofaviy (remote) yoki mahalliy yirik IT kompaniyalariga ishga kirishni maqsad qilganlar",
      "Haqiqiy loyihalar arxitekturasi va clean code yozishni o'rganmoqchi bo'lganlar"
    ],
    notForWhom: [
      "Kuniga kamida 2-3 soat amaliyot qilishga vaqti yoki xohishi bo'lmaganlar",
      "Bir haftada o'z-o'zidan 'senior' bo'lib qolishga ishonadigan xomxayollar",
      "Uy vazifalarini bajarmasdan faqat passiv tomoshabin bo'lib o'tirmoqchi bo'lganlar"
    ],
    courses: [
      {
        id: 'apex-react-ts',
        title: 'Production React 19 & TypeScript Architecture',
        description: 'Mukammal darajadagi React: Server Components, Zustand, TanStack Query, Tailwind va keng ko\'lamli loyihalar arxitekturasi.',
        priceMonth: "490,000 so'm",
        priceTotal: "2,450,000 so'm",
        duration: '5 oy (60 ta dars)',
        format: 'Video darslar + Jonli Code Review + Telegram yopiq guruh',
        level: "O'rta (Intermediate)",
        badge: 'Eng Ommabop',
        modulesCount: 8,
        lessonsCount: 64,
        curriculum: [
          'TypeScript chuqur o\'rganish va Generic turlar',
          'React 19 Hooks, Suspense va Concurrency',
          'Global State Management (Zustand & Context)',
          'Server State & Caching (TanStack React Query v5)',
          'Full Stack REST & GraphQL integratsiyalari',
          'Production deploy, Docker & CI/CD pipeline'
        ]
      },
      {
        id: 'apex-node-backend',
        title: 'Scalable Node.js & PostgreSQL Backend Engineering',
        description: 'Microservices, Docker, Redis caching, Prisma/Drizzle ORM va xavfsiz JWT/OAuth autentifikatsiya tizimlari.',
        priceMonth: "550,000 so'm",
        priceTotal: "2,750,000 so'm",
        duration: '5 oy (55 ta dars)',
        format: 'Video darslar + Jonli arxitektura tahlillari',
        level: "Ilg'or (Advanced)",
        badge: 'Kuchli Mutaxassislik',
        modulesCount: 7,
        lessonsCount: 56,
        curriculum: [
          'Node.js Event Loop va asinxron arxitektura',
          'PostgreSQL relatsion ma\'lumotlar bazasi optimizatsiyasi',
          'Prisma & Drizzle ORM, Migrations & Transactions',
          'Redis Cache, BullMQ navbatlar va cron vazifalar',
          'Docker containerization va AWS/DigitalOcean VPS deploy'
        ]
      },
      {
        id: 'apex-algorithms',
        title: 'Ma\'lumotlar Tuzilmasi & Algoritmlar (LeetCode Master)',
        description: 'Katta IT kompaniyalar (EPAM, Toptal, Yandex) texnik suhbatlaridan muvaffaqiyatli o\'tish uchun intensiv kurs.',
        priceMonth: "390,000 so'm",
        priceTotal: "1,560,000 so'm",
        duration: '4 oy (40 ta dars)',
        format: 'Amaliy yechimlar + Algoritmik duel sessiyalari',
        level: 'Barcha darajalar uchun',
        modulesCount: 6,
        lessonsCount: 48,
        curriculum: [
          'Big O tahlili va vaqt/xotira murakkabligi',
          'Massivlar, Two Pointers va Sliding Window texnikalari',
          'LinkedList, Stack va Queue amaliyotlari',
          'Daraxtlar (Trees) va Graf (Graphs) algoritmlari',
          'Dinamik Dasturlash (Dynamic Programming) sirlari'
        ]
      }
    ],
    testimonials: [
      {
        id: 't-1',
        studentName: 'Bobur Mirzayev',
        achievement: 'Hozirda EPAM Systems Junior Front-end muhandisi',
        comment: 'Sanjar akaning kursida eng yoqqan narsa — har bir uy vazifasi GitHub orqali pull request sifatida tekshirilishi bo\'ldi. Xuddi haqiqiy kompaniyada ishlayotgandek tajriba oldim.',
        avatar: 'BM',
        rating: 5,
        date: '2 hafta oldin'
      },
      {
        id: 't-2',
        studentName: 'Madina Usmonova',
        achievement: 'Fintech kompaniyada Middle React dasturchi',
        comment: 'Nazariy videolarni hamma joydan topsa bo\'ladi, lekin arxitekturaviy fikrlashni va state management muammolarini hal qilishni faqat Apex darslarida to\'liq tushundim.',
        avatar: 'MU',
        rating: 5,
        date: '1 oy oldin'
      },
      {
        id: 't-3',
        studentName: 'Jasur Beknazarov',
        achievement: 'Upwork Top Rated Freelancer ($3,000+/oy)',
        comment: 'Kursda o\'rgatilgan TypeScript va Docker ko\'nikmalari tufayli xorijiy mijozlarga professional xizmat ko\'rsata boshladim. Puliga 200% arziydi.',
        avatar: 'JB',
        rating: 5,
        date: '1 oy oldin'
      }
    ],
    pricingPlans: [
      {
        id: 'standard',
        title: 'Standart Rejim',
        price: "490,000 so'm",
        period: '/ oy',
        description: 'Mustaqil o\'rganish va jamoaviy muhit uchun mukammal variant.',
        features: [
          'Barcha video darslarga umrbod kirish',
          'Yopiq Telegram hamjamiyat',
          'Har haftalik umumiy savol-javob jonli efiri',
          'Barcha resurslar va GitHub kod omborlari',
          'Yakuniy bitiruv sertifikati'
        ]
      },
      {
        id: 'mentor',
        title: 'Pro Mentorlik',
        price: "790,000 so'm",
        period: '/ oy',
        popular: true,
        description: 'Shaxsiy ustoz nazorati va har bir loyihangiz bo\'yicha batafsil video-revyu.',
        features: [
          'Standart rejimdagi barcha imkoniyatlar',
          'Har bir uy vazifasiga shaxsiy GitHub Code Review',
          'Haftasiga 1 marta yakkama-yakka Zoom uchrashuv',
          'Rezyume va LinkedIn profilni tayyorlash',
          'Mock texnik intervyu sinovi',
          'Tavsiyanoma va rezyumeni IT kompaniyalarga uzatish'
        ]
      },
      {
        id: 'full-pay',
        title: 'To\'liq Kurs (Bir martalik)',
        price: "2,190,000 so'm",
        period: 'bir martalik (-20%)',
        description: 'Barcha oylarni oldindan to\'lab, 20% gacha tejab qoling.',
        features: [
          'Pro Mentorlikning barcha imtiyozlari',
          'Barcha qo\'shimcha bonus darslar',
          '14 kunlik to\'liq to\'lov qaytarish kafolati',
          'Eksklyuziv loyihalar shablonlari'
        ]
      }
    ],
    faqs: [
      {
        question: 'Darslar qanday formatda bo\'ladi?',
        answer: 'Darslar sifatli yozib olingan amaliy video darslar, tushuntirish fayllari va real kod topshiriqlari ko\'rinishida bo\'ladi. O\'zingizga qulay vaqtda ko\'rib, topshiriqlarni yuklaysiz.'
      },
      {
        question: 'Agar tushunmay qolsam, savollarga kim javob beradi?',
        answer: 'Yopiq guruhimizda ustoz va yordamchi kuratorlar doimiy savollarga 15-30 daqiqa ichida javob berishadi. Har haftada esa jonli Zoom stream o\'tkaziladi.'
      },
      {
        question: 'To\'lovni bo\'lib to\'lash imkoniyati bormi?',
        answer: 'Ha, kurs uchun oylik to\'lov qilish mumkin. Hech qanday bank krediti yoki ortiqcha foizsiz, har oy bosqichma-bosqich to\'lab borasiz.'
      },
      {
        question: 'Kurs tugagach sertifikat beriladimi?',
        answer: 'Ha, barcha amaliy vazifalarni va yakuniy bitiruv loyihasini muvaffaqiyatli topshirgan talabalarga QR-kodli tekshiriluvchi rasmiy sertifikat taqdim etiladi.'
      }
    ],
    telegramChannel: '@apex_academy_uz'
  },

  'ielts-zone': {
    slug: 'ielts-zone',
    name: 'IELTS 8.5 Masterclass Academy',
    tagline: 'Akademik ingliz tili va IELTS imtihonlaridan maksimal ball olish tizimi',
    field: 'IELTS, CEFR va xalqaro imtihonlar',
    timezone: 'Asia/Tashkent (UTC+05:00)',
    teacherName: 'Dilshodbek Rustamov',
    teacherRole: 'IELTS 9.0 (Writing 8.5), CELTA sertifikatli bosh instruktor',
    teacherBio: '11 yillik tajribaga ega xalqaro darajadagi repetitor. Britaniya Kengashi tomonidan akkreditatsiyadan o\'tgan. 800+ o\'quvchim IELTS 7.5 va undan yuqori natijalar bilan Buyuk Britaniya, AQSh va Yevropa universitetlariga grant asosida qabul qilingan.',
    teacherExperience: '11+ yil',
    teacherStudentsCount: '2,800+',
    teacherRating: '4.98 / 5.0',
    heroPromise: 'Writing va Speaking bo\'yicha 7.5+ ball olishingiz uchun aniq akademik qoliplar va doimiy tekshiruv.',
    heroSubtext: 'Har bir inshongiz xalqaro band deskriptorlariga mos ravishda satrma-satr tahlil qilinadi va grammatik xatolar tuzatib beriladi.',
    previewVideoTitle: 'IELTS Writing Task 2 da eng ko\'p qilinadigan 5 xato (Kirish darsi)',
    forWhom: [
      "IELTS balli 6.0-6.5 da qotib qolgan va 7.5-8.0 ga sakrashni istaganlar",
      "Xorijiy nufuzli universitetlarga to'liq grant yutmoqchi bo'lgan talabalar",
      "Writing da g'oyalar yetishmovchiligi va grammatik turg'unlikka uchraganlar",
      "Speaking da ravon va tabiiy akademik leksika bilan gapirishni istaganlar"
    ],
    notForWhom: [
      "Ingliz tili boshlang'ich (Elementary/Pre-Intermediate) darajasida bo'lganlar",
      "Insholarni o'z vaqtida yozib topshirmaydigan va leksikani takrorlamaydiganlar"
    ],
    courses: [
      {
        id: 'ielts-writing-mastery',
        title: 'IELTS Writing Task 1 & Task 2: Band 8.5 Strategy',
        description: 'Akademik reportlar, esse turlari, murakkab grammatik strukturalar va 20 ta shaxsiy insho tekshiruvi.',
        priceMonth: "450,000 so'm",
        priceTotal: "1,350,000 so'm",
        duration: '3 oy (36 ta dars)',
        format: 'Video tahlillar + 20 ta insho yozma tekshiruvi',
        level: "B2 - C1 (Intermediate+)",
        badge: 'Eng Samarali',
        modulesCount: 6,
        lessonsCount: 36,
        curriculum: [
          'Task 2: Agree/Disagree va Discussion insholar formulasi',
          'Task 2: Problem/Solution va Two-part savollar',
          'Task 1: Grafika, jadval va xaritalarni tasvirlash sirlari',
          'Cohesion & Coherence: 8.0 darajadagi bog\'lovchilar',
          'Lexical Resource: Mavzuli akademik kollokatsiyalar'
        ]
      },
      {
        id: 'ielts-speaking-fluency',
        title: 'IELTS Speaking Band 8.0: Fluency & Idiomatic Language',
        description: 'Part 1, 2 va 3 bo\'yicha real imtihon savollari tahlili va jonli audio-tahlillar.',
        priceMonth: "380,000 so'm",
        priceTotal: "1,140,000 so'm",
        duration: '3 oy (30 ta dars)',
        format: 'Audio tahlillar + Haftalik Speaking Clubs',
        level: 'B2 - C1',
        modulesCount: 5,
        lessonsCount: 30,
        curriculum: [
          'Part 1: Qisqa, tabiiy va boy javob berish usullari',
          'Part 2: 1 daqiqada reja tuzish va 2 daqiqa to\'xtovsiz gapirish',
          'Part 3: Chuqur falsafiy va ijtimoiy tahlil qilish strategiyasi',
          'Talaffuz va intonatsiya: Accent emas, ravonlik'
        ]
      }
    ],
    testimonials: [
      {
        id: 't-ielts-1',
        studentName: 'Nodira Qodirova',
        achievement: 'IELTS Overall 8.0 (Writing 7.5, Speaking 8.0)',
        comment: 'Dilshod aka har bir inshoyimni shunday chuqur tahlil qildiki, qayerda o\'rinsiz so\'z ishlatganimni darhol angladim. Natijada Cambridge universitetiga qabul olindi!',
        avatar: 'NQ',
        rating: 5,
        date: '3 hafta oldin'
      },
      {
        id: 't-ielts-2',
        studentName: 'Shoxruh Karimov',
        achievement: 'IELTS Overall 7.5 (Avval 6.0 edi)',
        comment: 'Atigi 2 oy ichida ballimni 1.5 ballga ko\'tardim. Eng asosiysi shablon yodlash emas, inglizcha to\'g\'ri fikrlashni o\'rgandim.',
        avatar: 'SK',
        rating: 5,
        date: '1 oy oldin'
      }
    ],
    pricingPlans: [
      {
        id: 'ielts-self',
        title: 'Mustaqil Rejim',
        price: "350,000 so'm",
        period: '/ oy',
        description: 'Barcha video tahlillar va namunaviy 8.5 balli insholar to\'plami.',
        features: [
          'Barcha videodarslarga to\'liq kirish',
          '100+ namunaviy Band 8.5 insholar bazasi',
          'Telegram muhokama guruhi',
          'Lug\'at va kollokatsiyalar lug\'atnomasi'
        ]
      },
      {
        id: 'ielts-pro',
        title: 'Shaxsiy Insho Tekshiruvi',
        price: "590,000 so'm",
        period: '/ oy',
        popular: true,
        description: 'Har haftalik insholarni satrma-satr baholash va ovozli fikr-mulohazalar.',
        features: [
          'Barcha videodarslar va materiallar',
          'Oyiga 8 ta inshoni yozma va ovozli tekshiruv',
          'Haftalik jonli Speaking Club sessiyasi',
          'To\'liq Mock Test va ball prognozi'
        ]
      }
    ],
    faqs: [
      {
        question: 'Darslar kimlar uchun mo\'ljallangan?',
        answer: 'Kurs kamida Intermediate (B1-B2) darajadagi o\'quvchilar uchun mo\'ljallangan. Boshlang\'ich darajadagilar uchun darslar qiyinlik qilishi mumkin.'
      },
      {
        question: 'Insholarimni qancha vaqtda tekshirib berasiz?',
        answer: 'Yuklangan har bir insho 24-48 soat ichida shaxsan ustoz tomonidan batafsil tahlil qilinadi.'
      }
    ],
    telegramChannel: '@ielts_zone_official'
  }
};

/**
 * Helper to get or generate school landing data for any slug
 */
export function getSchoolBySlug(
  slug: string, 
  userSchool?: SchoolWizardData,
  currentTeacherName?: string
): SchoolLandingData {
  const cleanSlug = slug.toLowerCase().trim();

  // 1. If it's a predefined demo school
  if (DEMO_SCHOOLS[cleanSlug]) {
    return DEMO_SCHOOLS[cleanSlug];
  }

  // 2. If it matches user's customized school
  if (userSchool && userSchool.slug === cleanSlug) {
    return {
      slug: userSchool.slug,
      name: userSchool.name,
      tagline: `${userSchool.field} bo'yicha zamonaviy va tizimli onlayn maktab`,
      field: userSchool.field,
      timezone: userSchool.timezone,
      teacherName: currentTeacherName || 'Muallif va Bosh O\'qituvchi',
      teacherRole: `${userSchool.field} bo'yicha amaliyotchi mutaxassis va ustoz`,
      teacherBio: `O'z sohasida ko'p yillik amaliy tajribaga ega ustoz. Talabalarga sifatli va natijador ta'lim berish maqsadida shaxsiy onlayn maktab ochgan.`,
      teacherExperience: '5+ yil',
      teacherStudentsCount: '320+',
      teacherRating: '4.95 / 5.0',
      heroPromise: `Eng yangi metodika orqali ${userSchool.field}ni qisqa muddatda professional darajada o'rganing.`,
      heroSubtext: 'Tizimli darslar, amaliy topshiriqlar, ustozdan individual fikr-mulohazalar va rasmiy sertifikat.',
      previewVideoTitle: `${userSchool.name} o'quv dasturi va o'qitish tartibi haqida video`,
      forWhom: [
        `${userSchool.field} sohasida mustahkam bilim va real ko'nikmalarga ega bo'lishni xohlovchilar`,
        "Nazariya bilan cheklanmasdan amaliy loyihalar ustida ishlashni istaganlar",
        "O'z daromadini va kasbiy salohiyatini oshirishni maqsad qilgan intiluvchan insonlar"
      ],
      notForWhom: [
        "Vazifalarni bajarmasdan shunchaki darslarni kuzatib o'tirmoqchi bo'lganlar",
        "Kuniga mustaqil shug'ullanish uchun vaqt ajrata olmaydiganlar"
      ],
      courses: [
        {
          id: `${cleanSlug}-course-1`,
          title: `${userSchool.field}: Noldan Professionalgacha`,
          description: "Sohaning barcha asoslari, ilg'or texnikalari va real amaliy loyihalari jamlangan to'liq kurs.",
          priceMonth: "390,000 so'm",
          priceTotal: "1,950,000 so'm",
          duration: '4 oy (48 ta dars)',
          format: 'Video darslar + Jonli savol-javob + Shaxsiy mentorlik',
          level: 'Boshlang\'ichdan yuqorigacha',
          badge: 'Bosh Dastur',
          modulesCount: 6,
          lessonsCount: 48,
          curriculum: [
            'Sohaga kirish va poydevor tushunchalar',
            'Asosiy amaliy vositalar va texnologiyalar bilan ishlash',
            'O\'rta darajadagi amaliy topshiriqlar va keyslar',
            'Murakkab loyihalar va portfolio shakllantirish',
            'Bozorda o\'z o\'rnini topish va daromadga chiqish'
          ]
        },
        {
          id: `${cleanSlug}-course-2`,
          title: 'Tezlashtirilgan Intensiv Amaliyot',
          description: 'Qisqa vaqt ichida eng muhim ko\'nikmalarni egallash uchun 6 haftalik master-kurs.',
          priceMonth: "450,000 so'm",
          priceTotal: "900,000 so'm",
          duration: '6 hafta (24 ta dars)',
          format: 'Har haftalik jonli darslar va vazifalar tekshiruvi',
          level: 'O\'rta daraja',
          badge: 'Intensiv',
          modulesCount: 4,
          lessonsCount: 24,
          curriculum: [
            'Intensiv keyslar tahlili',
            'Tezkor topshiriqlar va amaliy sinovlar',
            'Yakka tartibdagi mentorlik tavsiyalari'
          ]
        }
      ],
      testimonials: [
        {
          id: 'test-user-1',
          studentName: 'Otabek Yoqubov',
          achievement: 'Kursni tamomlab, yangi loyihalarni boshladi',
          comment: 'Darslar juda aniq, tushunarli va keraksiz suvlarsiz tayyorlangan. Har bir darsdan so\'ng yangi ko\'nikma hosil bo\'ladi.',
          avatar: 'OY',
          rating: 5,
          date: '1 hafta oldin'
        },
        {
          id: 'test-user-2',
          studentName: 'Nilufar Salimova',
          achievement: 'O\'z yo\'nalishida natijalarini 2 barobarga oshirdi',
          comment: 'Ustozning shaxsiy e\'tibori va vazifalarni o\'z vaqtida tekshirib berishi o\'qishga bo\'lgan ishtiyoqimni yanada oshirdi.',
          avatar: 'NS',
          rating: 5,
          date: '3 hafta oldin'
        }
      ],
      pricingPlans: [
        {
          id: 'plan-basic',
          title: 'Standart Tarif',
          price: "390,000 so'm",
          period: '/ oy',
          description: 'Barcha video darslar va materiallarga kirish huquqi.',
          features: [
            'Barcha darslarga umrbod kirish',
            'O\'quvchilar yopiq guruhi',
            'Topshiriqlar va qo\'shimcha materiallar',
            'Yakuniy sertifikat'
          ]
        },
        {
          id: 'plan-pro',
          title: 'Ustoz Bilan (Mentorlik)',
          price: "650,000 so'm",
          period: '/ oy',
          popular: true,
          description: 'Shaxsiy ustoz nazorati, haftalik jonli efirlar va vazifalar revyusi.',
          features: [
            'Standart tarifdagi barcha imkoniyatlar',
            'Barcha vazifalarni shaxsan tekshirish',
            'Haftalik jonli Zoom darslar',
            'Shaxsiy tavsiyalar va konsultatsiya'
          ]
        }
      ],
      faqs: [
        {
          question: 'Darslar qanday tartibda o\'tiladi?',
          answer: 'Darslar platformada video formatda joylashtiriladi va haftada belgilangan vaqtda jonli master-klasslar o\'tkaziladi.'
        },
        {
          question: 'Natijaga erisha olmasam nima bo\'ladi?',
          answer: 'Agar barcha vazifalarni to\'liq bajarib, natija ololmasangiz, 14 kun ichida mablag\'ingiz to\'liq qaytarib beriladi.'
        }
      ]
    };
  }

  // 3. Fallback for any other dynamically visited slug
  const titleSlug = cleanSlug.charAt(0).toUpperCase() + cleanSlug.slice(1);
  return {
    slug: cleanSlug,
    name: `${titleSlug} Onlayn Maktabi`,
    tagline: 'BilgimEdu platformasidagi shaxsiy ta\'lim maktabi',
    field: 'Zamonaviy kasblar va mutaxassislik',
    timezone: 'Asia/Tashkent (UTC+05:00)',
    teacherName: `${titleSlug} Murabbiyi`,
    teacherRole: 'Katta Tajribaga Ega Mutaxassis',
    teacherBio: 'O\'z sohasida yuqori natijalarga erishgan amaliyotchi mutaxassis. BilgimEdu platformasida yuzlab o\'quvchilarga ta\'lim berib kelmoqda.',
    teacherExperience: '6+ yil',
    teacherStudentsCount: '500+',
    teacherRating: '4.94 / 5.0',
    heroPromise: 'Noldan professional darajagacha tizimli va sifatli o\'rganing.',
    heroSubtext: 'Video darslar, amaliy vazifalar, mentorlik va rasmiy sertifikat.',
    previewVideoTitle: 'Maktabimiz ta\'lim tizimi va o\'quv rejalari',
    forWhom: [
      "Sohani mustaqil o'rganishdan charchab, aniq ustoz qidirayotganlar",
      "Amaliy tajriba va mustahkam portfolio yaratmoqchi bo'lganlar"
    ],
    notForWhom: [
      "Amaliy topshiriqlarni o'z vaqtida bajarmaydiganlar"
    ],
    courses: [
      {
        id: `${cleanSlug}-c1`,
        title: `${titleSlug} Asosiy Kursi`,
        description: 'Sohani chuqur va amaliy o\'rganish uchun mo\'ljallangan kompleks dastur.',
        priceMonth: "390,000 so'm",
        priceTotal: "1,560,000 so'm",
        duration: '4 oy',
        format: 'Video darslar + Amaliy vazifalar',
        level: 'Barcha darajalar',
        badge: 'Asosiy',
        modulesCount: 5,
        lessonsCount: 40,
        curriculum: [
          'Kirish va fundamental bilimlar',
          'Amaliy ko\'nikmalar va instrumentlar',
          'Real keyslar va diplom loyihasi'
        ]
      }
    ],
    testimonials: [
      {
        id: 'gen-t-1',
        studentName: 'Farrux Aliyev',
        achievement: 'Kurs bitiruvchisi',
        comment: 'Darslar juda sodda tilda va tushunarli qilib yoritilgan. Tavsiya qilaman!',
        avatar: 'FA',
        rating: 5,
        date: 'Yaqinda'
      }
    ],
    pricingPlans: [
      {
        id: 'gen-p-1',
        title: 'Standart',
        price: "390,000 so'm",
        period: '/ oy',
        popular: true,
        description: 'Barcha darslar va yopiq guruhga kirish.',
        features: [
          'Darslarga umrbod kirish',
          'Vazifalar tekshiruvi',
          'Guruhda savol-javob'
        ]
      }
    ],
    faqs: [
      {
        question: 'Darslar qachon boshlanadi?',
        answer: 'Ro\'yxatdan o\'tishingiz bilanoq birinchi darsga kirish ochiladi.'
      }
    ]
  };
}
