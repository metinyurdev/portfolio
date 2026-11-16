import { Sparkles, ShieldCheck, Layers } from 'lucide-react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

type ServicesProps = {
  lang: Language;
};

export default function Services({ lang }: ServicesProps) {
  const t = translations[lang];
  const serviceIcons = [
    <Sparkles className="w-6 h-6 text-blue-600 dark:text-sky-400" />,
    <ShieldCheck className="w-6 h-6 text-blue-600 dark:text-sky-400" />,
    <Layers className="w-6 h-6 text-blue-600 dark:text-sky-400" />
  ];

  return (
    <section className="py-6">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">{t.services.title}</h2>
        <p className="text-zinc-700 dark:text-zinc-400 mt-2 font-medium">{t.services.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.services.list.map((service, idx) => (
          <div key={idx} className="rounded-2xl bg-white dark:bg-zinc-900/60 border border-zinc-300 dark:border-zinc-800 p-7 shadow-sm transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 dark:bg-sky-500/10 border border-blue-500/20 dark:border-sky-500/20 flex items-center justify-center mb-5">
              {serviceIcons[idx]}
            </div>
            <h3 className="text-lg font-bold text-zinc-950 dark:text-white mb-2.5">{service.title}</h3>
            <p className="text-sm text-zinc-800 dark:text-zinc-200 leading-relaxed mb-5 font-medium">{service.description}</p>
            <ul className="space-y-2.5 border-t border-zinc-200 dark:border-zinc-800 pt-4">
              {service.deliverables.map((item, dIdx) => (
                <li key={dIdx} className="text-xs text-zinc-900 dark:text-zinc-100 flex items-center gap-2.5 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-sky-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}