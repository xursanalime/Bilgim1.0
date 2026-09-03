import React from 'react';
import { WHY_US_NODES } from '../data/landingData';
import { ThemeMode } from '../types';

interface VerticalBeadChainProps {
  theme: ThemeMode;
}

export const VerticalBeadChain: React.FC<VerticalBeadChainProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 border-t relative overflow-hidden"
      style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.08)' }}
    >
      {/* Decorative Sparkles from Pinterest Reference 6 */}
      <div className="absolute top-12 left-10 text-2xl opacity-40 animate-pulse pointer-events-none"
        style={{ color: isDark ? '#6C63FF' : '#B5551F' }}
      >
        ✦
      </div>
      <div className="absolute bottom-16 right-16 text-xl opacity-40 animate-pulse delay-700 pointer-events-none"
        style={{ color: isDark ? '#6C63FF' : '#B5551F' }}
      >
        ✦
      </div>

      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="text-xs uppercase tracking-widest font-bold opacity-60">
            Asosiy Afzalliklar
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight mt-1 mb-3"
            style={{ color: isDark ? '#F6F2EA' : '#1F1A12' }}
          >
            Nega aynan{' '}
            <span className="italic font-normal" style={{ color: isDark ? '#6C63FF' : '#B5551F' }}>
              Bilgim Edu?
            </span>
          </h2>
          <p className="text-sm sm:text-base opacity-75">
            O'qituvchilar erkinligi va barqaror daromadi uchun yaratilgan 4 ta asosiy ustun
          </p>
        </div>

        {/* Vertical Connected Bead Chain (Pinterest Reference 6) */}
        <div className="relative pl-6 sm:pl-10 space-y-10 sm:space-y-12">
          
          {/* Continuous vertical connecting line */}
          <div 
            className="absolute left-12 sm:left-16 top-6 bottom-6 w-1 rounded-full -translate-x-1/2"
            style={{
              backgroundColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
            }}
          />

          {WHY_US_NODES.map((node) => (
            <div key={node.num} className="relative flex items-start gap-6 sm:gap-8 group">
              
              {/* Connected Bead / Circle (from Reference 6) */}
              <div 
                className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 flex items-center justify-center font-display font-bold text-base sm:text-lg shrink-0 shadow-md transition-transform group-hover:scale-110"
                style={{
                  backgroundColor: isDark ? '#12121A' : '#EDE7DA',
                  borderColor: isDark ? '#6C63FF' : '#B5551F',
                  color: isDark ? '#6C63FF' : '#B5551F',
                }}
              >
                {node.num}
              </div>

              {/* Text content card */}
              <div 
                className="flex-1 p-5 sm:p-6 rounded-2xl border transition-all duration-300 group-hover:shadow-md"
                style={{
                  backgroundColor: isDark ? '#12121A' : '#EDE7DA',
                  borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.12)',
                }}
              >
                <h3 className="font-display font-bold text-lg sm:text-xl mb-1.5"
                  style={{ color: isDark ? '#F6F2EA' : '#1F1A12' }}
                >
                  {node.title}
                </h3>
                <p className="text-sm opacity-80 leading-relaxed">
                  {node.desc}
                </p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
