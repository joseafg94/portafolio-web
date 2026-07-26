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
  en: "A modular construction company needed a site that clearly showed the quality of its designs and Passive House engineering — overcoming the stigma that 'prefabricated' means low-quality.",
  es: "Una empresa de construcción modular necesitaba un sitio que mostrara la calidad de sus diseños y la ingeniería Passive House, superando el estigma de que 'prefabricado' es sinónimo de baja calidad.",
},
solution: {
  en: "Built with the same production-grade stack we use for US clients (Next.js, TypeScript, Tailwind, Vercel): interactive home showcases, a clear process breakdown, and lead capture via forms and WhatsApp.",
  es: "Construido con el mismo stack que usamos para clientes en EE. UU. (Next.js, TypeScript, Tailwind, Vercel): showcases interactivos, explicación clara del proceso y captura de leads vía formularios y WhatsApp.",
},
result: {
  en: "A brand-elevating site that positions the company as a premium modular builder — proof our engineering scales the same whether the client is in Panama, the US, or anywhere else.",
  es: "Un sitio que posiciona a la empresa como constructora modular premium — prueba de que nuestra ingeniería escala igual sin importar el mercado del cliente.",
},
    metrics: [],
    techStack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Resend", "Vercel"],
    images: {
      cover: "/projects/prefabricated-habitat/cover.png",
    },
    liveUrl: "https://www.habitatprefabricados.com",
  },
];
