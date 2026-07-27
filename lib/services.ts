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
    foundingNotice: {
      en: "Early Partner Program: Get $450+ off setup when you share a 60-second video testimonial.",
      es: "Programa Early Partner: Obtén $450+ de descuento en setup a cambio de un video testimonial de 60 segundos.",
    },
    spotsLeft: 3,
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
      { en: "AI chatbot trained with business information", es: "Chatbot de IA entrenado con información del negocio" },
      { en: "Calendly / Cal.com integration", es: "Integración de agendamiento con Calendly o Cal.com" },
      { en: "Lead alerts via email and SMS", es: "Alertas de leads por correo electrónico y SMS" },
      { en: "Validated contact forms", es: "Formularios de contacto validados" },
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
      en: "$2,200–$2,500",
      es: "$2,200–$2,500",
    },
    foundingNotice: {
      en: "Early Partner Program: Save $1,300+ on your dashboard build when you share a 60-second video testimonial.",
      es: "Programa Early Partner: Ahorra más de $1,300 en tu dashboard a cambio de un video testimonial de 60 segundos.",
    },
    spotsLeft: 2,
    deliveryTime: {
      en: "2–3 weeks",
      es: "2–3 semanas",
    },
    paymentTerms: {
      en: "50/50 or 40/30/30 milestone options",
      es: "Opción de hitos 50/50 o 40/30/30",
    },
    includes: [
      { en: "Workflow audit session", es: "Sesión de auditoría de flujo de trabajo" },
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
      en: "Scope tight, build fast, ship to production.",
      es: "Alcance acotado, construcción rápida, directo a producción.",
    },
    regularPrice: {
      en: "$6,000–$7,500",
      es: "$6,000–$7,500",
    },
    foundingPrice: {
      en: "$3,200–$3,500",
      es: "$3,200–$3,500",
    },
    foundingNotice: {
      en: "Early Partner Program: Save $2,800+ on your MVP build when you share a 60-second video testimonial.",
      es: "Programa Early Partner: Ahorra más de $2,800 en tu MVP a cambio de un video testimonial de 60 segundos.",
    },
    spotsLeft: 2,
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
