import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Play, Pause, ShieldCheck, Flame, Users, TrendingUp, 
  Calendar, Award, CheckCircle2, Video, 
  Volume2, Settings, ExternalLink, Sparkles
} from 'lucide-react';
import { ThemeMode, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface PlatformShowcaseProps {
  theme: ThemeMode;
  lang: Language;
  onOpenCreateSchool: () => void;
}

export const PlatformShowcase: React.FC<PlatformShowcaseProps> = ({ theme, lang, onOpenCreateSchool }) => {
  const isDark = theme === 'dark';
  const t = TRANSLATIONS[lang].showcase;
  const [activeTab, setActiveTab] = useState<'teacher' | 'student' | 'streak'>('teacher');

  // Watermark position simulator
  const [watermarkPos, setWatermarkPos] = useState({ top: '20%', left: '25%' });
  const [isPlaying, setIsPlaying] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState('1.0x');

  useEffect(() => {
    const interval = setInterval(() => {
      const topOptions = ['18%', '32%', '65%', '45%', '75%'];
      const leftOptions = ['15%', '45%', '60%', '25%', '50%'];
      const randomTop = topOptions[Math.floor(Math.random() * topOptions.length)];
      const randomLeft = leftOptions[Math.floor(Math.random() * leftOptions.length)];
      setWatermarkPos({ top: randomTop, left: randomLeft });
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="demo" className="py-24 px-4 sm:px-6 lg:px-8 border-t relative overflow-hidden"
      style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.08)' }}
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border mb-4 text-xs font-bold uppercase tracking-wider"
            style={{
              backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
              borderColor: isDark ? '#2C2B28' : '#E5DFD3',
              color: isDark ? '#E28766' : '#CC5A33',
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight mb-4"
            style={{ color: isDark ? '#F5F4F0' : '#141413' }}
          >
            {t.title}
          </h2>

          <p className="text-sm sm:text-base opacity-75 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Interactive Tab Switcher */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 rounded-2xl border backdrop-blur-md shadow-sm"
            style={{
              backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
              borderColor: isDark ? '#2C2B28' : '#E5DFD3',
            }}
          >
            <button
              onClick={() => setActiveTab('teacher')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === 'teacher' ? 'shadow-md text-white' : 'opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor: activeTab === 'teacher' ? (isDark ? '#E28766' : '#CC5A33') : 'transparent',
              }}
            >
              <TrendingUp className="w-4 h-4" />
              <span>{t.tabDashboard}</span>
            </button>

            <button
              onClick={() => setActiveTab('student')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === 'student' ? 'shadow-md text-white' : 'opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor: activeTab === 'student' ? (isDark ? '#E28766' : '#CC5A33') : 'transparent',
              }}
            >
              <Video className="w-4 h-4" />
              <span>{t.tabDrm}</span>
            </button>

            <button
              onClick={() => setActiveTab('streak')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === 'streak' ? 'shadow-md text-white' : 'opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor: activeTab === 'streak' ? (isDark ? '#E28766' : '#CC5A33') : 'transparent',
              }}
            >
              <Flame className="w-4 h-4 text-amber-500" />
              <span>{t.tabStreak}</span>
            </button>
          </div>
        </div>

        {/* Dynamic Display Canvas */}
        <motion.div 
          layout
          className="rounded-3xl border shadow-xl overflow-hidden"
          style={{
            backgroundColor: isDark ? '#12121A' : '#EDE7DA',
            borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
          }}
        >
          {/* Mock Browser Top Header Bar */}
          <div className="px-6 py-3.5 border-b flex items-center justify-between gap-4 text-xs font-mono"
            style={{
              backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
              borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
            }}
          >
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500 inline-block opacity-80" />
              <span className="w-3 h-3 rounded-full bg-amber-500 inline-block opacity-80" />
              <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block opacity-80" />
              <span className="ml-2 opacity-50 hidden sm:inline">bilgimedu.uz/live-preview</span>
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-lg border text-[11px] opacity-80"
              style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)' }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">Jonli rejim</span>
            </div>
          </div>

          {/* TAB 1: TEACHER DASHBOARD VIEW */}
          <AnimatePresence mode="wait">
            {activeTab === 'teacher' && (
              <motion.div
                key="teacher"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8"
              >
                {/* Stats row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                  <div className="p-5 rounded-2xl border"
                    style={{
                      backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                      borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs opacity-70 font-semibold uppercase">Faol Talabalar</span>
                      <Users className="w-4 h-4 text-blue-500" />
                    </div>
                    <div className="font-display font-bold text-3xl">184 nafar</div>
                    <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mt-1 inline-block">
                      +18 bu hafta
                    </span>
                  </div>

                  <div className="p-5 rounded-2xl border"
                    style={{
                      backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                      borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs opacity-70 font-semibold uppercase">Oylik Tushum</span>
                      <TrendingUp className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div className="font-display font-bold text-3xl">42,500,000</div>
                    <span className="text-xs opacity-70 font-medium mt-1 inline-block">
                      so'm (0% komissiya)
                    </span>
                  </div>

                  <div className="p-5 rounded-2xl border"
                    style={{
                      backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                      borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs opacity-70 font-semibold uppercase">Dars Qatnashuvi</span>
                      <Award className="w-4 h-4 text-amber-500" />
                    </div>
                    <div className="font-display font-bold text-3xl">96.8%</div>
                    <span className="text-xs opacity-70 font-medium mt-1 inline-block">
                      O'rtacha faollik
                    </span>
                  </div>

                  <div className="p-5 rounded-2xl border"
                    style={{
                      backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                      borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs opacity-70 font-semibold uppercase">Tekshirishga Tayyor</span>
                      <CheckCircle2 className="w-4 h-4 text-violet-500" />
                    </div>
                    <div className="font-display font-bold text-3xl">12 ta vazifa</div>
                    <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold mt-1 inline-block">
                      Kutilmoqda
                    </span>
                  </div>
                </div>

                {/* Courses and Schedule preview */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {/* Left 2 cols: Active courses */}
                  <div className="lg:col-span-2 p-6 rounded-2xl border"
                    style={{
                      backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                      borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-display font-bold text-base">Faol Kurslaringiz</h4>
                      <button 
                        onClick={onOpenCreateSchool}
                        className="text-xs font-bold px-3 py-1.5 rounded-lg text-white cursor-pointer"
                        style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
                      >
                        + Yangi Dars Qo'shish
                      </button>
                    </div>

                    <div className="space-y-3">
                      <div className="p-3.5 rounded-xl border flex items-center justify-between gap-4"
                        style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)' }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-emerald-500 flex items-center justify-center font-bold text-xs">
                            ENG
                          </div>
                          <div>
                            <div className="font-bold text-sm">IELTS Writing Band 7.5+ Masterkurs</div>
                            <div className="text-xs opacity-60">32 ta video dars • 114 talaba</div>
                          </div>
                        </div>
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                          Faol sotuvda
                        </span>
                      </div>

                      <div className="p-3.5 rounded-xl border flex items-center justify-between gap-4"
                        style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)' }}
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center font-bold text-xs">
                            VOC
                          </div>
                          <div>
                            <div className="font-bold text-sm">General English & Speaking Intensiv</div>
                            <div className="text-xs opacity-60">24 ta video dars • 70 talaba</div>
                          </div>
                        </div>
                        <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                          Faol sotuvda
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Right 1 col: Live lesson notification */}
                  <div className="p-6 rounded-2xl border flex flex-col justify-between"
                    style={{
                      backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                      borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
                    }}
                  >
                    <div>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider mb-2 opacity-70">
                        <Calendar className="w-4 h-4 text-rose-500" />
                        <span>Bugungi Jonli Efir</span>
                      </div>
                      <h4 className="font-display font-bold text-lg mb-1">
                        Task 2: Essay Tahlili
                      </h4>
                      <p className="text-xs opacity-75 mb-4">
                        Bugun soat 20:00 da jonli translyatsiya boshlanadi. Barcha talabalarga eslatma jo'natildi.
                      </p>
                    </div>

                    <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold">
                      ✓ Avtomatik Payme/Click to'lovlar tekshirilgan
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: STUDENT VIDEO CLASSROOM & DYNAMIC WATERMARK SIMULATOR */}
            {activeTab === 'student' && (
              <motion.div
                key="student"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  
                  {/* Simulated Video Player with Dynamic Anti-Piracy Watermark */}
                  <div className="lg:col-span-2">
                    <div className="relative aspect-video rounded-2xl bg-neutral-900 overflow-hidden border border-neutral-800 shadow-2xl flex flex-col justify-between p-4 group">
                      
                      {/* Video Simulated Background Scene */}
                      <div className="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-950 to-neutral-900 flex items-center justify-center pointer-events-none">
                        <div className="text-center p-6 max-w-sm">
                          <div className="w-16 h-16 rounded-full bg-white/10 mx-auto flex items-center justify-center mb-3 backdrop-blur-sm">
                            <Video className="w-8 h-8 text-white/80" />
                          </div>
                          <div className="text-white font-display font-bold text-lg">
                            4-Dars: Argumentation Techniques
                          </div>
                          <div className="text-neutral-400 text-xs mt-1 font-mono">
                            Shifrlangan HLS video oqimi (Cloudflare R2)
                          </div>
                        </div>
                      </div>

                      {/* DYNAMIC ANTI-PIRACY WATERMARK (Moves randomly!) */}
                      <motion.div
                        animate={{ top: watermarkPos.top, left: watermarkPos.left }}
                        transition={{ type: 'spring', damping: 20, stiffness: 60 }}
                        className="absolute z-20 px-3 py-1 rounded-md bg-black/60 border border-white/20 text-white/70 text-[11px] font-mono select-none pointer-events-none backdrop-blur-xs shadow-lg"
                      >
                        <span className="text-amber-400 font-bold">ID: #92841</span> • +998 90 765 43 21
                      </motion.div>

                      {/* Top Player Badges */}
                      <div className="relative z-10 flex items-center justify-between text-xs text-white/80">
                        <div className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm border border-white/10">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                          <span>Piratlikka qarshi dinamik suv belgisi</span>
                        </div>
                        <div className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-sm text-[11px] font-mono">
                          1080p Full HD
                        </div>
                      </div>

                      {/* Bottom Player Controls */}
                      <div className="relative z-10 p-3 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-white flex items-center justify-between gap-4">
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                          >
                            {isPlaying ? <Pause className="w-4 h-4 text-white" /> : <Play className="w-4 h-4 text-white" />}
                          </button>
                          <span className="text-xs font-mono opacity-80">14:28 / 38:50</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="flex-1 h-1.5 rounded-full bg-white/20 overflow-hidden cursor-pointer">
                          <div className="w-[38%] h-full bg-emerald-500 rounded-full" />
                        </div>

                        {/* Speed Switcher */}
                        <div className="flex items-center gap-2">
                          {['1.0x', '1.25x', '1.5x'].map((spd) => (
                            <button
                              key={spd}
                              onClick={() => setPlaybackSpeed(spd)}
                              className={`text-[11px] px-2 py-0.5 rounded font-mono cursor-pointer transition-colors ${
                                playbackSpeed === spd ? 'bg-white text-black font-bold' : 'text-white/70 hover:text-white'
                              }`}
                            >
                              {spd}
                            </button>
                          ))}
                        </div>
                      </div>

                    </div>

                    {/* Explanatory callout */}
                    <div className="mt-4 p-3.5 rounded-xl border flex items-start gap-3 text-xs"
                      style={{
                        backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                        borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
                      }}
                    >
                      <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="block font-semibold mb-0.5">Qanday qilib kurs o'g'irlanmaydi?</strong>
                        <span className="opacity-80">
                          Har bir talaba darsni ko'rganda, uning shaxsiy ID raqami va telefon raqami video ustida har bir necha soniyada 
                          harakatlanib turadi. Agar ekranni yozib olib tarqatishsa, kim tarqatgani bir lahzada aniqlanadi.
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Playlist & Homework */}
                  <div className="p-5 rounded-2xl border flex flex-col justify-between"
                    style={{
                      backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                      borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
                    }}
                  >
                    <div>
                      <h4 className="font-display font-bold text-sm mb-3">Kurs Mundarijasi</h4>
                      <div className="space-y-2">
                        <div className="p-2.5 rounded-xl border text-xs font-semibold flex items-center justify-between"
                          style={{
                            backgroundColor: isDark ? 'rgba(108, 99, 255, 0.1)' : 'rgba(181, 85, 31, 0.1)',
                            borderColor: isDark ? '#6C63FF' : '#B5551F',
                            color: isDark ? '#6C63FF' : '#B5551F',
                          }}
                        >
                          <div className="flex items-center gap-2">
                            <Play className="w-3.5 h-3.5 fill-current" />
                            <span>4-Dars: Argumentation</span>
                          </div>
                          <span className="text-[10px] font-mono">38:50</span>
                        </div>

                        <div className="p-2.5 rounded-xl border text-xs opacity-75 flex items-center justify-between"
                          style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)' }}
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                            <span>3-Dars: Complex Sentences</span>
                          </div>
                          <span className="text-[10px] font-mono">42:10</span>
                        </div>

                        <div className="p-2.5 rounded-xl border text-xs opacity-75 flex items-center justify-between"
                          style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)' }}
                        >
                          <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                            <span>2-Dars: Lexical Resources</span>
                          </div>
                          <span className="text-[10px] font-mono">29:15</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t mt-4"
                      style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)' }}
                    >
                      <button 
                        onClick={onOpenCreateSchool}
                        className="w-full py-2.5 rounded-xl text-xs font-bold text-white cursor-pointer"
                        style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
                      >
                        O'z Maktabingizda Sinab Ko'ring
                      </button>
                    </div>

                  </div>

                </div>
              </motion.div>
            )}

            {/* TAB 3: GAMIFICATION & STREAK VIEW */}
            {activeTab === 'streak' && (
              <motion.div
                key="streak"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                  
                  {/* Streak Card */}
                  <div className="p-6 rounded-2xl border text-center relative overflow-hidden"
                    style={{
                      backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                      borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
                    }}
                  >
                    <motion.div 
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-20 h-20 rounded-full bg-amber-500/15 text-amber-500 mx-auto flex items-center justify-center mb-3 shadow-inner"
                    >
                      <Flame className="w-10 h-10 fill-amber-500" />
                    </motion.div>

                    <h3 className="font-display font-bold text-3xl mb-1">
                      14 Kunlik Olovcha! 🔥
                    </h3>
                    <p className="text-xs opacity-75 max-w-xs mx-auto mb-4">
                      Talaba har kuni dars ko'rishi va vazifa topshirishi uchun Duolingo uslubidagi motivatsiya tizimi.
                    </p>

                    <div className="flex justify-center gap-1.5">
                      {['D', 'S', 'CH', 'P', 'J', 'SH', 'Y'].map((day, i) => (
                        <div key={i} className="text-center">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-xs ${
                            i < 5 ? 'bg-amber-500 text-white shadow-sm' : 'bg-black/10 dark:bg-white/10 opacity-50'
                          }`}>
                            {i < 5 ? '✓' : ''}
                          </div>
                          <span className="text-[10px] opacity-60 font-semibold mt-1 block">{day}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Leaderboard preview */}
                  <div className="p-6 rounded-2xl border"
                    style={{
                      backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                      borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
                    }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4 text-amber-500" />
                        <h4 className="font-display font-bold text-sm">Guruh Yetakchilari</h4>
                      </div>
                      <span className="text-[11px] opacity-60">Haftalik reyting</span>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs p-2 rounded-xl bg-amber-500/10 font-semibold">
                        <div className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-[10px] flex items-center justify-center font-bold">1</span>
                          <span>Sardorbek Rahimov</span>
                        </div>
                        <span className="font-bold text-amber-600 dark:text-amber-400">1,480 ball</span>
                      </div>

                      <div className="flex items-center justify-between text-xs p-2 rounded-xl opacity-80">
                        <div className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-slate-400 text-white text-[10px] flex items-center justify-center font-bold">2</span>
                          <span>Malika Karimova</span>
                        </div>
                        <span className="font-bold">1,310 ball</span>
                      </div>

                      <div className="flex items-center justify-between text-xs p-2 rounded-xl opacity-80">
                        <div className="flex items-center gap-2.5">
                          <span className="w-5 h-5 rounded-full bg-amber-700 text-white text-[10px] flex items-center justify-center font-bold">3</span>
                          <span>Jasur Aliyev</span>
                        </div>
                        <span className="font-bold">1,150 ball</span>
                      </div>
                    </div>
                  </div>

                  {/* Impact for teacher */}
                  <div className="p-6 rounded-2xl border space-y-4"
                    style={{
                      backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                      borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
                    }}
                  >
                    <div className="text-xs uppercase font-bold tracking-wider opacity-60">
                      Natija Qanday Bo'ladi?
                    </div>

                    <h4 className="font-display font-bold text-lg leading-snug">
                      Kursni oxirigacha bitiruvchilar soni 3 barobarga oshadi
                    </h4>

                    <p className="text-xs opacity-75 leading-relaxed">
                      Telegramda talaba darslarni tashlab ketadi. Bilgim Edu dagi ballar va olovcha esa o'quvchilarni har kuni platformaga kirishga va darslarni o'z vaqtida tugatishga majbur qiladi.
                    </p>

                    <button 
                      onClick={onOpenCreateSchool}
                      className="w-full py-3 rounded-xl text-xs font-bold text-white shadow-sm cursor-pointer"
                      style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
                    >
                      Gamifikatsiyani Ishga Tushirish
                    </button>
                  </div>

                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </motion.div>

      </div>
    </section>
  );
};
