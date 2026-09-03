import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, BookOpen, TrendingUp, ArrowRight } from 'lucide-react';
import { ThemeMode, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface StepsRoadmapProps {
  theme: ThemeMode;
  lang: Language;
  onOpenCreateSchool: () => void;
}

const stepIcons = [Sparkles, BookOpen, TrendingUp];

export const StepsRoadmap: React.FC<StepsRoadmapProps> = ({ theme, lang, onOpenCreateSchool }) => {
  const isDark = theme === 'dark';
  const t = TRANSLATIONS[lang].roadmap;

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-20"
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

        {/* 3 Steps Alternating Layout */}
        <div className="relative space-y-12 sm:space-y-16">
          {t.steps.map((item, idx) => {
            const Icon = stepIcons[idx] || Sparkles;
            const isEven = idx % 2 === 1;

            return (
              <motion.div 
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col ${isEven ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-8 md:gap-16`}
              >
                {/* Step Visual Block */}
                <div className="w-full md:w-1/2">
                  <div 
                    className="p-8 rounded-3xl border shadow-sm relative overflow-hidden group transition-all"
                    style={{
                      backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
                      borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-display font-bold text-lg shadow-md"
                        style={{ backgroundColor: isDark ? '#E28766' : '#CC5A33' }}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border"
                        style={{
                          borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                          backgroundColor: isDark ? '#141413' : '#FAF9F5',
                          color: isDark ? '#F5F4F0' : '#141413',
                        }}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <div className="font-mono text-xs opacity-50 uppercase tracking-widest mb-1">
                      {lang === 'uz' ? "Bosqich" : lang === 'ru' ? "Шаг" : "Step"} {item.step}
                    </div>
                    <h3 className="font-display font-bold text-xl sm:text-2xl mb-2"
                      style={{ color: isDark ? '#F5F4F0' : '#141413' }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-sm opacity-75 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Step Number Big Typography Display */}
                <div className="w-full md:w-1/2 flex items-center justify-center">
                  <div className="text-center md:text-left">
                    <span 
                      className="font-display font-bold text-7xl sm:text-9xl opacity-15 select-none"
                      style={{ color: isDark ? '#E28766' : '#CC5A33' }}
                    >
                      {item.step}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button
            onClick={onOpenCreateSchool}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white shadow-md transition-transform hover:scale-105 cursor-pointer"
            style={{ backgroundColor: isDark ? '#E28766' : '#CC5A33' }}
          >
            <span>{t.cta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
