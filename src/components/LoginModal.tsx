import React, { useState } from 'react';
import { X, Lock, ArrowRight, CheckCircle2, User, Phone, GraduationCap } from 'lucide-react';
import { ThemeMode, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
  theme: ThemeMode;
  lang: Language;
}

export const LoginModal: React.FC<LoginModalProps> = ({ 
  isOpen, 
  onClose, 
  onOpenRegister, 
  theme, 
  lang 
}) => {
  const isDark = theme === 'dark';
  const t = TRANSLATIONS[lang].auth;

  const [role, setRole] = useState<'teacher' | 'student'>('teacher');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const [forgotStatus, setForgotStatus] = useState<'idle' | 'sent'>('idle');

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Muvaffaqiyatli kirildi: ${role === 'teacher' ? t.roleTeacher : t.roleStudent} kabineti.`);
    onClose();
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    setForgotStatus('sent');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md rounded-3xl border shadow-2xl overflow-hidden relative"
        style={{
          backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
          borderColor: isDark ? '#2C2B28' : '#E5DFD3',
          color: isDark ? '#F5F4F0' : '#141413',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full opacity-60 hover:opacity-100 transition-opacity cursor-pointer z-10"
          style={{ backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(20, 20, 19, 0.05)' }}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b text-center"
          style={{ borderColor: isDark ? '#2C2B28' : '#E5DFD3' }}
        >
          <h2 className="font-display font-bold text-2xl mb-1">
            {forgotPasswordMode ? t.forgotPasswordTitle : t.loginTitle}
          </h2>
          <p className="text-xs opacity-70">
            {forgotPasswordMode 
              ? "Telefon raqamingizni kiriting va biz SMS orqali tiklash kodini yuboramiz"
              : t.loginSubtitle}
          </p>

          {!forgotPasswordMode && (
            <div className="mt-6 p-1.5 rounded-2xl border flex items-center gap-1"
              style={{
                backgroundColor: isDark ? '#141413' : '#FAF9F5',
                borderColor: isDark ? '#2C2B28' : '#E5DFD3',
              }}
            >
              <button
                type="button"
                onClick={() => setRole('teacher')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  role === 'teacher' ? 'shadow-sm text-white' : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: role === 'teacher' ? (isDark ? '#E28766' : '#CC5A33') : 'transparent',
                }}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>{t.roleTeacher}</span>
              </button>

              <button
                type="button"
                onClick={() => setRole('student')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  role === 'student' ? 'shadow-sm text-white' : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: role === 'student' ? (isDark ? '#E28766' : '#CC5A33') : 'transparent',
                }}
              >
                <User className="w-3.5 h-3.5" />
                <span>{t.roleStudent}</span>
              </button>
            </div>
          )}
        </div>

        {/* Form area */}
        {forgotPasswordMode ? (
          <form onSubmit={handleForgotPassword} className="p-6 sm:p-8 space-y-4">
            {forgotStatus === 'sent' ? (
              <div className="text-center py-4 space-y-3">
                <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base">SMS yuborildi!</h4>
                <p className="text-xs opacity-75">
                  Agar ushbu raqam tizimda mavjud bo'lsa, tiklash kodi yuborildi.
                </p>
                <button
                  type="button"
                  onClick={() => { setForgotPasswordMode(false); setForgotStatus('idle'); }}
                  className="px-6 py-2.5 rounded-xl font-bold text-xs text-white cursor-pointer mt-2"
                  style={{ backgroundColor: isDark ? '#E28766' : '#CC5A33' }}
                >
                  Kirishga qaytish
                </button>
              </div>
            ) : (
              <>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider opacity-80 block mb-1.5">
                    {t.phone}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-3.5 opacity-40" />
                    <input
                      type="tel"
                      required
                      placeholder="+998 90 123 45 67"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none"
                      style={{
                        backgroundColor: isDark ? '#141413' : '#FAF9F5',
                        borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-white shadow-md cursor-pointer"
                  style={{ backgroundColor: isDark ? '#E28766' : '#CC5A33' }}
                >
                  Tiklash kodini olish
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={() => setForgotPasswordMode(false)}
                    className="text-xs opacity-70 hover:opacity-100 underline cursor-pointer"
                  >
                    Orqaga qaytish
                  </button>
                </div>
              </>
            )}
          </form>
        ) : (
          <form onSubmit={handleLoginSubmit} className="p-6 sm:p-8 space-y-4">
            <div>
              <label className="text-xs font-bold uppercase tracking-wider opacity-80 block mb-1.5">
                {t.phoneOrEmail}
              </label>
              <div className="relative">
                <User className="w-4 h-4 absolute left-3.5 top-3.5 opacity-40" />
                <input
                  type="text"
                  required
                  value={identifier}
                  onChange={(e) => setIdentifier(e.target.value)}
                  placeholder="+998 90 123 45 67"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none"
                  style={{
                    backgroundColor: isDark ? '#141413' : '#FAF9F5',
                    borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                  }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold uppercase tracking-wider opacity-80">
                  {t.password}
                </label>
                <button
                  type="button"
                  onClick={() => setForgotPasswordMode(true)}
                  className="text-xs font-medium opacity-60 hover:opacity-100 underline cursor-pointer"
                >
                  {t.forgotPassword}
                </button>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-3.5 opacity-40" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none"
                  style={{
                    backgroundColor: isDark ? '#141413' : '#FAF9F5',
                    borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                  }}
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 mt-2 rounded-xl font-bold text-sm text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.01] active:scale-[0.99]"
              style={{ backgroundColor: isDark ? '#E28766' : '#CC5A33' }}
            >
              <span>{role === 'teacher' ? `${t.loginBtn} (${t.roleTeacher})` : `${t.loginBtn} (${t.roleStudent})`}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            {/* Switch to Register */}
            <div className="text-center pt-2 text-xs opacity-80">
              <span>{t.noAccount} </span>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenRegister();
                }}
                className="font-bold underline cursor-pointer hover:opacity-100"
                style={{ color: isDark ? '#E28766' : '#CC5A33' }}
              >
                {t.signUpNow}
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
