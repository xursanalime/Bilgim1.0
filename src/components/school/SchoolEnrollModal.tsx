import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  X, 
  Sparkles, 
  CheckCircle2, 
  User, 
  Phone, 
  Send, 
  BookOpen, 
  ShieldCheck,
  ArrowRight
} from 'lucide-react';
import { ThemeMode, SchoolLandingData, SchoolCourse, SchoolPricingPlan } from '../../types';

interface SchoolEnrollModalProps {
  isOpen: boolean;
  onClose: () => void;
  school: SchoolLandingData;
  selectedCourse?: SchoolCourse | null;
  selectedPlan?: SchoolPricingPlan | null;
  theme: ThemeMode;
}

export const SchoolEnrollModal: React.FC<SchoolEnrollModalProps> = ({
  isOpen,
  onClose,
  school,
  selectedCourse,
  selectedPlan,
  theme,
}) => {
  const isDark = theme === 'dark';

  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [telegram, setTelegram] = useState('');
  const [chosenCourseId, setChosenCourseId] = useState<string>(
    selectedCourse?.id || school.courses[0]?.id || ''
  );
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phone.trim()) return;
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        className="w-full max-w-lg rounded-3xl border shadow-2xl overflow-hidden relative my-6"
        style={{
          backgroundColor: isDark ? '#12121A' : '#EDE7DA',
          borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.12)',
          color: isDark ? '#F5F4F0' : '#1F1A12',
        }}
      >
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 p-2 rounded-full opacity-60 hover:opacity-100 transition-opacity cursor-pointer z-10"
          style={{ backgroundColor: isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(31, 26, 18, 0.05)' }}
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div 
          className="p-6 sm:p-7 border-b"
          style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)' }}
        >
          <div 
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-2"
            style={{
              backgroundColor: isDark ? 'rgba(108, 99, 255, 0.15)' : 'rgba(181, 85, 31, 0.1)',
              color: isDark ? '#6C63FF' : '#B5551F',
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{school.name}</span>
          </div>

          <h2 className="font-display font-bold text-2xl">
            {isSubmitted ? "Arizangiz Qabul Qilindi!" : "Kursga Yozilish & Sinov Darsi"}
          </h2>
          <p className="text-xs sm:text-sm opacity-70 mt-1">
            {isSubmitted 
              ? "Tez orada o'quv bo'limi siz bilan bog'lanadi va 1-darsga kirishni faollashtiradi."
              : `Ustoz ${school.teacherName} o'quv dasturi bo'yicha bepul 1-darsni boshlash uchun ma'lumotlarni qoldiring.`}
          </p>
        </div>

        {/* Body Content */}
        <div className="p-6 sm:p-7">
          {isSubmitted ? (
            <div className="text-center py-4 space-y-6">
              <div 
                className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center text-white shadow-lg"
                style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
              >
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <div>
                <h3 className="font-display font-bold text-xl mb-1">
                  Rahmat, {fullName}!
                </h3>
                <p className="text-xs sm:text-sm opacity-75 max-w-sm mx-auto">
                  Arizangiz muvaffaqiyatli qabul qilindi. 15 daqiqa ichida Telegram yoki telefon orqali shaxsiy kabinet va birinchi kirish dars havolasi jo'natiladi.
                </p>
              </div>

              <div 
                className="p-4 rounded-xl border text-left space-y-2 text-xs"
                style={{
                  backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                  borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
                }}
              >
                <div className="flex justify-between">
                  <span className="opacity-60">Maktab:</span>
                  <span className="font-semibold">{school.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-60">Telefon:</span>
                  <span className="font-semibold">{phone}</span>
                </div>
                {telegram && (
                  <div className="flex justify-between">
                    <span className="opacity-60">Telegram:</span>
                    <span className="font-semibold">{telegram}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="opacity-60">Tanlangan tarif/kurs:</span>
                  <span className="font-semibold text-emerald-500">1-Dars Bepul Sinov</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="w-full py-3.5 rounded-xl font-bold text-xs text-white shadow-md cursor-pointer"
                style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
              >
                Yopish & Maktab Sahifasiga Qaytish
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Course selection dropdown */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider opacity-80 block mb-1">
                  Qiziqtirgan Kursingiz *
                </label>
                <div className="relative">
                  <BookOpen className="w-4 h-4 absolute left-3.5 top-3.5 opacity-40 pointer-events-none" />
                  <select
                    value={chosenCourseId}
                    onChange={(e) => setChosenCourseId(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-sm outline-none cursor-pointer"
                    style={{
                      backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                      borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
                    }}
                  >
                    {school.courses.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title} — {c.priceMonth}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Full Name */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider opacity-80 block mb-1">
                  Ism va Familiyangiz *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 absolute left-3.5 top-3.5 opacity-40" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Masalan: Sardor Rahimov"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-sm outline-none"
                    style={{
                      backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                      borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
                    }}
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider opacity-80 block mb-1">
                  Telefon Raqamingiz *
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 absolute left-3.5 top-3.5 opacity-40" />
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+998 90 123 45 67"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-sm outline-none"
                    style={{
                      backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                      borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
                    }}
                  />
                </div>
              </div>

              {/* Telegram Username */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider opacity-80 block mb-1">
                  Telegram Username (ixtiyoriy)
                </label>
                <div className="relative">
                  <Send className="w-4 h-4 absolute left-3.5 top-3.5 opacity-40" />
                  <input
                    type="text"
                    value={telegram}
                    onChange={(e) => setTelegram(e.target.value)}
                    placeholder="@username"
                    className="w-full pl-10 pr-4 py-2.5 rounded-xl border text-xs sm:text-sm outline-none"
                    style={{
                      backgroundColor: isDark ? '#0A0A0F' : '#F6F2EA',
                      borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
                    }}
                  />
                </div>
              </div>

              {/* Trust disclaimer */}
              <div className="flex items-center gap-2 text-[11px] opacity-70 pt-1">
                <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Ma'lumotlaringiz maxfiy saqlanadi va spam xabarlar yuborilmaydi.</span>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full py-3.5 mt-2 rounded-xl font-bold text-sm text-white shadow-md flex items-center justify-center gap-2 cursor-pointer transition-transform hover:scale-[1.01]"
                style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
              >
                <span>Arizani Yuborish & Sinov Darsini Olish</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>

      </motion.div>
    </div>
  );
};
