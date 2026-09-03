import React from 'react';
import { Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS } from '../data/landingData';
import { ThemeMode } from '../types';

interface TestimonialsFloatingProps {
  theme: ThemeMode;
}

export const TestimonialsFloating: React.FC<TestimonialsFloatingProps> = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 border-t relative overflow-hidden bg-grid-pattern"
      style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.08)' }}
    >
      <div className="max-w-3xl mx-auto text-center relative z-10">
        
        {/* Eyebrow Pill (Pinterest Reference 1) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border mb-4 text-xs font-bold uppercase tracking-wider"
          style={{
            backgroundColor: isDark ? '#12121A' : '#EDE7DA',
            borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
            color: isDark ? '#6C63FF' : '#B5551F',
          }}
        >
          <MessageSquareQuote className="w-4 h-4" />
          <span>Haqiqiy Fikrlar</span>
        </div>

        {/* Headline (Pinterest Reference 1: "What They're Saying") */}
        <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight mb-14"
          style={{ color: isDark ? '#F6F2EA' : '#1F1A12' }}
        >
          O'qituvchilarimiz nima deyishmoqda?
        </h2>

        {/* Stack of Angled Floating Cards (Pinterest Reference 1) */}
        <div className="relative space-y-6">
          
          {/* Decorative Sparkle Stars around the card stack */}
          <div className="absolute -top-6 -left-6 text-amber-500 text-2xl animate-pulse pointer-events-none">
            ✦
          </div>
          <div className="absolute top-1/2 -right-8 text-amber-500 text-2xl animate-pulse delay-500 pointer-events-none">
            ✦
          </div>
          <div className="absolute -bottom-6 -left-4 text-amber-500 text-xl animate-pulse delay-1000 pointer-events-none">
            ✦
          </div>

          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className={`p-6 sm:p-7 rounded-3xl border text-left shadow-md transition-all duration-300 hover:scale-[1.01] ${item.angleClass}`}
              style={{
                backgroundColor: isDark ? '#12121A' : '#EDE7DA',
                borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.12)',
              }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4">
                
                {/* Avatar and Author Info */}
                <div className="flex items-center gap-3.5">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-white text-lg shadow-sm shrink-0"
                    style={{ backgroundColor: item.avatarBg }}
                  >
                    {item.avatarText}
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-base sm:text-lg"
                      style={{ color: isDark ? '#F6F2EA' : '#1F1A12' }}
                    >
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-2 text-xs opacity-70">
                      <span>{item.role}</span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>

                {/* Star Rating Badge (Pinterest Reference 1: Dark pill with ★ 5/5) */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 dark:bg-black text-white text-xs font-bold shadow-inner">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{item.rating}</span>
                </div>

              </div>

              {/* Testimonial Text */}
              <p className="text-sm opacity-85 leading-relaxed">
                "{item.text}"
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
