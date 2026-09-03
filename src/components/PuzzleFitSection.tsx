import React from 'react';
import { motion } from 'motion/react';
import { Send, Check, Sparkles } from 'lucide-react';
import { ThemeMode, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface PuzzleFitProps {
  theme: ThemeMode;
  lang: Language;
  onOpenRegister: () => void;
}

export const PuzzleFitSection: React.FC<PuzzleFitProps> = ({ theme, lang, onOpenRegister }) => {
  const isDark = theme === 'dark';
  const t = TRANSLATIONS[lang].puzzle;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Eyebrow */}
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-widest font-bold mb-3 opacity-80"
          style={{ color: isDark ? '#E28766' : '#CC5A33' }}
        >
          {t.eyebrow}
        </motion.p>

        {/* Heading in Fraunces serif */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-bold text-3xl sm:text-5xl tracking-tight mb-4"
          style={{ color: isDark ? '#F5F4F0' : '#141413' }}
        >
          {t.title}{' '}
          <span className="italic font-normal" style={{ color: isDark ? '#E28766' : '#CC5A33' }}>
            {t.titleAccent}
          </span>
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-xl mx-auto text-sm sm:text-base opacity-75 mb-12"
          style={{ color: isDark ? '#F5F4F0' : '#141413' }}
        >
          {t.description}
        </motion.p>

        {/* Puzzle Graphic Simulation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 relative"
        >
          {/* Left Piece: Teacher */}
          <div 
            className="p-8 rounded-3xl border text-left flex flex-col justify-between shadow-sm transition-transform hover:-translate-y-1"
            style={{
              backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
              borderColor: isDark ? '#2C2B28' : '#E5DFD3',
            }}
          >
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider block mb-2 opacity-60">
                {t.leftTitle}
              </span>
              <h3 className="font-display font-bold text-2xl mb-4"
                style={{ color: isDark ? '#E28766' : '#CC5A33' }}
              >
                {t.leftSubtitle}
              </h3>
              <ul className="space-y-3 text-sm opacity-80">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{t.leftItem1}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{t.leftItem2}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{t.leftItem3}</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t text-xs opacity-50 font-mono"
              style={{ borderColor: isDark ? '#2C2B28' : '#E5DFD3' }}
            >
              100% sizning muallifligingiz
            </div>
          </div>

          {/* Right Piece: Bilgim Platform */}
          <div 
            className="p-8 rounded-3xl border text-left flex flex-col justify-between shadow-sm transition-transform hover:-translate-y-1"
            style={{
              backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
              borderColor: isDark ? '#2C2B28' : '#E5DFD3',
            }}
          >
            <div>
              <span className="text-xs font-mono font-semibold uppercase tracking-wider block mb-2 opacity-60">
                {t.rightTitle}
              </span>
              <h3 className="font-display font-bold text-2xl mb-4"
                style={{ color: isDark ? '#E28766' : '#CC5A33' }}
              >
                {t.rightSubtitle}
              </h3>
              <ul className="space-y-3 text-sm opacity-80">
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{t.rightItem1}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{t.rightItem2}</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>{t.rightItem3}</span>
                </li>
              </ul>
            </div>
            <div className="mt-8 pt-4 border-t text-xs opacity-50 font-mono"
              style={{ borderColor: isDark ? '#2C2B28' : '#E5DFD3' }}
            >
              0% komissiya • 99.9% uptime
            </div>
          </div>

          {/* Center Plus Connector */}
          <div 
            className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full border items-center justify-center font-bold text-lg shadow-md z-10"
            style={{
              backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
              borderColor: isDark ? '#2C2B28' : '#E5DFD3',
              color: isDark ? '#E28766' : '#CC5A33',
            }}
          >
            +
          </div>
        </motion.div>

        {/* Action Button */}
        <div className="mt-12">
          <button
            onClick={onOpenRegister}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-sm text-white shadow-md transition-transform hover:scale-105 cursor-pointer"
            style={{ backgroundColor: isDark ? '#E28766' : '#CC5A33' }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Ro'yxatdan O'tish & Boshlash</span>
          </button>
          <p className="text-xs opacity-60 mt-3">
            {t.ctaSub}
          </p>
        </div>

      </div>
    </section>
  );
};
