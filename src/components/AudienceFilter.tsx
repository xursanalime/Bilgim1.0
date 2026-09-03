import React from 'react';
import { Check, X } from 'lucide-react';
import { ThemeMode, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface AudienceFilterProps {
  theme: ThemeMode;
  lang: Language;
}

export const AudienceFilter: React.FC<AudienceFilterProps> = ({ theme, lang }) => {
  const isDark = theme === 'dark';
  const t = TRANSLATIONS[lang].audience;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t"
      style={{ borderColor: isDark ? '#2C2B28' : '#E5DFD3' }}
    >
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest font-bold opacity-80 block mb-2"
            style={{ color: isDark ? '#E28766' : '#CC5A33' }}
          >
            {t.badge}
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight mb-3"
            style={{ color: isDark ? '#F5F4F0' : '#141413' }}
          >
            {t.title}
          </h2>
          <p className="text-sm opacity-75 max-w-lg mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Kimlar uchun MOS */}
          <div 
            className="p-8 sm:p-10 rounded-3xl border relative shadow-sm"
            style={{
              backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
              borderColor: isDark ? '#2C2B28' : '#E5DFD3',
            }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider mb-6">
              <Check className="w-4 h-4" />
              <span>{t.fitTitle}</span>
            </div>

            <p className="text-xs opacity-60 mb-6">
              {t.fitSubtitle}
            </p>

            <ul className="space-y-4 text-sm">
              {t.fitItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✓
                  </div>
                  <span className="opacity-80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Kimlar uchun MOS EMAS */}
          <div 
            className="p-8 sm:p-10 rounded-3xl border relative shadow-sm"
            style={{
              backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
              borderColor: isDark ? '#2C2B28' : '#E5DFD3',
            }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-rose-500/10 text-rose-600 dark:text-rose-400 font-bold text-xs uppercase tracking-wider mb-6">
              <X className="w-4 h-4" />
              <span>{t.notFitTitle}</span>
            </div>

            <p className="text-xs opacity-60 mb-6">
              {t.notFitSubtitle}
            </p>

            <ul className="space-y-4 text-sm">
              {t.notFitItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-rose-500/80 text-white flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                    ✕
                  </div>
                  <span className="opacity-80 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
