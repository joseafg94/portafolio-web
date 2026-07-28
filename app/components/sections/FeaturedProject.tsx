"use client";

import { ProjectData } from "@/types/project";
import { useI18n } from "@/lib/i18n/context";
import SpotlightCard from "@/app/components/reactbits/SpotlightCard";
import { ExternalLink } from "lucide-react";
import ProjectVisualization from "./ProjectVisualization";

interface FeaturedProjectProps {
  project: ProjectData;
}

// Per-project tab config. Keyed by project id so FeaturedProject stays generic.
const PROJECT_TABS: Record<string, { label: string; src: string }[]> = {
  meniva: [
    { label: "Admin Panel", src: "/projects/meniva/admin-panel.png" },
    { label: "QR Menu",     src: "/projects/meniva/qr-menu1.png"   },
    { label: "Sync",        src: "/projects/meniva/qr-menu2.png"   },
  ],
};

export default function FeaturedProject({ project }: FeaturedProjectProps) {
  const { t, locale } = useI18n();
  const tabs = PROJECT_TABS[project.id] ?? [];

  return (
    <SpotlightCard className="p-8 bg-zinc-900/50 border border-zinc-800 rounded-2xl hover:border-zinc-700 transition-colors duration-300">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Side: Info */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-mono rounded-full border border-emerald-500/20">
                {t.projects.caseStudyLabel} {project.category.toUpperCase()}
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
                <p className="text-xs text-zinc-300 leading-relaxed">{project.problem[locale]}</p>
              </div>

              <div className="p-4 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                <span className="text-indigo-400 font-semibold text-xs flex items-center gap-1 mb-1 font-mono uppercase tracking-wider">
                  {t.projects.solutionLabel}
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">{project.solution[locale]}</p>
              </div>

              <div className="p-4 bg-zinc-950/60 rounded-xl border border-zinc-800/80">
                <span className="text-emerald-400 font-semibold text-xs flex items-center gap-1 mb-1 font-mono uppercase tracking-wider">
                  {t.projects.resultLabel}
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">{project.result[locale]}</p>
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

        {/* Right Side: Video + Tabs + Metrics */}
        <ProjectVisualization project={project} tabs={tabs} />
      </div>
    </SpotlightCard>
  );
}
