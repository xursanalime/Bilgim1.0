import React from 'react';
import { motion } from 'motion/react';
import { 
  Play, 
  Star, 
  Users, 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { ThemeMode, SchoolLandingData } from '../../types';

interface SchoolHeroProps {
  school: SchoolLandingData;
  theme: ThemeMode;
  onOpenEnroll: () => void;
  onViewCourses: () => void;
}

export const SchoolHero: React.FC<SchoolHeroProps> = ({
  school,
  theme,
  onOpenEnroll,
  onViewCourses,
}) => {
  const isDark = theme === 'dark';

  return (
    <section 
      className="relative pt-12 pb-16 lg:pt-18 lg:pb-24 overflow-hidden border-b transition-colors"
      style={{
        backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
        borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
        color: isDark ? '#F5F4F0' : '#1F1A12',
      }}
    >
      {/* Subtle background ambient blur */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none opacity-10"
        style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Teacher info, Promise, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Tag / Subdomain badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold"
              style={{
                backgroundColor: isDark ? 'rgba(108, 99, 255, 0.1)' : 'rgba(181, 85, 31, 0.08)',
                borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.12)',
                color: isDark ? '#6C63FF' : '#B5551F',
              }}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{school.field} • Rasmiy Onlayn Maktabi</span>
            </div>

            {/* School Hero Heading */}
            <h1 className="font-display font-bold text-3xl sm:text-5xl lg:text-5xl tracking-tight leading-[1.12]">
              {school.heroPromise}
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg opacity-75 max-w-2xl leading-relaxed">
              {school.heroSubtext}
            </p>

            {/* Teacher Credibility Box */}
            <div 
              className="p-4 rounded-2xl border flex flex-wrap items-center gap-4 sm:gap-6"
              style={{
                backgroundColor: isDark ? '#12121A' : '#EDE7DA',
                borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.12)',
              }}
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-display font-bold text-lg text-white shadow-sm shrink-0"
                  style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
                >
                  {school.teacherName.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-bold text-sm sm:text-base">
                    {school.teacherName}
                  </div>
                  <div className="text-xs opacity-65 line-clamp-1">
                    {school.teacherRole}
                  </div>
                </div>
              </div>

              <div className="h-8 w-px opacity-20 bg-current hidden sm:block" />

              {/* Stats badges */}
              <div className="flex items-center gap-4 text-xs font-semibold">
                <div className="flex items-center gap-1.5">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span>{school.teacherRating}</span>
                </div>
                <div className="flex items-center gap-1.5 opacity-80">
                  <Users className="w-4 h-4 opacity-60" />
                  <span>{school.teacherStudentsCount} talaba</span>
                </div>
                <div className="flex items-center gap-1.5 opacity-80">
                  <Award className="w-4 h-4 opacity-60" />
                  <span>{school.teacherExperience} tajriba</span>
                </div>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <button
                onClick={onOpenEnroll}
                className="px-7 py-3.5 rounded-xl font-bold text-sm text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
              >
                <span>Kursga Yozilish & Sinov Darsi</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onViewCourses}
                className="px-6 py-3.5 rounded-xl font-semibold text-sm border flex items-center justify-center gap-2 opacity-80 hover:opacity-100 transition-opacity cursor-pointer"
                style={{ 
                  borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.18)',
                  backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(31, 26, 18, 0.03)'
                }}
              >
                <BookOpen className="w-4 h-4" />
                <span>O'quv Dasturlari ({school.courses.length})</span>
              </button>
            </div>

            {/* Trust bullet guarantees */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs opacity-70 pt-2">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>14 kunlik to'lov kafolati</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Rasmiy bitiruv sertifikati</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Ustozdan individual fikr-mulohaza</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Video & Course Preview Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-3xl border shadow-xl overflow-hidden"
              style={{
                backgroundColor: isDark ? '#12121A' : '#EDE7DA',
                borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.12)',
              }}
            >
              {/* Fake video header mock */}
              <div 
                className="relative aspect-video flex items-center justify-center p-6 text-center cursor-pointer group"
                style={{
                  backgroundColor: isDark ? '#181824' : '#E5DFD3',
                  backgroundImage: 'radial-gradient(circle at center, rgba(181, 85, 31, 0.12) 0%, transparent 70%)',
                }}
                onClick={onOpenEnroll}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110"
                  style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
                >
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>

                <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-xl bg-black/70 backdrop-blur-sm text-white text-left flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
                    <span className="text-xs font-semibold line-clamp-1">
                      {school.previewVideoTitle}
                    </span>
                  </div>
                  <span className="text-[10px] opacity-75 font-mono px-1.5 py-0.5 rounded bg-white/10">
                    03:45
                  </span>
                </div>
              </div>

              {/* Course Highlights & Curriculum Snapshot */}
              <div className="p-5 sm:p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider opacity-70">
                    Birinchi Kurs Tavsiyasi
                  </span>
                  <span 
                    className="text-[11px] font-bold px-2 py-0.5 rounded-md"
                    style={{ 
                      backgroundColor: isDark ? 'rgba(108, 99, 255, 0.15)' : 'rgba(181, 85, 31, 0.12)',
                      color: isDark ? '#6C63FF' : '#B5551F'
                    }}
                  >
                    {school.courses[0]?.badge || "Ommabop"}
                  </span>
                </div>

                <div>
                  <h3 className="font-display font-bold text-lg mb-1">
                    {school.courses[0]?.title}
                  </h3>
                  <p className="text-xs opacity-70 line-clamp-2">
                    {school.courses[0]?.description}
                  </p>
                </div>

                {/* Modules breakdown */}
                <div 
                  className="p-3.5 rounded-xl border text-xs space-y-2"
                  style={{
                    backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                    borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
                  }}
                >
                  <div className="flex justify-between items-center opacity-80">
                    <span>Davomiyligi:</span>
                    <span className="font-semibold">{school.courses[0]?.duration}</span>
                  </div>
                  <div className="flex justify-between items-center opacity-80">
                    <span>Darslar soni:</span>
                    <span className="font-semibold">{school.courses[0]?.lessonsCount} ta amaliy dars</span>
                  </div>
                  <div className="flex justify-between items-center opacity-80">
                    <span>Formati:</span>
                    <span className="font-semibold">{school.courses[0]?.format.split('+')[0]}</span>
                  </div>
                </div>

                <button
                  onClick={onOpenEnroll}
                  className="w-full py-3 rounded-xl font-bold text-xs text-white shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                  style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
                >
                  <span>1-Darsni Bepul Sinab Ko'rish</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
