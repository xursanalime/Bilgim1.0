import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { ThemeMode, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface FaqSectionProps {
  theme: ThemeMode;
  lang: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ theme, lang }) => {
  const isDark = theme === 'dark';
  const t = TRANSLATIONS[lang].faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 border-t"
      style={{ borderColor: isDark ? '#2C2B28' : '#E5DFD3' }}
    >
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border mb-3 text-xs font-bold uppercase tracking-wider"
            style={{
              backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
              borderColor: isDark ? '#2C2B28' : '#E5DFD3',
              color: isDark ? '#E28766' : '#CC5A33',
            }}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight mb-3"
            style={{ color: isDark ? '#F5F4F0' : '#141413' }}
          >
            {t.title}
          </h2>
          <p className="text-sm opacity-75 max-w-lg mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {t.items.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border transition-colors overflow-hidden"
                style={{
                  backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
                  borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                }}
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-display font-bold text-base sm:text-lg"
                    style={{ color: isDark ? '#F5F4F0' : '#141413' }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-amber-500' : 'opacity-40'
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm opacity-75 leading-relaxed border-t"
                    style={{ borderColor: isDark ? '#2C2B28' : '#E5DFD3' }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
