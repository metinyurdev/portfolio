import { Award, Cpu, MapPin, ArrowUpRight, CheckCircle2, BookOpen, Terminal, Sparkles } from 'lucide-react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

type HomeProps = {
  lang: Language;
  onNavigate: (view: any) => void;
  darkMode?: boolean;
};

export default function Home({ lang, onNavigate }: HomeProps) {
  const t = translations[lang];

  return (
    <div className="space-y-16 pb-12 transition-colors duration-300">
      {/* 1. HERO SECTION */}
      <section className="py-6 md:py-12 max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-950 dark:bg-zinc-900 border border-zinc-800 text-blue-400 text-xs font-semibold shadow-md">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          {t.hero.badge}
        </div>

        {/* Profil Fotoğrafı */}
        <div className="flex flex-col items-center justify-center space-y-3">
          <div className="relative w-24 h-24 rounded-3xl overflow-hidden border-2 border-zinc-400 dark:border-indigo-500/50 shadow-xl shadow-zinc-950/10 bg-white dark:bg-zinc-900">
            <img
              src="/assets/images/profile.png"
              alt="Metin Yurduseven"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-zinc-950 dark:text-white tracking-tight">Metin Yurduseven</h2>
            <p className="text-xs font-mono text-blue-700 dark:text-indigo-400 mt-0.5 font-semibold">AI & Software Engineer • M.Sc. Computer Engineering Student</p>
          </div>
        </div>

        {/* Başlık */}
        <h1 className="text-3xl md:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.15]">
          AI & Full-Stack Engineer building{' '}
          <span className="text-blue-700 dark:text-indigo-400 font-black">
            production RAG, Multi-Agent & Private LLM
          </span>{' '}
          <span className="text-zinc-950 dark:text-white">systems.</span>
        </h1>

        <p className="text-sm md:text-lg text-zinc-800 dark:text-zinc-300 leading-relaxed max-w-2xl mx-auto font-medium">
          {t.hero.description}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="https://www.upwork.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-all shadow-lg shadow-blue-600/25"
          >
            {t.hero.hireUpwork}
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 text-zinc-950 dark:text-zinc-100 font-semibold transition-all cursor-pointer shadow-sm"
          >
            {t.hero.exploreProjects}
          </button>
        </div>
      </section>

      {/* 2. AI MİMARİ VİTRİNİ */}
      <section className="max-w-5xl mx-auto space-y-3">
        <div className="relative rounded-3xl overflow-hidden border border-zinc-300 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl shadow-zinc-950/5 group">
          <img
            src="/assets/images/hero-ai-abstract.png"
            alt="AI Agentic Architecture Pipeline"
            className="w-full h-auto object-cover max-h-[500px]"
          />
        </div>
        <div className="bg-white dark:bg-zinc-900 backdrop-blur-md px-6 py-4 rounded-2xl border border-zinc-300 dark:border-zinc-800 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <Sparkles className="w-5 h-5 text-blue-700 dark:text-indigo-400 shrink-0" />
            <div>
              <p className="text-xs md:text-sm font-semibold text-zinc-950 dark:text-white">Enterprise Agentic RAG & Multi-Stage Fine-Tuning Pipeline</p>
              <p className="text-[11px] md:text-xs text-zinc-700 dark:text-zinc-400">Production-ready architecture designed for zero hallucination & strict data privacy.</p>
            </div>
          </div>
          <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping shrink-0 ml-2" />
        </div>
      </section>

      {/* 3. STATS & HIGHLIGHTS BAR */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="flex items-start gap-3 p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 shadow-sm">
          <Award className="w-6 h-6 text-blue-700 dark:text-indigo-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-zinc-950 dark:text-white">{t.hero.hackernoonStat}</p>
            <p className="text-xs text-zinc-700 dark:text-zinc-400 mt-1">{t.hero.hackernoonDesc}</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 shadow-sm">
          <Cpu className="w-6 h-6 text-blue-700 dark:text-indigo-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-zinc-950 dark:text-white">{t.hero.masterStat}</p>
            <p className="text-xs text-zinc-700 dark:text-zinc-400 mt-1">{t.hero.masterDesc}</p>
          </div>
        </div>
        <div className="flex items-start gap-3 p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 shadow-sm">
          <MapPin className="w-6 h-6 text-blue-700 dark:text-indigo-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-zinc-950 dark:text-white">{t.hero.locationStat}</p>
            <p className="text-xs text-zinc-700 dark:text-zinc-400 mt-1">{t.hero.locationDesc}</p>
          </div>
        </div>
      </section>

      {/* 4. DETAYLI HAKKIMDA */}
      <section className="max-w-5xl mx-auto rounded-3xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 p-6 md:p-12 space-y-6 shadow-sm">
        <div className="space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-blue-800 dark:text-indigo-400 bg-blue-600/10 px-3.5 py-1.5 rounded-md font-bold">
            {lang === 'tr' ? 'Arka Plan & Vizyon' : 'Background & Vision'}
          </span>
          <h2 className="text-xl md:text-3xl font-bold text-zinc-950 dark:text-white">
            {lang === 'tr' 
              ? 'Yapay Zeka Araştırmaları ve Üretim Düzeyinde Yazılım Mühendisliği' 
              : 'AI Research & Production-Grade Software Engineering'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm md:text-base text-zinc-800 dark:text-zinc-300 leading-relaxed font-medium">
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
                : 'Beyond writing production code, I share my technical insights globally. My publication titled "The LLM Operating System: Transformers, Limitations, and the Need for Adaptation" reached the #1 Top Story ranking platform-wide on HackerNoon.'}
            </p>
            <div className="pt-2 flex flex-wrap gap-2.5">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-800 dark:text-emerald-400 bg-emerald-500/15 px-3 py-1.5 rounded-lg border border-emerald-500/30">
                <CheckCircle2 className="w-3.5 h-3.5" /> {lang === 'tr' ? '1.lik Derecesi & Tam Burs' : '1st Place Scholar'}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-800 dark:text-indigo-300 bg-blue-500/15 px-3 py-1.5 rounded-lg border border-blue-500/30">
                <BookOpen className="w-3.5 h-3.5" /> {lang === 'tr' ? 'HackerNoon #1 Yazar' : 'HackerNoon #1 Author'}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-800 dark:text-violet-300 bg-violet-500/15 px-3 py-1.5 rounded-lg border border-violet-500/30">
                <Terminal className="w-3.5 h-3.5" /> {lang === 'tr' ? 'Full-Stack & LLMOps Uzmanı' : 'Full-Stack & LLMOps'}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. QUICK NAVIGATION CARDS */}
      <section className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
        <div 
          onClick={() => onNavigate('projects')} 
          className="relative z-20 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 hover:border-blue-600 dark:hover:border-indigo-500/50 active:scale-98 cursor-pointer transition-all group shadow-sm"
        >
          <h3 className="text-base md:text-lg font-bold text-zinc-950 dark:text-zinc-100 group-hover:text-blue-700 dark:group-hover:text-indigo-400 flex items-center justify-between">
            {t.nav.caseStudies} <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-700 dark:group-hover:text-indigo-400" />
          </h3>
          <p className="text-xs text-zinc-700 dark:text-zinc-400 mt-2 leading-relaxed">NEXUS, Clinical LLM, Text-to-SQL & Kubernetes microservices.</p>
        </div>
        <div 
          onClick={() => onNavigate('services')} 
          className="relative z-20 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 hover:border-blue-600 dark:hover:border-indigo-500/50 active:scale-98 cursor-pointer transition-all group shadow-sm"
        >
          <h3 className="text-base md:text-lg font-bold text-zinc-950 dark:text-zinc-100 group-hover:text-blue-700 dark:group-hover:text-indigo-400 flex items-center justify-between">
            {t.nav.services} <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-700 dark:group-hover:text-indigo-400" />
          </h3>
          <p className="text-xs text-zinc-700 dark:text-zinc-400 mt-2 leading-relaxed">Custom AI Agents, RAG pipelines & private LLM fine-tuning.</p>
        </div>
        <div 
          onClick={() => onNavigate('writing')} 
          className="relative z-20 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 hover:border-blue-600 dark:hover:border-indigo-500/50 active:scale-98 cursor-pointer transition-all group shadow-sm"
        >
          <h3 className="text-base md:text-lg font-bold text-zinc-950 dark:text-zinc-100 group-hover:text-blue-700 dark:group-hover:text-indigo-400 flex items-center justify-between">
            {t.nav.publications} <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-blue-700 dark:group-hover:text-indigo-400" />
          </h3>
          <p className="text-xs text-zinc-700 dark:text-zinc-400 mt-2 leading-relaxed">HackerNoon #1 Top Stories & System Architecture research.</p>
        </div>
      </section>
    </div>
  );
}