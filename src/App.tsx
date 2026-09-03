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
import { LoginModal } from './components/LoginModal';
import { RegisterModal } from './components/RegisterModal';
import { TeacherSchoolSetupModal } from './components/TeacherSchoolSetupModal';
import { ThemeMode, Language, UserSession, SchoolWizardData } from './types';

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [lang, setLang] = useState<Language>('uz');
  
  // Auth state with local persistence
  const [user, setUser] = useState<UserSession | null>(() => {
    try {
      const saved = localStorage.getItem('bilgim_user_session');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [loginOpen, setLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [schoolSetupOpen, setSchoolSetupOpen] = useState(false);

  // Sync theme with HTML root class
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

  const handleLoginSuccess = (loggedInUser: UserSession) => {
    setUser(loggedInUser);
    try {
      localStorage.setItem('bilgim_user_session', JSON.stringify(loggedInUser));
    } catch {}

    // If teacher hasn't configured a school yet, prompt setup
    if (loggedInUser.role === 'teacher' && !loggedInUser.hasSetupSchool) {
      setTimeout(() => {
        setSchoolSetupOpen(true);
      }, 300);
    }
  };

  const handleRegisterSuccess = (newUser: UserSession) => {
    setUser(newUser);
    try {
      localStorage.setItem('bilgim_user_session', JSON.stringify(newUser));
    } catch {}

    // Requirement: "teacher register qilib kirgandan keyin maktab ochish sozlamalari chiqishi kerak"
    if (newUser.role === 'teacher') {
      setTimeout(() => {
        setSchoolSetupOpen(true);
      }, 300);
    }
  };

  const handleSaveSchool = (data: SchoolWizardData) => {
    if (!user) return;
    const updatedUser: UserSession = {
      ...user,
      school: data,
      hasSetupSchool: true,
    };
    setUser(updatedUser);
    try {
      localStorage.setItem('bilgim_user_session', JSON.stringify(updatedUser));
    } catch {}
  };

  const handleLogout = () => {
    setUser(null);
    try {
      localStorage.removeItem('bilgim_user_session');
    } catch {}
  };

  const handleOpenRegister = () => {
    setRegisterOpen(true);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'dark' : ''}`}>
      {/* 1. Header Navigation */}
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        lang={lang}
        setLang={setLang}
        user={user}
        onOpenLogin={() => setLoginOpen(true)}
        onOpenRegister={handleOpenRegister}
        onOpenSchoolSetup={() => setSchoolSetupOpen(true)}
        onLogout={handleLogout}
      />

      {/* Main Content Sections */}
      <main>
        {/* 2. Hero Section */}
        <Hero
          theme={theme}
          lang={lang}
          onOpenRegister={handleOpenRegister}
        />

        {/* 3. Interactive Live Platform Simulator */}
        <PlatformShowcase
          theme={theme}
          lang={lang}
          onOpenRegister={handleOpenRegister}
        />

        {/* 4. Fit Section */}
        <PuzzleFitSection
          theme={theme}
          lang={lang}
          onOpenRegister={handleOpenRegister}
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
          onOpenRegister={handleOpenRegister}
        />

        {/* 7. Interactive 0% Commission Income Calculator */}
        <IncomeCalculator
          theme={theme}
          lang={lang}
          onOpenRegister={handleOpenRegister}
        />

        {/* 8. Pricing Section */}
        <PricingSection
          theme={theme}
          lang={lang}
          onOpenRegister={handleOpenRegister}
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
        onOpenLogin={() => setLoginOpen(true)}
        onOpenRegister={handleOpenRegister}
      />

      {/* 14. Floating Sticky CTA on scroll */}
      <StickyCta
        theme={theme}
        lang={lang}
        onOpenRegister={handleOpenRegister}
      />

      {/* Interactive Modals */}
      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onOpenRegister={() => {
          setLoginOpen(false);
          setRegisterOpen(true);
        }}
        onLoginSuccess={handleLoginSuccess}
        theme={theme}
        lang={lang}
      />

      <RegisterModal
        isOpen={registerOpen}
        onClose={() => setRegisterOpen(false)}
        onOpenLogin={() => {
          setRegisterOpen(false);
          setLoginOpen(true);
        }}
        onRegisterSuccess={handleRegisterSuccess}
        theme={theme}
        lang={lang}
      />

      <TeacherSchoolSetupModal
        isOpen={schoolSetupOpen}
        onClose={() => setSchoolSetupOpen(false)}
        user={user}
        onSaveSchool={handleSaveSchool}
        theme={theme}
        lang={lang}
      />
    </div>
  );
}
