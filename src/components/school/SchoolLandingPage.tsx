import React, { useState } from 'react';
import { SchoolNavbar } from './SchoolNavbar';
import { SchoolHero } from './SchoolHero';
import { SchoolAudience } from './SchoolAudience';
import { SchoolCourses } from './SchoolCourses';
import { SchoolTeacher } from './SchoolTeacher';
import { SchoolTestimonials } from './SchoolTestimonials';
import { SchoolPricing } from './SchoolPricing';
import { SchoolFaq } from './SchoolFaq';
import { SchoolStickyCta } from './SchoolStickyCta';
import { SchoolEnrollModal } from './SchoolEnrollModal';
import { ThemeMode, SchoolLandingData, SchoolCourse, SchoolPricingPlan } from '../../types';
import { GraduationCap, ArrowLeft, Globe, Send, ShieldCheck } from 'lucide-react';

interface SchoolLandingPageProps {
  school: SchoolLandingData;
  theme: ThemeMode;
  toggleTheme: () => void;
  onReturnToPlatform: () => void;
}

export const SchoolLandingPage: React.FC<SchoolLandingPageProps> = ({
  school,
  theme,
  toggleTheme,
  onReturnToPlatform,
}) => {
  const isDark = theme === 'dark';

  const [enrollModalOpen, setEnrollModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<SchoolCourse | null>(null);
  const [selectedPlan, setSelectedPlan] = useState<SchoolPricingPlan | null>(null);

  const handleOpenEnrollWithCourse = (course?: SchoolCourse) => {
    setSelectedCourse(course || null);
    setSelectedPlan(null);
    setEnrollModalOpen(true);
  };

  const handleOpenEnrollWithPlan = (plan?: SchoolPricingPlan) => {
    setSelectedPlan(plan || null);
    setSelectedCourse(null);
    setEnrollModalOpen(true);
  };

  const handleScrollToCourses = () => {
    const el = document.getElementById('courses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      
      {/* 1. Header Navbar */}
      <SchoolNavbar
        school={school}
        theme={theme}
        toggleTheme={toggleTheme}
        onReturnToPlatform={onReturnToPlatform}
        onOpenEnroll={() => handleOpenEnrollWithCourse()}
      />

      <main>
        {/* 2. Hero Section (Structure 1: Maktab nomi, o'qituvchi kimligi, asosiy va'da, CTA) */}
        <SchoolHero
          school={school}
          theme={theme}
          onOpenEnroll={() => handleOpenEnrollWithCourse()}
          onViewCourses={handleScrollToCourses}
        />

        {/* 3. Audience Filter (Structure 2: Bu kimlar uchun / kimlar uchun emas) */}
        <SchoolAudience
          school={school}
          theme={theme}
        />

        {/* 4. Courses Section (Structure 3: Kurslar ro'yxati - narx, davomiylik, format) */}
        <SchoolCourses
          school={school}
          theme={theme}
          onOpenEnroll={handleOpenEnrollWithCourse}
        />

        {/* 5. Teacher Bio & Highlights (Structure 4: O'qituvchi haqida - tajriba, yutuqlar, video) */}
        <SchoolTeacher
          school={school}
          theme={theme}
          onOpenEnroll={() => handleOpenEnrollWithCourse()}
        />

        {/* 6. Testimonials & Results (Structure 5: Sharhlar va natijalar) */}
        <SchoolTestimonials
          school={school}
          theme={theme}
        />

        {/* 7. Pricing & Payment Options (Structure 6: Narxlar va to'lov turlari) */}
        <SchoolPricing
          school={school}
          theme={theme}
          onOpenEnroll={handleOpenEnrollWithPlan}
        />

        {/* 8. FAQ Section (Structure 7: Ko'p beriladigan savollar) */}
        <SchoolFaq
          school={school}
          theme={theme}
        />
      </main>

      {/* School Footer */}
      <footer 
        className="py-12 border-t transition-colors text-xs"
        style={{
          backgroundColor: isDark ? '#0A0A0F' : '#EDE7DA',
          borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)',
          color: isDark ? '#F5F4F0' : '#1F1A12',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b"
            style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.1)' }}
          >
            <div className="flex items-center gap-3">
              <div 
                className="w-8 h-8 rounded-xl flex items-center justify-center font-bold text-white text-xs"
                style={{ backgroundColor: isDark ? '#6C63FF' : '#B5551F' }}
              >
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <div className="font-display font-bold text-base leading-none">
                  {school.name}
                </div>
                <div className="text-[11px] opacity-60 mt-0.5">
                  Ustoz: {school.teacherName} • {school.timezone}
                </div>
              </div>
            </div>

            {/* Return to platform link */}
            <button
              onClick={onReturnToPlatform}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border opacity-75 hover:opacity-100 transition-opacity cursor-pointer text-xs font-semibold"
              style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)' }}
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BilgimEdu Bosh Sahifasiga Qaytish</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 opacity-60 text-[11px]">
            <div>
              © {new Date().getFullYear()} {school.name}. Barcha huquqlar himoyalangan.
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Ushbu maktab <strong>BilgimEdu</strong> infratuzilmasida mustaqil faoliyat yuritadi</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 9. Floating Sticky CTA on scroll (Structure 8: Pastda har doim ko'rinadi) */}
      <SchoolStickyCta
        school={school}
        theme={theme}
        onOpenEnroll={() => handleOpenEnrollWithCourse()}
      />

      {/* Enrollment Modal */}
      <SchoolEnrollModal
        isOpen={enrollModalOpen}
        onClose={() => setEnrollModalOpen(false)}
        school={school}
        selectedCourse={selectedCourse}
        selectedPlan={selectedPlan}
        theme={theme}
      />

    </div>
  );
};
