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
    liveUrl: "https://getmeniva.vercel.app",
  },
  {
    id: "prefabricated-habitat",
    slug: "prefabricated-habitat",
    title: "Prefabricated Habitat",
    category: "web",
    status: "live",
    featured: false,
    year: 2025,
    problem:
      "The client, a modular construction company in Panama, needed to clearly communicate the quality of its home designs, the efficiency of its construction process, and the sustainability benefits of Passive House standards while overcoming outdated perceptions of prefabricated homes.",
    solution:
      "Developed a visually engaging web platform that showcases custom modular home designs, explains the complete architecture-to-installation process, and educates potential customers about energy efficiency, sustainability, and modern construction methods.",
    result:
      "Delivered a modern digital presence that strengthened the company's brand positioning in the local market, increased visitor engagement with interactive home showcases, and generated more qualified leads through WhatsApp and integrated contact forms.",
    metrics: [
      { label: "Qualified Leads", value: "+45%" },
      { label: "Average Session", value: "3m 45s" },
      { label: "Monthly Inquiries", value: "92/mo" },
    ],
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Resend", "Vercel"],
    images: {
      cover: "/projects/prefabricated-habitat/cover.png",
    },
    liveUrl: "https://www.habitatprefabricados.com",
  },
];
