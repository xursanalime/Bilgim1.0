import React from 'react';
import { GraduationCap, ShieldCheck, Heart } from 'lucide-react';
import { ThemeMode, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface FooterProps {
  theme: ThemeMode;
  lang: Language;
  onOpenCreateSchool: () => void;
  onOpenLogin: () => void;
  onOpenRegister: () => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  theme, 
  lang, 
  onOpenCreateSchool, 
  onOpenLogin,
  onOpenRegister 
}) => {
  const isDark = theme === 'dark';
  const t = TRANSLATIONS[lang];

  return (
    <footer className="border-t py-16 px-4 sm:px-6 lg:px-8 transition-colors"
      style={{
        backgroundColor: isDark ? '#141413' : '#FAF9F5',
        borderColor: isDark ? '#2C2B28' : '#E5DFD3',
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        {/* Brand & Mission */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-sm"
              style={{ backgroundColor: isDark ? '#E28766' : '#CC5A33' }}
            >
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight"
              style={{ color: isDark ? '#F5F4F0' : '#141413' }}
            >
              Bilgim <span style={{ color: isDark ? '#E28766' : '#CC5A33' }}>Edu</span>
            </span>
          </div>

          <p className="text-sm opacity-75 max-w-md leading-relaxed">
            {t.footer.about}
          </p>

          <div className="flex items-center gap-2 text-xs font-semibold opacity-70">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>HLS DRM Video • Payme & Click • Cloudflare R2</span>
          </div>
        </div>

        {/* Platform Links */}
        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 opacity-90"
            style={{ color: isDark ? '#F5F4F0' : '#141413' }}
          >
            {t.nav.features}
          </h4>
          <ul className="space-y-2.5 text-sm opacity-75">
            <li><a href="#features" className="hover:opacity-100 transition-opacity">{t.nav.features}</a></li>
            <li><a href="#how-it-works" className="hover:opacity-100 transition-opacity">{t.nav.howItWorks}</a></li>
            <li><a href="#calculator" className="hover:opacity-100 transition-opacity">Kalkulyator</a></li>
            <li><a href="#pricing" className="hover:opacity-100 transition-opacity">{t.nav.pricing}</a></li>
            <li><a href="#faq" className="hover:opacity-100 transition-opacity">{t.nav.faq}</a></li>
          </ul>
        </div>

        {/* Action Links */}
        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 opacity-90"
            style={{ color: isDark ? '#F5F4F0' : '#141413' }}
          >
            {t.auth.loginTitle}
          </h4>
          <ul className="space-y-2.5 text-sm opacity-75">
            <li>
              <button 
                onClick={onOpenLogin}
                className="hover:opacity-100 transition-opacity text-left cursor-pointer"
              >
                {t.auth.loginBtn}
              </button>
            </li>
            <li>
              <button 
                onClick={onOpenRegister}
                className="hover:opacity-100 transition-opacity text-left cursor-pointer"
              >
                {t.auth.registerTitle}
              </button>
            </li>
            <li>
              <button 
                onClick={onOpenCreateSchool}
                className="hover:opacity-100 transition-opacity text-left font-bold cursor-pointer"
                style={{ color: isDark ? '#E28766' : '#CC5A33' }}
              >
                {t.nav.createSchool}
              </button>
            </li>
          </ul>
        </div>

      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-60"
        style={{ borderColor: isDark ? '#2C2B28' : '#E5DFD3' }}
      >
        <div>
          © {new Date().getFullYear()} Bilgim Edu. {t.footer.copyright}
        </div>
        <div className="flex items-center gap-1">
          <span>{t.footer.madeForTeachers}</span>
        </div>
      </div>
    </footer>
  );
};
