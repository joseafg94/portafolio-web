import { ProjectData } from "@/types/project";

export const projects: ProjectData[] = [
  {
    id: "meniva",
    slug: "meniva",
    title: "Meniva — Multi-Tenant Digital Menu SaaS",
    category: "saas",
    status: "live",
    featured: true,
    year: 2025,
    problem:
      "Traditional digital menus and paper menus are slow to update, lack real-time synchronization across multiple restaurant locations, and struggle with latency during peak dining hours.",
    solution:
      "Built a high-performance multi-tenant digital menu SaaS architecture powered by Next.js App Router and Supabase Row Level Security (RLS) for tenant isolation, real-time menu management, and instant asset distribution.",
    result:
      "Sub-400ms page load speeds globally with menu updates propagating across all connected devices in under 3 seconds.",
    metrics: [
      { label: "Load Speed", value: "< 400ms" },
      { label: "Update Sync", value: "< 3s" },
      { label: "Tenant Isolation", value: "100% RLS" },
    ],
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Vercel",
    ],
    images: {
      cover: "/projects/meniva/cover.png",
    },
    liveUrl: "https://meniva.app",
  },
];
