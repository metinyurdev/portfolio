import { Code2 } from 'lucide-react';
import type { Language } from '../data/translations';
import { translations } from '../data/translations';

type StackProps = {
  lang: Language;
};

export default function Stack({ lang }: StackProps) {
  const t = translations[lang];
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
    <section className="py-6">
      <h2 className="text-3xl font-bold tracking-tight text-white mb-10">{t.stack.title}</h2>
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
  );
}