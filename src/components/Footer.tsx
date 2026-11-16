import { Terminal, Mail, BookOpen } from 'lucide-react';
import type { Language } from '../data/translations';

type FooterProps = {
  lang: Language;
  onNavigate: (view: any) => void;
};

export default function Footer({ lang, onNavigate }: FooterProps) {
  return (
    <footer className="border-t border-zinc-300 dark:border-zinc-800 bg-zinc-200/50 dark:bg-[#090a0c] text-zinc-700 dark:text-zinc-300 mt-20 pt-16 pb-12 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="space-y-4 md:col-span-1">
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-2 font-mono text-lg font-bold tracking-tight text-zinc-950 dark:text-white bg-transparent border-none cursor-pointer"
          >
            <Terminal className="w-5 h-5 text-blue-700 dark:text-indigo-400" />
            <span>metin<span className="text-blue-700 dark:text-indigo-400">.dev</span></span>
          </button>
          <p className="text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed font-medium">
            {lang === 'tr' 
              ? 'Üretime hazır RAG, Çok Ajanlı ve Ölçeklenebilir Yapay Zeka ve Full-Stack Çözümleri.' 
              : 'AI & Full-Stack Engineer building production RAG, Multi-Agent & Private LLM systems.'}
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="https://github.com/metinyurdev" target="_blank" rel="noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-700 dark:hover:text-indigo-400 transition-colors" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path><path d="M12 22v-4"></path></svg>
            </a>
            <a href="https://www.linkedin.com/in/metin-yurduseven" target="_blank" rel="noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-700 dark:hover:text-indigo-400 transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://hackernoon.com/u/metinyurdev" target="_blank" rel="noreferrer" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-700 dark:hover:text-indigo-400 transition-colors" aria-label="HackerNoon">
              <BookOpen className="w-4 h-4" />
            </a>
            <a href="mailto:contact@metinyur.dev" className="text-zinc-600 dark:text-zinc-400 hover:text-blue-700 dark:hover:text-indigo-400 transition-colors" aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-950 dark:text-white font-bold">
            {lang === 'tr' ? 'Uzmanlıklar' : 'Expertise'}
          </h4>
          <ul className="space-y-2 text-xs">
            <li><button onClick={() => onNavigate('services')} className="text-zinc-700 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-indigo-400 transition-colors bg-transparent border-none cursor-pointer p-0 font-medium">Agentic RAG Systems</button></li>
            <li><button onClick={() => onNavigate('services')} className="text-zinc-700 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-indigo-400 transition-colors bg-transparent border-none cursor-pointer p-0 font-medium">LLM Fine-Tuning (PEFT/LoRA)</button></li>
            <li><button onClick={() => onNavigate('services')} className="text-zinc-700 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-indigo-400 transition-colors bg-transparent border-none cursor-pointer p-0 font-medium">FastAPI & .NET Backends</button></li>
            <li><button onClick={() => onNavigate('services')} className="text-zinc-700 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-indigo-400 transition-colors bg-transparent border-none cursor-pointer p-0 font-medium">Full-Stack AI MVPs</button></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-950 dark:text-white font-bold">
            {lang === 'tr' ? 'Keşfet' : 'Discover'}
          </h4>
          <ul className="space-y-2 text-xs">
            <li><button onClick={() => onNavigate('projects')} className="text-zinc-700 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-indigo-400 transition-colors bg-transparent border-none cursor-pointer p-0 font-medium">{lang === 'tr' ? 'Vakalar (Case Studies)' : 'Case Studies'}</button></li>
            <li><button onClick={() => onNavigate('writing')} className="text-zinc-700 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-indigo-400 transition-colors bg-transparent border-none cursor-pointer p-0 font-medium">{lang === 'tr' ? 'HackerNoon Makaleleri' : 'Publications'}</button></li>
            <li><button onClick={() => onNavigate('stack')} className="text-zinc-700 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-indigo-400 transition-colors bg-transparent border-none cursor-pointer p-0 font-medium">{lang === 'tr' ? 'Teknoloji Yığını' : 'Tech Stack'}</button></li>
            <li><button onClick={() => onNavigate('contact')} className="text-zinc-700 dark:text-zinc-300 hover:text-blue-700 dark:hover:text-indigo-400 transition-colors bg-transparent border-none cursor-pointer p-0 font-medium">{lang === 'tr' ? 'İletişim & Teklif' : 'Contact'}</button></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-950 dark:text-white font-bold">
            {lang === 'tr' ? 'İletişim Bilgileri' : 'Contact Info'}
          </h4>
          <ul className="space-y-2 text-xs text-zinc-700 dark:text-zinc-300 font-medium">
            <li>Ankara, Türkiye (GMT+3)</li>
            <li>contact@metinyur.dev</li>
            <li className="text-emerald-600 dark:text-emerald-400 font-semibold">Available for Global Contracts</li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-8 border-t border-zinc-300/60 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-600 dark:text-zinc-400 gap-4">
        <p>© {new Date().getFullYear()} Metin Yurduseven. {lang === 'tr' ? 'Tüm hakları saklıdır.' : 'All rights reserved.'}</p>
        <p className="font-mono text-[11px] text-blue-700 dark:text-indigo-400 font-semibold">metinyur.dev • AI Architecture & Software Engineering</p>
      </div>
    </footer>
  );
}