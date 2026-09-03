import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, ArrowRight, CheckCircle2, TrendingUp, Sparkles } from 'lucide-react';
import { ThemeMode, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface IncomeCalculatorProps {
  theme: ThemeMode;
  lang: Language;
  onOpenRegister: () => void;
}

export const IncomeCalculator: React.FC<IncomeCalculatorProps> = ({ 
  theme, 
  lang, 
  onOpenRegister 
}) => {
  const isDark = theme === 'dark';
  const t = TRANSLATIONS[lang].calculator;

  const [studentCount, setStudentCount] = useState<number>(60);
  const [coursePrice, setCoursePrice] = useState<number>(350000); // 350,000 UZS

  // Monthly revenue
  const totalMonthlyRevenue = studentCount * coursePrice;
  
  // Traditional platform commission (20%)
  const traditionalCommissionRate = 0.20;
  const traditionalPlatformLoss = totalMonthlyRevenue * traditionalCommissionRate;
  
  // Bilgim Edu Pro plan (499,000 UZS fixed, 0% commission)
  const bilgimEduMonthlyCost = 499000;
  const monthlySavings = Math.max(0, traditionalPlatformLoss - bilgimEduMonthlyCost);

  const formatCurrency = (val: number) => {
    const currencySuffix = lang === 'en' ? ' UZS' : lang === 'ru' ? ' сум' : " so'm";
    return new Intl.NumberFormat('uz-UZ').format(Math.round(val)) + currencySuffix;
  };

  return (
    <section id="calculator" className="py-24 px-4 sm:px-6 lg:px-8 border-t relative overflow-hidden"
      style={{ borderColor: isDark ? '#2C2B28' : '#E5DFD3' }}
    >
      <div className="max-w-5xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-4 text-xs font-bold uppercase tracking-wider"
            style={{
              backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
              borderColor: isDark ? '#2C2B28' : '#E5DFD3',
              color: isDark ? '#E28766' : '#CC5A33',
            }}
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight mb-4"
            style={{ color: isDark ? '#F5F4F0' : '#141413' }}
          >
            {t.title}
          </h2>

          <p className="text-sm sm:text-base opacity-75 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Interactive Calculator Box */}
        <div 
          className="p-8 sm:p-12 rounded-3xl border shadow-lg relative overflow-hidden"
          style={{
            backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
            borderColor: isDark ? '#2C2B28' : '#E5DFD3',
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            {/* Sliders Input Column */}
            <div className="space-y-8">
              {/* Course Price Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-80">
                    {t.coursePriceLabel}
                  </label>
                  <span className="font-mono font-bold text-base"
                    style={{ color: isDark ? '#E28766' : '#CC5A33' }}
                  >
                    {formatCurrency(coursePrice)}
                  </span>
                </div>
                <input 
                  type="range"
                  min="50000"
                  max="2000000"
                  step="50000"
                  value={coursePrice}
                  onChange={(e) => setCoursePrice(Number(e.target.value))}
                  className="w-full accent-amber-600 h-2 bg-stone-200 dark:bg-stone-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] opacity-50 mt-1 font-mono">
                  <span>50,000</span>
                  <span>1,000,000</span>
                  <span>2,000,000</span>
                </div>
              </div>

              {/* Student Count Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-80">
                    {t.studentsCountLabel}
                  </label>
                  <span className="font-mono font-bold text-base"
                    style={{ color: isDark ? '#E28766' : '#CC5A33' }}
                  >
                    {studentCount} {lang === 'en' ? "students" : lang === 'ru' ? "студентов" : "nafar"}
                  </span>
                </div>
                <input 
                  type="range"
                  min="5"
                  max="300"
                  step="5"
                  value={studentCount}
                  onChange={(e) => setStudentCount(Number(e.target.value))}
                  className="w-full accent-amber-600 h-2 bg-stone-200 dark:bg-stone-800 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[11px] opacity-50 mt-1 font-mono">
                  <span>5</span>
                  <span>150</span>
                  <span>300</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl border text-xs leading-relaxed"
                style={{
                  backgroundColor: isDark ? '#141413' : '#FAF9F5',
                  borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                }}
              >
                <div className="flex items-center gap-2 font-bold mb-1"
                  style={{ color: isDark ? '#E28766' : '#CC5A33' }}
                >
                  <Sparkles className="w-4 h-4" />
                  <span>{t.zeroCommissionTag}</span>
                </div>
                <p className="opacity-75">
                  {t.savingsNote}
                </p>
              </div>
            </div>

            {/* Results Output Column */}
            <div 
              className="p-8 rounded-2xl border flex flex-col justify-between space-y-6"
              style={{
                backgroundColor: isDark ? '#141413' : '#FAF9F5',
                borderColor: isDark ? '#2C2B28' : '#E5DFD3',
              }}
            >
              <div>
                <span className="text-xs uppercase font-mono tracking-widest opacity-60 block mb-1">
                  {t.monthlyRevenueLabel}
                </span>
                <div className="font-display font-bold text-3xl sm:text-4xl"
                  style={{ color: isDark ? '#F5F4F0' : '#141413' }}
                >
                  {formatCurrency(totalMonthlyRevenue)}
                </div>
                <div className="text-xs opacity-60 mt-1 font-mono">
                  {t.annualRevenueLabel}: {formatCurrency(totalMonthlyRevenue * 12)}
                </div>
              </div>

              {/* Savings callout */}
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-1">
                  {t.savingsBadge}
                </div>
                <div className="font-display font-bold text-2xl text-emerald-600 dark:text-emerald-400">
                  +{formatCurrency(monthlySavings)} / {lang === 'en' ? 'mo' : lang === 'ru' ? 'мес' : 'oy'}
                </div>
              </div>

              <button
                onClick={onOpenRegister}
                className="w-full py-4 rounded-xl font-bold text-sm text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: isDark ? '#E28766' : '#CC5A33' }}
              >
                <span>Ro'yxatdan O'tish & Boshlash</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
