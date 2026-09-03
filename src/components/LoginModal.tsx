import React, { useState } from 'react';
import { X, ShieldAlert, Send, Lock, ArrowRight, CheckCircle2, User, KeyRound } from 'lucide-react';
import { ThemeMode } from '../types';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

export const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose, theme }) => {
  const isDark = theme === 'dark';

  const [role, setRole] = useState<'teacher' | 'student' | 'admin'>('teacher');
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [otpCode, setOtpCode] = useState('');
  const [awaitingOtp, setAwaitingOtp] = useState(false);
  const [forgotPasswordMode, setForgotPasswordMode] = useState(false);
  const [forgotStatus, setForgotStatus] = useState<'idle' | 'sent'>('idle');

  if (!isOpen) return null;

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (role === 'admin' && !awaitingOtp) {
      // Step 1 for admin: Send OTP to Telegram
      setAwaitingOtp(true);
      return;
    }
    // Success simulation
    alert(`Muvaffaqiyatli kirildi: ${role.toUpperCase()} akkaunti.`);
    onClose();
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    // User enumeration protection (docs/03 rule 6.5)
    setForgotStatus('sent');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-md rounded-3xl border shadow-2xl overflow-hidden relative"
        style={{
          backgroundColor: isDark ? '#12121A' : '#EDE7DA',
          borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
          color: isDark ? '#F6F2EA' : '#1F1A12',
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full opacity-70 hover:opacity-100 transition-opacity cursor-pointer z-10"
          style={{ backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.05)' }}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b text-center"
          style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)' }}
        >
          <h2 className="font-display font-bold text-2xl mb-1">
            {forgotPasswordMode ? 'Parolni Tiklash' : 'Tizimga Kirish'}
          </h2>
          <p className="text-xs opacity-70">
            {forgotPasswordMode 
              ? 'Telegram yoki Email orqali xavfsiz tiklash' 
              : 'O\'z kabinetingizga xavfsiz kirish'}
          </p>

          {/* Role selector tabs */}
          {!forgotPasswordMode && (
            <div className="flex rounded-xl p-1 mt-5 border"
              style={{
                backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
              }}
            >
              <button
                type="button"
                onClick={() => { setRole('teacher'); setAwaitingOtp(false); }}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  role === 'teacher' ? 'shadow-sm text-white' : 'opacity-70'
                }`}
                style={{
                  backgroundColor: role === 'teacher' ? (isDark ? '#6C63FF' : '#B5551F') : 'transparent',
                }}
              >
                O'qituvchi
              </button>

              <button
                type="button"
                onClick={() => { setRole('student'); setAwaitingOtp(false); }}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  role === 'student' ? 'shadow-sm text-white' : 'opacity-70'
                }`}
                style={{
                  backgroundColor: role === 'student' ? (isDark ? '#6C63FF' : '#B5551F') : 'transparent',
                }}
              >
                Talaba
              </button>

              <button
                type="button"
                onClick={() => { setRole('admin'); setAwaitingOtp(false); }}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  role === 'admin' ? 'shadow-sm text-white' : 'opacity-70'
                }`}
                style={{
                  backgroundColor: role === 'admin' ? (isDark ? '#6C63FF' : '#B5551F') : 'transparent',
                }}
              >
                Admin (2FA)
              </button>
            </div>
          )}
        </div>

        {/* Forgot password mode */}
        {forgotPasswordMode ? (
          <div className="p-6 sm:p-8 space-y-4">
            {forgotStatus === 'sent' ? (
              <div className="text-center space-y-4 py-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-500 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-lg">So'rov qabul qilindi</h3>
                <p className="text-xs opacity-75 max-w-xs mx-auto leading-relaxed">
                  Agar ko'rsatilgan hisob mavjud bo'lsa, bir martalik kod Telegram botingizga yoki xavfsiz havola emailingizga yuborildi.
                </p>
                <button
                  onClick={() => { setForgotPasswordMode(false); setForgotStatus('idle'); }}
                  className="px-6 py-2 rounded-xl text-xs font-bold border cursor-pointer"
                >
                  Kirishga qaytish
                </button>
              </div>
            ) : (
              <form onSubmit={handleForgotPassword} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">
                    Email yoki Telefon raqamingiz
                  </label>
                  <input
                    type="text"
                    required
                    value={identifier}
                    onChange={(e) => setIdentifier(e.target.value)}
                    placeholder="email@misol.uz yoki +998 90..."
                    className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none"
                    style={{
                      backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                      borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
                    }}
                  />
                </div>

                <div className="p-3 rounded-xl bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs">
                  Telegram ulangan bo'lsa, kod Telegram botingizga boradi. Aks holda emailga 15 daqiqalik havola jo'natiladi.
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl font-bold text-sm text-white shadow-md cursor-pointer"
                  style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
                >
                  Tiklash Kodini Yuborish
                </button>

                <button
                  type="button"
                  onClick={() => setForgotPasswordMode(false)}
                  className="w-full text-center text-xs opacity-60 hover:opacity-100 cursor-pointer pt-1"
                >
                  Bekor qilish
                </button>
              </form>
            )}
          </div>
        ) : (
          /* Normal Login Form */
          <form onSubmit={handleLoginSubmit} className="p-6 sm:p-8 space-y-4">
            
            {role === 'admin' && (
              <div className="p-3 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 shrink-0 mt-0.5" />
                <span>
                  <strong>Admin 2FA Himoyasi:</strong> Kirish uchun majburiy Telegram-OTP va Geo-cheklov o'rnatilgan.
                </span>
              </div>
            )}

            {!awaitingOtp ? (
              <>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">
                    Username yoki Email
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-3 opacity-40" />
                    <input
                      type="text"
                      required
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      placeholder="Username yoki email"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none"
                      style={{
                        backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                        borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
                      }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-1.5">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-80">
                      Parol
                    </label>
                    <button
                      type="button"
                      onClick={() => setForgotPasswordMode(true)}
                      className="text-xs font-medium opacity-60 hover:opacity-100 underline cursor-pointer"
                    >
                      Unutdingizmi?
                    </button>
                  </div>
                  <div className="relative">
                    <Lock className="w-4 h-4 absolute left-3.5 top-3 opacity-40" />
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
              </>
            ) : (
              /* Awaiting Telegram OTP (for Admin or 2FA) */
              <div className="space-y-4">
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs flex items-start gap-2">
                  <Send className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>
                    Telegram botingizga 6 xonali bir martalik tasdiqlash kodi yuborildi.
                  </span>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">
                    Bir martalik Telegram OTP kodi
                  </label>
                  <div className="relative">
                    <KeyRound className="w-4 h-4 absolute left-3.5 top-3 opacity-40" />
                    <input
                      type="text"
                      required
                      maxLength={6}
                      value={otpCode}
                      onChange={(e) => setOtpCode(e.target.value)}
                      placeholder="123456"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-base font-mono tracking-widest outline-none"
                      style={{
                        backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                        borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
                      }}
                    />
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3.5 mt-2 rounded-xl font-bold text-sm text-white shadow-md flex items-center justify-center gap-2 cursor-pointer"
              style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
            >
              <span>{role === 'admin' && !awaitingOtp ? 'Telegram Kodini Olish' : 'Kabinetga Kirish'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </form>
        )}

      </div>
    </div>
  );
};
