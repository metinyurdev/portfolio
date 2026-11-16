import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import type { ProjectDetail } from './data/projectsData'; 
import ProjectModal from './components/ProjectModal';
import { type Language } from './data/translations';

// Bileşenler ve Sayfalar
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Writing from './pages/Writing';
import Stack from './pages/Stack';
import Contact from './pages/Contact';

type ViewState = 'home' | 'projects' | 'services' | 'writing' | 'stack' | 'contact';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [darkMode, setDarkMode] = useState<boolean>(true); 
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', projectType: 'AI Agent / RAG System', message: '' });
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  const handleViewChange = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xoedjner', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message,
          _to: 'contact@metinyur.dev'
        })
      });

      if (response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', projectType: 'AI Agent / RAG System', message: '' });
      } else {
        setFormStatus('idle');
        alert('Mesaj gönderilemedi, lütfen tekrar deneyin.');
      }
    } catch (error) {
      setFormStatus('idle');
      alert('Bir bağlantı hatası oluştu.');
    }
  };

  return (
    <div className={`min-h-screen font-sans flex flex-col justify-between transition-colors duration-300 ${darkMode ? 'dark bg-[#0f1115] text-slate-100' : 'bg-[#f5f2eb] text-zinc-950'}`}>
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        currentView={currentView} 
        setCurrentView={handleViewChange} 
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main className="max-w-6xl mx-auto px-6 w-full py-12 flex-grow">
        {currentView !== 'home' && (
          <button
            onClick={() => handleViewChange('home')}
            className="inline-flex items-center gap-2 mb-8 text-xs font-mono text-zinc-900 dark:text-zinc-400 hover:text-indigo-600 dark:hover:text-white bg-white dark:bg-zinc-900 border border-blue-200 dark:border-zinc-800 px-3.5 py-2 rounded-lg transition-all cursor-pointer shadow-sm font-semibold"
          >
            <ArrowLeft className="w-4 h-4 text-blue-600 dark:text-indigo-400" />
            {lang === 'tr' ? '← Ana Sayfaya Dön' : '← Back to Overview'}
          </button>
        )}

        {/* SAYFA RENDERER */}
        {currentView === 'home' && <Home lang={lang} onNavigate={handleViewChange} darkMode={darkMode} />}
        {currentView === 'projects' && <Projects lang={lang} onSelectProject={setSelectedProject} />}
        {currentView === 'services' && <Services lang={lang} />}
        {currentView === 'writing' && <Writing lang={lang} />}
        {currentView === 'stack' && <Stack lang={lang} />}
        {currentView === 'contact' && (
          <Contact
            lang={lang}
            formData={formData}
            setFormData={setFormData}
            formStatus={formStatus}
            onSubmit={handleSubmit}
          />
        )}
      </main>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      <Footer lang={lang} onNavigate={handleViewChange} />
    </div>
  );
}