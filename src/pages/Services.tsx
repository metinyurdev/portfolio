import { Sparkles, ShieldCheck, Layers } from 'lucide-react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

type ServicesProps = {
  lang: Language;
};

export default function Services({ lang }: ServicesProps) {
  const t = translations[lang];
  const serviceIcons = [
    <Sparkles className="w-6 h-6 text-purple-400" />,
    <ShieldCheck className="w-6 h-6 text-purple-400" />,
    <Layers className="w-6 h-6 text-purple-400" />
  ];

  return (
    <section className="py-6">
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white">{t.services.title}</h2>
        <p className="text-zinc-400 mt-2">{t.services.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {t.services.list.map((service, idx) => (
          <div key={idx} className="rounded-2xl bg-zinc-900/40 border border-zinc-800 p-7">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-5">
              {serviceIcons[idx]}
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
  );
}