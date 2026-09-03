import React, { useState } from 'react';
import { X, Lock, ArrowRight, CheckCircle2, User, Mail, GraduationCap, Send, AlertCircle } from 'lucide-react';
import { ThemeMode, Language, UserSession } from '../types';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
  onLoginSuccess: (user: UserSession) => void;
  theme: ThemeMode;
  lang: Language;
}

export const LoginModal: React.FC<LoginModalProps> = ({ 
  isOpen, 
  onClose, 
  onOpenRegister, 
  onLoginSuccess,
  theme, 
}) => {
  const isDark = theme === 'dark';

  const [role, setRole] = useState<'teacher' | 'student'>('teacher');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const [forgotInput, setForgotInput] = useState('');
  const [forgotStatus, setForgotStatus] = useState<'idle' | 'sent'>('idle');
  const [forgotChannel, setForgotChannel] = useState<'telegram' | 'email'>('telegram');
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      const isEmail = identifier.includes('@');
      const isPhone = identifier.startsWith('+') || /^\d+$/.test(identifier.replace(/\s+/g, ''));
      
      const sessionUser: UserSession = {
        id: `user-${Date.now()}`,
        fullName: role === 'teacher' ? 'Sardor Rahimov' : 'Azizbek Karimov',
        username: !isEmail && !isPhone && identifier ? identifier.toLowerCase() : (role === 'teacher' ? 'sardor_teacher' : 'aziz_student'),
        email: isEmail ? identifier : (role === 'teacher' ? 'sardor@bilgim.uz' : undefined),
        phone: isPhone ? identifier : '+998 90 123 45 67',
        role: role,
        telegramConnected: role === 'teacher',
        hasSetupSchool: role === 'teacher' ? false : undefined,
      };

      onLoginSuccess(sessionUser);
      onClose();
    }, 350);
  };

  const handleDemoLogin = (demoRole: 'teacher' | 'student') => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      const demoUser: UserSession = demoRole === 'teacher' ? {
        id: 'teacher-demo-1',
        fullName: 'Sardor Rahimov',
        username: 'sardor_teacher',
        email: 'sardor@apex.uz',
        phone: '+998 90 987 65 43',
        role: 'teacher',
        telegramConnected: true,
        school: {
          name: 'Apex Academy',
          slug: 'apex',
          field: 'Ingliz tili va xorijiy tillar',
          timezone: 'Asia/Tashkent',
        },
        hasSetupSchool: true,
      } : {
        id: 'student-demo-1',
        fullName: 'Malika Karimova',
        username: 'malika_k',
        email: 'malika@mail.uz',
        phone: '+998 91 234 56 78',
        role: 'student',
        telegramConnected: false,
        hasSetupSchool: false,
      };

      onLoginSuccess(demoUser);
      onClose();
    }, 250);
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // docs 6.5: Parolni tiklash
    // - Telegram ulangan bo'lsa: OTP botga yuboriladi
    // - Telegram ulanmagan bo'lsa: Email havolasi (15-30 daqiqa). SMS yo'q. User enumeration himoyalangan.
    const isEmail = forgotInput.includes('@');
    setForgotChannel(isEmail ? 'email' : 'telegram');
    setForgotStatus('sent');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md rounded-2xl border shadow-2xl overflow-hidden relative"
        style={{
          backgroundColor: isDark ? '#12121A' : '#EDE7DA',
          borderColor: isDark ? '#232332' : '#E5DFD3',
          color: isDark ? '#F5F4F0' : '#1F1A12',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full opacity-60 hover:opacity-100 transition-opacity cursor-pointer z-10"
          style={{ backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(31, 26, 18, 0.05)' }}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b text-center"
          style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)' }}
        >
          <h2 className="font-display font-bold text-2xl mb-1">
            {forgotPasswordMode ? "Parolni Tiklash" : "Tizimga Kirish"}
          </h2>
          <p className="text-xs opacity-70">
            {forgotPasswordMode 
              ? "Telegram bot OTP yoki Email orqali tiklash (docs 6.5: SMS yo'q)"
              : "Platformadagi hisobingizga kiring"}
          </p>

          {!forgotPasswordMode && (
            <div className="mt-5 p-1 rounded-xl border flex items-center gap-1"
              style={{
                backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
              }}
            >
              <button
                type="button"
                onClick={() => setRole('teacher')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  role === 'teacher' ? 'shadow-sm text-white' : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: role === 'teacher' ? (isDark ? '#6C63FF' : '#B5551F') : 'transparent',
                }}
              >
                <GraduationCap className="w-3.5 h-3.5" />
                <span>O'qituvchi</span>
              </button>

              <button
                type="button"
                onClick={() => setRole('student')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  role === 'student' ? 'shadow-sm text-white' : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: role === 'student' ? (isDark ? '#6C63FF' : '#B5551F') : 'transparent',
                }}
              >
                <User className="w-3.5 h-3.5" />
                <span>Talaba</span>
              </button>
            </div>
          )}
        </div>

        {/* Form area */}
        {forgotPasswordMode ? (
          /* Parolni tiklash (docs 6.5: SMS yo'q. Telegram OTP yoki Email havolasi) */
          <form onSubmit={handleForgotPassword} className="p-6 sm:p-7 space-y-4">
            {forgotStatus === 'sent' ? (
              <div className="text-center py-4 space-y-3">
                <div className="w-12 h-12 rounded-full mx-auto flex items-center justify-center bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-base">Tiklash so'rovi qabul qilindi!</h4>
                <p className="text-xs opacity-75 leading-relaxed">
                  {forgotChannel === 'telegram'
                    ? "Agar akkauntingizga Telegram bot ulangan bo'lsa, 4 xonali OTP kod botingizga yuborildi."
                    : "Ko'rsatilgan email manziliga 30 daqiqa amal qiluvchi parolni tiklash havolasi yuborildi."}
                </p>
                <p className="text-[11px] opacity-60">
                  Xavfsizlik qoidasi (docs 6.5): SMS orqali tiklash mavjud emas. User enumeration himoyalangan.
                </p>
                <button
                  type="button"
                  onClick={() => { setForgotPasswordMode(false); setForgotStatus('idle'); }}
                  className="px-6 py-2.5 rounded-xl font-bold text-xs text-white cursor-pointer mt-2"
                  style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
                >
                  Kirishga qaytish
                </button>
              </div>
            ) : (
              <>
                <div className="p-3 rounded-xl border text-[11px] opacity-75 leading-relaxed"
                  style={{
                    backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                    borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
                  }}
                >
                  Hujjat qoidasi (docs 6.5): Telegram ulangan bo'lsa OTP botga yuboriladi, aks holda Email havolasi yuboriladi. SMS yo'q.
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider opacity-80 block mb-1">
                    Username, Email yoki Telefon
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-3.5 opacity-40" />
                    <input
                      type="text"
                      required
                      value={forgotInput}
                      onChange={(e) => setForgotInput(e.target.value)}
                      placeholder="Username yoki email kiriting"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none"
                      style={{
                        backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                        borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
                      }}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-white shadow-md cursor-pointer"
                  style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
                >
                  Tiklash kodini yuborish
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
          <div className="p-6 sm:p-7 space-y-4">
            <form onSubmit={handleLoginSubmit} className="space-y-3.5">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider opacity-80 block mb-1">
                  Username, Email yoki Telefon *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-3.5 opacity-40" />
                  <input
                    type="text"
                    required
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="Username, email yoki telefon"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none"
                    style={{
                      backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                      borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
                    }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-80">
                    Parol *
                  </label>
                  <button
                    type="button"
                    onClick={() => setForgotPasswordMode(true)}
                    className="text-xs font-medium opacity-60 hover:opacity-100 underline cursor-pointer"
                  >
                    Parolni unutdingizmi?
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
                      backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                      borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3.5 mt-2 rounded-xl font-bold text-sm text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
              >
                <span>
                  {isLoading 
                    ? "Tekshirilmoqda..." 
                    : `Kirish (${role === 'teacher' ? "O'qituvchi" : "Talaba"})`}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>

            {/* Quick Demo Login Option */}
            <div className="pt-2 border-t text-center space-y-2"
              style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)' }}
            >
              <span className="text-[11px] opacity-60 block">
                Sinab ko'rish uchun bitta klikda kiring:
              </span>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleDemoLogin('teacher')}
                  className="flex-1 py-2 px-2.5 rounded-xl border text-[11px] font-bold flex items-center justify-center gap-1.5 opacity-80 hover:opacity-100 cursor-pointer transition-colors"
                  style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)' }}
                >
                  <GraduationCap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Ustoz Demo</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleDemoLogin('student')}
                  className="flex-1 py-2 px-2.5 rounded-xl border text-[11px] font-bold flex items-center justify-center gap-1.5 opacity-80 hover:opacity-100 cursor-pointer transition-colors"
                  style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)' }}
                >
                  <User className="w-3.5 h-3.5 text-blue-500" />
                  <span>Talaba Demo</span>
                </button>
              </div>
            </div>

            {/* Switch to Register */}
            <div className="text-center pt-2 text-xs opacity-80">
              <span>Hisobingiz yo'qmi? </span>
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onOpenRegister();
                }}
                className="font-bold underline cursor-pointer hover:opacity-100"
                style={{ color: isDark ? '#6C63FF' : '#B5551F' }}
              >
                Ro'yxatdan o'tish
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
};
