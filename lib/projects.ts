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
    problem: {
      en: "Traditional digital menus and paper menus are slow to update, lack real-time synchronization across multiple restaurant locations, and struggle with latency during peak dining hours.",
      es: "Los menús digitales tradicionales son lentos de actualizar, no sincronizan en tiempo real entre múltiples sucursales y sufren de latencia durante las horas pico de servicio.",
    },
    solution: {
      en: "Built a high-performance multi-tenant digital menu SaaS architecture powered by Next.js App Router and Supabase Row Level Security (RLS) for tenant isolation, real-time menu management, and instant asset distribution.",
      es: "Construimos una arquitectura SaaS multi-tenant de alto rendimiento con Next.js App Router y Row Level Security de Supabase para aislamiento de tenants, gestión de menús en tiempo real y distribución instantánea de assets.",
    },
    result: {
      en: "Sub-400ms page load speeds globally with menu updates propagating across all connected devices in under 3 seconds.",
      es: "Tiempos de carga por debajo de 400ms globalmente, con actualizaciones de menú propagándose a todos los dispositivos conectados en menos de 3 segundos.",
    },
    metrics: [
      { label: { en: "Load Speed", es: "Velocidad de carga" }, value: "< 400ms" },
      { label: { en: "Update Sync", es: "Sync de actualización" }, value: "< 3s" },
      { label: { en: "Tenant Isolation", es: "Aislamiento de tenant" }, value: "100% RLS" },
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
    problem: {
      en: "A modular construction company needed a web presence that could clearly communicate the quality of its home designs and the science behind Passive House energy efficiency — overcoming the widespread perception that prefabricated means cheap or low-quality.",
      es: "Una empresa de construcción modular necesitaba comunicar claramente la calidad de sus diseños y la ciencia detrás de los estándares Passive House, superando la percepción generalizada de que 'prefabricado' significa baja calidad.",
    },
    solution: {
      en: "Built with the same production-grade stack we use for US clients (Next.js, TypeScript, Tailwind, Vercel): a performance-first marketing site with interactive home showcases, a full architecture-to-installation process breakdown, and lead capture via validated contact forms and WhatsApp — deployed globally on Vercel's edge network.",
      es: "Construido con el mismo stack de producción que usamos para clientes en EE. UU. (Next.js, TypeScript, Tailwind, Vercel): un sitio marketing con showcases interactivos de diseños, explicación del proceso completo y captura de leads vía formularios validados y WhatsApp — desplegado en la red edge global de Vercel.",
    },
    result: {
      en: "Delivered a brand-elevating digital presence that positions the company as a premium modular construction firm. The site is fully internationalization-ready and demonstrates that our engineering approach scales identically whether the client is in Panama, the US, or anywhere else.",
      es: "Presencia digital que posiciona a la empresa como firma de construcción modular premium. El sitio está listo para internacionalización, demostrando que nuestra arquitectura de ingeniería escala igual sin importar el mercado del cliente.",
    },
    metrics: [],
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Resend", "Vercel"],
    images: {
      cover: "/projects/prefabricated-habitat/cover.png",
    },
    liveUrl: "https://www.habitatprefabricados.com",
  },
];
