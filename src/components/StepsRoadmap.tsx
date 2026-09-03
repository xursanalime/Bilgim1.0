import React from 'react';
import { Sparkles, BookOpen, TrendingUp, Check } from 'lucide-react';
import { ROADMAP_STEPS } from '../data/landingData';
import { ThemeMode } from '../types';

interface StepsRoadmapProps {
  theme: ThemeMode;
  onOpenCreateSchool: () => void;
}

const stepIcons = [Sparkles, BookOpen, TrendingUp];

export const StepsRoadmap: React.FC<StepsRoadmapProps> = ({ theme, onOpenCreateSchool }) => {
  const isDark = theme === 'dark';

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span 
            className="text-xs uppercase tracking-widest font-bold px-3 py-1 rounded-full border mb-3 inline-block"
            style={{
              backgroundColor: isDark ? '#12121A' : '#EDE7DA',
              borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
              color: isDark ? '#6C63FF' : '#B5551F',
            }}
          >
            Boshlash oson
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight mb-4"
            style={{ color: isDark ? '#F6F2EA' : '#1F1A12' }}
          >
            Qanday qilib{' '}
            <span className="italic font-normal" style={{ color: isDark ? '#6C63FF' : '#B5551F' }}>
              3 qadamda
            </span>{' '}
            maktab ochiladi?
          </h2>
          <p className="text-sm sm:text-base opacity-75">
            Murakkab texnik sozlamalarsiz, bir kunda o'z kurslaringizni e'lon qiling va daromad olishni boshlang.
          </p>
        </div>

        {/* 3 Steps Alternating Layout with Connected S-Curve (Pinterest Reference 3 & 4) */}
        <div className="relative space-y-12 sm:space-y-16">
          
          {ROADMAP_STEPS.map((item, idx) => {
            const Icon = stepIcons[idx] || Sparkles;
            const isEven = idx % 2 === 1;

            return (
              <div 
                key={item.step}
                className={`flex flex-col sm:flex-row items-center gap-6 sm:gap-12 ${
                  isEven ? 'sm:flex-row-reverse' : ''
                }`}
              >
                {/* Step Card Pill */}
                <div 
                  className="flex-1 w-full p-6 sm:p-8 rounded-3xl border shadow-sm transition-all duration-300 hover:shadow-md"
                  style={{
                    backgroundColor: isDark ? '#12121A' : '#EDE7DA',
                    borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.12)',
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-md"
                      style={{ backgroundColor: isDark ? '#6C63FF' : item.color }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <span className="text-xs font-bold tracking-wider uppercase opacity-60">
                        {item.subtitle}
                      </span>
                      <h3 className="font-display font-bold text-xl sm:text-2xl mt-0.5 mb-2"
                        style={{ color: isDark ? '#F6F2EA' : '#1F1A12' }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-sm opacity-80 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Big Step Number Label (From Pinterest Reference 3) */}
                <div className="flex sm:flex-col items-center justify-center shrink-0 w-36 text-center">
                  <span className="text-xs tracking-widest font-black uppercase opacity-60 mr-2 sm:mr-0">
                    QADAM
                  </span>
                  <span 
                    className="font-display font-black text-5xl sm:text-6xl tracking-tighter"
                    style={{ color: isDark ? '#6C63FF' : item.color }}
                  >
                    {item.step}
                  </span>
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA within Roadmap */}
        <div className="text-center mt-16">
          <button
            onClick={onOpenCreateSchool}
            className="px-8 py-3.5 rounded-xl font-bold text-sm text-white shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer"
            style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
          >
            1-Qadamni Hozir Boshlang
          </button>
        </div>

      </div>
    </section>
  );
};
