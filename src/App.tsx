import React, { useState } from 'react';
import {
  Terminal,
  Cpu,
  Code2,
  ExternalLink,
  BookOpen,
  Mail,
  CheckCircle2,
  ArrowUpRight,
  Layers,
  ShieldCheck,
  Sparkles,
  Send,
  MapPin,
  Award
} from 'lucide-react';

export default function App() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [formData, setFormData] = useState({ name: '', email: '', projectType: 'AI Agent / RAG System', message: '' });

  // Gerçek Formspree Entegrasyonu
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xoedjner', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
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

  const projects = [
    {
      title: 'NEXUS — Enterprise Compliance Agent',
      category: 'Multi-Agent AI & RAG Architecture',
      problem: 'Manual regulatory auditing across thousands of corporate policy documents is slow, error-prone, and lacks traceability.',
      solution: 'Engineered a multi-agent corporate compliance auditing platform featuring hybrid vector search, deterministic guardrails, and full LLM observability.',
      metrics: ['Sub-2s Retrieval Latency', 'End-to-End Traceability via Langfuse', '100% Containerized Deployment'],
      stack: ['GPT-4o', 'LlamaIndex', 'Qdrant', 'FastAPI', 'React 18', 'Langfuse', 'Docker Compose'],
      github: 'https://github.com/metinyurdev/nexus-compliance-agent',
      demoLabel: 'Architecture & Code'
    },
    {
      title: 'Clinical Reasoning LLM (Qwen2.5-14B)',
      category: 'Parameter-Efficient Fine-Tuning (PEFT)',
      problem: 'General-purpose open-source LLMs struggle with structured multi-step clinical diagnostic reasoning and medical precision.',
      solution: 'Executed multi-stage fine-tuning using QLoRA and Unsloth on curated diagnostic datasets, compiling quantized GGUF weights for local clinical inference.',
      metrics: ['14B Parameter Domain Adaptation', 'Published LoRA & GGUF Weights', 'Local Offline Inference Ready'],
      stack: ['PyTorch', 'Hugging Face', 'PEFT / QLoRA', 'Unsloth', 'GGUF', 'Ollama'],
      github: 'https://huggingface.co/metinyurdev',
      demoLabel: 'Hugging Face Models'
    },
    {
      title: 'Privacy-First Local Text-to-SQL Platform',
      category: 'On-Premise Enterprise AI',
      problem: 'Enterprises cannot send sensitive relational database schemas and financial records to third-party cloud LLM APIs.',
      solution: 'Built a self-hosted natural language to SQL analytics engine running completely air-gapped on local infrastructure with schema-aware prompt injection protection.',
      metrics: ['Zero External Data Leakage', 'Automated SQL Validation', 'Real-Time Query Execution'],
      stack: ['Python', 'FastAPI', 'Ollama', 'PostgreSQL', 'React', 'Vite', 'Docker'],
      github: 'https://github.com/metinyurdev',
      demoLabel: 'View Repository'
    },
    {
      title: 'Cloud-Native FastAPI Microservice',
      category: 'Kubernetes & Backend Infrastructure',
      problem: 'Deploying scalable Python API services requires robust container orchestration, environment control, and traffic routing.',
      solution: 'Developed and containerized a FastAPI microservice, deployed on Minikube Kubernetes cluster featuring custom Ingress routing and automated health probes.',
      metrics: ['Kubernetes Minikube Deployment', 'Ingress Traffic Routing', 'Production-Ready Health Probes'],
      stack: ['Python', 'FastAPI', 'Docker', 'Kubernetes (Minikube)', 'YAML', 'DevOps'],
      github: 'https://github.com/metinyurdev',
      demoLabel: 'View Architecture'
    }
  ];

  const services = [
    {
      icon: <Sparkles className="w-6 h-6 text-purple-400" />,
      title: 'Custom AI Agents & Production RAG',
      description: 'End-to-end development of multi-agent workflows and Retrieval-Augmented Generation pipelines connected to your proprietary documents, APIs, and databases.',
      deliverables: ['Vector DB setup (Qdrant/FAISS)', 'Hallucination guardrails & evals', 'FastAPI microservice integration']
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
      title: 'Private / Local LLM Deployment & Fine-Tuning',
      description: 'Deploy open-weights models (Llama, Qwen, Mistral) inside your private VPC or on-premise servers with zero data leaving your infrastructure.',
      deliverables: ['QLoRA / PEFT domain fine-tuning', 'GGUF quantization & Ollama/vLLM setup', 'GDPR / HIPAA-friendly air-gapped AI']
    },
    {
      icon: <Layers className="w-6 h-6 text-purple-400" />,
      title: 'Full-Stack AI MVP & Backend Systems',
      description: 'Rapid, production-grade web applications and scalable backend APIs built with clean architecture for startups and enterprise teams.',
      deliverables: ['Python (FastAPI/Django) or .NET Core', 'Modern React / TypeScript frontends', 'Dockerized CI/CD deployment']
    }
  ];

  const skillGroups = [
    {
      title: 'AI, LLMs & Agents',
      skills: ['PyTorch', 'Hugging Face', 'LlamaIndex', 'LangChain', 'Dify', 'PEFT / QLoRA', 'Unsloth', 'Ollama', 'Qdrant', 'FAISS', 'Langfuse']
    },
    {
      title: 'Backend & Databases',
      skills: ['Python', 'FastAPI', 'Django', 'C# / .NET Core', 'EF Core', 'Node.js', 'PostgreSQL', 'SQL Server', 'MySQL', 'REST APIs']
    },
    {
      title: 'Frontend & UI',
      skills: ['React 18', 'TypeScript', 'Angular', 'Next.js', 'Tailwind CSS', 'Vite', 'Streamlit']
    },
    {
      title: 'DevOps & Infrastructure',
      skills: ['Docker', 'Docker Compose', 'Kubernetes', 'Linux Admin', 'Git / GitHub Actions', 'VMware ESXi', 'Nginx']
    }
  ];

  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 font-sans selection:bg-purple-500/30 selection:text-purple-200">
      {/* Üst Navigasyon */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#09090b]/80 border-b border-zinc-800/80">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-mono text-lg font-bold tracking-tight text-white">
            <Terminal className="w-5 h-5 text-purple-500" />
            <span>metin<span className="text-purple-500">.dev</span></span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#projects" className="hover:text-white transition-colors">Case Studies</a>
            <a href="#services" className="hover:text-white transition-colors">Services</a>
            <a href="#writing" className="hover:text-white transition-colors">Publications</a>
            <a href="#stack" className="hover:text-white transition-colors">Tech Stack</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 text-sm font-medium rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-all shadow-lg shadow-purple-500/20"
            >
              Work With Me
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* HERO SECTION */}
        <section className="py-20 md:py-28 border-b border-zinc-800/60">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for Global Consulting & Contract Roles (US / EU Timezones)
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1] max-w-4xl">
            AI & Full-Stack Engineer building{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
              production RAG, Multi-Agent & Private LLM
            </span>{' '}
            systems.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
            I help startups and enterprises turn complex data and LLM capabilities into reliable, privacy-first software—from parameter-efficient fine-tuning to scalable FastAPI and .NET Core backends.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="https://www.upwork.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold transition-all shadow-lg shadow-purple-600/25"
            >
              Hire Me on Upwork
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 font-semibold transition-all"
            >
              Explore Case Studies
            </a>
          </div>

          <div className="mt-14 pt-8 border-t border-zinc-800/60 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Award className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">#1 Top Story on HackerNoon</p>
                <p className="text-xs text-zinc-400 mt-0.5">Ranked #1 overall & #1 in AI/ML for LLM systems architecture</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Cpu className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">M.Sc. Computer Engineering</p>
                <p className="text-xs text-zinc-400 mt-0.5">1st Place Merit Scholar • Focus on LLM Reasoning & Agents</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">Ankara, Türkiye (GMT+3)</p>
                <p className="text-xs text-zinc-400 mt-0.5">Full overlap with EU business hours & US East Coast mornings</p>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="projects" className="py-20 border-b border-zinc-800/60">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white">Selected Engineering Case Studies</h2>
              <p className="text-zinc-400 mt-2">Real-world systems architected for reliability, privacy, and production scale.</p>
            </div>
            <a
              href="https://github.com/metinyurdev"
              target="_blank"
              rel="noreferrer"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300"
            >
              View all repositories on GitHub <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group rounded-2xl bg-zinc-900/50 border border-zinc-800 hover:border-purple-500/50 p-7 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded-md">
                      {project.category}
                    </span>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-zinc-400 hover:text-white inline-flex items-center gap-1 text-xs font-medium"
                    >
                      {project.demoLabel} <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>

                  <div className="mt-4 space-y-2.5 text-sm">
                    <p className="text-zinc-400">
                      <strong className="text-zinc-200">Challenge:</strong> {project.problem}
                    </p>
                    <p className="text-zinc-400">
                      <strong className="text-zinc-200">Architecture:</strong> {project.solution}
                    </p>
                  </div>

                  <div className="mt-5 space-y-1.5">
                    {project.metrics.map((metric, mIdx) => (
                      <div key={mIdx} className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                        <span>{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-5 border-t border-zinc-800/80 flex flex-wrap gap-2">
                  {project.stack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="py-20 border-b border-zinc-800/60">
          <div className="mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-white">How I Can Help Your Team</h2>
            <p className="text-zinc-400 mt-2">Focused engineering engagements tailored for US & European startups and enterprises.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="rounded-2xl bg-zinc-900/40 border border-zinc-800 p-7">
                <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5">
                  {service.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5">{service.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed mb-5">{service.description}</p>
                <ul className="space-y-2 border-t border-zinc-800/80 pt-4">
                  {service.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="text-xs text-zinc-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* PUBLICATIONS */}
        <section id="writing" className="py-20 border-b border-zinc-800/60">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white">Technical Writing & Research</h2>
              <p className="text-zinc-400 mt-2">Deep dives into LLM systems, fine-tuning, and production AI architecture.</p>
            </div>
            <a
              href="https://hackernoon.com/u/metinyurdev"
              target="_blank"
              rel="noreferrer"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300"
            >
              Read more on HackerNoon <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-purple-950/30 via-zinc-900/60 to-zinc-900/60 border border-purple-500/30 p-7 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 bg-purple-500/15 px-3 py-1 rounded-full">
                <BookOpen className="w-3.5 h-3.5" />
                Featured • #1 Top Story on HackerNoon
              </div>
              <h3 className="text-2xl font-bold text-white">
                The LLM Operating System: Transformers, Limitations, and the Need for Adaptation
              </h3>
              <p className="text-sm text-zinc-300 leading-relaxed">
                An architectural analysis of treating Large Language Models as kernel processes within modern software systems—covering context bottlenecks, memory hierarchies, tool orchestration, and domain adaptation.
              </p>
            </div>
            <a
              href="https://hackernoon.com/u/metinyurdev"
              target="_blank"
              rel="noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 font-semibold text-sm transition-colors"
            >
              Read Article <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </section>

        {/* TECH STACK */}
        <section id="stack" className="py-20 border-b border-zinc-800/60">
          <h2 className="text-3xl font-bold tracking-tight text-white mb-10">Production Tech Stack</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillGroups.map((group, idx) => (
              <div key={idx} className="rounded-2xl bg-zinc-900/40 border border-zinc-800 p-6">
                <h3 className="text-sm font-mono uppercase tracking-wider text-purple-400 mb-4 flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  {group.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs px-2.5 py-1.5 rounded-md bg-zinc-950 border border-zinc-800 text-zinc-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-white">Let’s Build Your Next AI System</h2>
              <p className="text-zinc-400 mt-3 leading-relaxed">
                Have a project in mind or looking for an experienced AI & Full-Stack engineer for your team? Send a direct message or invite me to your job on Upwork.
              </p>

              <div className="mt-8 space-y-4">
                <a
                  href="mailto:contact@metinyur.dev"
                  className="flex items-center gap-3 text-zinc-300 hover:text-purple-400 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-purple-400" />
                  </div>
                  <span className="text-sm font-medium">contact@metinyur.dev</span>
                </a>

                <div className="flex items-center gap-3 pt-4">
                  {/* GITHUB IKONU */}
                  <a
                    href="https://github.com/metinyurdev"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 text-zinc-300 hover:text-white transition-all"
                    aria-label="GitHub"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path><path d="M12 22v-4"></path></svg>
                  </a>
                  {/* LINKEDIN IKONU */}
                  <a
                    href="https://www.linkedin.com/in/metin-yurduseven"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 text-zinc-300 hover:text-white transition-all"
                    aria-label="LinkedIn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                  {/* HACKERNOON IKONU */}
                  <a
                    href="https://hackernoon.com/u/metinyurdev"
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 text-zinc-300 hover:text-white transition-all"
                    aria-label="HackerNoon"
                  >
                    <BookOpen className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="rounded-2xl bg-zinc-900/50 border border-zinc-800 p-7 space-y-4">
              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Jane Doe"
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Work Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="jane@company.com"
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Project Scope</label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-purple-500"
                >
                  <option>AI Agent / RAG System</option>
                  <option>Private LLM Deployment & Fine-Tuning</option>
                  <option>Full-Stack Web App / Backend API</option>
                  <option>Technical Consulting / Other</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Project Details</label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Briefly describe your goals, timeline, and tech stack..."
                  className="w-full px-4 py-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-sm text-white focus:outline-none focus:border-purple-500"
                />
              </div>

              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all cursor-pointer"
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Inquiry'}
                <Send className="w-4 h-4" />
              </button>

              {formStatus === 'success' && (
                <p className="text-xs text-emerald-400 text-center pt-1">
                  Message received! I will get back to you within 24 hours.
                </p>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800/80 py-8 text-center text-xs text-zinc-500">
        <p>© {new Date().getFullYear()} Metin Yurduseven. Engineered with React, TypeScript & Tailwind CSS.</p>
      </footer>
    </div>
  );
}