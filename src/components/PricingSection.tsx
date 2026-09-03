import React from 'react';
import { Check, Sparkles, HelpCircle } from 'lucide-react';
import { PRICING_PLANS } from '../data/landingData';
import { ThemeMode } from '../types';

interface PricingSectionProps {
  theme: ThemeMode;
  onOpenCreateSchool: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ theme, onOpenCreateSchool }) => {
  const isDark = theme === 'dark';

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 border-t bg-grid-pattern"
      style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.08)' }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span 
            className="text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full border mb-3 inline-block"
            style={{
              backgroundColor: isDark ? '#12121A' : '#EDE7DA',
              borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
              color: isDark ? '#6C63FF' : '#B5551F',
            }}
          >
            Shaffof Tariflar
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight mb-4"
            style={{ color: isDark ? '#F6F2EA' : '#1F1A12' }}
          >
            Oddiy va tushunarli{' '}
            <span className="italic font-normal" style={{ color: isDark ? '#6C63FF' : '#B5551F' }}>
              narxlar
            </span>
          </h2>
          <p className="text-sm sm:text-base opacity-75">
            Dollar kursiga bog'liq bo'lmagan, so'mda qat'iy belgilangan oylik tariflar. 
            Hech qanday yashirin to'lovlar yo'q.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-12">
          
          {PRICING_PLANS.map((plan) => {
            const isPro = plan.popular;

            return (
              <div 
                key={plan.id}
                className={`relative rounded-3xl p-8 border flex flex-col justify-between transition-all duration-300 ${
                  isPro 
                    ? 'shadow-xl scale-100 lg:-translate-y-2 ring-2' 
                    : 'shadow-sm hover:shadow-md'
                }`}
                style={{
                  backgroundColor: isDark ? '#12121A' : '#EDE7DA',
                  borderColor: isPro 
                    ? (isDark ? '#6C63FF' : '#B5551F') 
                    : (isDark ? '#232332' : 'rgba(31, 26, 18, 0.12)'),
                }}
              >
                {/* Popular Pill Badge */}
                {isPro && (
                  <div 
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white shadow-md flex items-center gap-1.5"
                    style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>ENG OMMABOP</span>
                  </div>
                )}

                <div>
                  {/* Title & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display font-bold text-2xl"
                      style={{ color: isDark ? '#F6F2EA' : '#1F1A12' }}
                    >
                      {plan.name}
                    </h3>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-full opacity-80 border"
                      style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.2)' }}
                    >
                      {plan.badge}
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className="font-display font-black text-4xl sm:text-5xl tracking-tight"
                        style={{ color: isDark ? '#6C63FF' : '#B5551F' }}
                      >
                        {plan.priceMonth}
                      </span>
                      <span className="text-sm opacity-60 font-semibold">so'm / oy</span>
                    </div>
                    {plan.id === 'go' && (
                      <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1">
                        Dastlabki 14 kun mutlaqo bepul
                      </p>
                    )}
                  </div>

                  {/* Limits summary list */}
                  <div className="p-4 rounded-xl mb-6 space-y-2 text-xs font-medium border"
                    style={{
                      backgroundColor: isDark ? 'rgba(255, 255, 255, 0.02)' : 'rgba(0, 0, 0, 0.02)',
                      borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.08)',
                    }}
                  >
                    <div className="flex justify-between">
                      <span className="opacity-70">Talabalar hajmi:</span>
                      <strong className="font-semibold">{plan.studentsLimit}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-70">Faol kurslar:</span>
                      <strong className="font-semibold">{plan.coursesLimit}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-70">Jonli efir:</span>
                      <strong className="font-semibold">{plan.liveHours}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-70">Dars yozib olish:</span>
                      <strong className="font-semibold">{plan.recordingInfo}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-70">Fayl/Video joyi:</span>
                      <strong className="font-semibold">{plan.storageInfo}</strong>
                    </div>
                  </div>

                  {/* Feature Checks */}
                  <div className="space-y-3 text-sm mb-8">
                    {plan.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="opacity-80 text-xs sm:text-sm">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <button
                  onClick={onOpenCreateSchool}
                  className="w-full py-3.5 rounded-xl font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] shadow-sm cursor-pointer"
                  style={{
                    backgroundColor: isPro 
                      ? (isDark ? '#6C63FF' : '#B5551F') 
                      : (isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)'),
                    color: isPro ? '#FFFFFF' : (isDark ? '#F6F2EA' : '#1F1A12'),
                  }}
                >
                  {plan.id === 'go' ? '14 Kun Bepul Boshlash' : `${plan.name} Rejasini Tanlash`}
                </button>

              </div>
            );
          })}

        </div>

        {/* Transparency note from docs/05 */}
        <div className="p-6 rounded-2xl border text-center max-w-2xl mx-auto text-xs sm:text-sm opacity-80 space-y-1"
          style={{
            backgroundColor: isDark ? '#12121A' : '#EDE7DA',
            borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
          }}
        >
          <div className="flex items-center justify-center gap-1.5 font-bold mb-1"
            style={{ color: isDark ? '#6C63FF' : '#B5551F' }}
          >
            <HelpCircle className="w-4 h-4" />
            <span>To'lov va Xavfsizlik Kafolati:</span>
          </div>
          <p>
            Payme va Click kirish komissiyalari hamda bank o'tkazma chiqish komissiyalari 
            <strong> to'liq Bilgim tomonidan qoplanadi</strong>. Sizga to'liq belgilangan summa yetib boradi.
          </p>
        </div>

      </div>
    </section>
  );
};
