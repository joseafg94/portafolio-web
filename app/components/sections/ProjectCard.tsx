"use client";

import Image from "next/image";
import { ProjectData } from "@/types/project";
import { useI18n } from "@/lib/i18n/context";
import SpotlightCard from "@/app/components/reactbits/SpotlightCard";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  project: ProjectData;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { t, locale } = useI18n();

  return (
    <SpotlightCard className="flex flex-col bg-zinc-900/40 border border-zinc-800 rounded-2xl p-5 hover:border-zinc-700 transition-colors duration-300">
      {/* Cover Image */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-zinc-800/80 bg-zinc-950 mb-4 shrink-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 to-zinc-900 flex items-center justify-center p-4">
          <span className="text-[10px] font-mono text-zinc-700">Project Screenshot</span>
        </div>
        <Image
          src={project.images.cover}
          alt={project.title}
          fill
          className="object-cover opacity-60 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-300"
          sizes="(max-width: 768px) 100vw, 33vw"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      </div>

      {/* Header Info */}
      <div className="flex items-center gap-2 mb-2">
        <span className="px-2 py-0.5 bg-zinc-800/80 text-zinc-400 text-[10px] font-mono rounded border border-zinc-800">
          {project.category.toUpperCase()}
        </span>
        <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 text-[10px] font-mono rounded border border-emerald-500/10">
          {project.status.toUpperCase()}
        </span>
      </div>

      <h4 className="text-lg font-bold text-zinc-100 mb-4 truncate">{project.title}</h4>

      {/* Problem, Solution, Result - Condensed */}
      <div className="flex-grow space-y-3 mb-5">
        <div className="p-3 bg-zinc-950/40 rounded-lg border border-zinc-900">
          <span className="text-red-400 font-semibold text-[10px] font-mono uppercase tracking-wider block mb-0.5">
            {t.projects.problemLabel}
          </span>
          <p className="text-[11px] text-zinc-400 leading-normal">{project.problem[locale]}</p>
        </div>

        <div className="p-3 bg-zinc-950/40 rounded-lg border border-zinc-900">
          <span className="text-indigo-400 font-semibold text-[10px] font-mono uppercase tracking-wider block mb-0.5">
            {t.projects.solutionLabel}
          </span>
          <p className="text-[11px] text-zinc-400 leading-normal">{project.solution[locale]}</p>
        </div>

        <div className="p-3 bg-zinc-950/40 rounded-lg border border-zinc-900">
          <span className="text-emerald-400 font-semibold text-[10px] font-mono uppercase tracking-wider block mb-0.5">
            {t.projects.resultLabel}
          </span>
          <p className="text-[11px] text-zinc-400 leading-normal">{project.result[locale]}</p>
        </div>
      </div>

      {/* Footer Info: Tech and Link */}
      <div className="mt-auto pt-4 border-t border-zinc-900 flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1 max-w-[70%]">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="px-1.5 py-0.5 bg-zinc-950 text-zinc-500 text-[9px] font-mono rounded">
              {tech}
            </span>
          ))}
        </div>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[10px] font-bold text-zinc-400 hover:text-emerald-400 flex items-center gap-1 transition-colors"
          >
            <span>Demo</span>
            <ExternalLink size={10} />
          </a>
        )}
      </div>
    </SpotlightCard>
  );
}
