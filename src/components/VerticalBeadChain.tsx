import React from 'react';
import { ThemeMode, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface VerticalBeadChainProps {
  theme: ThemeMode;
  lang: Language;
}

export const VerticalBeadChain: React.FC<VerticalBeadChainProps> = ({ theme, lang }) => {
  const isDark = theme === 'dark';
  const t = TRANSLATIONS[lang].reasons;

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t relative overflow-hidden"
      style={{ borderColor: isDark ? '#2C2B28' : '#E5DFD3' }}
    >
      {/* Decorative Sparkles */}
      <div className="absolute top-12 left-10 text-2xl opacity-20 pointer-events-none"
        style={{ color: isDark ? '#E28766' : '#CC5A33' }}
      >
        ✦
      </div>
      <div className="absolute bottom-16 right-16 text-xl opacity-20 pointer-events-none"
        style={{ color: isDark ? '#E28766' : '#CC5A33' }}
      >
        ✦
      </div>

      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
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
          <p className="text-sm sm:text-base opacity-75 max-w-lg mx-auto">
            {t.subtitle}
          </p>
        </div>

        {/* Vertical Connected Bead Chain */}
        <div className="relative pl-6 sm:pl-10 space-y-10 sm:space-y-12">
          
          {/* Continuous vertical connecting line */}
          <div 
            className="absolute left-12 sm:left-16 top-6 bottom-6 w-0.5 -translate-x-1/2"
            style={{
              backgroundColor: isDark ? '#2C2B28' : '#E5DFD3',
            }}
          />

          {t.items.map((node) => (
            <div key={node.number} className="relative flex items-start gap-6 sm:gap-8 group">
              
              {/* The Bead / Node Circle */}
              <div 
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border flex items-center justify-center font-display font-bold text-base sm:text-lg shrink-0 z-10 transition-transform group-hover:scale-110 shadow-sm"
                style={{
                  backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
                  borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                  color: isDark ? '#E28766' : '#CC5A33',
                }}
              >
                {node.number}
              </div>

              {/* Node Card */}
              <div 
                className="flex-1 p-6 sm:p-8 rounded-3xl border shadow-sm transition-all group-hover:shadow-md"
                style={{
                  backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
                  borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                }}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <h3 className="font-display font-bold text-lg sm:text-xl"
                    style={{ color: isDark ? '#F5F4F0' : '#141413' }}
                  >
                    {node.title}
                  </h3>
                  <span 
                    className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full border font-mono"
                    style={{
                      borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                      backgroundColor: isDark ? '#141413' : '#FAF9F5',
                      color: isDark ? '#E28766' : '#CC5A33',
                    }}
                  >
                    {node.highlight}
                  </span>
                </div>

                <p className="text-sm opacity-75 leading-relaxed">
                  {node.description}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
