import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data/landingData';
import { ThemeMode, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface TestimonialsFloatingProps {
  theme: ThemeMode;
  lang: Language;
}

export const TestimonialsFloating: React.FC<TestimonialsFloatingProps> = ({ theme, lang }) => {
  const isDark = theme === 'dark';
  const t = TRANSLATIONS[lang].testimonials;

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 border-t relative overflow-hidden bg-grid-pattern"
      style={{ borderColor: isDark ? '#2C2B28' : '#E5DFD3' }}
    >
      <div className="max-w-3xl mx-auto text-center relative z-10">
        
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-4 text-xs font-bold uppercase tracking-wider"
          style={{
            backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
            borderColor: isDark ? '#2C2B28' : '#E5DFD3',
            color: isDark ? '#E28766' : '#CC5A33',
          }}
        >
          <MessageSquareQuote className="w-4 h-4" />
          <span>{t.badge}</span>
        </div>

        {/* Headline */}
        <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight mb-4"
          style={{ color: isDark ? '#F5F4F0' : '#141413' }}
        >
          {t.title}
        </h2>
        <p className="text-sm opacity-75 max-w-lg mx-auto mb-14">
          {t.subtitle}
        </p>

        {/* Stack of Angled Floating Cards */}
        <div className="relative space-y-6">
          
          <div className="absolute -top-6 -left-6 text-amber-500/40 text-2xl pointer-events-none">
            ✦
          </div>
          <div className="absolute top-1/2 -right-8 text-amber-500/40 text-2xl pointer-events-none">
            ✦
          </div>

          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-3xl border text-left shadow-sm transition-all duration-300 hover:scale-[1.01] ${item.angleClass}`}
              style={{
                backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
                borderColor: isDark ? '#2C2B28' : '#E5DFD3',
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm text-white"
                    style={{ backgroundColor: isDark ? '#E28766' : '#CC5A33' }}
                  >
                    {item.avatarText}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm sm:text-base leading-tight"
                      style={{ color: isDark ? '#F5F4F0' : '#141413' }}
                    >
                      {item.name}
                    </h4>
                    <p className="text-xs opacity-60">
                      {item.role}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-sm opacity-80 leading-relaxed italic">
                "{item.text}"
              </p>

              <div className="mt-3 pt-3 border-t flex items-center justify-between text-[11px] opacity-60 font-mono"
                style={{ borderColor: isDark ? '#2C2B28' : '#E5DFD3' }}
              >
                <span>Bilgim Edu Maktab</span>
                <span>{item.date}</span>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
