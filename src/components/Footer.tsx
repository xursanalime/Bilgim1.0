import React from 'react';
import { GraduationCap, ShieldCheck, Heart } from 'lucide-react';
import { ThemeMode } from '../types';

interface FooterProps {
  theme: ThemeMode;
  onOpenCreateSchool: () => void;
  onOpenLogin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ theme, onOpenCreateSchool, onOpenLogin }) => {
  const isDark = theme === 'dark';

  return (
    <footer className="border-t py-16 px-4 sm:px-6 lg:px-8 transition-colors"
      style={{
        backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
        borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        
        {/* Brand & Mission */}
        <div className="md:col-span-2 space-y-4">
          <div className="flex items-center gap-3">
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white shadow-sm"
              style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
            >
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight"
              style={{ color: isDark ? '#F6F2EA' : '#1F1A12' }}
            >
              Bilgim <span style={{ color: isDark ? '#6C63FF' : '#B5551F' }}>Edu</span>
            </span>
          </div>

          <p className="text-sm opacity-75 max-w-md leading-relaxed">
            O'zbekistondagi mustaqil o'qituvchi va mutaxassislar uchun professional onlayn maktab infratuzilmasi. 
            Darslar, jonli efirlar, to'lovlar va uy vazifalarini bitta platformada boshqaring.
          </p>

          <div className="flex items-center gap-2 text-xs font-semibold opacity-70">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Netflix darajasidagi HLS video shifrlash va Cloudflare himoyasi</span>
          </div>
        </div>

        {/* Platform Links */}
        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 opacity-90"
            style={{ color: isDark ? '#F6F2EA' : '#1F1A12' }}
          >
            Platforma
          </h4>
          <ul className="space-y-2.5 text-sm opacity-75">
            <li><a href="#features" className="hover:opacity-100 transition-opacity">Imkoniyatlar</a></li>
            <li><a href="#how-it-works" className="hover:opacity-100 transition-opacity">Qanday ishlaydi?</a></li>
            <li><a href="#pricing" className="hover:opacity-100 transition-opacity">Tarif rejalari</a></li>
            <li><a href="#testimonials" className="hover:opacity-100 transition-opacity">O'qituvchilar fikri</a></li>
            <li><a href="#faq" className="hover:opacity-100 transition-opacity">Savol-javoblar</a></li>
          </ul>
        </div>

        {/* Legal & Systems (From docs/00: Bilgim vs Bilgim Edu) */}
        <div>
          <h4 className="font-display font-bold text-sm uppercase tracking-wider mb-4 opacity-90"
            style={{ color: isDark ? '#F6F2EA' : '#1F1A12' }}
          >
            Tizim & Aloqa
          </h4>
          <ul className="space-y-2.5 text-sm opacity-75">
            <li>
              <button onClick={onOpenCreateSchool} className="hover:opacity-100 transition-opacity text-left cursor-pointer">
                Maktab ochish (14 kun bepul)
              </button>
            </li>
            <li>
              <button onClick={onOpenLogin} className="hover:opacity-100 transition-opacity text-left cursor-pointer">
                Kabinetga kirish
              </button>
            </li>
            <li className="pt-2 text-xs opacity-60">
              To'lovlar: Uzcard, Humo, Payme, Click
            </li>
            <li className="text-xs opacity-60">
              Kompaniya portali: <strong className="font-semibold">bilgim.uz</strong>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 text-xs opacity-60"
        style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.08)' }}
      >
        <p>© 2026 Bilgim Edu. Barcha huquqlar himoyalangan.</p>
        <p className="flex items-center gap-1">
          O'zbekistondagi ustozlar uchun muhabbat bilan yaratilgan <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
        </p>
      </div>
    </footer>
  );
};
