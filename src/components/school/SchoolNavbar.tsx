import React, { useState } from 'react';
import { 
  GraduationCap, 
  Sun, 
  Moon, 
  Globe, 
  ArrowLeft, 
  Sparkles, 
  Menu, 
  X,
  ExternalLink
} from 'lucide-react';
import { ThemeMode, SchoolLandingData } from '../../types';

interface SchoolNavbarProps {
  school: SchoolLandingData;
  theme: ThemeMode;
  toggleTheme: () => void;
  onReturnToPlatform: () => void;
  onOpenEnroll: () => void;
}

export const SchoolNavbar: React.FC<SchoolNavbarProps> = ({
  school,
  theme,
  toggleTheme,
  onReturnToPlatform,
  onOpenEnroll,
}) => {
  const isDark = theme === 'dark';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header 
      className="sticky top-0 z-40 w-full backdrop-blur-md border-b transition-colors"
      style={{
        backgroundColor: isDark ? 'rgba(10, 10, 15, 0.88)' : 'rgba(246, 242, 234, 0.88)',
        borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
        color: isDark ? '#F5F4F0' : '#1F1A12',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Left: Return to platform & School Brand */}
        <div className="flex items-center gap-3 sm:gap-4">
          <button
            onClick={onReturnToPlatform}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border text-xs font-semibold opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
            style={{ 
              borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(31, 26, 18, 0.03)'
            }}
            title="BilgimEdu bosh platformasiga qaytish"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">BilgimEdu</span>
          </button>

          <div className="h-5 w-px opacity-20 bg-current hidden sm:block" />

          {/* School Name & Subdomain Badge */}
          <div className="flex items-center gap-2.5">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-sm shrink-0"
              style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
            >
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display font-bold text-lg sm:text-xl tracking-tight leading-none">
                  {school.name}
                </span>
                <span 
                  className="hidden md:inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full border opacity-75"
                  style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)' }}
                >
                  <Globe className="w-2.5 h-2.5" />
                  <span>{school.slug}.bilgimedu.uz</span>
                </span>
              </div>
              <span className="text-xs opacity-60 line-clamp-1">
                Ustoz: {school.teacherName}
              </span>
            </div>
          </div>
        </div>

        {/* Center: Navigation anchors (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold tracking-wide uppercase opacity-80">
          <a href="#courses" className="hover:opacity-100 transition-opacity">Kurslar</a>
          <a href="#audience" className="hover:opacity-100 transition-opacity">Kimlar uchun</a>
          <a href="#teacher" className="hover:opacity-100 transition-opacity">Ustoz</a>
          <a href="#testimonials" className="hover:opacity-100 transition-opacity">Natijalar</a>
          <a href="#pricing" className="hover:opacity-100 transition-opacity">Narxlar</a>
          <a href="#faq" className="hover:opacity-100 transition-opacity">FAQ</a>
        </nav>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl border opacity-75 hover:opacity-100 transition-all cursor-pointer"
            style={{ 
              borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.03)' : 'rgba(31, 26, 18, 0.03)'
            }}
            title={isDark ? "Yorug' rejim" : "Qorong'i rejim"}
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Enroll Button */}
          <button
            onClick={onOpenEnroll}
            className="inline-flex items-center gap-1.5 px-3.5 sm:px-4 py-2 rounded-xl text-xs font-bold text-white shadow-sm transition-transform hover:scale-[1.02] cursor-pointer"
            style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Darsga Yozilish</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl border opacity-75 hover:opacity-100 cursor-pointer"
            style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)' }}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden border-t px-5 py-4 space-y-3"
          style={{ 
            borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
            backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA'
          }}
        >
          <div className="flex items-center gap-1.5 text-xs font-mono opacity-60 pb-2 border-b"
            style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.08)' }}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>https://{school.slug}.bilgimedu.uz</span>
          </div>

          <nav className="flex flex-col space-y-2 text-sm font-medium">
            <a 
              href="#courses" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 opacity-80 hover:opacity-100"
            >
              Kurslar ro'yxati
            </a>
            <a 
              href="#audience" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 opacity-80 hover:opacity-100"
            >
              Kimlar uchun / Kimlar uchun emas
            </a>
            <a 
              href="#teacher" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 opacity-80 hover:opacity-100"
            >
              O'qituvchi haqida
            </a>
            <a 
              href="#testimonials" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 opacity-80 hover:opacity-100"
            >
              Sharhlar va natijalar
            </a>
            <a 
              href="#pricing" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 opacity-80 hover:opacity-100"
            >
              Narxlar va to'lov turlari
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 opacity-80 hover:opacity-100"
            >
              FAQ (Savol-javoblar)
            </a>
          </nav>

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onReturnToPlatform();
              }}
              className="w-full py-2.5 rounded-xl border text-xs font-semibold flex items-center justify-center gap-1.5"
              style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)' }}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BilgimEdu Bosh Platformasiga Qaytish</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
