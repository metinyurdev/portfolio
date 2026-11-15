import { Mail, Send, BookOpen } from 'lucide-react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

type ContactProps = {
  lang: Language;
  formData: { name: string; email: string; projectType: string; message: string };
  setFormData: (data: any) => void;
  formStatus: 'idle' | 'submitting' | 'success';
  onSubmit: (e: React.FormEvent) => void;
};

export default function Contact({ lang, formData, setFormData, formStatus, onSubmit }: ContactProps) {
  const t = translations[lang];

  return (
    <section className="py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white">{t.contact.title}</h2>
          <p className="text-zinc-400 mt-3 leading-relaxed">
            {t.contact.subtitle}
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
              <a
                href="https://github.com/metinyurdev"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 text-zinc-300 hover:text-white transition-all"
                aria-label="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 8 18v4"></path><path d="M12 22v-4"></path></svg>
              </a>
              <a
                href="https://www.linkedin.com/in/metin-yurduseven"
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-purple-500/50 text-zinc-300 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
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

        <form onSubmit={onSubmit} className="rounded-2xl bg-zinc-900/50 border border-zinc-800 p-7 space-y-4">
          <div>
            <label className="block text-xs font-medium text-zinc-400 mb-1.5">{t.contact.yourName}</label>
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
            <label className="block text-xs font-medium text-zinc-400 mb-1.5">{t.contact.workEmail}</label>
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
            <label className="block text-xs font-medium text-zinc-400 mb-1.5">{t.contact.projectScope}</label>
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
            <label className="block text-xs font-medium text-zinc-400 mb-1.5">{t.contact.projectDetails}</label>
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
            {formStatus === 'submitting' ? t.contact.sending : t.contact.sendInquiry}
            <Send className="w-4 h-4" />
          </button>

          {formStatus === 'success' && (
            <p className="text-xs text-emerald-400 text-center pt-1">
              {t.contact.successMsg}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}