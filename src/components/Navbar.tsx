import { useState } from 'react';
import { Terminal, Globe, Menu, X, Sun, Moon } from 'lucide-react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

type NavbarProps = {
  lang: Language;
  setLang: (lang: Language) => void;
  currentView: string;
  setCurrentView: (view: any) => void;
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
};

export default function Navbar({ lang, setLang, currentView, setCurrentView, darkMode, setDarkMode }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  const handleNavClick = (view: string) => {
    setCurrentView(view);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-[#f5f2eb]/90 dark:bg-[#0f1115]/90 border-b border-zinc-300 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button 
          onClick={() => handleNavClick('home')} 
          className="flex items-center gap-2 font-mono text-lg font-bold tracking-tight text-zinc-950 dark:text-white bg-transparent border-none cursor-pointer"
        >
          <Terminal className="w-5 h-5 text-blue-700 dark:text-indigo-400" />
          <span>metin<span className="text-blue-700 dark:text-indigo-400">.dev</span></span>
        </button>

        {/* Masaüstü Navigasyon */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-800 dark:text-zinc-300">
          <button 
            onClick={() => handleNavClick('home')} 
            className={`transition-colors bg-transparent border-none cursor-pointer hover:text-zinc-950 dark:hover:text-white ${currentView === 'home' ? 'text-blue-700 dark:text-indigo-400 font-semibold' : 'text-zinc-700 dark:text-zinc-400'}`}
          >
            {lang === 'tr' ? 'Ana Sayfa' : 'Home'}
          </button>
          <button 
            onClick={() => handleNavClick('projects')} 
            className={`transition-colors bg-transparent border-none cursor-pointer hover:text-zinc-950 dark:hover:text-white ${currentView === 'projects' ? 'text-blue-700 dark:text-indigo-400 font-semibold' : 'text-zinc-700 dark:text-zinc-400'}`}
          >
            {t.nav.caseStudies}
          </button>
          <button 
            onClick={() => handleNavClick('services')} 
            className={`transition-colors bg-transparent border-none cursor-pointer hover:text-zinc-950 dark:hover:text-white ${currentView === 'services' ? 'text-blue-700 dark:text-indigo-400 font-semibold' : 'text-zinc-700 dark:text-zinc-400'}`}
          >
            {t.nav.services}
          </button>
          <button 
            onClick={() => handleNavClick('writing')} 
            className={`transition-colors bg-transparent border-none cursor-pointer hover:text-zinc-950 dark:hover:text-white ${currentView === 'writing' ? 'text-blue-700 dark:text-indigo-400 font-semibold' : 'text-zinc-700 dark:text-zinc-400'}`}
          >
            {t.nav.publications}
          </button>
          <button 
            onClick={() => handleNavClick('stack')} 
            className={`transition-colors bg-transparent border-none cursor-pointer hover:text-zinc-950 dark:hover:text-white ${currentView === 'stack' ? 'text-blue-700 dark:text-indigo-400 font-semibold' : 'text-zinc-700 dark:text-zinc-400'}`}
          >
            {t.nav.stack}
          </button>
        </nav>

        {/* Sağ Butonlar */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-zinc-200/70 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 hover:text-blue-700 dark:hover:text-white transition-all cursor-pointer shadow-sm"
            title="Toggle Theme"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-700" />}
          </button>

          <button
            onClick={() => setLang(lang === 'en' ? 'tr' : 'en')}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-mono font-bold rounded-lg bg-zinc-200/70 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-blue-700 dark:text-indigo-400 hover:text-zinc-950 dark:hover:text-white transition-all cursor-pointer shadow-sm"
          >
            <Globe className="w-3.5 h-3.5" />
            {lang === 'en' ? 'TR' : 'EN'}
          </button>

          <button
            onClick={() => handleNavClick('contact')}
            className="hidden sm:inline-flex px-4 py-2 text-sm font-medium rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md shadow-blue-600/20 cursor-pointer"
          >
            {t.nav.workWithMe}
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-zinc-200/70 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobil Menü */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-[#f5f2eb] dark:bg-[#0f1115] border-b border-zinc-300 dark:border-zinc-800 px-6 py-6 space-y-4 shadow-xl">
          <button onClick={() => handleNavClick('home')} className="block w-full text-left py-2 text-sm font-medium text-zinc-800 dark:text-zinc-300 hover:text-blue-700">
            {lang === 'tr' ? 'Ana Sayfa' : 'Home'}
          </button>
          <button onClick={() => handleNavClick('projects')} className="block w-full text-left py-2 text-sm font-medium text-zinc-800 dark:text-zinc-300 hover:text-blue-700">
            {t.nav.caseStudies}
          </button>
          <button onClick={() => handleNavClick('services')} className="block w-full text-left py-2 text-sm font-medium text-zinc-800 dark:text-zinc-300 hover:text-blue-700">
            {t.nav.services}
          </button>
          <button onClick={() => handleNavClick('writing')} className="block w-full text-left py-2 text-sm font-medium text-zinc-800 dark:text-zinc-300 hover:text-blue-700">
            {t.nav.publications}
          </button>
          <button onClick={() => handleNavClick('stack')} className="block w-full text-left py-2 text-sm font-medium text-zinc-800 dark:text-zinc-300 hover:text-blue-700">
            {t.nav.stack}
          </button>
          <div className="pt-2">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full py-2.5 text-center text-sm font-medium rounded-lg bg-blue-600 text-white shadow-md"
            >
              {t.nav.workWithMe}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}