import { ServiceData } from "@/types/service";

export const services: ServiceData[] = [
  {
    id: "lead-engine",
    name: {
      en: "AI Lead Engine & Growth Web Presence",
      es: "Motor de Leads IA & Presencia Web",
    },
    tagline: {
      en: "Your website should work while you sleep.",
      es: "Tu sitio web debería trabajar mientras duermes.",
    },
    regularPrice: {
      en: "$1,200–$1,800 setup + $300–$400/mo",
      es: "$1,200–$1,800 setup + $300–$400/mes",
    },
    foundingPrice: {
      en: "$750 setup + $250/mo",
      es: "$750 setup + $250/mes",
    },
    retainerNote: {
      en: "Monthly retainer covers: infrastructure maintenance, AI API usage, and minor updates.",
      es: "El retainer mensual cubre: mantenimiento de infraestructura, uso de APIs de IA y actualizaciones menores.",
    },
    foundingHeadline: {
      en: "⚡ Founding Partner Rate — 3 spots only",
      es: "⚡ Tarifa de Socio Fundador — 3 cupos únicamente",
    },
    foundingNotice: {
      en: "You pay less. We earn proof. We're taking 3 clients at a reduced rate in exchange for one thing: an honest 60-second video after launch — win or lose, your real words. No lock-in. No fine print. Just a fair trade between two businesses that need something from each other.",
      es: "Tú pagas menos. Nosotros ganamos pruebas. Tomaremos 3 clientes a una tarifa reducida a cambio de una cosa: un video honesto de 60 segundos después del lanzamiento — ganes o pierdas, tus palabras reales. Sin ataduras. Sin letra pequeña. Solo un trato justo entre dos negocios que necesitan algo el uno del otro.",
    },
    spotsTaken: 2,
    spotsTotal: 3,
    deliveryTime: {
      en: "5–7 business days",
      es: "5–7 días hábiles",
    },
    paymentTerms: {
      en: "50% upfront / 50% upon delivery",
      es: "50% de inicio / 50% a la entrega",
    },
    includes: [
      { en: "Up to 5 sections with custom design (no templates)", es: "Hasta 5 secciones con diseño personalizado (no plantillas)" },
      { en: "Custom AI assistant that answers questions and captures leads 24/7", es: "Un asistente de IA que trabaja por ti — captura leads y responde clientes a toda hora" },
      { en: "Calendly / Cal.com integration", es: "Integración de agendamiento con Calendly o Cal.com" },
      { en: "Lead alerts via email and SMS", es: "Alertas de leads por correo electrónico y SMS" },
      { en: "Lead capture forms — clean data, zero spam", es: "Formularios inteligentes — solo contactos reales" },
      { en: "GA4 configuration", es: "Configuración de GA4" },
      { en: "Vercel deployment & domain setup", es: "Despliegue en Vercel y configuración de dominio" },
    ],
    excludes: [
      { en: "Copywriting from scratch (client provides text)", es: "Redacción desde cero (el cliente provee textos)" },
      { en: "Brand / logo design", es: "Diseño de marca / logotipo" },
      { en: "More than 5 sections", es: "Más de 5 secciones" },
      { en: "Advanced SEO campaigns", es: "Campañas avanzadas de SEO" },
      { en: "Meta Pixel & paid ads management", es: "Meta Pixel y gestión de publicidad pagada" },
      { en: "Maintenance outside the support window", es: "Mantenimiento fuera de la ventana de soporte" },
    ],
    ctaLabel: {
      en: "Select AI Lead Engine",
      es: "Seleccionar Motor de Leads IA",
    },
  },
  {
    id: "process-automation",
    name: {
      en: "Business Process Automation & Dashboard",
      es: "Automatización de Procesos & Dashboard Operativo",
    },
    tagline: {
      en: "Your team shouldn't be living in spreadsheets.",
      es: "Tu equipo no debería vivir en hojas de cálculo.",
    },
    regularPrice: {
      en: "$3,500–$4,800",
      es: "$3,500–$4,800",
    },
    foundingPrice: {
      en: "$2,350",
      es: "$2,350",
    },
    foundingHeadline: {
      en: "⚡ Founding Partner Rate — 2 spots only",
      es: "⚡ Tarifa de Socio Fundador — 2 cupos únicamente",
    },
    foundingNotice: {
      en: "You get a $4,800 system. You pay $2,350. In exchange: an honest 60-second video after launch. We're building our case study portfolio. You get a custom internal system at a price that doesn't exist anywhere else in the market.",
      es: "Obtienes un sistema de $4,800. Pagas $2,350. A cambio: un video honesto de 60 segundos después del lanzamiento. Estamos construyendo nuestro portafolio de casos de estudio. Obtienes un sistema interno a medida a un precio que no existe en ningún otro lugar del mercado.",
    },
    spotsTaken: 1,
    spotsTotal: 2,
    deliveryTime: {
      en: "2–3 weeks",
      es: "2–3 semanas",
    },
    paymentTerms: {
      en: "50/50 or 40/30/30 milestone options",
      es: "Opción de hitos 50/50 o 40/30/30",
    },
    includes: [
      { en: "Workflow audit — we map how your business actually runs before writing a single line of code", es: "Auditoría de operaciones — primero entendemos tu negocio por dentro, luego construimos" },
      { en: "Custom Next.js + Supabase dashboard", es: "Dashboard de operaciones a medida (Next.js + Supabase)" },
      { en: "Role-based access control (RBAC)", es: "Control de acceso basado en roles (RBAC)" },
      { en: "Automated PDF generation (quotes/invoices)", es: "Generación automática de PDFs (cotizaciones/facturas)" },
      { en: "Up to 3 external integrations (QuickBooks, Stripe, Sheets, Slack, HubSpot, etc.)", es: "Hasta 3 integraciones externas (QuickBooks, Stripe, Sheets, Slack, HubSpot, etc.)" },
      { en: "Data migration from Excel / CSV", es: "Migración de datos desde Excel / CSV" },
      { en: "1 week of dedicated support", es: "1 semana de soporte dedicado" },
    ],
    excludes: [
      { en: "More than 3 integrations", es: "Más de 3 integraciones" },
      { en: "Continuous maintenance outside support", es: "Mantenimiento continuo fuera de la ventana de soporte" },
      { en: "More than 1 onboarding session", es: "Más de 1 sesión de onboarding" },
      { en: "Brand / UI design from scratch", es: "Diseño de marca / interfaz desde cero" },
      { en: "AI features (separate add-on)", es: "Funcionalidades de IA (add-on por separado)" },
    ],
    ctaLabel: {
      en: "Select Automation Package",
      es: "Seleccionar Paquete de Automatización",
    },
  },
  {
    id: "custom-mvp",
    name: {
      en: "Full-Stack Custom Web App / SaaS MVP",
      es: "Aplicación Web Full-Stack / SaaS MVP",
    },
    tagline: {
      en: "From idea to live product — in weeks, not months.",
      es: "De la idea al producto en vivo — semanas, no meses.",
    },
    regularPrice: {
      en: "$6,000–$7,500",
      es: "$6,000–$7,500",
    },
    foundingPrice: {
      en: "$3,200–$3,500",
      es: "$3,200–$3,500",
    },
    foundingHeadline: {
      en: "⚡ Founding Partner Rate — 2 spots only",
      es: "⚡ Tarifa de Socio Fundador — 2 cupos únicamente",
    },
    foundingNotice: {
      en: "Production-ready SaaS MVP. Weeks, not months. At a price that makes no sense for anyone but us right now. We already built one: Meniva — a live multi-tenant SaaS serving restaurants in Panama. We know the stack, the patterns, and the mistakes to avoid. You get speed and experience. We get a case study. Fair trade.",
      es: "SaaS MVP listo para producción. Semanas, no meses. A un precio que no tiene sentido para nadie más que para nosotros en este momento. Ya construimos uno: Meniva — un SaaS multiempresa en vivo que atiende restaurantes en Panamá. Conocemos el stack, los patrones y los errores que se deben evitar. Tú obtienes velocidad y experiencia. Nosotros un caso de estudio. Trato justo.",
    },
    spotsTaken: 1,
    spotsTotal: 2,
    deliveryTime: {
      en: "3–5 weeks",
      es: "3–5 semanas",
    },
    paymentTerms: {
      en: "40/30/30 milestone payments",
      es: "Pagos por hitos 40/30/30",
    },
    includes: [
      { en: "Full auth system (signup, login, email verification, password recovery)", es: "Sistema de autenticación completo (signup, login, verificación, recuperación)" },
      { en: "Role-based access control (RBAC)", es: "Control de acceso basado en roles (RBAC)" },
      { en: "Client portal + admin dashboard", es: "Portal de clientes y panel de administración" },
      { en: "Up to 5 core functional modules (Stripe, Analytics, Files, OpenAI, etc.)", es: "Hasta 5 módulos funcionales a elegir (Stripe, Reportes, Archivos, OpenAI, etc.)" },
      { en: "Vercel production deployment", es: "Despliegue de producción en Vercel" },
      { en: "2 weeks of dedicated support", es: "2 semanas de soporte dedicado" },
    ],
    excludes: [
      { en: "Native mobile app", es: "Aplicación móvil nativa" },
      { en: "Brand design / design system from scratch", es: "Diseño de marca / sistema de diseño desde cero" },
      { en: "More than 5 modules", es: "Más de 5 módulos" },
      { en: "Marketing, SEO & growth strategy", es: "Marketing, SEO y estrategia de crecimiento" },
      { en: "Support beyond the 2-week window", es: "Soporte más allá de las 2 semanas" },
    ],
    ctaLabel: {
      en: "Select SaaS MVP Package",
      es: "Seleccionar Paquete SaaS MVP",
    },
  },
];
