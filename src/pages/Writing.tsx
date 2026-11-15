import { ExternalLink, BookOpen, ArrowUpRight } from 'lucide-react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

type WritingProps = {
  lang: Language;
};

export default function Writing({ lang }: WritingProps) {
  const t = translations[lang];

  return (
    <section className="py-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-white">{t.writing.title}</h2>
          <p className="text-zinc-400 mt-2">{t.writing.subtitle}</p>
        </div>
        <a
          href="https://hackernoon.com/u/metinyurdev"
          target="_blank"
          rel="noreferrer"
          className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-medium text-purple-400 hover:text-purple-300"
        >
          {t.writing.readMore} <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="rounded-2xl bg-gradient-to-br from-purple-950/30 via-zinc-900/60 to-zinc-900/60 border border-purple-500/30 p-7 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-300 bg-purple-500/15 px-3 py-1 rounded-full">
            <BookOpen className="w-3.5 h-3.5" />
            {t.writing.featuredBadge}
          </div>
          <h3 className="text-2xl font-bold text-white">
            {t.writing.articleTitle}
          </h3>
          <p className="text-sm text-zinc-300 leading-relaxed">
            {t.writing.articleDesc}
          </p>
        </div>
        <a
          href="https://hackernoon.com/u/metinyurdev"
          target="_blank"
          rel="noreferrer"
          className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-zinc-950 hover:bg-zinc-200 font-semibold text-sm transition-colors"
        >
          {t.writing.readArticle} <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}