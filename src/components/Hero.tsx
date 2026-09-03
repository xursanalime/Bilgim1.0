import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Sparkles, CheckCircle2 } from 'lucide-react';
import { ThemeMode } from '../types';

interface HeroProps {
  theme: ThemeMode;
  onOpenCreateSchool: () => void;
}

export const Hero: React.FC<HeroProps> = ({ theme, onOpenCreateSchool }) => {
  const isDark = theme === 'dark';

  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-grid-pattern">
      
      {/* Decorative floating sparkle elements (from Pinterest Reference 1 & 6) */}
      <div className="absolute top-16 left-8 sm:left-24 text-2xl animate-pulse pointer-events-none opacity-40"
        style={{ color: isDark ? '#6C63FF' : '#B5551F' }}
      >
        ✦
      </div>
      <div className="absolute top-40 right-12 sm:right-32 text-xl animate-pulse delay-500 pointer-events-none opacity-40"
        style={{ color: isDark ? '#6C63FF' : '#B5551F' }}
      >
        ✦
      </div>
      <div className="absolute bottom-20 left-1/4 text-lg animate-pulse delay-1000 pointer-events-none opacity-30"
        style={{ color: isDark ? '#6C63FF' : '#B5551F' }}
      >
        ✦
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* Eyebrow Pill Badge (Pinterest Reference 1 style) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-6 text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm"
          style={{
            backgroundColor: isDark ? '#12121A' : '#EDE7DA',
            borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
            color: isDark ? '#6C63FF' : '#B5551F',
          }}
        >
          <Sparkles className="w-4 h-4" />
          <span>Mustaqil O'qituvchi va Mutaxassislar Uchun</span>
          <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }} />
          <span className="opacity-75 font-normal">O'zbekistonda №1</span>
        </div>

        {/* Hero Headline with Fraunces Display Serif */}
        <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[1.15] mb-6"
          style={{ color: isDark ? '#F6F2EA' : '#1F1A12' }}
        >
          O'z onlayn maktabingizni <br className="hidden sm:inline" />
          <span className="italic font-normal underline decoration-wavy decoration-2 decoration-amber-500/60"
            style={{ color: isDark ? '#6C63FF' : '#B5551F' }}
          >
            2 daqiqada
          </span>{' '}
          oching.
        </h1>

        {/* Subtitle - Inter typography, constrained line length */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg lg:text-xl opacity-80 leading-relaxed mb-10"
          style={{ color: isDark ? '#F6F2EA' : '#1F1A12' }}
        >
          Telegram guruhlar, Zoom havolalari va daftardagi tartibsizlikdan xalos bo'ling. 
          Video darslar, jonli efirlar, avtomatik Payme/Click to'lovlari va uy ishlarini 
          bitta shaxsiy brendingiz ostida boshqaring.
        </p>

        {/* Dual Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <button
            onClick={onOpenCreateSchool}
            className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base text-white shadow-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            style={{
              backgroundColor: isDark ? '#6C63FF' : '#B5551F',
            }}
          >
            <span>Maktab Ochish (14 kun bepul)</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="#how-it-works"
            className="w-full sm:w-auto px-7 py-4 rounded-xl font-semibold text-base border transition-all hover:bg-black/5 dark:hover:bg-white/5 flex items-center justify-center gap-2 cursor-pointer"
            style={{
              borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.2)',
              backgroundColor: isDark ? '#12121A' : '#EDE7DA',
              color: isDark ? '#F6F2EA' : '#1F1A12',
            }}
          >
            <span>Tizim Qanday Ishlaydi?</span>
          </a>
        </div>

        {/* Feature Pill Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-6 border-t"
          style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)' }}
        >
          <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm font-medium opacity-80"
            style={{ color: isDark ? '#F6F2EA' : '#1F1A12' }}
          >
            <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Karta ma'lumotlarisiz bepul sinov</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm font-medium opacity-80"
            style={{ color: isDark ? '#F6F2EA' : '#1F1A12' }}
          >
            <ShieldCheck className="w-4 h-4 text-blue-500 shrink-0" />
            <span>DRM Video o'g'irlanishidan himoya</span>
          </div>

          <div className="flex items-center justify-center gap-2.5 text-xs sm:text-sm font-medium opacity-80"
            style={{ color: isDark ? '#F6F2EA' : '#1F1A12' }}
          >
            <Zap className="w-4 h-4 text-amber-500 shrink-0" />
            <span>Payme & Click avto-to'lov</span>
          </div>
        </div>

      </div>
    </section>
  );
};
