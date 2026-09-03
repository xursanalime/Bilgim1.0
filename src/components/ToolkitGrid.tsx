import React from 'react';
import { 
  Video, 
  ShieldCheck, 
  CreditCard, 
  FileCheck, 
  Award, 
  Send 
} from 'lucide-react';
import { TOOLKIT_CARDS } from '../data/landingData';
import { ThemeMode } from '../types';

interface ToolkitGridProps {
  theme: ThemeMode;
}

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Video,
  ShieldCheck,
  CreditCard,
  FileCheck,
  Award,
  Send,
};

export const ToolkitGrid: React.FC<ToolkitGridProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 relative bg-grid-pattern border-y"
      style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.08)' }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Header (Pinterest Reference 2 Style: Italic Serif Accent + Bold Title) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-2">
            <span className="font-display italic text-3xl sm:text-4xl"
              style={{ color: isDark ? '#6C63FF' : '#B5551F' }}
            >
              Eng Sara
            </span>{' '}
            <span className="font-display font-bold text-3xl sm:text-4xl tracking-tight"
              style={{ color: isDark ? '#F6F2EA' : '#1F1A12' }}
            >
              O'qituvchi Qurollari
            </span>
          </div>
          <h2 className="text-sm sm:text-base opacity-75 font-medium mt-2">
            Barcha kerakli vositalar bitta maktab platformasida jamlangan — boshqa xizmatlarga pul to'lashga hojat yo'q
          </h2>
        </div>

        {/* 6 Grid Cards with 3D Pin Style (Pinterest Reference 2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          
          {TOOLKIT_CARDS.map((card) => {
            const IconComponent = iconMap[card.iconName] || Video;

            return (
              <div 
                key={card.id}
                className="group relative pt-6 pb-7 px-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1.5 shadow-sm hover:shadow-lg"
                style={{
                  backgroundColor: isDark ? '#12121A' : '#EDE7DA',
                  borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.12)',
                }}
              >
                {/* 3D Push-Pin / Button on top edge (Pinterest Reference 2 iconic element) */}
                <div 
                  className="absolute -top-3.5 left-8 w-7 h-7 rounded-full shadow-md flex items-center justify-center border-2 border-white dark:border-black transition-transform group-hover:scale-110"
                  style={{
                    backgroundColor: isDark ? '#6C63FF' : card.pinColor,
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-white/70" />
                </div>

                {/* Top bar with Step Number and Icon Badge */}
                <div className="flex items-center justify-between mb-4 pt-1">
                  <span 
                    className="font-display font-black text-2xl tracking-tighter"
                    style={{ color: isDark ? '#6C63FF' : card.pinColor }}
                  >
                    {card.stepNum}
                  </span>

                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm transition-transform group-hover:rotate-6"
                    style={{ backgroundColor: isDark ? '#6C63FF' : card.pinColor }}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                {/* Title */}
                <h3 
                  className="font-display font-bold text-xl mb-2.5"
                  style={{ color: isDark ? '#F6F2EA' : '#1F1A12' }}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-sm opacity-75 leading-relaxed mb-4">
                  {card.description}
                </p>

                {/* Bottom Badge Tag */}
                <div className="pt-3 border-t flex items-center justify-between"
                  style={{ borderColor: isDark ? 'rgba(35, 35, 50, 0.8)' : 'rgba(31, 26, 18, 0.08)' }}
                >
                  <span 
                    className="text-xs font-semibold px-2.5 py-1 rounded-md"
                    style={{
                      backgroundColor: isDark ? 'rgba(108, 99, 255, 0.15)' : 'rgba(181, 85, 31, 0.12)',
                      color: isDark ? '#6C63FF' : '#B5551F',
                    }}
                  >
                    {card.badge}
                  </span>
                  <span className="text-xs opacity-50 font-medium">To'liq integratsiya</span>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
