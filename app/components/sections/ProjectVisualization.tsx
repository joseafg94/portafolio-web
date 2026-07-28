"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ProjectData } from "@/types/project";
import { useI18n } from "@/lib/i18n/context";

interface Tab {
  label: string;
  src: string;
}

interface ProjectVisualizationProps {
  project: ProjectData;
  tabs: Tab[];
}

export default function ProjectVisualization({
  project,
  tabs,
}: ProjectVisualizationProps) {
  const { locale } = useI18n();
  const [activeTab, setActiveTab] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Lazy-load / autoplay video only when entering viewport
  useEffect(() => {
    if (!project.demoVideo || !videoRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(() => {
              // Autoplay blocked — silently ignore
            });
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [project.demoVideo]);

  return (
    <div ref={containerRef} className="flex flex-col gap-4">
      {/* 1 — Demo Video */}
      {project.demoVideo && (
        <div className="relative w-full aspect-video overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
          {/* LIVE badge */}
          <div className="absolute top-3 left-3 z-10 flex items-center gap-1.5 rounded-full bg-zinc-950/80 border border-zinc-700 px-2.5 py-1 backdrop-blur-sm">
            <span
              className="w-2 h-2 rounded-full bg-emerald-400 motion-safe:animate-pulse"
              aria-hidden="true"
            />
            <span className="text-[10px] font-mono font-bold text-emerald-400 uppercase tracking-widest">
              LIVE
            </span>
          </div>

          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            muted
            playsInline
            loop
            preload="metadata"
            aria-label={`${project.title} demo video`}
          >
            {project.demoVideo.webm && (
              <source src={project.demoVideo.webm} type="video/webm" />
            )}
            <source src={project.demoVideo.mp4} type="video/mp4" />
          </video>
        </div>
      )}

      {/* 2 — Image Tabs */}
      {tabs.length > 0 && (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden">
          {/* Tab bar */}
          <div className="flex border-b border-zinc-800">
            {tabs.map((tab, i) => (
              <button
                key={tab.label}
                onClick={() => setActiveTab(i)}
                className={`flex-1 py-2.5 text-xs font-mono font-semibold transition-colors ${
                  activeTab === i
                    ? "text-emerald-400 border-b-2 border-emerald-400 bg-zinc-950/40"
                    : "text-zinc-500 hover:text-zinc-300"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab image */}
          <div className="relative aspect-video w-full bg-zinc-950">
            <Image
              src={tabs[activeTab].src}
              alt={tabs[activeTab].label}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>
        </div>
      )}

      {/* 3 — Metrics */}
      {project.metrics && project.metrics.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {project.metrics.map((metric) => (
            <div
              key={metric.label.en}
              className="p-4 bg-zinc-950/40 rounded-xl border border-zinc-900 text-center"
            >
              <p className="text-xl font-extrabold text-emerald-400">
                {metric.value}
              </p>
              <p className="mt-1 text-[10px] uppercase font-mono tracking-wider text-zinc-500">
                {metric.label[locale]}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
