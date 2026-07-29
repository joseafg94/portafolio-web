export const en = {
  hero: {
    badge: "Currently taking 2 new projects this month",
    title: "Full-stack engineering for US small businesses — without the agency price tag.",
    subtitle:
      "We're the team behind Meniva, a live multi-tenant SaaS platform. Now we build automation, dashboards, and MVPs for businesses like yours — delivered in weeks, not months.",
    ctaPrimary: "View Packages",
    ctaSecondary: "Book a 15-Min Call",
  },
  nav: {
    work: "Work",
    services: "Services",
    process: "How We Work",
    about: "About",
    contact: "Contact",
  },
  projects: {
    sectionTitle: "Featured Work & Case Studies",
    sectionSubtitle: "Engineered for speed, isolation, and real ROI.",
    caseStudyLabel: "Case Study —",
    problemLabel: "🚨 The Problem",
    solutionLabel: "⚙️ The Architecture",
    resultLabel: "⚡ The Result",
    viewDemo: "View Technical Demo",
  },
  services: {
    sectionTitle: "Services & Founding Partner Offers",
    sectionSubtitle: "Transparent, fixed-scope engineering packages.",
    foundingNotice: "Includes a 60-second video testimonial after delivery",
    spotsLeft: "spots left at early partner rate",
    spotsStatus: "{taken} taken. {remaining} remaining.",
    regularPrefix: "Reg:",
    deliveryPrefix: "Delivery:",
    includes: "What's included",
    excludes: "Not included",
  },
  contact: {
    sectionTitle: "Let's Build Something Fast",
    subtitle: "Have a project in mind or need technical advice? Fill out the form and we'll reply with a concrete proposal.",
    emailLabel2: "Email Us Directly",
    callLabel: "Prefer a video call?",
    callCTA: "Schedule a 15-min discovery call",
    formTitle: "Inquiry Received",
    selectPlaceholder: "Select a package",
    nameLabel: "Your Name",
    emailLabel: "Email Address",
    serviceLabel: "Service of Interest",
    messageLabel: "Project Details",
    submitButton: "Send Inquiry",
    sending: "Sending...",
    success: "Thanks — we'll reply within 24 hours.",
    error: "Something went wrong. Please try again or email us directly.",
  },
  process: {
    sectionTitle: "How We Work",
    sectionSubtitle: "No surprises. No scope creep. Just focused execution.",
    steps: [
      {
        number: "01",
        title: "Discovery Call",
        description: "We spend 30–45 minutes understanding your business, goals, and constraints. No sales pitch — just honest engineering talk about what's actually feasible.",
      },
      {
        number: "02",
        title: "Proposal & Contract",
        description: "You receive a fixed-scope proposal with clear deliverables, timeline, and price. We agree in writing before writing a single line of code.",
      },
      {
        number: "03",
        title: "Build",
        description: "We build in focused sprints with weekly check-ins. You see progress regularly via staging previews — no black boxes, no surprises at delivery.",
      },
      {
        number: "04",
        title: "Launch & Support",
        description: "We handle deployment, DNS, and go-live. Post-launch, we're reachable for the agreed support window to fix anything that needs attention.",
      },
    ],
  },
  about: {
    sectionTitle: "About the Studio",
    sectionSubtitle: "Built on real engineering, not agency overhead.",
    body: "We're a focused software studio built around one principle: ship production-grade software fast, without the bloat of a large agency. Our foundation is Meniva — a live, multi-tenant SaaS platform serving restaurant clients across Panama, built from the ground up with Next.js, Supabase, and a real-world multi-tenant architecture using Row Level Security.",
    bodyTwo: "That experience is what we bring to every project. Whether it's a business automation dashboard, an AI-powered lead engine, or a custom SaaS MVP, we approach your problem the same way: understand the system first, then engineer it properly.",
    tagline: "We're lean because we're engineers, not project managers.",
    stats: [
      { value: "1", label: "Live SaaS Product", sub: "Meniva in production" },
      { value: "5wk", label: "Fastest Delivery", sub: "Full SaaS MVP" },
      { value: "100%", label: "TypeScript", sub: "Strict mode, no any" },
      { value: "RLS", label: "Security Model", sub: "Supabase Row Level" },
    ],
  },
  techStack: {
    sectionTitle: "Our Stack",
    sectionSubtitle: "Production-tested. No reinventing the wheel.",
    descriptions: {
      "Next.js": "App Router, Server Components",
      "TypeScript": "Strict mode, zero `any`",
      "Tailwind CSS": "v4, utility-first styling",
      "Supabase": "Postgres, Auth, RLS, Realtime",
      "Vercel": "Edge deployment, analytics",
      "Resend": "Transactional email via API",
      "Framer Motion": "Production-grade animations",
      "Zod": "Runtime schema validation",
    },
  },
  faq: {
    sectionTitle: "Frequently Asked Questions",
    sectionSubtitle: "Straight answers. No fluff.",
    items: [
      {
        question: "How long does each type of project take?",
        answer: "Delivery times are fixed per package: the AI Lead Engine (Service 1) is 5–7 business days. The Business Process Automation & Dashboard (Service 2) takes 2–3 weeks. A Full-Stack SaaS MVP (Service 3) takes 3–5 weeks. These are working timelines, not rough estimates — we scope before we start so timelines are firm.",
      },
      {
        question: "How does payment work?",
        answer: "For Service 1 (AI Lead Engine): 50% upfront, 50% on delivery. For Service 2 (Automation Dashboard): 50/50 or 40/30/30 milestone structure. For Service 3 (SaaS MVP): 40/30/30 tied to project milestones. We accept bank transfer via Wise or Stripe. No full payment is ever required before we start.",
      },
      {
        question: "Do you work with clients outside the US?",
        answer: "Yes. Our target market is the US, but we work with clients globally. Communication is in English (or Spanish if preferred). We're based in Panama (UTC-5), which overlaps well with US time zones for calls and async work.",
      },
      {
        question: "What happens if I need changes outside the agreed scope?",
        answer: "Every project starts with a written scope document. If you request something outside it, we'll give you a clear estimate for the additional work and get your sign-off before starting. There are no surprise invoices. Scope changes are a normal part of software — we just handle them transparently.",
      },
      {
        question: "What if I'm not happy with the result?",
        answer: "We do weekly check-ins and share staging previews throughout the build — so there are no big-reveal surprises at the end. If something doesn't match the agreed spec, we fix it within the support window at no cost. We're invested in the relationship, not just the invoice.",
      },
    ],
  },
  footer: {
    privacy: "We only use your info to reply to your inquiry. No spam, no third-party sharing.",
    rights: "All rights reserved.",
  },
  nicheUi: {
    forPrefix: "For",
    sectionIncludes: "What's included",
    sectionExcludes: "What's NOT included",
  },
};

export type Dictionary = typeof en;
