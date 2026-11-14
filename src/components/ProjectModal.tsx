import React, { useState } from 'react';
import { X, ExternalLink, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ProjectDetail } from '../data/projectsData'; 

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!project) return null;

  const hasImages = project.images && project.images.length > 0;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl p-6 md:p-8 text-zinc-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Kapat Butonu */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Başlık ve Kategori */}
        <div className="mb-6 pr-10">
          <span className="text-xs font-mono uppercase tracking-wider text-purple-400 bg-purple-500/10 px-3 py-1 rounded-md">
            {project.category}
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-3">
            {project.title}
          </h2>
          <p className="text-sm text-zinc-400 mt-1">{project.subtitle}</p>
        </div>

        {/* Görsel / Ekran Görüntüsü Galerisi (Eğer varsa) */}
        {hasImages && (
          <div className="mb-8 rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
            <div className="relative aspect-video flex items-center justify-center bg-black/50">
              <img
                src={project.images![activeImageIdx].url}
                alt={project.images![activeImageIdx].caption}
                className="max-h-full max-w-full object-contain"
              />
              
              {project.images!.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImageIdx((prev) => (prev === 0 ? project.images!.length - 1 : prev - 1))}
                    className="absolute left-3 p-2 rounded-full bg-zinc-900/80 text-white hover:bg-zinc-800 transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => setActiveImageIdx((prev) => (prev === project.images!.length - 1 ? 0 : prev + 1))}
                    className="absolute right-3 p-2 rounded-full bg-zinc-900/80 text-white hover:bg-zinc-800 transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
            <div className="p-3 bg-zinc-900/90 border-t border-zinc-800 text-center text-xs text-zinc-300 font-medium">
              {project.images![activeImageIdx].caption}
            </div>
          </div>
        )}

        {/* Problem ve Çözüm Detayları */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="p-5 rounded-xl bg-zinc-950/50 border border-zinc-800/80">
            <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-2">The Challenge</h4>
            <p className="text-sm text-zinc-300 leading-relaxed">{project.problem}</p>
          </div>
          <div className="p-5 rounded-xl bg-zinc-950/50 border border-zinc-800/80">
            <h4 className="text-sm font-semibold text-purple-400 uppercase tracking-wider mb-2">Architectural Solution</h4>
            <p className="text-sm text-zinc-300 leading-relaxed">{project.solution}</p>
          </div>
        </div>

        {/* Metrikler */}
        <div className="mb-8">
          <h4 className="text-sm font-semibold text-zinc-200 mb-3">Key Engineering Metrics & Capabilities</h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {project.metrics.map((metric, idx) => (
              <div key={idx} className="flex items-center gap-2.5 p-3 rounded-lg bg-zinc-950 border border-zinc-800 text-xs text-emerald-400 font-medium">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{metric}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack ve GitHub Butonu */}
        <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, idx) => (
              <span key={idx} className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-950 border border-zinc-800 text-zinc-300">
                {tech}
              </span>
            ))}
          </div>

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-all shadow-lg shadow-purple-600/20"
          >
            {project.demoLabel} <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}