import React, { useState } from 'react';
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
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', projectType: 'AI Agent / RAG System', message: '' });
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  // Sayfa değiştirirken otomatik olarak en üste kaydırma fonksiyonu
  const handleViewChange = (view: ViewState) => {
    setCurrentView(view);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Formspree Entegrasyonu
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
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-purple-500/30 selection:text-purple-200 flex flex-col justify-between">
      {/* Üst Navigasyon (Navbar Bileşeni) */}
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        currentView={currentView} 
        setCurrentView={handleViewChange} 
      />

      <main className="max-w-6xl mx-auto px-6 w-full py-12 flex-grow">
        {currentView !== 'home' && (
          <button
            onClick={() => handleViewChange('home')}
            className="inline-flex items-center gap-2 mb-8 text-xs font-mono text-zinc-400 hover:text-white bg-zinc-900/60 border border-zinc-800 px-3.5 py-2 rounded-lg transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-purple-400" />
            {lang === 'tr' ? '← Ana Sayfaya Dön' : '← Back to Overview'}
          </button>
        )}

        {/* SAYFA RENDERER */}
        {currentView === 'home' && <Home lang={lang} onNavigate={handleViewChange} />}
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

      {/* PROJE DETAY MODALI */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />

      {/* Kurumsal Footer Bileşeni */}
      <Footer lang={lang} onNavigate={handleViewChange} />
    </div>
  );
}