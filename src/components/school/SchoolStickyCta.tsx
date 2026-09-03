import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { ThemeMode, SchoolLandingData } from '../../types';

interface SchoolStickyCtaProps {
  school: SchoolLandingData;
  theme: ThemeMode;
  onOpenEnroll: () => void;
}

export const SchoolStickyCta: React.FC<SchoolStickyCtaProps> = ({
  school,
  theme,
  onOpenEnroll,
}) => {
  const isDark = theme === 'dark';
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling down 300px
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div 
      className="fixed bottom-0 inset-x-0 z-40 p-3 sm:p-4 backdrop-blur-md border-t transition-all duration-300 shadow-2xl"
      style={{
        backgroundColor: isDark ? 'rgba(18, 18, 26, 0.95)' : 'rgba(237, 231, 218, 0.95)',
        borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.12)',
        color: isDark ? '#F5F4F0' : '#1F1A12',
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        
        {/* Left: School Name & Quick Promise */}
        <div className="hidden sm:flex items-center gap-3">
          <div 
            className="w-9 h-9 rounded-xl flex items-center justify-center font-bold text-white text-xs shrink-0"
            style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
          >
            {school.name[0]}
          </div>
          <div>
            <div className="font-display font-bold text-sm leading-tight">
              {school.name}
            </div>
            <div className="text-[11px] opacity-65">
              1-darsni bepul sinab ko'ring • 14 kunlik to'lov kafolati
            </div>
          </div>
        </div>

        {/* Mobile quick text */}
        <div className="sm:hidden text-xs">
          <div className="font-bold">{school.name}</div>
          <div className="text-[10px] opacity-60">Ustoz: {school.teacherName}</div>
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={onOpenEnroll}
            className="px-5 py-2.5 sm:py-3 rounded-xl font-bold text-xs sm:text-sm text-white shadow-md flex items-center gap-2 cursor-pointer transition-transform hover:scale-[1.02]"
            style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kursga Yozilish</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
