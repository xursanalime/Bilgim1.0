import React from 'react';
import { CheckCircle2, XCircle, Filter } from 'lucide-react';
import { ThemeMode, SchoolLandingData } from '../../types';

interface SchoolAudienceProps {
  school: SchoolLandingData;
  theme: ThemeMode;
}

export const SchoolAudience: React.FC<SchoolAudienceProps> = ({ school, theme }) => {
  const isDark = theme === 'dark';

  return (
    <section 
      id="audience"
      className="py-16 sm:py-20 border-b transition-colors"
      style={{
        backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
        borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
        color: isDark ? '#F5F4F0' : '#1F1A12',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div 
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3"
            style={{
              backgroundColor: isDark ? 'rgba(108, 99, 255, 0.12)' : 'rgba(181, 85, 31, 0.08)',
              color: isDark ? '#6C63FF' : '#B5551F',
            }}
          >
            <Filter className="w-3.5 h-3.5" />
            <span>Tanlov va Saralash</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight mb-3">
            Ushbu maktab kimlar uchun mos va kimlar uchun emas?
          </h2>
          <p className="text-sm sm:text-base opacity-75">
            Biz har bir talabaning vaqti va sarmoyasini qadrlaymiz. Shuning uchun o'quv dasturimiz barchaga ham to'g'ri kelmasligi mumkinligini ochiq aytamiz.
          </p>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Kimlar uchun MOS */}
          <div 
            className="p-6 sm:p-8 rounded-3xl border shadow-sm space-y-5"
            style={{
              backgroundColor: isDark ? '#12121A' : '#EDE7DA',
              borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.12)',
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg sm:text-xl">
                  Kimlar uchun aynan mos
                </h3>
                <span className="text-xs opacity-60">
                  Ushbu sharoitlarda 100% yuqori natija kafolatlanadi
                </span>
              </div>
            </div>

            <div className="h-px opacity-15 bg-current" />

            <ul className="space-y-3.5">
              {school.forWhom.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mt-0.5 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-relaxed opacity-85">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 2: Kimlar uchun EMAS */}
          <div 
            className="p-6 sm:p-8 rounded-3xl border shadow-sm space-y-5"
            style={{
              backgroundColor: isDark ? '#12121A' : '#EDE7DA',
              borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.12)',
            }}
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-600 dark:text-rose-400 flex items-center justify-center font-bold">
                <XCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg sm:text-xl">
                  Kimlar uchun mos EMAS
                </h3>
                <span className="text-xs opacity-60">
                  Iltimos, agar bu toifaga kirsangiz, vaqtingizni sarflamang
                </span>
              </div>
            </div>

            <div className="h-px opacity-15 bg-current" />

            <ul className="space-y-3.5">
              {school.notForWhom.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-xs sm:text-sm">
                  <div className="w-4 h-4 rounded-full bg-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center justify-center mt-0.5 shrink-0">
                    <XCircle className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-relaxed opacity-85">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
