import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { ThemeMode, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface StickyCtaProps {
  theme: ThemeMode;
  lang: Language;
  onOpenRegister: () => void;
}

export const StickyCta: React.FC<StickyCtaProps> = ({ theme, lang, onOpenRegister }) => {
  const isDark = theme === 'dark';
  const t = TRANSLATIONS[lang];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 450) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 w-11/12 max-w-xl animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div 
        className="p-3 sm:p-4 rounded-2xl border shadow-2xl flex items-center justify-between gap-4 backdrop-blur-md"
        style={{
          backgroundColor: isDark ? 'rgba(31, 30, 28, 0.95)' : 'rgba(255, 255, 255, 0.95)',
          borderColor: isDark ? '#2C2B28' : '#E5DFD3',
        }}
      >
        <div className="hidden sm:flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm"
            style={{ backgroundColor: isDark ? '#E28766' : '#CC5A33' }}
          >
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-sm leading-tight"
              style={{ color: isDark ? '#F5F4F0' : '#141413' }}
            >
              {t.nav.register}
            </h4>
            <span className="text-xs opacity-70">{t.hero.trialBadge}</span>
          </div>
        </div>

        <button
          onClick={onOpenRegister}
          className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white shadow-md flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 cursor-pointer ml-auto"
          style={{ backgroundColor: isDark ? '#E28766' : '#CC5A33' }}
        >
          <span>{t.hero.ctaPrimary}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
