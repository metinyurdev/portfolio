import { ExternalLink, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { projectsData, type ProjectDetail } from '../data/projectsData';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

type ProjectsProps = {
  lang: Language;
  onSelectProject: (project: ProjectDetail) => void;
};

export default function Projects({ lang, onSelectProject }: ProjectsProps) {
  const t = translations[lang];
  const projectKeys = ['nexus', 'clinical-llm', 'text-to-sql', 'kubernetes'];

  return (
    <section className="py-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-zinc-950 dark:text-white">{t.projects.title}</h2>
          <p className="text-zinc-700 dark:text-zinc-400 mt-2 font-medium">{t.projects.subtitle}</p>
        </div>
        <a
          href="https://github.com/metinyurdev"
          target="_blank"
          rel="noreferrer"
          className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          {t.projects.viewAllGithub} <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectKeys.map((key) => {
          const project = projectsData[key];
          if (!project) return null;
          return (
            <div
              key={key}
              onClick={() => onSelectProject(project)}
              className="group rounded-2xl bg-white dark:bg-[#090a0c] border border-zinc-300 dark:border-purple-500/50 hover:border-blue-500 p-7 flex flex-col justify-between transition-all cursor-pointer shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono uppercase tracking-wider text-blue-600 dark:text-sky-400 bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800/60 px-2.5 py-1 rounded-md font-semibold">
                    {project.category}
                  </span>
                  <span className="text-blue-600 dark:text-sky-400 group-hover:text-blue-700 dark:group-hover:text-sky-300 inline-flex items-center gap-1 text-xs font-semibold">
                    {project.demoLabel} <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-950 dark:text-white group-hover:text-blue-600 dark:group-hover:text-sky-400 transition-colors">
                  {project.title}
                </h3>

                <div className="mt-4 space-y-2.5 text-sm">
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <strong className="text-zinc-950 dark:text-zinc-100 font-semibold">{t.projects.challenge}</strong> {project.problem}
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                    <strong className="text-zinc-950 dark:text-zinc-100 font-semibold">{t.projects.architecture}</strong> {project.solution}
                  </p>
                </div>

                <div className="mt-5 space-y-1.5">
                  {project.metrics?.map((metric, mIdx) => (
                    <div key={mIdx} className="flex items-center gap-2 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-wrap gap-2">
                {project.stack?.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-100 dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-zinc-800 dark:text-zinc-300 font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}