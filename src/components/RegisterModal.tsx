import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  GraduationCap, 
  User, 
  Mail, 
  Phone, 
  Lock, 
  AtSign, 
  ArrowRight,
  Check,
  AlertCircle,
  ShieldCheck,
  Send
} from 'lucide-react';
import { ThemeMode, Language, UserSession } from '../types';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
  onRegisterSuccess: (user: UserSession) => void;
  theme: ThemeMode;
  lang: Language;
}

// Taken usernames for real-time validation (docs/03-arxitektura-va-rollar.md 6.3)
const TAKEN_USERNAMES = ['admin', 'bilgim', 'support', 'teacher', 'student', 'moderator', 'apex', 'cambridge'];

export const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  onOpenLogin,
  onRegisterSuccess,
  theme,
}) => {
  const isDark = theme === 'dark';

  const [role, setRole] = useState<'teacher' | 'student'>('teacher');
  
  // Shared & Role-specific fields (docs/03-arxitektura-va-rollar.md 6.3)
  const [fullName, setFullName] = useState('');
  
  // Teacher specific: email, phone, username, password, confirmPassword, terms
  const [teacherEmail, setTeacherEmail] = useState('');
  const [teacherPhone, setTeacherPhone] = useState('+998 ');
  
  // Student specific: emailOrPhone, username, password, confirmPassword
  const [studentIdentifier, setStudentIdentifier] = useState('');

  // Username (with real-time check for both)
  const [username, setUsername] = useState('');
  const [usernameStatus, setUsernameStatus] = useState<'idle' | 'checking' | 'available' | 'taken' | 'invalid'>('idle');

  // Passwords
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Teacher terms accepted
  const [termsAccepted, setTermsAccepted] = useState(false);

  // Optional student telegram step (docs 6.6: O'qituvchi majburiy, Talaba ixtiyoriy)
  const [step, setStep] = useState<'form' | 'telegram_prompt'>('form');
  const [telegramCode, setTelegramCode] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Real-time username check (docs/03-arxitektura-va-rollar.md: "username (real-time tekshiruv)")
  useEffect(() => {
    const trimmed = username.trim().toLowerCase();
    if (!trimmed) {
      setUsernameStatus('idle');
      return;
    }
    if (trimmed.length < 3) {
      setUsernameStatus('invalid');
      return;
    }
    if (!/^[a-z0-9_]+$/.test(trimmed)) {
      setUsernameStatus('invalid');
      return;
    }

    setUsernameStatus('checking');
    const timer = setTimeout(() => {
      if (TAKEN_USERNAMES.includes(trimmed)) {
        setUsernameStatus('taken');
      } else {
        setUsernameStatus('available');
      }
    }, 250);

    return () => clearTimeout(timer);
  }, [username]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!fullName.trim()) {
      setErrorMsg('Ism va familiyangizni kiriting');
      return;
    }

    if (usernameStatus !== 'available') {
      if (usernameStatus === 'taken') {
        setErrorMsg(`"${username}" username band, iltimos boshqasini tanlang`);
      } else {
        setErrorMsg('Username kamida 3 ta lotin harfi yoki raqamdan iborat bo\'lishi kerak');
      }
      return;
    }

    if (password.length < 6) {
      setErrorMsg('Parol kamida 6 ta belgidan iborat bo\'lishi kerak');
      return;
    }

    if (password !== confirmPassword) {
      setErrorMsg('Parol tasdig\'i mos kelmadi');
      return;
    }

    if (role === 'teacher') {
      if (!teacherEmail.trim() || !teacherEmail.includes('@')) {
        setErrorMsg('To\'g\'ri email manzilini kiriting');
        return;
      }
      if (teacherPhone.trim().length < 9) {
        setErrorMsg('To\'liq telefon raqamingizni kiriting');
        return;
      }
      if (!termsAccepted) {
        setErrorMsg('Foydalanish shartlariga rozilik bildirishingiz kerak');
        return;
      }

      // Step to mandatory Telegram bot connection (docs 6.6: O'qituvchi: Majburiy)
      setStep('telegram_prompt');
    } else {
      // Student
      if (!studentIdentifier.trim()) {
        setErrorMsg('Email yoki telefon raqamingizni kiriting');
        return;
      }

      // Student registration complete (docs 6.6: Talaba ro'yxatdan o'tishda Telegram ixtiyoriy)
      completeRegistration(false);
    }
  };

  const completeRegistration = (telegramConnected: boolean) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const newUser: UserSession = {
        id: `user-${Date.now()}`,
        fullName: fullName.trim(),
        username: username.trim().toLowerCase(),
        email: role === 'teacher' ? teacherEmail.trim() : (studentIdentifier.includes('@') ? studentIdentifier.trim() : undefined),
        phone: role === 'teacher' ? teacherPhone.trim() : (!studentIdentifier.includes('@') ? studentIdentifier.trim() : undefined),
        role: role,
        telegramConnected: telegramConnected,
        hasSetupSchool: false,
        registeredAt: new Date().toISOString(),
      };

      onRegisterSuccess(newUser);
      onClose();
    }, 300);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-lg rounded-2xl border shadow-2xl overflow-hidden relative my-6"
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
          <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight mb-1.5">
            {step === 'telegram_prompt' ? "Telegram Botni Ulash" : "Ro'yxatdan O'tish"}
          </h2>
          <p className="text-xs sm:text-sm opacity-70 max-w-sm mx-auto">
            {step === 'telegram_prompt' 
              ? (role === 'teacher' 
                  ? "O'qituvchi uchun 2FA va xavfsizlik maqsadida Telegram bot ulash majburiy (docs 6.6)" 
                  : "Dars eslatmalari va uy ishlari uchun Telegram botni ulash")
              : (role === 'teacher' 
                  ? "O'qituvchi akkaunti yaratish va shaxsiy maktab ochish" 
                  : "Talaba akkaunti yaratish va kurslarga yozilish")}
          </p>

          {/* Role selector tabs */}
          {step === 'form' && (
            <div className="mt-5 p-1 rounded-xl border flex items-center gap-1"
              style={{
                backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
              }}
            >
              <button
                type="button"
                onClick={() => { setRole('teacher'); setErrorMsg(''); }}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  role === 'teacher' ? 'shadow-sm text-white' : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: role === 'teacher' ? (isDark ? '#6C63FF' : '#B5551F') : 'transparent',
                }}
              >
                <GraduationCap className="w-4 h-4" />
                <span>O'qituvchi</span>
              </button>

              <button
                type="button"
                onClick={() => { setRole('student'); setErrorMsg(''); }}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  role === 'student' ? 'shadow-sm text-white' : 'opacity-70 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: role === 'student' ? (isDark ? '#6C63FF' : '#B5551F') : 'transparent',
                }}
              >
                <User className="w-4 h-4" />
                <span>Talaba</span>
              </button>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {errorMsg && (
            <div className="mb-4 p-3 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{errorMsg}</span>
            </div>
          )}

          <AnimatePresence mode="wait">
            {step === 'telegram_prompt' ? (
              /* Telegram Connection Step (docs/03-arxitektura-va-rollar.md 6.6) */
              <motion.div
                key="telegram"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4 text-center"
              >
                <div 
                  className="p-5 rounded-xl border text-left space-y-3"
                  style={{
                    backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                    borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
                  }}
                >
                  <div className="flex items-center gap-2 text-sm font-bold text-sky-600 dark:text-sky-400">
                    <Send className="w-4 h-4" />
                    <span>@BilgimEduBot orqali tasdiqlash</span>
                  </div>
                  <p className="text-xs opacity-75 leading-relaxed">
                    Hujjatlar qoidasiga ko'ra (docs 6.6): O'qituvchilar uchun bildirishnomalar, moliyaviy hisob-kitoblar va ikki bosqichli xavfsizlik (2FA) maqsadida Telegram bot ulanishi majburiy.
                  </p>
                  <div className="p-3 rounded-lg border font-mono text-xs flex items-center justify-between"
                    style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)' }}
                  >
                    <span className="opacity-60">Botdagi faollashtirish kodi:</span>
                    <span className="font-bold text-sm tracking-wider text-sky-500">BILGIM-{username.toUpperCase() || 'EDU'}</span>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <button
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => completeRegistration(true)}
                    className="w-full py-3.5 rounded-xl font-bold text-sm text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.01]"
                    style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
                  >
                    <span>{isSubmitting ? "Saqlanmoqda..." : "Telegram Botni Uladim & Maktab Ochish Wizardiga O'tish"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => setStep('form')}
                    className="text-xs opacity-60 hover:opacity-100 underline cursor-pointer"
                  >
                    Orqaga qaytish
                  </button>
                </div>
              </motion.div>
            ) : (
              /* Registration Form strictly matching docs/03-arxitektura-va-rollar.md 6.3 */
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="space-y-3.5"
              >
                {/* 1. Ism-familiya (O'qituvchi va Talaba uchun) */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider opacity-80 block mb-1">
                    Ism va Familiya *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-3.5 opacity-40" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder={role === 'teacher' ? "Sardor Rahimov" : "Azizbek Karimov"}
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none"
                      style={{
                        backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                        borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
                      }}
                    />
                  </div>
                </div>

                {/* Role specific: O'qituvchi: email VA telefon alohida */}
                {role === 'teacher' ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {/* Email */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider opacity-80 block mb-1">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="w-4 h-4 absolute left-3 top-3.5 opacity-40" />
                        <input
                          type="email"
                          required
                          value={teacherEmail}
                          onChange={(e) => setTeacherEmail(e.target.value)}
                          placeholder="ustoz@bilgim.uz"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm outline-none"
                          style={{
                            backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                            borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
                          }}
                        />
                      </div>
                    </div>

                    {/* Telefon */}
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider opacity-80 block mb-1">
                        Telefon Raqam *
                      </label>
                      <div className="relative">
                        <Phone className="w-4 h-4 absolute left-3 top-3.5 opacity-40" />
                        <input
                          type="tel"
                          required
                          value={teacherPhone}
                          onChange={(e) => setTeacherPhone(e.target.value)}
                          placeholder="+998 90 123 45 67"
                          className="w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm outline-none font-mono"
                          style={{
                            backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                            borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Role specific: Talaba: email/telefon (bitta maydon) */
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider opacity-80 block mb-1">
                      Email yoki Telefon Raqam *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3.5 top-3.5 opacity-40" />
                      <input
                        type="text"
                        required
                        value={studentIdentifier}
                        onChange={(e) => setStudentIdentifier(e.target.value)}
                        placeholder="talaba@mail.uz yoki +998 90 123 45 67"
                        className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none"
                        style={{
                          backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                          borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Username (docs 6.3: "username (real-time tekshiruv)") */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs font-bold uppercase tracking-wider opacity-80">
                      Foydalanuvchi nomi (Username) *
                    </label>
                    {usernameStatus === 'checking' && (
                      <span className="text-[11px] opacity-60">Tekshirilmoqda...</span>
                    )}
                    {usernameStatus === 'available' && (
                      <span className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                        <Check className="w-3.5 h-3.5" /> Bo'sh
                      </span>
                    )}
                    {usernameStatus === 'taken' && (
                      <span className="text-[11px] text-rose-500 font-semibold flex items-center gap-1">
                        <X className="w-3.5 h-3.5" /> Band
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <AtSign className="w-4 h-4 absolute left-3.5 top-3.5 opacity-40" />
                    <input
                      type="text"
                      required
                      value={username}
                      onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
                      placeholder="sardor_teacher"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none font-mono"
                      style={{
                        backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                        borderColor: usernameStatus === 'taken' ? '#F43F5E' : (usernameStatus === 'available' ? '#10B981' : (isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)')),
                      }}
                    />
                  </div>
                </div>

                {/* Parol va Parol tasdig'i */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider opacity-80 block mb-1">
                      Parol *
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 absolute left-3 top-3.5 opacity-40" />
                      <input
                        type="password"
                        required
                        minLength={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm outline-none"
                        style={{
                          backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                          borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider opacity-80 block mb-1">
                      Parol Tasdig'i *
                    </label>
                    <div className="relative">
                      <Lock className="w-4 h-4 absolute left-3 top-3.5 opacity-40" />
                      <input
                        type="password"
                        required
                        minLength={6}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-9 pr-3 py-2.5 rounded-xl border text-sm outline-none"
                        style={{
                          backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                          borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* O'qituvchi uchun shartlarga rozilik (docs 6.3: "shartlarga rozilik") */}
                {role === 'teacher' && (
                  <label className="flex items-start gap-2 pt-1 text-xs opacity-80 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={termsAccepted}
                      onChange={(e) => setTermsAccepted(e.target.checked)}
                      className="mt-0.5 rounded cursor-pointer"
                      style={{ accentColor: isDark ? '#6C63FF' : '#B5551F' }}
                    />
                    <span>
                      Foydalanish shartlari va o'qituvchi ommaviy ofertasi talablariga roziman (docs 6.3)
                    </span>
                  </label>
                )}

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 mt-2 rounded-xl font-bold text-sm text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.01] active:scale-[0.99]"
                  style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
                >
                  <span>
                    {role === 'teacher' 
                      ? "O'qituvchi Sifatida Ro'yxatdan O'tish" 
                      : "Talaba Sifatida Ro'yxatdan O'tish"}
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Switch to login */}
                <div className="text-center pt-2 text-xs opacity-80">
                  <span>Hisobingiz bormi? </span>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenLogin();
                    }}
                    className="font-bold underline cursor-pointer hover:opacity-100"
                    style={{ color: isDark ? '#6C63FF' : '#B5551F' }}
                  >
                    Tizimga kirish
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

      </motion.div>
    </div>
  );
};
