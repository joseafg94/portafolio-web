"use client";

import Image from "next/image";
import { ProjectData } from "@/types/project";
import { useI18n } from "@/lib/i18n/context";
import SpotlightCard from "@/app/components/reactbits/SpotlightCard";
import { ExternalLink } from "lucide-react";

interface FeaturedProjectProps {
  project: ProjectData;
}

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  const { t } = useI18n();

  return (
    <SpotlightCard className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Info */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-mono rounded-full border border-emerald-500/20">
                Case Study — {project.category.toUpperCase()}
              </span>
              <span className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs font-mono rounded-full border border-zinc-700">
                {project.status.toUpperCase()}
              </span>
            </div>

            <h3 className="text-3xl font-extrabold text-zinc-100 mb-6">{project.title}</h3>

            {/* Problem/Solution/Result blocks */}
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div className="p-4 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                <span className="text-red-400 font-semibold text-xs flex items-center gap-1 mb-1 font-mono uppercase tracking-wider">
                  {t.projects.problemLabel}
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">{project.problem}</p>
              </div>

              <div className="p-4 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                <span className="text-indigo-400 font-semibold text-xs flex items-center gap-1 mb-1 font-mono uppercase tracking-wider">
                  {t.projects.solutionLabel}
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">{project.solution}</p>
              </div>

              <div className="p-4 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                <span className="text-emerald-400 font-semibold text-xs flex items-center gap-1 mb-1 font-mono uppercase tracking-wider">
                  {t.projects.resultLabel}
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">{project.result}</p>
              </div>
            </div>
          </div>

          <div>
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 bg-zinc-950 text-zinc-400 text-xs font-mono rounded border border-zinc-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action buttons */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-bold text-zinc-300 hover:text-emerald-400 transition-colors"
              >
                <span>{t.projects.viewDemo}</span>
                <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Right Side: Image and Metrics */}
        <div className="flex flex-col justify-between gap-6">
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
            {/* We will render a placeholder or a stylized visual block since no physical image assets exist yet */}
            <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 to-zinc-900 flex items-center justify-center p-4">
              <span className="text-xs font-mono text-zinc-600">Case Study Visualization</span>
            </div>
            {/* Fallback layout image for Next.js Image component when src starts with '/' */}
            <Image
              src={project.images.cover}
              alt={project.title}
              fill
              priority
              className="object-cover opacity-80 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-300"
              sizes="(max-width: 1024px) 100vw, 50vw"
              onError={(e) => {
                // If local image fails to load, keep the styled fallback background visible
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          {/* Metrics display */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-3 gap-4">
              {project.metrics.map((metric) => (
                <div key={metric.label} className="p-4 bg-zinc-950/40 rounded-xl border border-zinc-900 text-center">
                  <p className="text-xl font-extrabold text-emerald-400">{metric.value}</p>
                  <p className="mt-1 text-[10px] uppercase font-mono tracking-wider text-zinc-500">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}
