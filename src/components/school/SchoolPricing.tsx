import React from 'react';
import { Check, Sparkles, ShieldCheck, ArrowRight } from 'lucide-react';
import { ThemeMode, SchoolLandingData, SchoolPricingPlan } from '../../types';

interface SchoolPricingProps {
  school: SchoolLandingData;
  theme: ThemeMode;
  onOpenEnroll: (plan?: SchoolPricingPlan) => void;
}

export const SchoolPricing: React.FC<SchoolPricingProps> = ({
  school,
  theme,
  onOpenEnroll,
}) => {
  const isDark = theme === 'dark';

  return (
    <section 
      id="pricing"
      className="py-16 sm:py-24 border-b transition-colors"
      style={{
        backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
        borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
        color: isDark ? '#F5F4F0' : '#1F1A12',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div 
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3"
            style={{
              backgroundColor: isDark ? 'rgba(108, 99, 255, 0.12)' : 'rgba(181, 85, 31, 0.08)',
              color: isDark ? '#6C63FF' : '#B5551F',
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Tariflar & To'lov Rejalari</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight mb-3">
            Shaffof va Qulay To'lov Turlari
          </h2>
          <p className="text-sm sm:text-base opacity-75">
            O'zingizga qulay formatni tanlang. Hech qanday yashirin to'lovlar yoki kutilmagan xarajatlarsiz.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {school.pricingPlans.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div 
                key={plan.id}
                className="p-7 sm:p-8 rounded-3xl border shadow-sm relative flex flex-col justify-between transition-transform hover:-translate-y-1"
                style={{
                  backgroundColor: isPopular 
                    ? (isDark ? '#161622' : '#E6DFCFA0') 
                    : (isDark ? '#12121A' : '#EDE7DA'),
                  borderColor: isPopular 
                    ? (isDark ? '#6C63FF' : '#B5551F') 
                    : (isDark ? '#232332' : 'rgba(31, 26, 18, 0.12)'),
                  borderWidth: isPopular ? '2px' : '1px',
                }}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div 
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[11px] font-bold text-white shadow-md flex items-center gap-1 tracking-wide"
                    style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
                  >
                    <Sparkles className="w-3 h-3" />
                    <span>Eng Ommabop Tanlov</span>
                  </div>
                )}

                <div className="space-y-5">
                  <div>
                    <h3 className="font-display font-bold text-xl mb-1">
                      {plan.title}
                    </h3>
                    <p className="text-xs opacity-70">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div>
                    <div className="flex items-baseline gap-1">
                      <span className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
                        {plan.price}
                      </span>
                      <span className="text-xs opacity-60 font-sans">
                        {plan.period}
                      </span>
                    </div>
                  </div>

                  <div className="h-px opacity-15 bg-current" />

                  {/* Features list */}
                  <ul className="space-y-3 text-xs sm:text-sm">
                    {plan.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div 
                          className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-white"
                          style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
                        >
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="opacity-85 leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA */}
                <div className="pt-6">
                  <button
                    onClick={() => onOpenEnroll(plan)}
                    className="w-full py-3.5 rounded-xl font-bold text-xs sm:text-sm shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
                    style={
                      isPopular
                        ? { backgroundColor: isDark ? '#6C63FF' : '#B5551F', color: '#FFFFFF' }
                        : { 
                            borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.18)', 
                            borderWidth: '1px',
                            backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(31, 26, 18, 0.04)' 
                          }
                    }
                  >
                    <span>Ushbu Tarifni Tanlash</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div 
          className="mt-12 max-w-2xl mx-auto p-4 rounded-2xl border text-center flex items-center justify-center gap-3 text-xs opacity-80"
          style={{
            backgroundColor: isDark ? '#12121A' : '#EDE7DA',
            borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
          }}
        >
          <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
          <span>
            <strong>100% Xavfsiz:</strong> Darslar boshlanganidan so'ng 14 kun ichida agar kurs sizga mos kelmasa, sarflangan mablag' to'liq qaytarib beriladi.
          </span>
        </div>

      </div>
    </section>
  );
};
