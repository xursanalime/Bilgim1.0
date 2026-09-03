import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  Building2, 
  Globe, 
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Clock,
  Layers,
  Check,
  AlertCircle
} from 'lucide-react';
import { ThemeMode, Language, UserSession, SchoolWizardData } from '../types';

interface TeacherSchoolSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: UserSession | null;
  onSaveSchool: (data: SchoolWizardData) => void;
  onOpenSchoolSubdomain?: (slug: string) => void;
  theme: ThemeMode;
  lang: Language;
}

// Reserved slugs strictly from docs/03-arxitektura-va-rollar.md 6.1
const RESERVED_SLUGS = [
  'www', 'api', 'admin', 'media', 'assets', 'mail', 'docs', 'status', 
  'support', 'app', 'cdn', 'staging', 'dev', 'test', 'blog', 'help', 
  'static', 'cdn-assets', 'ftp', 'smtp'
];

// Timezones suitable for CIS, Central Asia and Global
const TIMEZONES = [
  { label: "Asia/Tashkent (UTC+05:00) — O'zbekiston", value: "Asia/Tashkent" },
  { label: "Asia/Samarkand (UTC+05:00) — Samarqand", value: "Asia/Samarkand" },
  { label: "Asia/Almaty (UTC+05:00) — Qozog'iston", value: "Asia/Almaty" },
  { label: "Asia/Bishkek (UTC+06:00) — Qirg'iziston", value: "Asia/Bishkek" },
  { label: "Europe/Istanbul (UTC+03:00) — Turkiya", value: "Europe/Istanbul" },
  { label: "Asia/Dubai (UTC+04:00) — BAA", value: "Asia/Dubai" },
  { label: "Europe/London (UTC+00:00) — Buyuk Britaniya", value: "Europe/London" },
  { label: "UTC (UTC+00:00) — Umumiy standart", value: "UTC" },
];

export const TeacherSchoolSetupModal: React.FC<TeacherSchoolSetupModalProps> = ({
  isOpen,
  onClose,
  user,
  onSaveSchool,
  onOpenSchoolSubdomain,
  theme,
}) => {
  const isDark = theme === 'dark';

  // 4 fields strictly required by docs/03-arxitektura-va-rollar.md 6.3:
  // "nom, slug, soha, vaqt zonasi"
  const [name, setName] = useState(user?.school?.name || '');
  const [slug, setSlug] = useState(user?.school?.slug || '');
  const [field, setField] = useState(user?.school?.field || 'Ingliz tili va xorijiy tillar');
  const [timezone, setTimezone] = useState(user?.school?.timezone || 'Asia/Tashkent');

  const [errorMsg, setErrorMsg] = useState('');
  const [isSaved, setIsSaved] = useState(false);

  if (!isOpen) return null;

  const handleNameChange = (val: string) => {
    setName(val);
    if (!user?.hasSetupSchool && !slug) {
      const generated = val
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
      setSlug(generated);
    }
  };

  const handleSlugChange = (val: string) => {
    const clean = val.toLowerCase().replace(/[^a-z0-9-]/g, '');
    setSlug(clean);
    if (RESERVED_SLUGS.includes(clean)) {
      setErrorMsg(`"${clean}" tizim tomonidan zaxiralangan manzil (docs 6.1). Boshqa nom tanlang.`);
    } else {
      setErrorMsg('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setErrorMsg('Maktab nomini kiriting');
      return;
    }
    if (!slug.trim() || slug.length < 3) {
      setErrorMsg('Slug kamida 3 ta belgidan iborat bo\'lishi kerak');
      return;
    }
    if (RESERVED_SLUGS.includes(slug)) {
      setErrorMsg(`"${slug}" tizim tomonidan zaxiralangan slug (docs 6.1)`);
      return;
    }

    onSaveSchool({
      name: name.trim(),
      slug: slug.trim(),
      field: field.trim(),
      timezone: timezone.trim(),
    });

    setIsSaved(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-lg rounded-2xl border shadow-2xl overflow-hidden relative my-6"
        style={{
          backgroundColor: isDark ? '#12121A' : '#EDE7DA',
          borderColor: isDark ? '#232332' : '#E5DFD3',
          color: isDark ? '#F5F4F0' : '#1F1A12',
        }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full opacity-60 hover:opacity-100 transition-opacity cursor-pointer z-10"
          style={{ backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(31, 26, 18, 0.05)' }}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-7 border-b"
          style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)' }}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-2"
            style={{
              backgroundColor: isDark ? 'rgba(108, 99, 255, 0.15)' : 'rgba(181, 85, 31, 0.1)',
              color: isDark ? '#6C63FF' : '#B5551F',
            }}
          >
            <span>Maktab Ochish Wizardi (docs 6.3)</span>
          </div>

          <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">
            {isSaved ? "Maktab Muvaffaqiyatli Ochildi!" : "Shaxsiy Onlayn Maktabingizni Ochish"}
          </h2>
          <p className="text-xs sm:text-sm opacity-70 mt-1">
            {isSaved 
              ? "Maktab ma'lumotlari saqlandi. {slug}.bilgimedu.uz domeni faollashtirildi."
              : `Ustoz: ${user?.fullName || ''}. Maktabingiz nomi, slugi, sohasi va vaqt zonasini belgilang.`}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-7">
          {isSaved ? (
            /* Success screen */
            <div className="text-center py-4 space-y-6">
              <div 
                className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-white shadow-lg"
                style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
              >
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h3 className="font-display font-bold text-2xl mb-1.5">
                  "{name}" Maktabi Tayyor!
                </h3>
                <p className="text-xs sm:text-sm opacity-75 max-w-md mx-auto">
                  Shaxsiy subdomeningiz internet tarmog'ida muvaffaqiyatli faollashtirildi.
                </p>
              </div>

              {/* URL preview card matching docs 6.1 */}
              <div 
                className="p-4 rounded-xl border text-left space-y-2.5 text-xs font-mono"
                style={{
                  backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                  borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="opacity-60 font-sans">Shaxsiy maktab domeni:</span>
                  <button
                    type="button"
                    onClick={() => {
                      if (onOpenSchoolSubdomain) {
                        onClose();
                        onOpenSchoolSubdomain(slug);
                      }
                    }}
                    className="font-bold flex items-center gap-1 hover:underline cursor-pointer"
                    style={{ color: isDark ? '#6C63FF' : '#B5551F' }}
                  >
                    <span>https://{slug}.bilgimedu.uz</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="opacity-60 font-sans">Ta'lim sohasi:</span>
                  <span className="font-semibold">{field}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="opacity-60 font-sans">Vaqt zonasi:</span>
                  <span className="font-semibold">{timezone}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsSaved(false)}
                  className="flex-1 py-3 rounded-xl border font-semibold text-xs opacity-80 hover:opacity-100 cursor-pointer"
                  style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)' }}
                >
                  Tahrirlash
                </button>

                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    if (onOpenSchoolSubdomain) {
                      onOpenSchoolSubdomain(slug);
                    }
                  }}
                  className="flex-1 py-3 rounded-xl font-bold text-xs text-white shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                  style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
                >
                  <span>Maktab Sahifasiga O'tish</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            /* Maktab ochish wizard form (strictly docs 6.3: nom, slug, soha, vaqt zonasi) */
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMsg && (
                <div className="p-3 rounded-xl bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-semibold flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* 1. Nom */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider opacity-80 block mb-1">
                  1. Maktab Nomi (nom) *
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 absolute left-3.5 top-3.5 opacity-40" />
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => handleNameChange(e.target.value)}
                    placeholder="Masalan: Apex Academy"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none"
                    style={{
                      backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                      borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
                    }}
                  />
                </div>
              </div>

              {/* 2. Slug */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="text-xs font-bold uppercase tracking-wider opacity-80">
                    2. Subdomen (slug) *
                  </label>
                  <span className="text-[11px] opacity-60">Faqat kichik harf, raqam va '-'</span>
                </div>
                <div className="relative flex items-center">
                  <Globe className="w-4 h-4 absolute left-3.5 opacity-40" />
                  <input
                    type="text"
                    required
                    value={slug}
                    onChange={(e) => handleSlugChange(e.target.value)}
                    placeholder="apex"
                    className="w-full pl-10 pr-32 py-2.5 rounded-xl border text-sm font-mono outline-none"
                    style={{
                      backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                      borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
                    }}
                  />
                  <span className="absolute right-3.5 text-xs opacity-50 font-mono pointer-events-none">
                    .bilgimedu.uz
                  </span>
                </div>
                {slug && !errorMsg && (
                  <p className="text-[11px] text-emerald-600 dark:text-emerald-400 mt-1 font-mono flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    https://{slug}.bilgimedu.uz
                  </p>
                )}
              </div>

              {/* 3. Soha */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider opacity-80 block mb-1">
                  3. Ta'lim Sohasi (soha) *
                </label>
                <div className="relative">
                  <Layers className="w-4 h-4 absolute left-3.5 top-3.5 opacity-40 pointer-events-none" />
                  <select
                    value={field}
                    onChange={(e) => setField(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none cursor-pointer"
                    style={{
                      backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                      borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
                    }}
                  >
                    <option value="Ingliz tili va xorijiy tillar">Ingliz tili va xorijiy tillar</option>
                    <option value="IELTS, CEFR va xalqaro imtihonlar">IELTS, CEFR va xalqaro imtihonlar</option>
                    <option value="Dasturlash va IT texnologiyalar">Dasturlash va IT texnologiyalar</option>
                    <option value="Matematika, fizika va aniq fanlar">Matematika, fizika va aniq fanlar</option>
                    <option value="Grafik dizayn, UI/UX va 3D modellashtirish">Grafik dizayn, UI/UX va 3D modellashtirish</option>
                    <option value="Biznes, marketing va menejment">Biznes, marketing va menejment</option>
                    <option value="Boshqa kasb-hunar va mahorat darslari">Boshqa kasb-hunar va mahorat darslari</option>
                  </select>
                </div>
              </div>

              {/* 4. Vaqt zonasi */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider opacity-80 block mb-1">
                  4. Vaqt Zonasi (vaqt zonasi) *
                </label>
                <div className="relative">
                  <Clock className="w-4 h-4 absolute left-3.5 top-3.5 opacity-40 pointer-events-none" />
                  <select
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm outline-none cursor-pointer"
                    style={{
                      backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                      borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
                    }}
                  >
                    {TIMEZONES.map((tz) => (
                      <option key={tz.value} value={tz.value}>
                        {tz.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-3.5 mt-3 rounded-xl font-bold text-sm text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.01]"
                style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
              >
                <span>Maktabni Yaratish & Subdomenni Faollashtirish</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </motion.div>
    </div>
  );
};
