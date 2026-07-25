# [NOMBRE AGENCIA] — Contexto Maestro del Portafolio

> ⚠️ Reemplazar `[NOMBRE AGENCIA]` en todo el proyecto una vez definido el nombre.

## 1. Qué es esto y para quién

Portafolio/landing de un software studio de 2 ingenieros full-stack (Panamá) que vende
automatización, web apps y MVPs a **pequeñas y medianas empresas de EE. UU.** Se presenta
como agencia/estudio unificado, sin exponer que son solo 2 personas.

**Prueba de fuego:** Meniva — SaaS multi-tenant de menús digitales QR, ya construido y en
producción. Es el primer caso de estudio y el molde que seguirán todos los futuros.

## 2. Posicionamiento (el ángulo)

> "Mismo nivel técnico que una agencia americana, a un 40–60% del costo — porque somos
> ingenieros full-stack con experiencia real en SaaS, no freelancers genéricos."

No se vende "somos baratos". Se vende **ROI y velocidad de entrega** (5 días a 5 semanas
según servicio), respaldado por un producto real ya funcionando.

**Público objetivo:** dueños de PYME en EE. UU. (5–50 empleados) — despachos legales,
clínicas dentales, gimnasios, contratistas, restaurantes, real estate — y founders de
startups que necesitan un MVP rápido.

## 3. Idioma

- **Inglés por defecto** (mercado es EE. UU.).
- Selector ES/EN visible en el nav — el español es secundario, para prospectos LATAM o
  founders hispanohablantes.
- Todo el copy debe escribirse primero en inglés natural (no traducción literal del
  español) — el mensaje debe sonar nativo, no traducido.

## 4. Estructura de secciones (orden final)

1. **Hero** — Headline + subheadline + CTA "Get a Quote" (form) + badge de disponibilidad
   ("Currently taking 2 new projects this month").
2. **Servicios (3 paquetes con Founding Client Pricing)** — ver sección 5.
3. **Work / Case Studies** — sistema escalable de proyectos (ver sección 6). Meniva
   aparece como **Featured Case Study**; los proyectos futuros entran al **Project Grid**.
4. **Cómo trabajamos (proceso, 4 pasos)** — Discovery Call → Proposal & Contract →
   Build → Launch & Support.
5. **Sobre nosotros** — presentado como estudio/agencia, breve, enfocado en experiencia
   técnica real y honestidad ("we're a lean team, that's why we're fast and affordable").
6. **Tech stack** — grid simple (Next.js, Supabase, Vercel, Tailwind, Resend, IA).
7. **FAQ** — mínimo: tiempos de entrega, forma de pago, trabajan con clientes fuera de
   EE. UU., qué pasa si necesito cambios.
8. **Contacto** — formulario (Resend) como CTA principal. Link a Calendly como opción
   secundaria, no compite en jerarquía visual con el formulario.
9. **Footer** — redes, disponibilidad, email de contacto, aviso corto de privacidad
   (ver sección 8).

## 5. Servicios y Pricing (mostrar precios fijos en el sitio)

Mostrar **ambos precios** por servicio como mecánica de "Founding Client Offer": precio
regular tachado o secundario, precio de fundador destacado, con la condición visible
("Includes a 60-second video testimonial after delivery") y cupos limitados
(ej. "3 spots left at this rate").

### Servicio 1 — AI Lead Engine & Growth Web Presence

- Precio regular: **$1,200–$1,800** setup + $300–$400/mes retainer
- Founding client: **$700–$800** setup + $250/mes retainer
- Entrega: 5–7 días hábiles · Pago: 50% inicio / 50% entrega
- Incluye: hasta 5 secciones, chatbot IA entrenado, agendamiento (Calendly/Cal.com),
  confirmaciones email/SMS, formulario de contacto, GA/Meta Pixel, deploy Vercel + dominio
- No incluye: copywriting desde cero, branding/logo, SEO avanzado, +5 secciones

### Servicio 2 — Business Process Automation & Operations Dashboard

- Precio regular: **$3,500–$4,800**
- Founding client: **$2,200–$2,500** · soporte opcional $250/mes
- Entrega: 2–3 semanas · Pago: 50/50 o 40/30/30
- Incluye: diagnóstico operativo, dashboard a medida (Next.js + Supabase), roles
  admin/staff, PDFs (cotizaciones/facturas), hasta 3 integraciones, migración desde
  Excel/CSV, 1 semana de soporte
- No incluye: +3 integraciones, mantenimiento fuera de la semana de soporte

### Servicio 3 — Full-Stack Custom Web App / SaaS MVP Launchpad

- Precio regular: **$6,000–$7,500**
- Founding client: **$3,200–$3,500**
- Entrega: 3–5 semanas · Pago: 40/30/30
- Incluye: auth + permisos, panel cliente + admin, hasta 5 módulos (ej. Stripe, reportes,
  archivos, 1 función IA), deploy Vercel, 2 semanas de soporte
- No incluye: app móvil nativa, branding kit, +5 módulos

> Nota de copy: la condición de "founding client" debe sentirse como trato justo, no como
> mendicidad — enmarcarlo como "early partner pricing" a cambio de ayudarnos a construir
> reputación.

## 6. Sistema de proyectos escalable (cómo se agregan Meniva y los futuros)

El portafolio está diseñado para crecer sin que cada proyecto nuevo implique tocar
componentes. Toda la lógica vive en **un solo archivo de datos** —
`lib/projects.ts` — que sigue el schema `ProjectData` definido en
`ARCHITECTURE_RULES.md`.

**Regla de oro:** agregar un proyecto nuevo (web, app, SaaS o plataforma) = agregar un
objeto nuevo al arreglo en `lib/projects.ts`. Nunca se crea un componente nuevo por
proyecto ni se edita `ProjectsSection.tsx` para "meter" el contenido a mano.

Dos formatos visuales posibles por proyecto, controlados por el campo `featured`:

- **Featured Case Study** (`featured: true`): tratamiento grande, casi mini-landing
  dentro de la página — screenshots grandes, métricas destacadas, video Loom si existe.
  Reservado para proyectos con resultados fuertes y medibles. Meniva empieza aquí.
- **Project Grid Card** (`featured: false`): tarjeta estándar en grid, mismo formato
  Problem → Architecture → Result pero condensado. Para proyectos nuevos o en etapa
  temprana, hasta que acumulen métricas suficientes para pasar a "featured".

Todo proyecto — sin importar el formato — respeta el mismo copy estructural:
🚨 Problema → ⚙️ Arquitectura/Solución → 📈 Resultado. Esto es innegociable, es la
identidad visual del portafolio.

## 7. Stack técnico

Next.js 15 (App Router, Server Components por defecto) · TypeScript estricto ·
Tailwind CSS v4 · React Bits + Framer Motion (uso moderado) · Resend + React Email +
Zod (Server Actions) · Vercel · Vercel Analytics.

## 8. CTA, formulario y privacidad

- **CTA #1 del sitio:** llenar formulario de contacto (no Calendly).
- Formulario captura: nombre, email, servicio de interés (los 3 paquetes), mensaje.
  Server Action con Zod, estados idle/loading/success/error en inglés.
- Sin base de datos pesada — todo vía Resend, 100% estático/SSR.
- Footer incluye una línea corta de privacidad: "We only use your info to reply to your
  inquiry. No spam, no third-party sharing." (cumple expectativa mínima de un visitante
  de EE. UU. sin necesitar página legal completa en V1).

## 9. SEO y descubrimiento

- Cada proyecto **featured** debería eventualmente tener su propia URL
  (`/work/[slug]`) generada estáticamente desde `lib/projects.ts` — mejora SEO y da un
  link compartible por proyecto. No es obligatorio en V1, pero el schema de datos debe
  soportarlo desde el día uno para no rehacer nada después (ver `slug` en
  `ARCHITECTURE_RULES.md`).
- Metadata (`title`, `description`, OG image) por página vía `generateMetadata` de
  Next.js — mínimo en Home y, si existen, en páginas de proyecto.
- `sitemap.xml` y `robots.txt` generados automáticamente (soporte nativo de Next.js 15).

## 10. Lo que NO construimos en V1 (Non-Goals)

- ❌ Blog / CMS complejo
- ❌ Base de datos pesada (los proyectos viven en `lib/projects.ts`, no en una DB)
- ❌ Animaciones 3D/WebGL pesadas
- ❌ Checkout de pago en el sitio (pagos se gestionan por fuera: Wise/Stripe)
- ❌ Mostrar que el equipo son solo 2 personas — se presenta como estudio
- ❌ Páginas individuales de proyecto (`/work/[slug]`) en la primera versión — el schema
  las soporta, pero se activan cuando haya 3+ proyectos que lo justifiquen

## 11. Pendientes a definir

- [ ] Nombre de la agencia (placeholder `[NOMBRE AGENCIA]` en todo el código)
- [ ] Dominio propio y email profesional (hola@dominio.com)
- [ ] Headline final del Hero (draft sugerido más abajo)
- [ ] Screenshots/video Loom de Meniva para el showcase
- [ ] Logos o testimonios de clientes (cuando existan, agregar sección de prueba social)

## 12. Headline draft para el Hero (punto de partida, iterar)

**H1:** "Full-stack engineering for US small businesses — without the agency price tag."
**Sub:** "We're the team behind Meniva, a live multi-tenant SaaS platform. Now we build
automation, dashboards, and MVPs for businesses like yours — delivered in weeks, not months."
**CTA:** "Get a Free Quote" → scrolls to / opens contact form.
