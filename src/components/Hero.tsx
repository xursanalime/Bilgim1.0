import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, Sparkles, CheckCircle2, TrendingUp, Bell } from 'lucide-react';
import { ThemeMode, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface HeroProps {
  theme: ThemeMode;
  lang: Language;
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ theme, lang, onOpenRegister }) => {
  const isDark = theme === 'dark';
  const t = TRANSLATIONS[lang].hero;

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-grid-pattern">
      
      {/* Decorative floating animated sparkles */}
      <motion.div 
        animate={{ y: [-6, 6, -6], rotate: [0, 90, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-16 left-8 sm:left-24 text-2xl pointer-events-none opacity-30 select-none"
        style={{ color: isDark ? '#E28766' : '#CC5A33' }}
      >
        ✦
      </motion.div>

      <motion.div 
        animate={{ y: [8, -8, 8], rotate: [0, -90, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-40 right-12 sm:right-32 text-xl pointer-events-none opacity-30 select-none"
        style={{ color: isDark ? '#E28766' : '#CC5A33' }}
      >
        ✦
      </motion.div>

      {/* Floating Notification Badge on Desktop (Left) */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0, y: [-4, 4, -4] }}
        transition={{ 
          opacity: { duration: 0.8, delay: 0.4 },
          x: { duration: 0.8, delay: 0.4 },
          y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="hidden xl:flex items-center gap-3 absolute left-12 top-48 p-3 rounded-2xl border shadow-lg backdrop-blur-md z-20 pointer-events-none"
        style={{
          backgroundColor: isDark ? 'rgba(31, 30, 28, 0.9)' : 'rgba(255, 255, 255, 0.9)',
          borderColor: isDark ? '#2C2B28' : '#E5DFD3',
          color: isDark ? '#F5F4F0' : '#141413',
        }}
      >
        <div className="w-9 h-9 rounded-xl bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
          <TrendingUp className="w-5 h-5" />
        </div>
        <div className="text-left text-xs">
          <div className="font-bold">
            {lang === 'uz' ? "To'lov qabul qilindi" : lang === 'ru' ? "Оплата получена" : "Payment received"}
          </div>
          <div className="text-emerald-600 dark:text-emerald-400 font-mono font-semibold">+450,000 UZS (Payme)</div>
        </div>
      </motion.div>

      {/* Floating Notification Badge on Desktop (Right) */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0, y: [4, -4, 4] }}
        transition={{ 
          opacity: { duration: 0.8, delay: 0.5 },
          x: { duration: 0.8, delay: 0.5 },
          y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
        }}
        className="hidden xl:flex items-center gap-3 absolute right-12 top-52 p-3 rounded-2xl border shadow-lg backdrop-blur-md z-20 pointer-events-none"
        style={{
          backgroundColor: isDark ? 'rgba(31, 30, 28, 0.9)' : 'rgba(255, 255, 255, 0.9)',
          borderColor: isDark ? '#2C2B28' : '#E5DFD3',
          color: isDark ? '#F5F4F0' : '#141413',
        }}
      >
        <div className="w-9 h-9 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center">
          <Bell className="w-5 h-5" />
        </div>
        <div className="text-left text-xs">
          <div className="font-bold">
            {lang === 'uz' ? "Yangi talaba qo'shildi" : lang === 'ru' ? "Новый студент записался" : "New student enrolled"}
          </div>
          <div className="opacity-70 text-[11px]">IELTS Masterclass • 1m ago</div>
        </div>
      </motion.div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow Pill Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm"
          style={{
            backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
            borderColor: isDark ? '#2C2B28' : '#E5DFD3',
            color: isDark ? '#E28766' : '#CC5A33',
          }}
        >
          <Sparkles className="w-4 h-4" />
          <span>{t.badge}</span>
        </motion.div>

        {/* Hero Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.12] mb-6"
          style={{ color: isDark ? '#F5F4F0' : '#141413' }}
        >
          {t.titlePart1}{' '}
          <span 
            className="italic font-normal underline decoration-2 decoration-amber-500/50 underline-offset-4"
            style={{ color: isDark ? '#E28766' : '#CC5A33' }}
          >
            {t.titleAccent}
          </span>{' '}
          {t.titlePart2}
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl opacity-75 leading-relaxed mb-10"
          style={{ color: isDark ? '#F5F4F0' : '#141413' }}
        >
          {t.description}
        </motion.p>

        {/* Dual Actions */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenRegister}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-white shadow-md flex items-center justify-center gap-3 cursor-pointer transition-transform"
            style={{
              backgroundColor: isDark ? '#E28766' : '#CC5A33',
            }}
          >
            <span>{t.ctaPrimary}</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>

          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#showcase"
            className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-base border transition-colors flex items-center justify-center gap-2 cursor-pointer"
            style={{
              borderColor: isDark ? '#2C2B28' : '#E5DFD3',
              backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
              color: isDark ? '#F5F4F0' : '#141413',
            }}
          >
            <span>{t.ctaSecondary}</span>
          </motion.a>
        </motion.div>

        {/* Feature Highlights */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-6 border-t"
          style={{ borderColor: isDark ? '#2C2B28' : '#E5DFD3' }}
        >
          <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm font-medium opacity-80"
            style={{ color: isDark ? '#F5F4F0' : '#141413' }}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>{t.stat1Label} • {t.stat1Sub}</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm font-medium opacity-80"
            style={{ color: isDark ? '#F5F4F0' : '#141413' }}
          >
            <Zap className="w-4 h-4 text-amber-500 shrink-0" />
            <span>{t.stat2Label} • {t.stat2Sub}</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm font-medium opacity-80"
            style={{ color: isDark ? '#F5F4F0' : '#141413' }}
          >
            <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
            <span>{t.stat3Label} • {t.stat3Sub}</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
