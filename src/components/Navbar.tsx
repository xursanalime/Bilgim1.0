import React, { useState } from 'react';
import { Moon, Sun, Globe, GraduationCap, ChevronDown, UserPlus, LogIn, Settings, LogOut, User } from 'lucide-react';
import { Language, ThemeMode, UserSession } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface NavbarProps {
  theme: ThemeMode;
  toggleTheme: () => void;
  lang: Language;
  setLang: (l: Language) => void;
  user: UserSession | null;
  onOpenSchoolSetup: () => void;
  onOpenSchoolLanding?: (slug: string) => void;
  onLogout: () => void;
  onOpenLogin: () => void;
  onOpenRegister: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  toggleTheme,
  lang,
  setLang,
  user,
  onOpenSchoolSetup,
  onOpenSchoolLanding,
  onLogout,
  onOpenLogin,
  onOpenRegister,
}) => {
  const isDark = theme === 'dark';
  const t = TRANSLATIONS[lang].nav;
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'uz', label: "O'zbekcha", flag: "🇺🇿" },
    { code: 'ru', label: "Русский", flag: "🇷🇺" },
    { code: 'en', label: "English", flag: "🇬🇧" },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md border-b transition-colors"
      style={{
        backgroundColor: isDark ? 'rgba(20, 20, 19, 0.88)' : 'rgba(250, 249, 245, 0.88)',
        borderColor: isDark ? '#2C2B28' : '#E5DFD3',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div 
            className="w-11 h-11 rounded-xl flex items-center justify-center font-bold text-white shadow-md transition-transform group-hover:scale-105"
            style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
          >
            <GraduationCap className="w-6 h-6" />
          </div>
          <span className="font-display font-bold text-2xl tracking-tight leading-none"
            style={{ color: isDark ? '#F5F4F0' : '#141413' }}
          >
            Bilgim <span style={{ color: isDark ? '#6C63FF' : '#B5551F' }}>Edu</span>
          </span>
        </a>

        {/* Right side controls & Auth actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangDropdownOpen(!langDropdownOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border text-xs font-semibold cursor-pointer transition-colors"
              style={{ 
                borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
                color: isDark ? '#F5F4F0' : '#141413',
              }}
              title="Tilni tanlash / Выбрать язык / Select language"
            >
              <Globe className="w-3.5 h-3.5 opacity-70" />
              <span className="uppercase font-mono">{lang}</span>
              <ChevronDown className="w-3 h-3 opacity-60" />
            </button>

            {langDropdownOpen && (
              <div 
                className="absolute right-0 mt-2 w-36 py-1.5 rounded-2xl border shadow-xl z-50 animate-in fade-in zoom-in-95 duration-150"
                style={{
                  backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
                  borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                  color: isDark ? '#F5F4F0' : '#141413',
                }}
              >
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-left cursor-pointer transition-colors ${
                      lang === l.code 
                        ? 'font-bold' 
                        : 'opacity-70 hover:opacity-100'
                    }`}
                    style={{
                      backgroundColor: lang === l.code 
                        ? (isDark ? 'rgba(226, 135, 102, 0.15)' : 'rgba(204, 90, 51, 0.1)')
                        : 'transparent',
                      color: lang === l.code ? (isDark ? '#E28766' : '#CC5A33') : 'inherit',
                    }}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border transition-colors cursor-pointer"
            style={{ 
              borderColor: isDark ? '#2C2B28' : '#E5DFD3',
              backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
              color: isDark ? '#F5F4F0' : '#141413'
            }}
            aria-label="Rang rejimini o'zgartirish"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-stone-700" />}
          </button>

          {/* AUTHENTICATION STATE */}
          {user ? (
            /* Logged in state */
            <div className="flex items-center gap-2">
              {/* User badge */}
              <div 
                className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs"
                style={{
                  borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                  backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
                }}
              >
                <div 
                  className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ backgroundColor: isDark ? '#E28766' : '#CC5A33' }}
                >
                  {user.fullName ? user.fullName.charAt(0).toUpperCase() : 'U'}
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold truncate max-w-[120px]">{user.fullName}</span>
                  <span className="text-[10px] opacity-60">
                    {user.role === 'teacher' ? "Ustoz" : "Talaba"}
                  </span>
                </div>
              </div>

              {/* Teacher School Setup wizard & School link buttons */}
              {user.role === 'teacher' && (
                user.hasSetupSchool && user.school ? (
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => onOpenSchoolLanding && onOpenSchoolLanding(user.school!.slug)}
                      className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-white shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
                      style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
                      title="Maktab landing sahifasini ochish"
                    >
                      <Globe className="w-3.5 h-3.5" />
                      <span>{user.school.slug}.bilgimedu.uz</span>
                    </button>
                    <button
                      onClick={onOpenSchoolSetup}
                      className="p-2 rounded-xl border opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                      style={{
                        borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                        backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
                      }}
                      title="Maktab sozlamalari"
                    >
                      <Settings className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={onOpenSchoolSetup}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-white shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
                    style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
                  >
                    <Settings className="w-3.5 h-3.5" />
                    <span>Maktab Ochish Wizardi</span>
                  </button>
                )
              )}

              {/* Logout button */}
              <button
                onClick={onLogout}
                className="p-2 rounded-xl border opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
                style={{
                  borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                  backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
                }}
                title="Tizimdan chiqish"
              >
                <LogOut className="w-3.5 h-3.5 text-rose-500" />
              </button>
            </div>
          ) : (
            /* Guest (Not logged in) state */
            <div className="flex items-center gap-2">
              {/* Login Button */}
              <button
                onClick={onOpenLogin}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold rounded-xl transition-opacity hover:opacity-80 cursor-pointer"
                style={{ color: isDark ? '#F5F4F0' : '#141413' }}
              >
                <LogIn className="w-3.5 h-3.5 opacity-60" />
                <span>{t.login}</span>
              </button>

              {/* Register Button (Primary action) */}
              <button
                onClick={onOpenRegister}
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl text-white shadow-sm transition-all hover:scale-[1.02] cursor-pointer"
                style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
              >
                <UserPlus className="w-3.5 h-3.5" />
                <span>{t.register}</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </header>
  );
};

