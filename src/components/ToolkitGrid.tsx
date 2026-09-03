import React from 'react';
import { motion } from 'motion/react';
import { 
  Video, 
  ShieldCheck, 
  CreditCard, 
  FileCheck, 
  Award, 
  Send 
} from 'lucide-react';
import { ThemeMode, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface ToolkitGridProps {
  theme: ThemeMode;
  lang: Language;
}

const icons = [ShieldCheck, Video, CreditCard, FileCheck, Award, Send];

export const ToolkitGrid: React.FC<ToolkitGridProps> = ({ theme, lang }) => {
  const isDark = theme === 'dark';
  const t = TRANSLATIONS[lang].toolkit;

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-grid-pattern border-y"
      style={{ borderColor: isDark ? '#2C2B28' : '#E5DFD3' }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-xs uppercase tracking-widest font-bold mb-2 opacity-80"
            style={{ color: isDark ? '#E28766' : '#CC5A33' }}
          >
            {t.eyebrow}
          </p>
          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight mb-3"
            style={{ color: isDark ? '#F5F4F0' : '#141413' }}
          >
            {t.title}
          </h2>
          <p className="text-sm sm:text-base opacity-75 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.items.map((card, idx) => {
            const IconComponent = icons[idx % icons.length];
            return (
              <motion.div 
                key={card.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative p-8 rounded-3xl border flex flex-col justify-between transition-all shadow-sm"
                style={{
                  backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
                  borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                }}
              >
                {/* Step badge pill */}
                <div className="flex items-center justify-between mb-6">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-mono text-xs font-bold transition-colors"
                    style={{
                      backgroundColor: isDark ? 'rgba(226, 135, 102, 0.15)' : 'rgba(204, 90, 51, 0.1)',
                      color: isDark ? '#E28766' : '#CC5A33',
                    }}
                  >
                    {card.step}
                  </div>
                  <span 
                    className="text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full border"
                    style={{
                      borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                      backgroundColor: isDark ? '#141413' : '#FAF9F5',
                      color: isDark ? '#F5F4F0' : '#141413',
                    }}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg"
                      style={{
                        backgroundColor: isDark ? '#141413' : '#FAF9F5',
                        color: isDark ? '#E28766' : '#CC5A33',
                      }}
                    >
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-display font-bold text-xl leading-snug"
                      style={{ color: isDark ? '#F5F4F0' : '#141413' }}
                    >
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-sm opacity-75 leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Subtle bottom indicator */}
                <div className="mt-8 pt-4 border-t flex items-center justify-between text-xs opacity-50"
                  style={{ borderColor: isDark ? '#2C2B28' : '#E5DFD3' }}
                >
                  <span className="font-mono">Bilgim Edu Core</span>
                  <span>● Faol</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
