import { Dictionary } from "./en";

export const es: Dictionary = {
  hero: {
    badge: "Actualmente aceptando 2 proyectos nuevos este mes",
    title: "Ingeniería full-stack para pequeños negocios en EE. UU. — sin el precio de una agencia.",
    subtitle:
      "Somos el equipo detrás de Meniva, una plataforma SaaS multiempresa en producción. Ahora creamos automatizaciones, dashboards y MVPs para negocios como el tuyo — entregados en semanas, no meses.",
    ctaPrimary: "Ver Paquetes",
    ctaSecondary: "Agendar llamada de 15 min",
  },
  nav: {
    work: "Trabajos",
    services: "Servicios",
    process: "Cómo Trabajamos",
    about: "Nosotros",
    contact: "Contacto",
  },
  projects: {
    sectionTitle: "Trabajos Destacados y Casos de Éxito",
    sectionSubtitle: "Diseñados para velocidad, aislamiento y ROI real.",
    caseStudyLabel: "Caso de Éxito —",
    problemLabel: "🚨 El Problema",
    solutionLabel: "⚙️ La Arquitectura",
    resultLabel: "⚡ El Resultado",
    viewDemo: "Ver Demo Técnica",
  },
  services: {
    sectionTitle: "Servicios y Ofertas para Socios Fundadores",
    sectionSubtitle: "Paquetes de ingeniería transparentes y de alcance fijo.",
    foundingNotice: "Incluye un testimonio en video de 60 segundos después de la entrega",
    spotsLeft: "cupos disponibles a tarifa de socio fundador",
    spotsStatus: "{taken} tomados. {remaining} restante(s).",
    regularPrefix: "Precio regular:",
    deliveryPrefix: "Entrega:",
    includes: "Qué incluye",
    excludes: "No incluye",
  },
  contact: {
    sectionTitle: "Construyamos Algo Rápido",
    subtitle: "¿Tienes un proyecto en mente o necesitas asesoría técnica? Completa el formulario y te responderemos con una propuesta concreta.",
    emailLabel2: "Escríbenos Directamente",
    callLabel: "¿Prefieres una videollamada?",
    callCTA: "Agenda una llamada de descubrimiento de 15 minutos",
    formTitle: "Solicitud Recibida",
    selectPlaceholder: "Selecciona un paquete",
    nameLabel: "Tu Nombre",
    emailLabel: "Correo Electrónico",
    serviceLabel: "Servicio de Interés",
    messageLabel: "Detalles del Proyecto",
    submitButton: "Enviar Solicitud",
    sending: "Enviando...",
    success: "Gracias — te responderemos dentro de 24 horas.",
    error: "Algo salió mal. Por favor intenta de nuevo o escríbenos directamente.",
  },
  process: {
    sectionTitle: "Cómo Trabajamos",
    sectionSubtitle: "Sin sorpresas. Sin cambios de alcance. Solo ejecución enfocada.",
    steps: [
      {
        number: "01",
        title: "Llamada de Descubrimiento",
        description: "Pasamos 30–45 minutos entendiendo tu negocio, objetivos y limitaciones. Sin discurso de ventas — solo una conversación honesta de ingeniería sobre lo que realmente es viable.",
      },
      {
        number: "02",
        title: "Propuesta y Contrato",
        description: "Recibes una propuesta de alcance fijo con entregables, cronograma y precio claros. Acordamos por escrito antes de escribir una sola línea de código.",
      },
      {
        number: "03",
        title: "Desarrollo",
        description: "Construimos en sprints enfocados con seguimientos semanales. Ves el progreso regularmente mediante previews en staging — sin cajas negras, sin sorpresas en la entrega.",
      },
      {
        number: "04",
        title: "Lanzamiento y Soporte",
        description: "Nos encargamos del despliegue, DNS y puesta en producción. Después del lanzamiento, estamos disponibles durante la ventana de soporte acordada para resolver cualquier detalle.",
      },
    ],
  },
  about: {
    sectionTitle: "Sobre el Estudio",
    sectionSubtitle: "Construido sobre ingeniería real, no sobre gastos generales de agencia.",
    body: "Somos un estudio de software enfocado, construido sobre un principio: entregar software de nivel producción rápido, sin el peso de una agencia grande. Nuestra base es Meniva — una plataforma SaaS multiempresa en producción que atiende clientes de restaurantes en Panamá, construida desde cero con Next.js, Supabase y una arquitectura multiempresa real usando Row Level Security.",
    bodyTwo: "Esa experiencia es lo que aportamos a cada proyecto. Ya sea un dashboard de automatización de negocio, un motor de leads con IA, o un MVP de SaaS a medida, abordamos tu problema de la misma manera: primero entender el sistema, luego construirlo correctamente.",
    tagline: "Somos ágiles porque somos ingenieros, no gerentes de proyecto.",
    stats: [
      { value: "1", label: "Producto SaaS en vivo", sub: "Meniva en producción" },
      { value: "5sem", label: "Entrega más rápida", sub: "SaaS MVP completo" },
      { value: "100%", label: "TypeScript", sub: "Modo estricto, sin any" },
      { value: "RLS", label: "Modelo de seguridad", sub: "Supabase Row Level" },
    ],
  },
  techStack: {
    sectionTitle: "Nuestro Stack",
    sectionSubtitle: "Probado en producción. Sin reinventar la rueda.",
    descriptions: {
      "Next.js": "App Router, Componentes de Servidor",
      "TypeScript": "Modo estricto, sin `any`",
      "Tailwind CSS": "v4, estilos utility-first",
      "Supabase": "Postgres, Auth, RLS, Tiempo real",
      "Vercel": "Deploy en edge, analíticas",
      "Resend": "Email transaccional vía API",
      "Framer Motion": "Animaciones de nivel producción",
      "Zod": "Validación de esquemas en runtime",
    },
  },
  faq: {
    sectionTitle: "Preguntas Frecuentes",
    sectionSubtitle: "Respuestas directas. Sin relleno.",
    items: [
      {
        question: "¿Cuánto tiempo toma cada tipo de proyecto?",
        answer: "Los tiempos de entrega son fijos por paquete: el Motor de Leads con IA (Servicio 1) toma de 5 a 7 días hábiles. El Dashboard de Automatización de Procesos (Servicio 2) toma de 2 a 3 semanas. Un MVP de SaaS Full-Stack (Servicio 3) toma de 3 a 5 semanas. Estos son cronogramas de trabajo, no estimaciones aproximadas — definimos el alcance antes de empezar, así que los tiempos son firmes.",
      },
      {
        question: "¿Cómo funciona el pago?",
        answer: "Para el Servicio 1 (Motor de Leads con IA): 50% por adelantado, 50% en la entrega. Para el Servicio 2 (Dashboard de Automatización): estructura 50/50 o 40/30/30 por hitos. Para el Servicio 3 (MVP de SaaS): 40/30/30 ligado a los hitos del proyecto. Aceptamos transferencia bancaria vía Wise o Stripe. Nunca se requiere el pago completo antes de comenzar.",
      },
      {
        question: "¿Trabajan con clientes fuera de EE. UU.?",
        answer: "Sí. Nuestro mercado objetivo es EE. UU., pero trabajamos con clientes a nivel global. La comunicación es en inglés (o español si se prefiere). Estamos en Panamá (UTC-5), lo cual se alinea bien con los horarios de EE. UU. para llamadas y trabajo asíncrono.",
      },
      {
        question: "¿Qué pasa si necesito cambios fuera del alcance acordado?",
        answer: "Cada proyecto comienza con un documento de alcance por escrito. Si solicitas algo fuera de ese alcance, te daremos un estimado claro del trabajo adicional y pediremos tu aprobación antes de comenzar. No hay facturas sorpresa. Los cambios de alcance son parte normal del desarrollo de software — simplemente los manejamos con transparencia.",
      },
      {
        question: "¿Qué pasa si no estoy satisfecho con el resultado?",
        answer: "Hacemos seguimientos semanales y compartimos previews en staging durante todo el desarrollo — así que no hay grandes sorpresas al final. Si algo no coincide con lo acordado, lo corregimos dentro de la ventana de soporte sin costo adicional. Estamos invertidos en la relación, no solo en la factura.",
      },
    ],
  },
  footer: {
    privacy: "Solo usamos tu información para responder tu solicitud. Sin spam, sin compartir con terceros.",
    rights: "Todos los derechos reservados.",
  },
  nicheUi: {
    forPrefix: "Para",
    sectionIncludes: "Qué incluye",
    sectionExcludes: "Qué NO incluye",
  },
};