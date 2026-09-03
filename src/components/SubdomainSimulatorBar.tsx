import React, { useState } from 'react';
import { 
  Globe, 
  ExternalLink, 
  Copy, 
  Check, 
  Sparkles, 
  ChevronRight, 
  ChevronDown, 
  ChevronUp,
  Laptop,
  ArrowRight
} from 'lucide-react';
import { ThemeMode, UserSession } from '../types';

interface SubdomainSimulatorBarProps {
  currentSubdomain: string | null;
  onSelectSubdomain: (subdomain: string | null) => void;
  user: UserSession | null;
  theme: ThemeMode;
}

export const SubdomainSimulatorBar: React.FC<SubdomainSimulatorBarProps> = ({
  currentSubdomain,
  onSelectSubdomain,
  user,
  theme,
}) => {
  const isDark = theme === 'dark';
  const [customInput, setCustomInput] = useState('');
  const [copied, setCopied] = useState(false);
  const [minimized, setMinimized] = useState(false);

  const activeDisplay = currentSubdomain 
    ? `https://${currentSubdomain}.bilgimedu.uz` 
    : 'https://bilgimedu.uz';

  const localhostDisplay = currentSubdomain
    ? `http://${currentSubdomain}.localhost:3000`
    : 'http://localhost:3000';

  const handleCopy = () => {
    navigator.clipboard?.writeText(activeDisplay);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = customInput.toLowerCase().trim().replace(/[^a-z0-9-]/g, '');
    if (clean) {
      onSelectSubdomain(clean);
      setCustomInput('');
    }
  };

  return (
    <div 
      className="border-b text-xs transition-colors z-50 sticky top-0 relative shadow-sm"
      style={{
        backgroundColor: isDark ? '#0D0D14' : '#E8E2D4',
        borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
        color: isDark ? '#F5F4F0' : '#1F1A12',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2">
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          
          {/* Left: Active URL Bar */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[10px] opacity-60">
              <Globe className="w-3.5 h-3.5 text-emerald-500" />
              <span>Subdomen Ruteri:</span>
            </span>

            {/* Address Pill */}
            <div 
              className="inline-flex items-center gap-2 px-3 py-1 rounded-lg border font-mono font-semibold text-xs shadow-inner"
              style={{
                backgroundColor: isDark ? '#06060A' : '#F6F2EA',
                borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
                color: isDark ? '#6C63FF' : '#B5551F',
              }}
            >
              <span className="opacity-50 font-normal">
                {currentSubdomain ? 'https://' : 'https://'}
              </span>
              <span>{currentSubdomain ? `${currentSubdomain}.bilgimedu.uz` : 'bilgimedu.uz'}</span>

              <button
                onClick={handleCopy}
                className="opacity-50 hover:opacity-100 transition-opacity ml-1 cursor-pointer"
                title="URL nusxalash"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
              </button>
            </div>

            {/* Localhost indicator note */}
            <span className="hidden xl:inline-flex items-center gap-1 text-[11px] opacity-60 font-sans">
              <Laptop className="w-3 h-3" />
              <span>(Localhostda: <code className="font-mono font-semibold">{localhostDisplay}</code>)</span>
            </span>
          </div>

          {/* Right: Quick Switcher Tabs */}
          <div className="flex items-center gap-1.5 flex-wrap">
            {/* 1. Main Platform */}
            <button
              onClick={() => onSelectSubdomain(null)}
              className={`px-2.5 py-1 rounded-lg font-medium text-[11px] cursor-pointer transition-all ${
                currentSubdomain === null 
                  ? 'bg-emerald-600 text-white font-bold shadow-sm' 
                  : 'border opacity-70 hover:opacity-100'
              }`}
              style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)' }}
            >
              bilgimedu.uz (Asosiy)
            </button>

            {/* 2. Apex school demo */}
            <button
              onClick={() => onSelectSubdomain('apex')}
              className={`px-2.5 py-1 rounded-lg font-medium text-[11px] cursor-pointer transition-all ${
                currentSubdomain === 'apex' 
                  ? 'text-white font-bold shadow-sm' 
                  : 'border opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor: currentSubdomain === 'apex' 
                  ? (isDark ? '#6C63FF' : '#B5551F') 
                  : undefined,
                borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)'
              }}
            >
              apex.bilgimedu.uz
            </button>

            {/* 3. IELTS Zone demo */}
            <button
              onClick={() => onSelectSubdomain('ielts-zone')}
              className={`px-2.5 py-1 rounded-lg font-medium text-[11px] cursor-pointer transition-all ${
                currentSubdomain === 'ielts-zone' 
                  ? 'text-white font-bold shadow-sm' 
                  : 'border opacity-70 hover:opacity-100'
              }`}
              style={{
                backgroundColor: currentSubdomain === 'ielts-zone' 
                  ? (isDark ? '#6C63FF' : '#B5551F') 
                  : undefined,
                borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)'
              }}
            >
              ielts-zone.bilgimedu.uz
            </button>

            {/* 4. Teacher's Created School (if exists) */}
            {user?.school?.slug && (
              <button
                onClick={() => onSelectSubdomain(user.school!.slug)}
                className={`px-2.5 py-1 rounded-lg font-medium text-[11px] cursor-pointer transition-all flex items-center gap-1 ${
                  currentSubdomain === user.school.slug 
                    ? 'text-white font-bold shadow-sm' 
                    : 'border opacity-70 hover:opacity-100'
                }`}
                style={{
                  backgroundColor: currentSubdomain === user.school.slug 
                    ? (isDark ? '#6C63FF' : '#B5551F') 
                    : undefined,
                  borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)'
                }}
              >
                <Sparkles className="w-3 h-3 text-amber-300" />
                <span>{user.school.slug}.bilgimedu.uz (Sizning maktabingiz)</span>
              </button>
            )}

            {/* 5. Custom slug quick form */}
            <form onSubmit={handleCustomSubmit} className="inline-flex items-center gap-1">
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="boshqa-slug"
                className="w-24 px-2 py-0.5 rounded-lg border text-[11px] outline-none font-mono"
                style={{
                  backgroundColor: isDark ? '#06060A' : '#F6F2EA',
                  borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)',
                }}
              />
              <button
                type="submit"
                className="px-2 py-1 rounded-lg border text-[10px] font-bold uppercase opacity-75 hover:opacity-100 cursor-pointer"
                style={{ borderColor: isDark ? '#232332' : 'rgba(31, 26, 18, 0.15)' }}
                title="Kiritilgan subdomenni ochish"
              >
                Ochish
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};
