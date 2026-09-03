import React from 'react';
import { Check, X } from 'lucide-react';
import { ThemeMode } from '../types';

interface AudienceFilterProps {
  theme: ThemeMode;
}

export const AudienceFilter: React.FC<AudienceFilterProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 border-t"
      style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.08)' }}
    >
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold opacity-60">
            Shaffoflik & Samara
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mt-1 mb-3"
            style={{ color: isDark ? '#F6F2EA' : '#1F1A12' }}
          >
            Bilgim Edu kimlar uchun mos?
          </h2>
          <p className="text-sm opacity-75">
            Platformamiz har kimga mos kelmasligi mumkin — quyidagi mezonlar orqali o'zingizga to'g'ri kelishini tekshiring.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Kimlar uchun MOS */}
          <div 
            className="p-8 rounded-3xl border relative shadow-sm"
            style={{
              backgroundColor: isDark ? '#12121A' : '#EDE7DA',
              borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.12)',
            }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider mb-6">
              <Check className="w-4 h-4" />
              <span>Mukammal mos keladi:</span>
            </div>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</div>
                <div>
                  <strong className="block font-semibold">Mustaqil o'qituvchi va repetitorlar:</strong>
                  <span className="opacity-80">Ingliz tili, IELTS, matematika, dasturlash, dizayn yoki boshqa fanlardan muntazam dars o'tuvchilar.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</div>
                <div>
                  <strong className="block font-semibold">Amaliy soha mutaxassislari:</strong>
                  <span className="opacity-80">Marketing, SMM, buxgalteriya yoki hunar bo'yicha o'z tajribasini sotishni istagan ekspertlar.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</div>
                <div>
                  <strong className="block font-semibold">O'z brendini xohlaganlar:</strong>
                  <span className="opacity-80">Boshqa umumiy kurs saytlarida foiz berib yoki boshqa o'qituvchilar bilan raqobatlashib o'tirmasdan, o'z nomida maktab yuritmoqchi bo'lganlar.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✓</div>
                <div>
                  <strong className="block font-semibold">Tartib va vaqtni tejamoqchi bo'lganlar:</strong>
                  <span className="opacity-80">To'lov chekini so'rash, dars havolasini yuborish va uy ishini Telegramdan qidirishga kunini sarflamaydiganlar.</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Kimlar uchun MOS EMAS */}
          <div 
            className="p-8 rounded-3xl border relative shadow-sm opacity-90"
            style={{
              backgroundColor: isDark ? '#12121A' : '#EDE7DA',
              borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.12)',
            }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold text-xs uppercase tracking-wider mb-6">
              <X className="w-4 h-4" />
              <span>Hozircha mos kelmaydi:</span>
            </div>

            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</div>
                <div>
                  <strong className="block font-semibold">Ko'p o'qituvchili yirik o'quv markazlari:</strong>
                  <span className="opacity-80">MVP versiyamizda bitta maktabda bitta asosiy o'qituvchi ishlashi rejalashtirilgan. Katta markazlar arxitekturasi keyingi bosqichda chiqadi.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</div>
                <div>
                  <strong className="block font-semibold">Faqat 1 martalik arzimas fayl sotuvchilar:</strong>
                  <span className="opacity-80">Platforma dars berish, video tomosha qilish, jonli muloqot va uy ishi tekshirish kabi uzluksiz ta'lim jarayoni uchun mo'ljallangan.</span>
                </div>
              </li>

              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-rose-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">✕</div>
                <div>
                  <strong className="block font-semibold">HEMIS'ni to'liq almashtirmoqchi bo'lganlar:</strong>
                  <span className="opacity-80">Davlat universitetlarining rasmiy baholash tizimi o'rniga o'tmaymiz; Bilgim jonli dars va qulay LMS sifatida uni to'ldiruvchi tizimdir.</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
