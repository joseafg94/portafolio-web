import type { NicheLandingData } from "@/types/niche-landing";

// ─────────────────────────────────────────────────────────────────────────────
// To add a new vertical: append a new entry to this array.
// The route /[slug] is rendered automatically — no component changes needed.
// ─────────────────────────────────────────────────────────────────────────────

export const nicheLandings: NicheLandingData[] = [
  {
    id: "dental",
    slug: "dental",
    nicheName: { en: "Dental Practices", es: "Clínicas Dentales" },
    nicheEmoji: "🦷",
    contactEmail: "jafeth@kvasirlabs.com",
    primaryCtaHref: "https://calendly.com/kvasirlabs/discovery-call",
    availabilityBadge: {
      en: "Only 3 founding partner spots left",
      es: "Solo 3 cupos de founding partner disponibles",
    },
    metaTitle: {
      en: "New Patient Capture System for Dental Practices | Kvasir Labs",
      es: "Sistema de Captación de Pacientes para Clínicas Dentales | Kvasir Labs",
    },
    metaDescription: {
      en: "We build the digital infrastructure that captures every new patient your team can't get to — 24/7, automatically. High-conversion site + AI receptionist + booking + review funnel. 5–7 day delivery.",
      es: "Construimos la infraestructura digital que captura cada paciente nuevo que tu equipo no puede atender — las 24 horas, de forma automática. Sitio de alta conversión + recepcionista IA + agendamiento + embudo de reseñas. Entrega en 5–7 días.",
    },

    // ── 1. Hero ───────────────────────────────────────────────────────────────
    hero: {
      headline: {
        en: "Your front desk can't answer every call.\nYour website can.",
        es: "Tu recepcionista no puede contestar todas las llamadas.\nTu sitio web, sí.",
      },
      subheadline: {
        en: "The average dental practice misses 1 in 3 incoming calls. 40% of new patients call after hours. 86% who reach voicemail never call back.\n\nWe build the system that captures every new patient your team can't get to — 24/7, automatically.",
        es: "La clínica dental promedio pierde 1 de cada 3 llamadas entrantes. El 40% de los pacientes nuevos llaman fuera de horario. El 86% que llega al buzón de voz cuelga sin dejar mensaje.\n\nConstruimos el sistema que captura cada paciente nuevo que tu equipo no puede atender — las 24 horas, de forma automática.",
      },
      ctaPrimary: { en: "See the Package", es: "Ver el Paquete" },
      ctaSecondary: { en: "Book a 15-Min Call", es: "Agendar una Llamada de 15 Min" },
    },

    // ── 2. Pain Section ───────────────────────────────────────────────────────
    painSection: {
      heading: { en: "Sound familiar?", es: "¿Te suena familiar?" },
      bullets: [
        {
          en: "Your website hasn't been updated in years — and it shows",
          es: "Tu sitio web lleva años sin actualizarse — y se nota",
        },
        {
          en: "New patients Google you, can't find how to book, and leave",
          es: "Pacientes nuevos te buscan en Google, no encuentran cómo agendar, y se van",
        },
        {
          en: "Your front desk is handling insurance calls while a new patient goes to voicemail",
          es: "Tu recepcionista está en una llamada de seguro mientras un paciente nuevo llega al buzón de voz",
        },
        {
          en: "You have no idea how many leads your site generates each month",
          es: "No tienes idea de cuántos leads genera tu sitio cada mes",
        },
        {
          en: "Your Google reviews are stuck at 4.1 while the DSO down the street has 4.9 and 300+ reviews",
          es: "Tus reseñas de Google están en 4.1 mientras la cadena dental a dos cuadras tiene 4.9 y más de 300 reseñas",
        },
        {
          en: "Patients book appointments and don't show up — no reminders, no system",
          es: "Los pacientes agendan y no aparecen — sin recordatorios, sin sistema",
        },
      ],
      closingLine: {
        en: "You don't have a marketing problem. You have a systems problem.",
        es: "No tienes un problema de marketing. Tienes un problema de sistemas.",
      },
    },

    // ── 3. Offer ──────────────────────────────────────────────────────────────
    offer: {
      heading: {
        en: "New Patient Capture System",
        es: "New Patient Capture System",
      },
      subheading: {
        en: "The complete digital infrastructure for dental practices that are serious about growth.",
        es: "La infraestructura digital completa para clínicas dentales que van en serio con su crecimiento.",
      },
      badgeText: {
        en: "⚡ Founding Partner Rate — 3 spots only",
        es: "⚡ Founding Partner Rate — solo 3 cupos",
      },
      price: "$750 setup + $250/mo",
      regularPrice: "$1,500–$2,000 setup + $400/mo",
      offerCopy: {
        en: "\"You pay less. We earn proof.\"\n\nWe're taking 3 dental practices at a reduced rate in exchange for one thing: an honest 60-second video after launch — win or lose, your real words. No lock-in. No fine print. Just a fair trade.",
        es: "\"Tú pagas menos. Nosotros ganamos prueba.\"\n\nTomamos 3 clínicas a tarifa reducida a cambio de una sola cosa: un video honesto de 60 segundos tras el lanzamiento — ganes o pierdas, tus palabras reales. Sin permanencia. Sin letra pequeña. Un trato justo.",
      },
      deliveryTime: {
        en: "5–7 business days",
        es: "5–7 días hábiles",
      },
    },

    // ── 4. Includes ───────────────────────────────────────────────────────────
    includes: [
      {
        title: {
          en: "High-conversion website (up to 5 sections)",
          es: "Sitio web de alta conversión (hasta 5 secciones)",
        },
        description: {
          en: "Built around your high-margin services — Invisalign, implants, whitening, emergency dentistry. Designed to convert, not just look good. Mobile-first, sub-2s load time.",
          es: "Construido alrededor de tus servicios de alto margen — Invisalign, implantes, blanqueamiento, emergencias dentales. Diseñado para convertir, no solo para verse bien. Mobile-first, carga en menos de 2 segundos.",
        },
      },
      {
        title: {
          en: "AI receptionist — available 24/7",
          es: "Recepcionista de IA — disponible 24/7",
        },
        description: {
          en: "Answers the questions your front desk gets 20 times a day: insurance accepted, pricing, hours, what to expect on the first visit. When someone's ready to book, it sends them straight to your calendar. Configured to never discuss clinical matters — only logistics.",
          es: "Responde las preguntas que tu recepcionista recibe 20 veces al día: seguros aceptados, precios, horarios, qué esperar en la primera visita. Cuando alguien quiere agendar, lo lleva directo a tu calendario. Configurado para nunca abordar temas clínicos — solo logística.",
        },
      },
      {
        title: {
          en: "Online booking (Calendly / Cal.com)",
          es: "Agendamiento online (Calendly / Cal.com)",
        },
        description: {
          en: "Patients book their own appointment directly from your site — at 2am if they want. Syncs with your Google Calendar. No double-bookings, no back-and-forth.",
          es: "Los pacientes agendan directamente desde tu sitio — a las 2am si quieren. Se sincroniza con tu Google Calendar. Sin choques de horario, sin ida y vuelta.",
        },
      },
      {
        title: {
          en: "Appointment confirmation + 24h reminder (email)",
          es: "Confirmación de cita + recordatorio 24h (email)",
        },
        description: {
          en: "Automatic emails go out the moment someone books and again 24 hours before. Professional, branded, and sent from your own domain.",
          es: "Emails automáticos salen en el momento del agendamiento y 24 horas antes. Profesionales, con tu marca, enviados desde tu propio dominio.",
        },
      },
      {
        title: {
          en: "Instant lead alerts (email + SMS to your staff)",
          es: "Alertas instantáneas de leads (email + SMS a tu staff)",
        },
        description: {
          en: "The second a new patient fills out a form or requests a callback, your front desk gets notified. No more leads sitting unread in a contact form inbox.",
          es: "En el segundo que un paciente nuevo llena un formulario o solicita una llamada, tu recepcionista recibe la alerta. Sin leads abandonados en una bandeja de entrada olvidada.",
        },
      },
      {
        title: {
          en: "Google review funnel (post-visit)",
          es: "Embudo de reseñas Google (post-visita)",
        },
        description: {
          en: "24 hours after an appointment, an automatic email goes out. 4–5 stars → direct link to your Google profile. 1–3 stars → private feedback form straight to you. Protects your reputation. Grows your rating on autopilot.",
          es: "24 horas después de una cita, sale un email automático. 4–5 estrellas → link directo a tu perfil de Google. 1–3 estrellas → formulario privado directo a ti. Protege tu reputación. Hace crecer tu rating en automático.",
        },
      },
      {
        title: {
          en: "Lead capture forms — clean data, zero spam",
          es: "Formularios de captura de leads — datos limpios, sin spam",
        },
        description: {
          en: "Every visitor who doesn't book leaves their info. Name, phone, email, service of interest. Goes straight to your inbox — we never store patient data.",
          es: "Cada visitante que no agenda deja su información. Nombre, teléfono, email, servicio de interés. Va directo a tu bandeja — nunca almacenamos datos de pacientes.",
        },
      },
      {
        title: {
          en: "GA4 analytics setup",
          es: "Configuración de GA4",
        },
        description: {
          en: "Know exactly how many new patients came through your site this month. Which pages they visited. Where they dropped off. Real data to make real decisions.",
          es: "Sabe exactamente cuántos pacientes nuevos llegaron por tu sitio este mes. Qué páginas visitaron. Dónde se fueron. Datos reales para decisiones reales.",
        },
      },
      {
        title: {
          en: "Vercel deployment + domain configuration",
          es: "Deploy en Vercel + configuración de dominio",
        },
        description: {
          en: "Your site lives on enterprise-grade infrastructure. Fast everywhere. Never down.",
          es: "Tu sitio vive en infraestructura de nivel empresarial. Rápido en cualquier lugar. Sin caídas.",
        },
      },
    ],

    // ── 5. Excludes ───────────────────────────────────────────────────────────
    excludes: [
      {
        en: "Copywriting from scratch (you provide the text; we build around it)",
        es: "Redacción de textos desde cero (tú provees el texto; nosotros construimos)",
      },
      {
        en: "Brand identity or logo design",
        es: "Identidad de marca o diseño de logo",
      },
      {
        en: "More than 5 page sections",
        es: "Más de 5 secciones",
      },
      {
        en: "Google or Meta Ads management",
        es: "Gestión de Google Ads o Meta Ads",
      },
      {
        en: "SEO campaigns or content strategy",
        es: "Campañas de SEO o estrategia de contenido",
      },
      {
        en: "Storage or management of existing patient databases",
        es: "Almacenamiento o gestión de bases de datos de pacientes existentes",
      },
      {
        en: "Clinical chatbot responses (diagnoses, treatment recommendations)",
        es: "Respuestas clínicas del chatbot (diagnósticos, recomendaciones de tratamiento)",
      },
      {
        en: "Maintenance outside the retainer window",
        es: "Mantenimiento fuera de la ventana del retainer",
      },
    ],

    // ── 6. ROI Math ───────────────────────────────────────────────────────────
    roiMath: {
      heading: {
        en: "The math is simple.",
        es: "La matemática es simple.",
      },
      copy: {
        en: "One new patient captured = $4,500–$8,000 lifetime value.\nYour system costs $250/month.\n\nIf it brings in just one extra patient per month that would have otherwise gone to voicemail — it pays for itself 18x over.\n\nMost of our dental clients see their first captured lead within the first week of going live.",
        es: "Un paciente nuevo capturado = $4,500–$8,000 en valor de vida.\nTu sistema cuesta $250 al mes.\n\nSi trae aunque sea un paciente extra al mes que de otra forma hubiera llegado al buzón de voz — se paga solo 18 veces.\n\nLa mayoría de nuestros clientes dentales ven su primer lead capturado en la primera semana de lanzamiento.",
      },
      ctaText: {
        en: "Book a 15-Min Call to See If You Qualify",
        es: "Agenda una Llamada de 15 Min para Ver Si Calificas",
      },
    },

    // ── 7. Trust (Legal/Compliance) ───────────────────────────────────────────
    trust: {
      heading: {
        en: "Built with your compliance in mind.",
        es: "Construido pensando en tu cumplimiento legal.",
      },
      bullets: [
        {
          en: "We never store patient data — all leads go directly to your inbox",
          es: "Nunca almacenamos datos de pacientes — todos los leads van directo a tu bandeja",
        },
        {
          en: "Our AI assistant is configured to handle logistics only — never clinical questions",
          es: "Nuestro asistente de IA maneja solo logística — nunca preguntas clínicas",
        },
        {
          en: "SMS alerts include TCPA-compliant opt-in language",
          es: "Las alertas SMS incluyen lenguaje de consentimiento TCPA",
        },
        {
          en: "GA4 is configured without personally identifiable information",
          es: "GA4 configurado sin datos personales identificables",
        },
        {
          en: "You own everything — your domain, your data, your accounts",
          es: "Tú eres dueño de todo — tu dominio, tus datos, tus cuentas",
        },
      ],
      closingLine: {
        en: "We're not a HIPAA Business Associate. We're your marketing infrastructure provider.",
        es: "No somos un Business Associate bajo HIPAA. Somos tu proveedor de infraestructura de marketing.",
      },
    },

    // ── 8. FAQ ────────────────────────────────────────────────────────────────
    faq: [
      {
        question: {
          en: "Do I need to change my current website?",
          es: "¿Necesito cambiar mi sitio web actual?",
        },
        answer: {
          en: "No. We build you a new one as part of the package. Your old site can stay live until the new one is ready.",
          es: "No. Te construimos uno nuevo como parte del paquete. Tu sitio anterior puede quedarse activo hasta que el nuevo esté listo.",
        },
      },
      {
        question: {
          en: "Does the AI chatbot handle clinical questions?",
          es: "¿El chatbot de IA maneja preguntas clínicas?",
        },
        answer: {
          en: "No — and intentionally so. It's configured to answer scheduling and logistics questions only. For anything clinical, it redirects to your team. This keeps you protected legally.",
          es: "No — e intencionalmente. Está configurado para responder solo preguntas de logística y agendamiento. Para cualquier tema clínico, redirige a tu equipo. Esto te protege legalmente.",
        },
      },
      {
        question: {
          en: "What software does this integrate with?",
          es: "¿Con qué software se integra?",
        },
        answer: {
          en: "Calendly or Cal.com for scheduling, which syncs with Google Calendar. We don't integrate directly with Dentrix or Open Dental — your booking flows through the calendar, not your practice management software.",
          es: "Calendly o Cal.com para agendamiento, que sincroniza con Google Calendar. No integramos directamente con Dentrix u Open Dental — el agendamiento fluye a través del calendario.",
        },
      },
      {
        question: {
          en: "Is this HIPAA compliant?",
          es: "¿Es HIPAA compliant?",
        },
        answer: {
          en: "Our system doesn't store patient health information. Leads go directly to your email. We're a marketing infrastructure provider, not a healthcare data processor.",
          es: "Nuestro sistema no almacena información de salud de pacientes. Los leads van directo a tu email. Somos un proveedor de infraestructura de marketing, no un procesador de datos médicos.",
        },
      },
      {
        question: {
          en: "What do I need to provide to get started?",
          es: "¿Qué necesito proveer para empezar?",
        },
        answer: {
          en: "Your logo, brand colors, service list, and basic info about your practice. We handle everything else.",
          es: "Tu logo, colores de marca, lista de servicios e información básica de tu clínica. Nosotros manejamos todo lo demás.",
        },
      },
      {
        question: {
          en: "What happens after the 5–7 days?",
          es: "¿Qué pasa después de los 5–7 días?",
        },
        answer: {
          en: "You get a staging preview to review and approve. We go live after your sign-off. Then the $250/mo retainer covers infrastructure, AI API usage, and minor updates.",
          es: "Recibes un preview para revisar y aprobar. Publicamos después de tu aprobación. El retainer de $250/mes cubre infraestructura, uso de API de IA y actualizaciones menores.",
        },
      },
    ],

    // ── 9. Final CTA ──────────────────────────────────────────────────────────
    finalCta: {
      heading: {
        en: "3 spots. Fixed price. No surprises.",
        es: "3 cupos. Precio fijo. Sin sorpresas.",
      },
      copy: {
        en: "This isn't a discovery call where we pitch you for an hour. It's 15 minutes. You tell us about your practice. We tell you if we're a fit.\n\nIf yes — we start in 48 hours.",
        es: "No es una llamada de ventas de una hora. Son 15 minutos. Tú nos cuentas sobre tu clínica. Nosotros te decimos si somos el match correcto.\n\nSi sí — empezamos en 48 horas.",
      },
      ctaPrimary: {
        en: "Book Your 15-Min Call",
        es: "Agenda tu Llamada de 15 Min",
      },
      ctaSecondary: {
        en: "Or email us: jafeth@kvasirlabs.com",
        es: "O escríbenos: jafeth@kvasirlabs.com",
      },
    },
  },
];
