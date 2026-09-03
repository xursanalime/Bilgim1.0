import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PuzzleFitSection } from './components/PuzzleFitSection';
import { ToolkitGrid } from './components/ToolkitGrid';
import { StepsRoadmap } from './components/StepsRoadmap';
import { AudienceFilter } from './components/AudienceFilter';
import { VerticalBeadChain } from './components/VerticalBeadChain';
import { PricingSection } from './components/PricingSection';
import { TestimonialsFloating } from './components/TestimonialsFloating';
import { FaqSection } from './components/FaqSection';
import { StickyCta } from './components/StickyCta';
import { Footer } from './components/Footer';
import { CreateSchoolModal } from './components/CreateSchoolModal';
import { LoginModal } from './components/LoginModal';
import { ThemeMode, Language } from './types';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [lang, setLang] = useState<Language>('uz');
  const [createSchoolOpen, setCreateSchoolOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  // Sync theme with HTML class
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'dark' : ''}`}>
      {/* 1. Header Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        lang={lang}
        setLang={setLang}
        onOpenCreateSchool={() => setCreateSchoolOpen(true)}
        onOpenLogin={() => setLoginOpen(true)}
      />

      {/* Main Content Sections following Pinterest References & Documented Blocks */}
      <main>
        {/* 2. Hero Section with Fraunces Headline & 14-day trial CTA */}
        <Hero
          theme={theme}
          onOpenCreateSchool={() => setCreateSchoolOpen(true)}
        />

        {/* 3. Pinterest Reference 5: "We Just FIT" (Knowledge + Platform Puzzle) */}
        <PuzzleFitSection
          theme={theme}
          onOpenCreateSchool={() => setCreateSchoolOpen(true)}
        />

        {/* 4. Pinterest Reference 2: "Toolkit Grid" with 3D pins and step badges */}
        <ToolkitGrid theme={theme} />

        {/* 5. Pinterest Reference 3 & 4: 3 Steps S-Curve Roadmap */}
        <StepsRoadmap
          theme={theme}
          onOpenCreateSchool={() => setCreateSchoolOpen(true)}
        />

        {/* 6. Document Block 2: "Kimlar uchun mos / mos emas" filter */}
        <AudienceFilter theme={theme} />

        {/* 7. Pinterest Reference 6: Vertical connected bead chain ("Nega Bilgim Edu?") */}
        <VerticalBeadChain theme={theme} />

        {/* 8. Pricing Section: Go (149k), Pro (499k), Max (1.299m) with full quotas */}
        <PricingSection
          theme={theme}
          onOpenCreateSchool={() => setCreateSchoolOpen(true)}
        />

        {/* 9. Pinterest Reference 1: Angled floating customer testimonials with ★ 5/5 badges */}
        <TestimonialsFloating theme={theme} />

        {/* 10. FAQ Accordion */}
        <FaqSection theme={theme} />
      </main>

      {/* 11. Footer */}
      <Footer
        theme={theme}
        onOpenCreateSchool={() => setCreateSchoolOpen(true)}
        onOpenLogin={() => setLoginOpen(true)}
      />

      {/* 12. Floating Sticky CTA on scroll */}
      <StickyCta
        theme={theme}
        onOpenCreateSchool={() => setCreateSchoolOpen(true)}
      />

      {/* Interactive Modals */}
      <CreateSchoolModal
        isOpen={createSchoolOpen}
        onClose={() => setCreateSchoolOpen(false)}
        theme={theme}
      />

      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        theme={theme}
      />
    </div>
  );
}
