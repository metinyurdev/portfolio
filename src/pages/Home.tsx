import { Award, Cpu, MapPin, ArrowUpRight, CheckCircle2, BookOpen, Terminal, Sparkles, Layers } from 'lucide-react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

type HomeProps = {
  lang: Language;
  onNavigate: (view: any) => void;
};

export default function Home({ lang, onNavigate }: HomeProps) {
  const t = translations[lang];

  return (
    <div className="space-y-20 pb-12">
      {/* 1. HERO SECTION (Üst Kısım: Profil Foto, Başlık ve Açıklamalar) */}
      <section className="py-8 md:py-12 max-w-4xl mx-auto text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-semibold">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          {t.hero.badge}
        </div>

        {/* Profil Fotoğrafı (Merkezde Büyük ve Şık) */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="relative w-24 h-24 rounded-3xl overflow-hidden border-2 border-purple-500/50 shadow-2xl shadow-purple-950/80 bg-zinc-900">
            <img
              src="/assets/images/profile.png"
              alt="Metin Yurduseven"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Eğer .png yüklenemezse .jpg dener veya gizler
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white tracking-tight">Metin Yurduseven</h2>
            <p className="text-xs font-mono text-purple-400 mt-0.5">AI & Software Engineer • M.Sc. Computer Engineering Student</p>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
          {t.hero.titlePrefix}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
            {t.hero.titleHighlight}
          </span>{' '}
          {t.hero.titleSuffix}
        </h1>

        <p className="text-base md:text-lg text-zinc-300 leading-relaxed max-w-2xl mx-auto">
          {t.hero.description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="https://www.upwork.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all shadow-lg shadow-purple-600/25"
          >
            {t.hero.hireUpwork}
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-semibold transition-all cursor-pointer"
          >
            {t.hero.exploreProjects}
          </button>
        </div>
      </section>

      {/* 2. ALTAKİ BÜYÜK VE GÖRKEMLİ AI AGENTIC MİMARİ VİTRİNİ */}
      <section className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden border border-purple-500/40 bg-zinc-900/90 shadow-2xl shadow-purple-950/70 group">
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-transparent to-transparent opacity-30 z-10 pointer-events-none" />
          <img
            src="/assets/images/hero-ai-abstract.png"
            alt="AI Agentic Architecture Pipeline"
            className="w-full h-auto object-cover transform group-hover:scale-102 transition-transform duration-700 max-h-[550px]"
          />
          <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-20 bg-zinc-950/90 backdrop-blur-md px-6 py-4 rounded-2xl border border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <div>
                <p className="text-sm font-semibold text-white">Enterprise Agentic RAG & Multi-Stage Fine-Tuning Pipeline</p>
                <p className="text-xs text-zinc-400">Production-ready architecture designed for zero hallucination & strict data privacy.</p>
              </div>
            </div>
            <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping shrink-0" />
          </div>
        </div>
      </section>

      {/* 3. STATS & HIGHLIGHTS BAR */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="flex items-start gap-3 p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
          <Award className="w-6 h-6 text-purple-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-white">{t.hero.hackernoonStat}</p>
            <p className="text-xs text-zinc-400 mt-1">{t.hero.hackernoonDesc}</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
          <Cpu className="w-6 h-6 text-purple-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-white">{t.hero.masterStat}</p>
            <p className="text-xs text-zinc-400 mt-1">{t.hero.masterDesc}</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-5 rounded-2xl bg-zinc-900/40 border border-zinc-800/80">
          <MapPin className="w-6 h-6 text-purple-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-white">{t.hero.locationStat}</p>
            <p className="text-xs text-zinc-400 mt-1">{t.hero.locationDesc}</p>
          </div>
        </div>
      </section>

      {/* 4. DETAYLI HAKKIMDA & AKADEMİK / PROFESYONEL ARKA PLAN */}
      <section className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-purple-950/20 via-zinc-900/40 to-zinc-900/50 border border-purple-500/20 p-8 md:p-12 space-y-6">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400 bg-purple-500/10 px-3.5 py-1.5 rounded-md">
            {lang === 'tr' ? 'Arka Plan & Vizyon' : 'Background & Vision'}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            {lang === 'tr' 
              ? 'Yapay Zeka Araştırmaları ve Üretim Düzeyinde Yazılım Mühendisliği' 
              : 'AI Research & Production-Grade Software Engineering'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm md:text-base text-zinc-300 leading-relaxed">
          <div className="space-y-4">
            <p>
              {lang === 'tr'
                ? 'Erciyes Üniversitesi Bilgisayar Mühendisliği bölümünden 3.17 GPA ile mezun olduktan sonra, Ankara Bilim Üniversitesi Lisansüstü Eğitim Enstitüsü Bilgisayar Mühendisliği Tezli Yüksek Lisans programına giriş sınavında ilk sırada yer alarak tam burslu olarak kabul edildim. Akademik çalışmalarımı gelişmiş LLM mimarileri, parametre verimli ince ayar (PEFT/LoRA) ve çok ajanlı sistemler üzerine yoğunlaştırıyorum.'
                : 'After graduating with a B.Sc. in Computer Engineering from Erciyes University (GPA 3.17), I ranked 1st in the entrance exam and joined the M.Sc. with thesis program in Computer Engineering at Ankara Science University with a full scholarship. My academic research focuses on advanced LLM architectures, parameter-efficient fine-tuning (PEFT/LoRA), and multi-agent systems.'}
            </p>
            <p>
              {lang === 'tr'
                ? 'Endüstri tarafında; Rakort Bilgi ve İletişim Teknolojileri A.Ş. bünyesinde kurumsal yapay zeka destekli Text-to-SQL analitik web uygulamaları geliştirdim. Python (FastAPI), C# .NET Core, React, PostgreSQL ve Qdrant vector database ekosistemlerinde uçtan uca sistemler inşa ediyorum.'
                : 'On the industry side, I engineered enterprise AI-assisted Text-to-SQL analytics web applications during my software development internship at Rakort Bilgi ve İletişim Teknolojileri A.Ş. I build end-to-end systems across Python (FastAPI), C# .NET Core, React, PostgreSQL, and Qdrant vector database ecosystems.'}
            </p>
          </div>

          <div className="space-y-4">
            <p>
              {lang === 'tr'
                ? 'Teknik birikimimi sadece kod yazmakla sınırlı tutmayıp, HackerNoon platformunda yayınladığım "The LLM Operating System: Transformers, Limitations, and the Need for Adaptation" gibi makalelerimle küresel ölçekte #1 Top Story sıralamalarına ulaştım ve binlerce yazılımcıya rehberlik ettim.'
                : 'Beyond writing production code, I share my technical insights globally. My publication titled "The LLM Operating System: Transformers, Limitations, and the Need for Adaptation" reached the #1 Top Story ranking platform-wide on HackerNoon[cite: 3].'}
            </p>
            <div className="pt-2 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" /> {lang === 'tr' ? '1.lik Derecesi & Tam Burs' : '1st Place Scholar'}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-purple-300 bg-purple-500/10 px-3 py-1.5 rounded-lg border border-purple-500/20">
                <BookOpen className="w-3.5 h-3.5" /> {lang === 'tr' ? 'HackerNoon #1 Yazar' : 'HackerNoon #1 Author'}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-indigo-300 bg-indigo-500/10 px-3 py-1.5 rounded-lg border border-indigo-500/20">
                <Terminal className="w-3.5 h-3.5" /> {lang === 'tr' ? 'Full-Stack & LLMOps Uzmanı' : 'Full-Stack & LLMOps'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUICK NAVIGATION CARDS */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        <div onClick={() => onNavigate('projects')} className="p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-purple-500/50 cursor-pointer transition-all group">
          <h3 className="text-lg font-bold text-white group-hover:text-purple-400 flex items-center justify-between">
            {t.nav.caseStudies} <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-purple-400" />
          </h3>
          <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed">NEXUS, Clinical LLM, Text-to-SQL & Kubernetes microservices.</p>
        </div>
        <div onClick={() => onNavigate('services')} className="p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-purple-500/50 cursor-pointer transition-all group">
          <h3 className="text-lg font-bold text-white group-hover:text-purple-400 flex items-center justify-between">
            {t.nav.services} <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-purple-400" />
          </h3>
          <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed">Custom AI Agents, RAG pipelines & private LLM fine-tuning.</p>
        </div>
        <div onClick={() => onNavigate('writing')} className="p-7 rounded-2xl bg-zinc-900/40 border border-zinc-800 hover:border-purple-500/50 cursor-pointer transition-all group">
          <h3 className="text-lg font-bold text-white group-hover:text-purple-400 flex items-center justify-between">
            {t.nav.publications} <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-purple-400" />
          </h3>
          <p className="text-xs text-zinc-400 mt-2.5 leading-relaxed">HackerNoon #1 Top Stories & System Architecture research.</p>
        </div>
      </section>
    </div>
  );
}