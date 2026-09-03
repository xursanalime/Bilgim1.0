import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { ThemeMode } from '../types';

interface StickyCtaProps {
  theme: ThemeMode;
  onOpenCreateSchool: () => void;
}

export const StickyCta: React.FC<StickyCtaProps> = ({ theme, onOpenCreateSchool }) => {
  const isDark = theme === 'dark';
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling down 400px
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
          backgroundColor: isDark ? 'rgba(18, 18, 26, 0.95)' : 'rgba(237, 231, 218, 0.95)',
          borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
        }}
      >
        <div className="hidden sm:flex items-center gap-3">
          <div 
            className="w-10 h-10 rounded-xl flex items-center justify-center text-white shrink-0 shadow-sm"
            style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
          >
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-display font-bold text-sm leading-tight"
              style={{ color: isDark ? '#F6F2EA' : '#1F1A12' }}
            >
              O'z Onlayn Maktabingizni Oching
            </h4>
            <span className="text-xs opacity-70">14 kun bepul • Karta talab qilinmaydi</span>
          </div>
        </div>

        <button
          onClick={onOpenCreateSchool}
          className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white shadow-md flex items-center justify-center gap-2 transition-transform hover:scale-105 active:scale-95 cursor-pointer ml-auto"
          style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
        >
          <span>Maktab Ochish</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
