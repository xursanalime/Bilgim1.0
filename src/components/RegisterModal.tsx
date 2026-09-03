import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  GraduationCap, 
  User, 
  Phone, 
  Lock, 
  Building2, 
  Globe, 
  ArrowRight,
  ShieldCheck,
  Check
} from 'lucide-react';
import { ThemeMode, Language } from '../types';
import { TRANSLATIONS } from '../i18n/translations';

interface RegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
  theme: ThemeMode;
  lang: Language;
}

export const RegisterModal: React.FC<RegisterModalProps> = ({
  isOpen,
  onClose,
  onOpenLogin,
  theme,
  lang,
}) => {
  const isDark = theme === 'dark';
  const t = TRANSLATIONS[lang].auth;

  const [role, setRole] = useState<'teacher' | 'student'>('teacher');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [schoolName, setSchoolName] = useState('');
  const [subdomain, setSubdomain] = useState('');
  const [password, setPassword] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);
  const [step, setStep] = useState<'form' | 'otp'>('form');
  const [otpCode, setOtpCode] = useState('');

  // Auto-generate subdomain from school name
  const handleSchoolNameChange = (val: string) => {
    setSchoolName(val);
    const slug = val
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]/g, '-')
      .replace(/-+/g, '-');
    setSubdomain(slug);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('otp');
  };

  const handleVerifyOtp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.2 }}
        className="w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden relative my-8"
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-3"
            style={{
              backgroundColor: isDark ? 'rgba(226, 135, 102, 0.15)' : 'rgba(204, 90, 51, 0.1)',
              color: isDark ? '#E28766' : '#CC5A33',
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.trialBadge}</span>
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight mb-1.5">
            {t.registerTitle}
          </h2>
          <p className="text-xs sm:text-sm opacity-70 max-w-sm mx-auto">
            {t.registerSubtitle}
          </p>

          {/* Role selector tabs */}
          <div className="mt-6 p-1.5 rounded-2xl border flex items-center gap-1"
            style={{
              backgroundColor: isDark ? '#141413' : '#FAF9F5',
              borderColor: isDark ? '#2C2B28' : '#E5DFD3',
            }}
          >
            <button
              type="button"
              onClick={() => setRole('teacher')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                role === 'teacher' ? 'shadow-sm text-white' : 'opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor: role === 'teacher' ? (isDark ? '#E28766' : '#CC5A33') : 'transparent',
              }}
            >
              <GraduationCap className="w-4 h-4" />
              <span>{t.roleTeacher}</span>
            </button>

            <button
              type="button"
              onClick={() => setRole('student')}
              className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                role === 'student' ? 'shadow-sm text-white' : 'opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor: role === 'student' ? (isDark ? '#E28766' : '#CC5A33') : 'transparent',
              }}
            >
              <User className="w-4 h-4" />
              <span>{t.roleStudent}</span>
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div 
                key="success"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-6 space-y-4"
              >
                <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-display font-bold text-2xl">
                  Tabriklaymiz!
                </h3>
                <p className="text-sm opacity-75 max-w-sm mx-auto">
                  {role === 'teacher' 
                    ? `Sizning "${schoolName || 'Onlayn Maktab'}" maktabingiz muvaffaqiyatli yaratildi! 14 kunlik bepul sinov muddati faollashtirildi.`
                    : "Talaba hisobingiz muvaffaqiyatli yaratildi. Darslaringizga xush kelibsiz!"}
                </p>

                {role === 'teacher' && subdomain && (
                  <div className="p-3.5 rounded-xl border text-xs font-mono font-semibold"
                    style={{
                      backgroundColor: isDark ? '#141413' : '#FAF9F5',
                      borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                      color: isDark ? '#E28766' : '#CC5A33',
                    }}
                  >
                    https://{subdomain}.bilgimedu.uz
                  </div>
                )}

                <button
                  type="button"
                  onClick={onClose}
                  className="w-full py-3 rounded-xl font-bold text-sm text-white shadow-sm cursor-pointer mt-2"
                  style={{ backgroundColor: isDark ? '#E28766' : '#CC5A33' }}
                >
                  Kabinetga Kirish
                </button>
              </motion.div>
            ) : step === 'otp' ? (
              <motion.form 
                key="otp"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                onSubmit={handleVerifyOtp}
                className="space-y-4"
              >
                <div className="p-4 rounded-xl border text-xs leading-relaxed"
                  style={{
                    backgroundColor: isDark ? '#141413' : '#FAF9F5',
                    borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                  }}
                >
                  <p className="font-semibold mb-1">
                    {phone} raqamiga Telegram / SMS orqali 4 xonali tasdiqlash kodi yuborildi.
                  </p>
                  <p className="opacity-70">
                    Xavfsizlik maqsadida kodni kiriting (Demo: istalgan 4 ta raqam).
                  </p>
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider opacity-80 block mb-1.5">
                    Tasdiqlash kodi
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    required
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value)}
                    placeholder="1 2 3 4"
                    className="w-full px-4 py-3 rounded-xl border text-center text-xl tracking-widest font-mono font-bold outline-none"
                    style={{
                      backgroundColor: isDark ? '#141413' : '#FAF9F5',
                      borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-sm text-white shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.01]"
                  style={{ backgroundColor: isDark ? '#E28766' : '#CC5A33' }}
                >
                  <span>Kodni Tasdiqlash & Boshlash</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={() => setStep('form')}
                  className="w-full text-xs opacity-60 hover:opacity-100 underline cursor-pointer py-1"
                >
                  Raqamni o'zgartirish
                </button>
              </motion.form>
            ) : (
              <motion.form 
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                {/* Full name */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider opacity-80 block mb-1.5">
                    {t.fullName}
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 absolute left-3.5 top-3.5 opacity-40" />
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Alisher Navoiy"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none"
                      style={{
                        backgroundColor: isDark ? '#141413' : '#FAF9F5',
                        borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                      }}
                    />
                  </div>
                </div>

                {/* Teacher specific: School Name & Subdomain */}
                {role === 'teacher' && (
                  <>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider opacity-80 block mb-1.5">
                        {t.schoolName}
                      </label>
                      <div className="relative">
                        <Building2 className="w-4 h-4 absolute left-3.5 top-3.5 opacity-40" />
                        <input
                          type="text"
                          required
                          value={schoolName}
                          onChange={(e) => handleSchoolNameChange(e.target.value)}
                          placeholder="Navoiy Academy"
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none"
                          style={{
                            backgroundColor: isDark ? '#141413' : '#FAF9F5',
                            borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                          }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase tracking-wider opacity-80 block mb-1.5">
                        {t.subdomain}
                      </label>
                      <div className="relative flex items-center">
                        <Globe className="w-4 h-4 absolute left-3.5 opacity-40" />
                        <input
                          type="text"
                          required
                          value={subdomain}
                          onChange={(e) => setSubdomain(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
                          placeholder="navoiy-academy"
                          className="w-full pl-10 pr-32 py-2.5 rounded-xl border text-sm font-mono outline-none"
                          style={{
                            backgroundColor: isDark ? '#141413' : '#FAF9F5',
                            borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                          }}
                        />
                        <span className="absolute right-3.5 text-xs opacity-50 font-mono pointer-events-none">
                          .bilgimedu.uz
                        </span>
                      </div>
                    </div>
                  </>
                )}

                {/* Phone */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider opacity-80 block mb-1.5">
                    {t.phone}
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 absolute left-3.5 top-3.5 opacity-40" />
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+998 90 123 45 67"
                      className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none font-mono"
                      style={{
                        backgroundColor: isDark ? '#141413' : '#FAF9F5',
                        borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                      }}
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider opacity-80 block mb-1.5">
                    {t.password}
                  </label>
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

                {/* Terms agreement notice */}
                <div className="flex items-start gap-2 pt-1 text-[11px] opacity-70">
                  <ShieldCheck className="w-4 h-4 shrink-0 text-emerald-500 mt-0.5" />
                  <span>{t.termsAgreement}</span>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="w-full py-3.5 mt-2 rounded-xl font-bold text-sm text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.01] active:scale-[0.99]"
                  style={{ backgroundColor: isDark ? '#E28766' : '#CC5A33' }}
                >
                  <span>{role === 'teacher' ? t.registerTeacherBtn : t.registerStudentBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Switch to login */}
                <div className="text-center pt-2 text-xs opacity-80">
                  <span>{t.hasAccount} </span>
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onOpenLogin();
                    }}
                    className="font-bold underline cursor-pointer hover:opacity-100"
                    style={{ color: isDark ? '#E28766' : '#CC5A33' }}
                  >
                    {t.signInNow}
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
