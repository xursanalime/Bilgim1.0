import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { FAQS } from '../data/landingData';
import { ThemeMode } from '../types';

interface FaqSectionProps {
  theme: ThemeMode;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ theme }) => {
  const isDark = theme === 'dark';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8 border-t"
      style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.08)' }}
    >
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border mb-3 text-xs font-bold uppercase tracking-wider"
            style={{
              backgroundColor: isDark ? '#12121A' : '#EDE7DA',
              borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
              color: isDark ? '#6C63FF' : '#B5551F',
            }}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Savol-Javoblar</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight mb-3"
            style={{ color: isDark ? '#F6F2EA' : '#1F1A12' }}
          >
            Tez-tez so'raladigan savollar
          </h2>
          <p className="text-sm opacity-75">
            Platformaning ishlash tartibi, xavfsizligi va to'lovlar haqida bilishingiz kerak bo'lgan hamma narsa
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border transition-colors overflow-hidden"
                style={{
                  backgroundColor: isDark ? '#12121A' : '#EDE7DA',
                  borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.12)',
                }}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-display font-bold text-base sm:text-lg"
                    style={{ color: isDark ? '#F6F2EA' : '#1F1A12' }}
                  >
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                    style={{ backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)' }}
                  >
                    <ChevronDown className="w-4 h-4 opacity-70" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-0 text-sm opacity-80 leading-relaxed border-t"
                    style={{ borderColor: isDark ? 'rgba(35, 35, 50, 0.5)' : 'rgba(31, 26, 18, 0.05)' }}
                  >
                    <p className="pt-3">{faq.answer}</p>
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
