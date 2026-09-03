import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Sparkles, HelpCircle } from 'lucide-react';
import { ThemeMode, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface PricingSectionProps {
  theme: ThemeMode;
  lang: Language;
  onOpenCreateSchool: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ 
  theme, 
  lang, 
  onOpenCreateSchool 
}) => {
  const isDark = theme === 'dark';
  const t = TRANSLATIONS[lang].pricing;
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');

  const getPrice = (rawPrice: number) => {
    if (billingCycle === 'annual') {
      const discounted = Math.round((rawPrice * 10) / 12);
      return new Intl.NumberFormat('uz-UZ').format(discounted);
    }
    return new Intl.NumberFormat('uz-UZ').format(rawPrice);
  };

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 border-t bg-grid-pattern"
      style={{ borderColor: isDark ? '#2C2B28' : '#E5DFD3' }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span 
            className="text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full border mb-3 inline-block"
            style={{
              backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
              borderColor: isDark ? '#2C2B28' : '#E5DFD3',
              color: isDark ? '#E28766' : '#CC5A33',
            }}
          >
            {t.badge}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight mb-4"
            style={{ color: isDark ? '#F5F4F0' : '#141413' }}
          >
            {t.title}
          </h2>
          <p className="text-sm sm:text-base opacity-75 max-w-xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Monthly / Annual Billing Switcher */}
        <div className="flex justify-center mb-16">
          <div 
            className="inline-flex items-center p-1.5 rounded-2xl border shadow-sm"
            style={{
              backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
              borderColor: isDark ? '#2C2B28' : '#E5DFD3',
            }}
          >
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                billingCycle === 'monthly' ? 'shadow-sm text-white' : 'opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor: billingCycle === 'monthly' ? (isDark ? '#E28766' : '#CC5A33') : 'transparent',
              }}
            >
              {t.monthly}
            </button>

            <button
              onClick={() => setBillingCycle('annual')}
              className={`flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                billingCycle === 'annual' ? 'shadow-sm text-white' : 'opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor: billingCycle === 'annual' ? (isDark ? '#E28766' : '#CC5A33') : 'transparent',
              }}
            >
              <span>{t.annual}</span>
              <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-500/20 text-emerald-600 dark:text-emerald-400">
                {t.twoMonthsFree}
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {t.plans.map((plan, idx) => {
            const rawPrices: Record<string, number> = {
              go: 149000,
              pro: 499000,
              max: 1299000,
            };
            const price = getPrice(rawPrices[plan.id] || 499000);

            return (
              <motion.div 
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`rounded-3xl p-8 border flex flex-col justify-between relative shadow-sm transition-all ${
                  plan.popular ? 'ring-2 ring-amber-500/40' : ''
                }`}
                style={{
                  backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
                  borderColor: plan.popular 
                    ? (isDark ? '#E28766' : '#CC5A33') 
                    : (isDark ? '#2C2B28' : '#E5DFD3'),
                }}
              >
                {/* Popular Pill Badge */}
                {plan.popular && (
                  <div 
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white shadow-md flex items-center gap-1.5"
                    style={{ backgroundColor: isDark ? '#E28766' : '#CC5A33' }}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-display font-bold text-2xl"
                        style={{ color: isDark ? '#F5F4F0' : '#141413' }}
                      >
                        {plan.name}
                      </h3>
                      {!plan.popular && plan.badge && (
                        <span className="text-xs opacity-60 font-medium">
                          {plan.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-6 pb-6 border-b"
                    style={{ borderColor: isDark ? '#2C2B28' : '#E5DFD3' }}
                  >
                    <div className="flex items-baseline gap-2">
                      <span className="font-display font-bold text-4xl"
                        style={{ color: isDark ? '#F5F4F0' : '#141413' }}
                      >
                        {price}
                      </span>
                      <span className="text-xs opacity-60 font-medium">
                        {t.monthSuffix}
                      </span>
                    </div>
                    {billingCycle === 'annual' && (
                      <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold block mt-1">
                        {t.annualNotice}
                      </span>
                    )}
                  </div>

                  {/* Core Limits Summary */}
                  <div className="space-y-2 mb-6 p-4 rounded-2xl border text-xs font-medium"
                    style={{
                      backgroundColor: isDark ? '#141413' : '#FAF9F5',
                      borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                    }}
                  >
                    <div className="flex justify-between">
                      <span className="opacity-70">Talabalar:</span>
                      <span className="font-bold">{plan.studentsLimit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-70">Kurslar:</span>
                      <span className="font-bold">{plan.coursesLimit}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-70">Jonli efir:</span>
                      <span className="font-bold">{plan.liveHours}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="opacity-70">Xotira:</span>
                      <span className="font-bold">{plan.storageInfo}</span>
                    </div>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8 text-xs sm:text-sm">
                    {plan.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="opacity-80 leading-relaxed">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div>
                  <button
                    onClick={onOpenCreateSchool}
                    className={`w-full py-3.5 rounded-xl font-bold text-sm shadow-md transition-all cursor-pointer ${
                      plan.popular 
                        ? 'text-white' 
                        : 'border opacity-90 hover:opacity-100'
                    }`}
                    style={{
                      backgroundColor: plan.popular 
                        ? (isDark ? '#E28766' : '#CC5A33') 
                        : (isDark ? '#141413' : '#FAF9F5'),
                      borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                      color: plan.popular ? '#FFFFFF' : (isDark ? '#F5F4F0' : '#141413'),
                    }}
                  >
                    {plan.id === 'go' ? t.planActionGo : `${plan.name} ${t.planAction}`}
                  </button>
                  <p className="text-[11px] opacity-60 text-center mt-2.5">
                    {t.freeTrial}
                  </p>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Transparency note */}
        <div className="mt-12 text-center text-xs opacity-70 max-w-xl mx-auto flex items-center justify-center gap-2">
          <HelpCircle className="w-4 h-4 shrink-0 text-amber-500" />
          <span>{t.transparencyNote}</span>
        </div>

      </div>
    </section>
  );
};
