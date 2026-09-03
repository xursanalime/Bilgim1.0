import React from 'react';
import { Moon, Sun, Globe, Sparkles, GraduationCap } from 'lucide-react';
import { Language, ThemeMode } from '../types';

interface NavbarProps {
  theme: ThemeMode;
  toggleTheme: () => void;
  lang: Language;
  setLang: (l: Language) => void;
  onOpenCreateSchool: () => void;
  onOpenLogin: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  toggleTheme,
  lang,
  setLang,
  onOpenCreateSchool,
  onOpenLogin,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md border-b transition-colors"
      style={{
        backgroundColor: theme === 'dark' ? 'rgba(10, 10, 15, 0.85)' : 'rgba(246, 242, 234, 0.88)',
        borderColor: theme === 'dark' ? '#232332' : 'rgba(31, 26, 18, 0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div 
            className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white shadow-md transition-transform group-hover:scale-105"
            style={{ backgroundColor: theme === 'dark' ? '#6C63FF' : '#B5551F' }}
          >
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-2xl tracking-tight leading-none"
              style={{ color: theme === 'dark' ? '#F6F2EA' : '#1F1A12' }}
            >
              Bilgim <span style={{ color: theme === 'dark' ? '#6C63FF' : '#B5551F' }}>Edu</span>
            </span>
            <span className="text-xs opacity-60 tracking-wider uppercase font-medium mt-1">
              Onlayn Maktab Platformasi
            </span>
          </div>
        </a>

        {/* Center navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a 
            href="#features" 
            className="opacity-80 hover:opacity-100 transition-opacity"
            style={{ color: theme === 'dark' ? '#F6F2EA' : '#1F1A12' }}
          >
            Imkoniyatlar
          </a>
          <a 
            href="#how-it-works" 
            className="opacity-80 hover:opacity-100 transition-opacity"
            style={{ color: theme === 'dark' ? '#F6F2EA' : '#1F1A12' }}
          >
            Qanday ishlaydi
          </a>
          <a 
            href="#pricing" 
            className="opacity-80 hover:opacity-100 transition-opacity"
            style={{ color: theme === 'dark' ? '#F6F2EA' : '#1F1A12' }}
          >
            Tariflar
          </a>
          <a 
            href="#testimonials" 
            className="opacity-80 hover:opacity-100 transition-opacity"
            style={{ color: theme === 'dark' ? '#F6F2EA' : '#1F1A12' }}
          >
            Sharhlar
          </a>
          <a 
            href="#faq" 
            className="opacity-80 hover:opacity-100 transition-opacity"
            style={{ color: theme === 'dark' ? '#F6F2EA' : '#1F1A12' }}
          >
            FAQ
          </a>
        </nav>

        {/* Right side controls & CTA */}
        <div className="flex items-center gap-3">
          
          {/* Language Selector */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-semibold cursor-pointer transition-colors"
            style={{ 
              borderColor: theme === 'dark' ? '#232332' : 'rgba(31, 26, 18, 0.12)',
              backgroundColor: theme === 'dark' ? '#12121A' : '#EDE7DA',
            }}
            onClick={() => setLang(lang === 'uz' ? 'ru' : lang === 'ru' ? 'en' : 'uz')}
            title="Tilni almashtirish"
          >
            <Globe className="w-3.5 h-3.5 opacity-70" />
            <span className="uppercase">{lang}</span>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border transition-colors cursor-pointer"
            style={{ 
              borderColor: theme === 'dark' ? '#232332' : 'rgba(31, 26, 18, 0.12)',
              backgroundColor: theme === 'dark' ? '#12121A' : '#EDE7DA',
              color: theme === 'dark' ? '#F6F2EA' : '#1F1A12'
            }}
            aria-label="Rang rejimini o'zgartirish"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
          </button>

          {/* Login Button */}
          <button
            onClick={onOpenLogin}
            className="px-4 py-2 text-sm font-semibold rounded-xl transition-opacity hover:opacity-80 cursor-pointer"
            style={{ color: theme === 'dark' ? '#F6F2EA' : '#1F1A12' }}
          >
            Kirish
          </button>

          {/* Create School Button (Main CTA) */}
          <button
            onClick={onOpenCreateSchool}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            style={{ 
              backgroundColor: theme === 'dark' ? '#6C63FF' : '#B5551F',
            }}
          >
            <Sparkles className="w-4 h-4" />
            <span>Maktab Ochish</span>
          </button>
        </div>

      </div>
    </header>
  );
};
