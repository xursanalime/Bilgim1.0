import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { ThemeMode, SchoolLandingData } from '../../types';

interface SchoolFaqProps {
  school: SchoolLandingData;
  theme: ThemeMode;
}

export const SchoolFaq: React.FC<SchoolFaqProps> = ({ school, theme }) => {
  const isDark = theme === 'dark';
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section 
      id="faq"
      className="py-16 sm:py-24 border-b transition-colors"
      style={{
        backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
        borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
        color: isDark ? '#F5F4F0' : '#1F1A12',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <div 
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3"
            style={{
              backgroundColor: isDark ? 'rgba(108, 99, 255, 0.12)' : 'rgba(181, 85, 31, 0.08)',
              color: isDark ? '#6C63FF' : '#B5551F',
            }}
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Savol-Javoblar</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight mb-3">
            Ko'p Beriladigan Savollar (FAQ)
          </h2>
          <p className="text-sm sm:text-base opacity-75">
            Maktabimiz va o'quv jarayoni haqidagi eng ommabop savollarga javoblar.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {school.faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={idx}
                className="rounded-2xl border transition-all overflow-hidden"
                style={{
                  backgroundColor: isDark ? '#12121A' : '#EDE7DA',
                  borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
                }}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-display font-bold text-base sm:text-lg">
                    {faq.question}
                  </span>
                  <div 
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 border"
                    style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)' }}
                  >
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div 
                    className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm opacity-80 leading-relaxed border-t pt-4"
                    style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.08)' }}
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
