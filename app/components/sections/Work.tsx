"use client";

import { useI18n } from "@/lib/i18n/context";
import { projects } from "@/lib/projects";
import FeaturedProject from "./FeaturedProject";
import ProjectCard from "./ProjectCard";

export default function Work() {
  const { t } = useI18n();

  const featuredProjects = projects.filter((p) => p.featured);
  const gridProjects = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 border-t border-zinc-900">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
          {t.projects.sectionTitle}
        </h2>
        <p className="mt-4 text-lg text-zinc-400">
          {t.projects.sectionSubtitle}
        </p>
      </div>

      {/* Featured Projects Stack */}
      {featuredProjects.length > 0 && (
        <div className="space-y-12 mb-16">
          {featuredProjects.map((project) => (
            <FeaturedProject key={project.id} project={project} />
          ))}
        </div>
      )}

      {/* Standard Grid Projects */}
      {gridProjects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {gridProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      )}
    </section>
  );
}
