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
import { SubdomainSimulatorBar } from './components/SubdomainSimulatorBar';
import { SchoolLandingPage } from './components/school/SchoolLandingPage';
import { getSchoolBySlug } from './data/schoolsData';
import { ThemeMode, Language, UserSession, SchoolWizardData } from './types';

function getInitialSubdomain(): string | null {
  try {
    // 1. Query parameter check: ?school=slug or ?subdomain=slug
    const params = new URLSearchParams(window.location.search);
    const querySub = params.get('school') || params.get('subdomain');
    if (querySub && querySub !== 'www') return querySub.toLowerCase().trim();

    // 2. URL hash check: #/school/slug or #/slug
    const hash = window.location.hash;
    if (hash) {
      const match = hash.match(/#\/(?:school\/)?([a-z0-9-]+)/i);
      if (match && match[1] && match[1] !== 'www') return match[1].toLowerCase().trim();
    }

    // 3. Subdomain on localhost / production
    const hostname = window.location.hostname.toLowerCase();
    if (hostname.endsWith('.localhost')) {
      const sub = hostname.replace('.localhost', '');
      if (sub && sub !== 'www') return sub;
    }
    if (hostname.endsWith('.lvh.me')) {
      const sub = hostname.replace('.lvh.me', '');
      if (sub && sub !== 'www') return sub;
    }
    if (hostname.endsWith('.bilgimedu.uz')) {
      const sub = hostname.replace('.bilgimedu.uz', '');
      if (sub && sub !== 'www') return sub;
    }

    // Subdomain on other domains (excluding cloud run sandbox domains)
    const parts = hostname.split('.');
    if (parts.length > 2 && !hostname.includes('run.app') && !hostname.includes('github.dev') && !hostname.includes('webcontainer')) {
      const sub = parts[0];
      if (sub !== 'www' && sub !== 'api') return sub;
    }
  } catch {}
  return null;
}

export default function App() {
  const [theme, setTheme] = useState<ThemeMode>('light');
  const [lang, setLang] = useState<Language>('uz');
  const [currentSubdomain, setCurrentSubdomain] = useState<string | null>(getInitialSubdomain);
  
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

  // Sync browser popstate (back / forward buttons)
  useEffect(() => {
    const onPopState = () => {
      setCurrentSubdomain(getInitialSubdomain());
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleSelectSubdomain = (slug: string | null) => {
    setCurrentSubdomain(slug);
    try {
      const url = new URL(window.location.href);
      if (slug) {
        url.searchParams.set('school', slug);
      } else {
        url.searchParams.delete('school');
        url.searchParams.delete('subdomain');
      }
      window.history.pushState({}, '', url.toString());
    } catch {}
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
      
      {/* 0. Subdomain / Domain Switcher Bar */}
      <SubdomainSimulatorBar
        currentSubdomain={currentSubdomain}
        onSelectSubdomain={handleSelectSubdomain}
        user={user}
        theme={theme}
      />

      {/* Conditional Rendering: School Subdomain Landing Page vs Main Platform */}
      {currentSubdomain ? (
        <SchoolLandingPage
          school={getSchoolBySlug(currentSubdomain, user?.school, user?.fullName)}
          theme={theme}
          toggleTheme={toggleTheme}
          onReturnToPlatform={() => handleSelectSubdomain(null)}
        />
      ) : (
        <>
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
            onOpenSchoolLanding={(slug) => handleSelectSubdomain(slug)}
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
        </>
      )}

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
        onOpenSchoolSubdomain={(slug) => handleSelectSubdomain(slug)}
        theme={theme}
        lang={lang}
      />
    </div>
  );
}
