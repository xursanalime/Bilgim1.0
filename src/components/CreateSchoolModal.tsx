import React, { useState } from 'react';
import { X, Check, ArrowRight, ShieldCheck, AlertCircle, Sparkles, Send } from 'lucide-react';
import { ThemeMode } from '../types';

interface CreateSchoolModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

const RESERVED_SLUGS = [
  'www', 'api', 'admin', 'media', 'assets', 'mail', 'docs', 'status', 
  'support', 'app', 'cdn', 'staging', 'dev', 'test', 'blog', 'help', 
  'static', 'cdn-assets', 'ftp', 'smtp'
];

export const CreateSchoolModal: React.FC<CreateSchoolModalProps> = ({ isOpen, onClose, theme }) => {
  const isDark = theme === 'dark';

  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Step 1: Teacher data
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('+998 ');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAgreed, setTermsAgreed] = useState(true);

  // Step 2: School data
  const [schoolName, setSchoolName] = useState('');
  const [slug, setSlug] = useState('');
  const [category, setCategory] = useState('Ingliz tili & Til ta\'limi');
  const [timezone] = useState('Osiyo/Toshkent (UTC+5)');

  // Validation states
  const [errorMsg, setErrorMsg] = useState('');
  const [isSlugTaken, setIsSlugTaken] = useState(false);

  if (!isOpen) return null;

  const handleSlugChange = (val: string) => {
    const clean = val.toLowerCase().replace(/[^a-z0-9-]/g, '');
    setSlug(clean);
    if (RESERVED_SLUGS.includes(clean)) {
      setIsSlugTaken(true);
      setErrorMsg(`"${clean}" tizim tomonidan zaxiralangan, boshqa subdomen tanlang`);
    } else {
      setIsSlugTaken(false);
      setErrorMsg('');
    }
  };

  const handleNextStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !username || !password) {
      setErrorMsg('Iltimos, barcha majburiy maydonlarni to\'ldiring');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg('Parol va parolni tasdiqlash mos kelmadi');
      return;
    }
    if (!termsAgreed) {
      setErrorMsg('Foydalanish shartlariga rozilik bildirishingiz kerak');
      return;
    }
    setErrorMsg('');
    setStep(2);
  };

  const handleFinishStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!schoolName || !slug) {
      setErrorMsg('Maktab nomi va subdomenni kiriting');
      return;
    }
    if (isSlugTaken || RESERVED_SLUGS.includes(slug)) {
      setErrorMsg('Tanlangan subdomen band, boshqasini tanlang');
      return;
    }
    setErrorMsg('');
    setStep(3);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden relative"
        style={{
          backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
          borderColor: isDark ? '#2C2B28' : '#E5DFD3',
          color: isDark ? '#F5F4F0' : '#141413',
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
        <div className="p-6 sm:p-8 border-b"
          style={{ borderColor: isDark ? '#2C2B28' : '#E5DFD3' }}
        >
          <div className="flex items-center gap-2 mb-1.5 text-xs font-bold uppercase tracking-wider"
            style={{ color: isDark ? '#E28766' : '#CC5A33' }}
          >
            <Sparkles className="w-4 h-4" />
            <span>14 Kunlik Bepul Sinov</span>
          </div>
          <h2 className="font-display font-bold text-2xl">
            {step === 1 && "O'qituvchi Akkauntini Ochish"}
            {step === 2 && "Shaxsiy Maktabingizni Sozlash"}
            {step === 3 && "Tabriklaymiz, Maktabingiz Tayyor!"}
          </h2>
          <p className="text-xs sm:text-sm opacity-70 mt-1">
            {step === 1 && "1-qadam: Shaxsiy profilingiz ma'lumotlarini kiriting"}
            {step === 2 && "2-qadam: Onlayn maktabingiz nomi va subdomeni"}
            {step === 3 && "Sizning shaxsiy onlayn maktabingiz internetda jonli ishga tushdi"}
          </p>
        </div>

        {/* Error message */}
        {errorMsg && (
          <div className="mx-6 sm:mx-8 mt-4 p-3 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Step 1: Teacher details form */}
        {step === 1 && (
          <form onSubmit={handleNextStep1} className="p-6 sm:p-8 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">
                Ism va Familiyangiz *
              </label>
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Masalan: Sardor Rahimov"
                className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2"
                style={{
                  backgroundColor: isDark ? '#141413' : '#FAF9F5',
                  borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">
                  Email manzil *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="siz@misol.uz"
                  className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2"
                  style={{
                    backgroundColor: isDark ? '#141413' : '#FAF9F5',
                    borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                  }}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">
                  Telefon raqam *
                </label>
                <input
                  type="text"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2"
                  style={{
                    backgroundColor: isDark ? '#141413' : '#FAF9F5',
                    borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                  }}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">
                Unikal Username (odamlar sizni qidirishi uchun) *
              </label>
              <div className="relative">
                <span className="absolute left-3.5 top-2.5 text-xs opacity-50">@</span>
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ''))}
                  placeholder="ustoz_ali"
                  className="w-full pl-8 pr-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2 font-mono"
                  style={{
                    backgroundColor: isDark ? '#141413' : '#FAF9F5',
                    borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                  }}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">
                  Parol (kamida 8 belgi) *
                </label>
                <input
                  type="password"
                  required
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2"
                  style={{
                    backgroundColor: isDark ? '#141413' : '#FAF9F5',
                    borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                  }}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">
                  Parolni tasdiqlang *
                </label>
                <input
                  type="password"
                  required
                  minLength={8}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2"
                  style={{
                    backgroundColor: isDark ? '#141413' : '#FAF9F5',
                    borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                  }}
                />
              </div>
            </div>

            {/* Terms checkbox */}
            <div className="flex items-start gap-2 pt-2">
              <input
                type="checkbox"
                id="terms"
                checked={termsAgreed}
                onChange={(e) => setTermsAgreed(e.target.checked)}
                className="mt-1 accent-amber-600 rounded cursor-pointer"
              />
              <label htmlFor="terms" className="text-xs opacity-75 cursor-pointer leading-relaxed">
                Men Bilgim Edu{' '}
                <span className="underline" style={{ color: isDark ? '#E28766' : '#CC5A33' }}>
                  Foydalanish qoidalari
                </span>{' '}
                va xavfsizlik nizomiga roziman.
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.01] mt-4"
              style={{ backgroundColor: isDark ? '#E28766' : '#CC5A33' }}
            >
              <span>Keyingi Qadam: Maktabni Sozlash</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        )}

        {/* Step 2: School creation form */}
        {step === 2 && (
          <form onSubmit={handleFinishStep2} className="p-6 sm:p-8 space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">
                Maktab Nomi *
              </label>
              <input
                type="text"
                required
                value={schoolName}
                onChange={(e) => {
                  setSchoolName(e.target.value);
                  if (!slug) {
                    handleSlugChange(e.target.value.toLowerCase().replace(/\s+/g, '-'));
                  }
                }}
                placeholder="Masalan: Apex Academy"
                className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all focus:ring-2"
                style={{
                  backgroundColor: isDark ? '#141413' : '#FAF9F5',
                  borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                }}
              />
            </div>

            {/* Subdomain Input */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold uppercase tracking-wider opacity-80">
                  Subdomen Tanlang *
                </label>
                <span className="text-[11px] opacity-60">Faqat lotin harflari va sonlar</span>
              </div>
              
              <div className="flex items-center rounded-xl border overflow-hidden focus-within:ring-2"
                style={{
                  backgroundColor: isDark ? '#141413' : '#FAF9F5',
                  borderColor: isSlugTaken ? '#EF4444' : (isDark ? '#2C2B28' : '#E5DFD3'),
                }}
              >
                <input
                  type="text"
                  required
                  value={slug}
                  onChange={(e) => handleSlugChange(e.target.value)}
                  placeholder="apex"
                  className="flex-1 px-4 py-2.5 text-sm bg-transparent outline-none font-mono text-right sm:text-left"
                />
                <span 
                  className="px-3 py-2.5 text-xs font-mono font-semibold border-l select-none opacity-80"
                  style={{
                    backgroundColor: isDark ? '#1F1E1C' : '#FFFFFF',
                    borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                    color: isDark ? '#E28766' : '#CC5A33',
                  }}
                >
                  .bilgimedu.uz
                </span>
              </div>

              {slug && !isSlugTaken && (
                <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 font-mono flex items-center gap-1">
                  <Check className="w-3.5 h-3.5" />
                  https://{slug}.bilgimedu.uz bo'sh va tayyor!
                </p>
              )}
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">
                Asosiy Yo'nalish
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border text-sm outline-none transition-all cursor-pointer"
                style={{
                  backgroundColor: isDark ? '#141413' : '#FAF9F5',
                  borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                }}
              >
                <option value="Ingliz tili & Til ta'limi">Ingliz tili & Til ta'limi</option>
                <option value="IELTS & Sertifikatlar">IELTS & Sertifikatlar</option>
                <option value="Matematika & Aniq fanlar">Matematika & Aniq fanlar</option>
                <option value="Dasturlash & IT">Dasturlash & IT</option>
                <option value="Dizayn & San'at">Dizayn & San'at</option>
                <option value="Marketing & SMM">Marketing & SMM</option>
                <option value="Buxgalteriya & Moliya">Buxgalteriya & Moliya</option>
                <option value="Boshqa soha">Boshqa soha</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider mb-1.5 opacity-80">
                Vaqt Zonasi
              </label>
              <input
                type="text"
                disabled
                value={timezone}
                className="w-full px-4 py-2.5 rounded-xl border text-sm opacity-60 cursor-not-allowed"
                style={{
                  backgroundColor: isDark ? '#141413' : '#FAF9F5',
                  borderColor: isDark ? '#2C2B28' : '#E5DFD3',
                }}
              />
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 py-3 rounded-xl border font-semibold text-xs opacity-75 hover:opacity-100 cursor-pointer"
                style={{ borderColor: isDark ? '#2C2B28' : '#E5DFD3' }}
              >
                Ortga
              </button>

              <button
                type="submit"
                className="w-2/3 py-3 rounded-xl font-bold text-sm text-white shadow-md flex items-center justify-center gap-2 cursor-pointer"
                style={{ backgroundColor: isDark ? '#E28766' : '#CC5A33' }}
              >
                <span>Maktabni Ishga Tushirish</span>
                <Check className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Success preview */}
        {step === 3 && (
          <div className="p-8 text-center space-y-6">
            <div 
              className="w-16 h-16 rounded-full mx-auto flex items-center justify-center text-white shadow-lg animate-bounce"
              style={{ backgroundColor: isDark ? '#E28766' : '#CC5A33' }}
            >
              <Check className="w-8 h-8" />
            </div>

            <div>
              <h3 className="font-display font-bold text-2xl mb-2">
                "{schoolName}" Muvaffaqiyatli Yaratildi!
              </h3>
              <p className="text-sm opacity-75 max-w-sm mx-auto">
                Sizning maktabingiz 14 kunlik bepul sinov bilan ishga tushirildi.
              </p>
            </div>

            <div className="p-4 rounded-2xl border text-left space-y-2 text-xs font-mono"
              style={{
                backgroundColor: isDark ? '#141413' : '#FAF9F5',
                borderColor: isDark ? '#2C2B28' : '#E5DFD3',
              }}
            >
              <div className="flex justify-between">
                <span className="opacity-60">Maktab havolasi:</span>
                <strong className="text-emerald-500 font-bold">https://{slug}.bilgimedu.uz</strong>
              </div>
              <div className="flex justify-between">
                <span className="opacity-60">O'qituvchi:</span>
                <span>{fullName} (@{username})</span>
              </div>
              <div className="flex justify-between">
                <span className="opacity-60">Tarif holati:</span>
                <span className="text-amber-500 font-bold">Go Rejasi (14 kun bepul)</span>
              </div>
            </div>

            {/* Telegram 2FA connect prompt */}
            <div className="p-4 rounded-2xl bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs text-left flex items-start gap-3 border border-amber-500/20">
              <Send className="w-5 h-5 shrink-0 mt-0.5" />
              <div>
                <strong className="block font-semibold mb-0.5">Telegram Botni Bog'lang (Majburiy)</strong>
                <span>
                  O'qituvchilar uchun xavfsizlik va to'lov bildirishnomalarini olish uchun @BilgimEduBot ga profilingizni ulang.
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                setStep(1);
              }}
              className="w-full py-3.5 rounded-xl font-bold text-sm text-white shadow-md cursor-pointer"
              style={{ backgroundColor: isDark ? '#E28766' : '#CC5A33' }}
            >
              Boshqaruv Paneliga O'tish
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
