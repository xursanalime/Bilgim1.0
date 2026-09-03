import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PlatformShowcase } from './components/PlatformShowcase';
import { PuzzleFitSection } from './components/PuzzleFitSection';
import { ToolkitGrid } from './components/ToolkitGrid';
import { StepsRoadmap } from './components/StepsRoadmap';
import { AudienceFilter } from './components/AudienceFilter';
import { VerticalBeadChain } from './components/VerticalBeadChain';
import { IncomeCalculator } from './components/IncomeCalculator';
import { PricingSection } from './components/PricingSection';
import { TestimonialsFloating } from './components/TestimonialsFloating';
import { FaqSection } from './components/FaqSection';
import { StickyCta } from './components/StickyCta';
import { Footer } from './components/Footer';
import { CreateSchoolModal } from './components/CreateSchoolModal';
import { LoginModal } from './components/LoginModal';
import { RegisterModal } from './components/RegisterModal';
import { ThemeMode, Language } from './types';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [lang, setLang] = useState<Language>('uz');
  const [createSchoolOpen, setCreateSchoolOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);

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
        onOpenRegister={() => setRegisterOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section */}
        <Hero
          theme={theme}
          lang={lang}
          onOpenCreateSchool={() => setCreateSchoolOpen(true)}
        />

        {/* 3. Interactive Live Platform Simulator */}
        <PlatformShowcase
          theme={theme}
          lang={lang}
          onOpenCreateSchool={() => setCreateSchoolOpen(true)}
        />

        {/* 4. Fit Section */}
        <PuzzleFitSection
          theme={theme}
          lang={lang}
          onOpenCreateSchool={() => setCreateSchoolOpen(true)}
        />

        {/* 5. Toolkit Grid */}
        <ToolkitGrid 
          theme={theme} 
          lang={lang} 
        />

        {/* 6. Steps Roadmap */}
        <StepsRoadmap
          theme={theme}
          lang={lang}
          onOpenCreateSchool={() => setCreateSchoolOpen(true)}
        />

        {/* 7. Interactive 0% Commission Income Calculator */}
        <IncomeCalculator
          theme={theme}
          lang={lang}
          onOpenCreateSchool={() => setCreateSchoolOpen(true)}
        />

        {/* 8. Pricing Section */}
        <PricingSection
          theme={theme}
          lang={lang}
          onOpenCreateSchool={() => setCreateSchoolOpen(true)}
        />

        {/* 9. Target Audience Filter */}
        <AudienceFilter 
          theme={theme} 
          lang={lang} 
        />

        {/* 10. Vertical Connected Bead Chain */}
        <VerticalBeadChain 
          theme={theme} 
          lang={lang} 
        />

        {/* 11. Testimonials */}
        <TestimonialsFloating 
          theme={theme} 
          lang={lang} 
        />

        {/* 12. FAQ Accordion */}
        <FaqSection 
          theme={theme} 
          lang={lang} 
        />
      </main>

      {/* 13. Footer */}
      <Footer
        theme={theme}
        lang={lang}
        onOpenCreateSchool={() => setCreateSchoolOpen(true)}
        onOpenLogin={() => setLoginOpen(true)}
        onOpenRegister={() => setRegisterOpen(true)}
      />

      {/* 14. Floating Sticky CTA on scroll */}
      <StickyCta
        theme={theme}
        lang={lang}
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
        lang={lang}
        onSwitchToRegister={() => {
          setLoginOpen(false);
          setRegisterOpen(true);
        }}
      />

      <RegisterModal
        isOpen={registerOpen}
        onClose={() => setRegisterOpen(false)}
        theme={theme}
        lang={lang}
        onSwitchToLogin={() => {
          setRegisterOpen(false);
          setLoginOpen(true);
        }}
      />
    </div>
  );
}
