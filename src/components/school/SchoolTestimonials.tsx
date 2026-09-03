import React from 'react';
import { Star, MessageSquareQuote, CheckCircle2 } from 'lucide-react';
import { ThemeMode, SchoolLandingData } from '../../types';

interface SchoolTestimonialsProps {
  school: SchoolLandingData;
  theme: ThemeMode;
}

export const SchoolTestimonials: React.FC<SchoolTestimonialsProps> = ({
  school,
  theme,
}) => {
  const isDark = theme === 'dark';

  return (
    <section 
      id="testimonials"
      className="py-16 sm:py-24 border-b transition-colors"
      style={{
        backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
        borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
        color: isDark ? '#F5F4F0' : '#1F1A12',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div 
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3"
            style={{
              backgroundColor: isDark ? 'rgba(108, 99, 255, 0.12)' : 'rgba(181, 85, 31, 0.08)',
              color: isDark ? '#6C63FF' : '#B5551F',
            }}
          >
            <MessageSquareQuote className="w-3.5 h-3.5" />
            <span>Bitiruvchilar Natijalari</span>
          </div>
          <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight mb-3">
            Haqiqiy Talabalar, Haqiqiy Natijalar
          </h2>
          <p className="text-sm sm:text-base opacity-75">
            Maktabimiz bitiruvchilari erishgan yutuqlar va ularning mustaqil fikrlari bilan tanishing.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {school.testimonials.map((item) => (
            <div 
              key={item.id}
              className="p-6 sm:p-7 rounded-3xl border shadow-sm flex flex-col justify-between space-y-4"
              style={{
                backgroundColor: isDark ? '#12121A' : '#EDE7DA',
                borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.12)',
              }}
            >
              <div className="space-y-3">
                {/* Rating stars */}
                <div className="flex items-center gap-1">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-xs font-semibold ml-1 opacity-70">5.0</span>
                </div>

                {/* Achievement Highlight Tag */}
                <div 
                  className="p-2.5 rounded-xl text-xs font-semibold flex items-center gap-2"
                  style={{
                    backgroundColor: isDark ? 'rgba(108, 99, 255, 0.12)' : 'rgba(181, 85, 31, 0.08)',
                    color: isDark ? '#6C63FF' : '#B5551F',
                  }}
                >
                  <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                  <span className="line-clamp-1">{item.achievement}</span>
                </div>

                {/* Comment quote */}
                <p className="text-xs sm:text-sm opacity-80 leading-relaxed italic">
                  "{item.comment}"
                </p>
              </div>

              {/* Student footer info */}
              <div className="pt-3 border-t flex items-center justify-between text-xs"
                style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)' }}
              >
                <div className="flex items-center gap-2.5">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-[11px]"
                    style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
                  >
                    {item.avatar}
                  </div>
                  <div>
                    <div className="font-bold">{item.studentName}</div>
                    <div className="text-[10px] opacity-60">Bitiruvchi</div>
                  </div>
                </div>

                <span className="opacity-50 text-[11px]">{item.date}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
