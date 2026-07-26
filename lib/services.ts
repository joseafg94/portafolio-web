import { ServiceData } from "@/types/service";

export const services: ServiceData[] = [
  {
    id: "lead-engine",
    name: {
      en: "AI Lead Engine & Growth Web Presence",
      es: "Motor de Leads IA & Presencia Web",
    },
    tagline: {
      en: "High-converting web architecture with integrated AI sales assistant",
      es: "Arquitectura web de alta conversión con asistente de ventas IA integrado",
    },
    regularPrice: "$1,200–$1,800 setup + $300–$400/mo",
    foundingPrice: "$700–$800 setup + $250/mo",
    retainerNote: {
      en: "Monthly retainer covers: infrastructure maintenance, AI API usage, 24/7 uptime monitoring & minor content updates.",
      es: "El retainer mensual cubre: mantenimiento de infraestructura, uso de APIs de IA, monitoreo 24/7 y actualizaciones menores.",
    },
    foundingNotice: {
      en: "Early Partner Program: Get $500 off setup when you share a 60-second video testimonial after launch.",
      es: "Programa Early Partner: Obtén $500 de descuento en el setup cuando compartas un video testimonial de 60 segundos después del lanzamiento.",
    },
    spotsLeft: 3,
    deliveryTime: "5–7 business days",
    paymentTerms: "50% upfront / 50% upon delivery",
    includes: [
      { en: "Up to 5 custom layout sections", es: "Hasta 5 secciones de diseño personalizado" },
      { en: "Custom-trained AI Lead Chatbot", es: "Chatbot IA entrenado para tu negocio" },
      { en: "Appointment scheduling (Calendly/Cal.com)", es: "Agendamiento de citas (Calendly/Cal.com)" },
      { en: "Email & SMS instant lead alerts", es: "Alertas instantáneas de leads por email y SMS" },
      { en: "Validated contact & lead capture forms", es: "Formularios de captura de leads validados" },
      { en: "GA4 & Meta Pixel analytics setup", es: "Configuración de GA4 y Meta Pixel" },
      { en: "Vercel deployment & custom domain config", es: "Deploy en Vercel y configuración de dominio" },
    ],
    excludes: [
      { en: "Copywriting from scratch", es: "Redacción de contenido desde cero" },
      { en: "Branding / Logo design", es: "Branding / Diseño de logo" },
      { en: "Advanced SEO campaigns", es: "Campañas avanzadas de SEO" },
      { en: "More than 5 sections", es: "Más de 5 secciones" },
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
      en: "Custom operations portal to eliminate manual work and spreadsheet chaos",
      es: "Portal de operaciones personalizado para eliminar trabajo manual y el caos de las hojas de cálculo",
    },
    regularPrice: "$3,500–$4,800",
    foundingPrice: "$2,200–$2,500",
    foundingNotice: {
      en: "Early Partner Program: Save $1,300+ on your dashboard build when you share a 60-second video testimonial after launch.",
      es: "Programa Early Partner: Ahorra más de $1,300 en tu dashboard cuando compartas un video testimonial de 60 segundos después del lanzamiento.",
    },
    spotsLeft: 2,
    deliveryTime: "2–3 weeks",
    paymentTerms: "50/50 or 40/30/30 milestone options",
    includes: [
      { en: "Operational workflow audit", es: "Auditoría de flujo de trabajo operativo" },
      { en: "Custom Next.js + Supabase dashboard", es: "Dashboard personalizado con Next.js + Supabase" },
      { en: "Admin & Staff role-based access control (RBAC)", es: "Control de acceso por roles Admin y Staff (RBAC)" },
      { en: "Automated PDF generation (Quotes & Invoices)", es: "Generación automática de PDFs (Cotizaciones y Facturas)" },
      { en: "Up to 3 third-party API integrations", es: "Hasta 3 integraciones con APIs de terceros" },
      { en: "Data migration from Excel / CSV", es: "Migración de datos desde Excel / CSV" },
      { en: "1 week of dedicated post-launch support", es: "1 semana de soporte dedicado post-lanzamiento" },
    ],
    excludes: [
      { en: "More than 3 integrations", es: "Más de 3 integraciones" },
      { en: "Maintenance outside support window", es: "Mantenimiento fuera de la ventana de soporte" },
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
      en: "Production-ready MVP built to scale and attract early users or investors",
      es: "MVP listo para producción, construido para escalar y atraer primeros usuarios o inversores",
    },
    regularPrice: "$6,000–$7,500",
    foundingPrice: "$3,200–$3,500",
    foundingNotice: {
      en: "Early Partner Program: Save $2,800+ on your MVP build when you share a 60-second video testimonial after launch.",
      es: "Programa Early Partner: Ahorra más de $2,800 en tu MVP cuando compartas un video testimonial de 60 segundos después del lanzamiento.",
    },
    spotsLeft: 2,
    deliveryTime: "3–5 weeks",
    paymentTerms: "40/30/30 milestone payments",
    includes: [
      { en: "Authentication & RBAC permissions", es: "Autenticación y permisos RBAC" },
      { en: "Client portal & Admin management panel", es: "Portal de cliente y panel de administración" },
      { en: "Up to 5 core functional modules (Stripe, Reports, Files, AI)", es: "Hasta 5 módulos funcionales (Stripe, Reportes, Archivos, IA)" },
      { en: "Production deployment on Vercel", es: "Deploy en producción en Vercel" },
      { en: "2 weeks of dedicated post-launch support", es: "2 semanas de soporte dedicado post-lanzamiento" },
    ],
    excludes: [
      { en: "Native mobile app", es: "App móvil nativa" },
      { en: "Branding & design kit", es: "Kit de branding y diseño" },
      { en: "More than 5 core modules", es: "Más de 5 módulos" },
    ],
    ctaLabel: {
      en: "Select SaaS MVP Package",
      es: "Seleccionar Paquete SaaS MVP",
    },
  },
];
