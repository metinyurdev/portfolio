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
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">{t.writing.title}</h2>
          <p className="text-zinc-700 dark:text-zinc-400 mt-2">{t.writing.subtitle}</p>
        </div>
        <a
          href="https://hackernoon.com/u/metinyurdev"
          target="_blank"
          rel="noreferrer"
          className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-sky-400 hover:text-blue-700 dark:hover:text-sky-300"
        >
          {t.writing.readMore} <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="space-y-6">
        {t.writing.articles.map((article, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-white dark:bg-gradient-to-br dark:from-sky-950/30 dark:via-zinc-900/60 dark:to-zinc-900/60 border border-zinc-300 dark:border-sky-500/30 p-7 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-sm transition-all"
          >
            <div className="space-y-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-700 dark:text-sky-300 bg-blue-500/10 dark:bg-sky-500/15 border border-blue-500/20 dark:border-transparent px-3 py-1 rounded-full">
                <BookOpen className="w-3.5 h-3.5" />
                {article.badge}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-zinc-950 dark:text-white">
                {article.title}
              </h3>
              <p className="text-sm text-zinc-800 dark:text-zinc-300 leading-relaxed font-medium">
                {article.description}
              </p>
            </div>
            <a
              href={article.link}
              target="_blank"
              rel="noreferrer"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 font-semibold text-sm transition-colors shadow-sm"
            >
              {t.writing.readArticle} <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}