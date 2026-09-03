import React from 'react';
import { 
  Award, 
  Users, 
  Star, 
  Play, 
  CheckCircle2, 
  Send,
  MessageSquare
} from 'lucide-react';
import { ThemeMode, SchoolLandingData } from '../../types';

interface SchoolTeacherProps {
  school: SchoolLandingData;
  theme: ThemeMode;
  onOpenEnroll: () => void;
}

export const SchoolTeacher: React.FC<SchoolTeacherProps> = ({
  school,
  theme,
  onOpenEnroll,
}) => {
  const isDark = theme === 'dark';

  return (
    <section 
      id="teacher"
      className="py-16 sm:py-24 border-b transition-colors"
      style={{
        backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
        borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
        color: isDark ? '#F5F4F0' : '#1F1A12',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Teacher Visual Avatar & Video Card */}
          <div className="lg:col-span-5 space-y-4">
            <div 
              className="p-8 rounded-3xl border shadow-xl text-center space-y-6 relative overflow-hidden"
              style={{
                backgroundColor: isDark ? '#12121A' : '#EDE7DA',
                borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.12)',
              }}
            >
              <div 
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl mx-auto flex items-center justify-center font-display font-bold text-4xl text-white shadow-xl"
                style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
              >
                {school.teacherName.split(' ').map(n => n[0]).join('')}
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl mb-1">
                  {school.teacherName}
                </h3>
                <p className="text-xs sm:text-sm opacity-70">
                  {school.teacherRole}
                </p>
              </div>

              <div 
                className="p-4 rounded-2xl border grid grid-cols-3 gap-2 text-center"
                style={{
                  backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                  borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.08)',
                }}
              >
                <div>
                  <div className="font-display font-bold text-base sm:text-lg">
                    {school.teacherExperience}
                  </div>
                  <div className="text-[10px] opacity-60 uppercase font-semibold">Tajriba</div>
                </div>
                <div>
                  <div className="font-display font-bold text-base sm:text-lg">
                    {school.teacherStudentsCount}
                  </div>
                  <div className="text-[10px] opacity-60 uppercase font-semibold">Talaba</div>
                </div>
                <div>
                  <div className="font-display font-bold text-base sm:text-lg text-amber-500">
                    {school.teacherRating}
                  </div>
                  <div className="text-[10px] opacity-60 uppercase font-semibold">Reyting</div>
                </div>
              </div>

              {/* Video message CTA */}
              <button
                onClick={onOpenEnroll}
                className="w-full py-3 rounded-xl border font-semibold text-xs flex items-center justify-center gap-2 hover:opacity-100 transition-opacity cursor-pointer"
                style={{ 
                  borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.04)' : 'rgba(31, 26, 18, 0.04)'
                }}
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Ustozning Video Murojaatini Ko'rish</span>
              </button>
            </div>
          </div>

          {/* Right Column: Bio & Methodology */}
          <div className="lg:col-span-7 space-y-6">
            <div 
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
              style={{
                backgroundColor: isDark ? 'rgba(108, 99, 255, 0.12)' : 'rgba(181, 85, 31, 0.08)',
                color: isDark ? '#6C63FF' : '#B5551F',
              }}
            >
              <Award className="w-3.5 h-3.5" />
              <span>O'qituvchi Haqida</span>
            </div>

            <h2 className="font-display font-bold text-2xl sm:text-4xl tracking-tight leading-snug">
              "Mening asosiy maqsadim — shunchaki diplom emas, bozorda talab yuqori bo'lgan haqiqiy mutaxassis yetishtirish."
            </h2>

            <p className="text-sm sm:text-base opacity-80 leading-relaxed">
              {school.teacherBio}
            </p>

            {/* Guarantees / Quality Highlights */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Har bir uy vazifasiga shaxsiy va satrma-satr yozma/ovozli fikr bildirish</span>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Har hafta savol-javoblar uchun maxsus jonli efir va mentorlik sessiyalari</span>
              </div>

              <div className="flex items-start gap-3 text-xs sm:text-sm">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <span>Yakuniy loyihani muvaffaqiyatli tamomlaganlarga ishga tavsiya va rezyume yordami</span>
              </div>
            </div>

            {/* Telegram channel link if available */}
            {school.telegramChannel && (
              <div className="pt-2">
                <a
                  href={`https://t.me/${school.telegramChannel.replace('@', '')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-xs font-semibold opacity-80 hover:opacity-100 transition-opacity"
                  style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)' }}
                >
                  <Send className="w-3.5 h-3.5 text-sky-500" />
                  <span>Ustozning Telegram kanali ({school.telegramChannel})</span>
                </a>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
