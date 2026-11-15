import { useState } from 'react';
import { Terminal, Globe, Menu, X } from 'lucide-react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

type NavbarProps = {
  lang: Language;
  setLang: (lang: Language) => void;
  currentView: string;
  setCurrentView: (view: any) => void;
};

export default function Navbar({ lang, setLang, currentView, setCurrentView }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  const handleNavClick = (view: string) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#09090b]/85 border-b border-zinc-800/80">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-2 font-mono text-lg font-bold tracking-tight text-white bg-transparent border-none cursor-pointer"
        >
          <Terminal className="w-5 h-5 text-purple-500" />
          <span>metin<span className="text-purple-500">.dev</span></span>
        </button>

        {/* Masaüstü Navigasyon */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <button onClick={() => handleNavClick('home')} className={`hover:text-white transition-colors bg-transparent border-none cursor-pointer ${currentView === 'home' ? 'text-purple-400 font-semibold' : ''}`}>
            {lang === 'tr' ? 'Ana Sayfa' : 'Home'}
          </button>
          <button onClick={() => handleNavClick('projects')} className={`hover:text-white transition-colors bg-transparent border-none cursor-pointer ${currentView === 'projects' ? 'text-purple-400 font-semibold' : ''}`}>
            {t.nav.caseStudies}
          </button>
          <button onClick={() => handleNavClick('services')} className={`hover:text-white transition-colors bg-transparent border-none cursor-pointer ${currentView === 'services' ? 'text-purple-400 font-semibold' : ''}`}>
            {t.nav.services}
          </button>
          <button onClick={() => handleNavClick('writing')} className={`hover:text-white transition-colors bg-transparent border-none cursor-pointer ${currentView === 'writing' ? 'text-purple-400 font-semibold' : ''}`}>
            {t.nav.publications}
          </button>
          <button onClick={() => handleNavClick('stack')} className={`hover:text-white transition-colors bg-transparent border-none cursor-pointer ${currentView === 'stack' ? 'text-purple-400 font-semibold' : ''}`}>
            {t.nav.stack}
          </button>
        </nav>

        {/* Sağ Butonlar (Dil ve İletişim) */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'en' ? 'tr' : 'en')}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-bold rounded-lg bg-zinc-900 border border-zinc-700 text-purple-400 hover:text-white transition-all cursor-pointer shadow-sm"
            title="Change Language / Dil Değiştir"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === 'en' ? 'TR' : 'EN'}
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex px-4 py-2 text-sm font-medium rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-lg shadow-purple-500/20 cursor-pointer"
          >
            {t.nav.workWithMe}
          </button>

          {/* Mobil Menü Açma/Kapama Butonu */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobil Açılır Menü */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#09090b] border-b border-zinc-800 px-6 py-6 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4">
          <button onClick={() => handleNavClick('home')} className="block w-full text-left py-2 text-sm font-medium text-zinc-300 hover:text-purple-400">
            {lang === 'tr' ? 'Ana Sayfa' : 'Home'}
          </button>
          <button onClick={() => handleNavClick('projects')} className="block w-full text-left py-2 text-sm font-medium text-zinc-300 hover:text-purple-400">
            {t.nav.caseStudies}
          </button>
          <button onClick={() => handleNavClick('services')} className="block w-full text-left py-2 text-sm font-medium text-zinc-300 hover:text-purple-400">
            {t.nav.services}
          </button>
          <button onClick={() => handleNavClick('writing')} className="block w-full text-left py-2 text-sm font-medium text-zinc-300 hover:text-purple-400">
            {t.nav.publications}
          </button>
          <button onClick={() => handleNavClick('stack')} className="block w-full text-left py-2 text-sm font-medium text-zinc-300 hover:text-purple-400">
            {t.nav.stack}
          </button>
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-2.5 text-center text-sm font-medium rounded-lg bg-purple-600 text-white shadow-lg"
            >
              {t.nav.workWithMe}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}