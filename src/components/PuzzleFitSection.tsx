import React from 'react';
import { Send, Check, Sparkles } from 'lucide-react';
import { ThemeMode } from '../types';

interface PuzzleFitProps {
  theme: ThemeMode;
  onOpenCreateSchool: () => void;
}

export const PuzzleFitSection: React.FC<PuzzleFitProps> = ({ theme, onOpenCreateSchool }) => {
  const isDark = theme === 'dark';

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Eyebrow */}
        <p className="text-xs uppercase tracking-widest font-bold mb-3 opacity-70"
          style={{ color: isDark ? '#6C63FF' : '#B5551F' }}
        >
          Mukammal Hamkorlik
        </p>

        {/* Heading in Fraunces serif */}
        <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight mb-4"
          style={{ color: isDark ? '#F6F2EA' : '#1F1A12' }}
        >
          Sizning Bilimingiz + Bizning Tizim ={' '}
          <span className="italic font-normal" style={{ color: isDark ? '#6C63FF' : '#B5551F' }}>
            Muvaffaqiyatli Maktab
          </span>
        </h2>

        <p className="max-w-xl mx-auto text-sm sm:text-base opacity-75 mb-12">
          Siz o'z sohangizning eng zo'r mutaxassisisiz. Biz esa texnik qiyinchiliklar, 
          serverlar, xavfsizlik va to'lovlarni o'z zimmamizga olamiz.
        </p>

        {/* Puzzle Graphic Simulation (Pinterest Reference 5 concept) */}
        <div className="relative max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-2 mb-12">
          
          {/* Left Piece: Teacher's Expertise */}
          <div 
            className="w-full md:w-1/2 p-8 rounded-3xl border text-left relative shadow-lg transform md:-rotate-1 transition-transform hover:rotate-0"
            style={{
              backgroundColor: isDark ? '#12121A' : '#EDE7DA',
              borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.12)',
            }}
          >
            {/* Top right interlocking bump badge */}
            <div className="hidden md:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full items-center justify-center font-bold text-xs text-white z-20 shadow-md"
              style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
            >
              +
            </div>

            <span className="text-xs uppercase font-bold tracking-wider opacity-60">Siz tomondan</span>
            <h3 className="font-display font-bold text-2xl mt-1 mb-4"
              style={{ color: isDark ? '#F6F2EA' : '#1F1A12' }}
            >
              Sizning Bilimingiz
            </h3>
            <ul className="space-y-2 text-sm opacity-85">
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>O'z sohangizdagi ekspertiza</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Mualliflik darslari va tajriba</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>O'quvchilar bilan muloqot</span>
              </li>
            </ul>
          </div>

          {/* Right Piece: Bilgim Edu Platform (Accent color) */}
          <div 
            className="w-full md:w-1/2 p-8 rounded-3xl text-left text-white relative shadow-xl transform md:rotate-1 transition-transform hover:rotate-0"
            style={{
              backgroundColor: isDark ? '#6C63FF' : '#B5551F',
            }}
          >
            <span className="text-xs uppercase font-bold tracking-wider text-white/80">Bilgim Edu tomonidan</span>
            <h3 className="font-display font-bold text-2xl mt-1 mb-4 text-white">
              Bizning Infratuzilma
            </h3>
            <ul className="space-y-2 text-sm text-white/90">
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Netflix darajasidagi video himoyasi</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Avtomatik Payme / Click hisob-kitob</span>
              </li>
              <li className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                <span>Jonli darslar, uy ishi va gamifikatsiya</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Telegram/Direct CTA from Ref 5 */}
        <div className="inline-flex flex-col sm:flex-row items-center gap-3">
          <button
            onClick={onOpenCreateSchool}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full font-bold text-sm text-white shadow-md transition-transform hover:scale-105 active:scale-95 cursor-pointer"
            style={{
              backgroundColor: isDark ? '#6C63FF' : '#B5551F',
            }}
          >
            <span>Hoziroq O'z Maktabingizni Yarating</span>
            <Send className="w-4 h-4" />
          </button>
          <span className="text-xs opacity-60">14 kun bepul • Sinab ko'rish hech qanday majburiyat yuklamaydi</span>
        </div>

      </div>
    </section>
  );
};
