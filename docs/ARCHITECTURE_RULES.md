# Reglas de Arquitectura — Portfolio Studio

## 1. Next.js App Router & Componentes

- **Server Components por defecto:** Todo el layout, textos estáticos y estructura del
  portafolio se renderizan en el servidor.
- **Client Components ("use client"):** Exclusivamente para componentes interactivos de
  React Bits (Magnet, Spotlight), formularios de contacto, el selector de idioma, y
  cualquier interactividad visual que requiera hooks.

## 2. Sistema de Proyectos (Work / Case Studies)

Este es el corazón de la escalabilidad del portafolio. Toda la información de proyectos
vive en un único archivo tipado — nunca en componentes ni hardcodeada en JSX.

### 2.1 Ubicación

```
lib/
  projects.ts          -- Único lugar donde se agregan/editan proyectos
types/
  project.ts            -- Interface ProjectData
```

### 2.2 Interface obligatoria (`types/project.ts`)

```typescript
export type ProjectCategory = "web" | "app" | "saas" | "platform";
export type ProjectStatus = "live" | "in-progress" | "concept";

export interface ProjectMetric {
  label: string; // ej. "Menu update time"
  value: string; // ej. "< 3s"
}

export interface ProjectData {
  id: string; // slug único, ej. "meniva"
  slug: string; // usado para /work/[slug] cuando se active esa ruta
  title: string;
  category: ProjectCategory;
  status: ProjectStatus;
  featured: boolean; // true = Featured Case Study, false = Grid Card
  year: number;

  problem: string; // 🚨 El Problema
  solution: string; // ⚙️ La Arquitectura/Solución
  result: string; // 📈 El Impacto/Resultado

  metrics?: ProjectMetric[]; // opcional, solo si hay números reales
  techStack: string[]; // ej. ["Next.js", "Supabase", "Stripe"]

  images: {
    cover: string; // ruta en /public
    gallery?: string[];
  };

  liveUrl?: string;
  loomUrl?: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
  };
}
```

### 2.3 Reglas para agregar un proyecto nuevo

1. **Nunca** crear un componente nuevo por proyecto.
2. **Nunca** editar `ProjectsSection.tsx`, `FeaturedProject.tsx` o `ProjectCard.tsx`
   para meter contenido de un proyecto específico — esos componentes solo reciben
   `ProjectData` como props y renderizan lo que sea.
3. Agregar el objeto nuevo al arreglo exportado en `lib/projects.ts`, siguiendo
   exactamente la interface `ProjectData`.
4. Si `featured: true`, el componente `FeaturedProject` lo recoge automáticamente;
   si `featured: false`, cae en el grid estándar vía `ProjectCard`.
5. El orden de aparición lo determina el arreglo — el más reciente/relevante primero.
6. Las imágenes van en `/public/projects/[slug]/` y se referencian con `next/image`,
   nunca `<img>`.

### 2.4 Página individual de proyecto (`/work/[slug]`) — fase futura

El schema ya soporta generar rutas estáticas con `generateStaticParams` desde
`lib/projects.ts` cuando se decida activarlas. No implementar en V1, pero no romper
la estructura de datos que lo permite (mantener `slug` único y estable).

## 3. Formularios y Resend (Server Actions)

- Utilizar Server Actions (`app/actions/send-email.ts`) para procesar el formulario de
  contacto.
- Validación obligatoria de datos con Zod en el servidor antes de invocar la API de
  Resend.
- Respuestas en interfaz con estados claros: `idle`, `loading`, `success`, `error`
  (en inglés, dado que el idioma por defecto del sitio es inglés — usar el diccionario
  de textos, ver sección 7).
- El campo "servicio de interés" del formulario debe usar exactamente los nombres de
  los 3 paquetes definidos en `PROJECT_CONTEXT.md` sección 5.

## 4. TypeScript Estricto

- Prohibido el uso de `any`.
- Interfaces tipadas para las props de proyectos, servicios y componentes de animación.
- `ProjectData`, `ServiceData` y `FAQItem` son las tres interfaces base del contenido del
  sitio — todo el contenido dinámico pasa por alguna de ellas.

## 5. Rendimiento & Multimedia

- **Imágenes:** Usar `next/image` siempre con `priority` en el Hero y en la imagen de
  portada del Featured Case Study, y dimensiones explícitas.
- **Animaciones:** Lazy loading o carga diferida de efectos visuales pesados para
  garantizar 100/100 en Google Lighthouse (Core Web Vitals).
- **Accesibilidad de movimiento:** toda animación (React Bits o Framer Motion) debe
  respetar `prefers-reduced-motion: reduce` — proveer una versión estática/sin
  transición cuando el usuario lo tenga activado.

## 6. Accesibilidad (obligatorio, no opcional)

- Todo `<img>`/`next/image` requiere `alt` descriptivo real (no "imagen" o vacío).
- Botones con solo ícono (sin texto visible) requieren `aria-label`.
- Estados de foco visibles (`focus-visible`) en todos los elementos interactivos —
  nunca remover el outline sin reemplazo.
- Contraste de texto mínimo AA sobre `zinc-950`/`zinc-900` (validar acentos `emerald`
  e `indigo` sobre fondo oscuro).
- Formularios: labels asociados correctamente, mensajes de error anunciados
  (`aria-live="polite"` en el estado del formulario).

## 7. Internacionalización (i18n)

- Idioma por defecto: **inglés**. Selector ES/EN en el nav.
- Todos los textos de UI viven en diccionarios tipados (no strings sueltos en JSX):
  ```
  lib/i18n/en.ts
  lib/i18n/es.ts
  ```
- `ProjectData` (problem/solution/result) puede mantenerse solo en inglés en V1 si no
  hay tiempo de traducir cada caso de estudio — pero la estructura del diccionario debe
  dejar el campo listo para `es` cuando se traduzca.

## 8. SEO

- `generateMetadata` en cada página (mínimo Home) con `title`, `description`, y OG image.
- `sitemap.ts` y `robots.ts` nativos de Next.js 15 en `app/`.
- Si se activan páginas `/work/[slug]`, cada una genera su propio metadata desde
  `ProjectData`.

## 9. Analytics mínimo

- Vercel Analytics activado por defecto.
- Eventos a trackear (custom events simples, sin librería pesada):
  - Envío exitoso del formulario de contacto
  - Click en CTA principal del Hero
  - Click en "Ver demo" de un proyecto featured

## 10. Estructura de Archivos

```
app/
  actions/
    send-email.ts       -- Server Action para Resend
  work/
    [slug]/              -- Fase futura, no V1
      page.tsx
  components/
    ui/                  -- Botones, Cards, Inputs
    reactbits/            -- Componentes copiados de React Bits
    sections/              -- Hero, Projects, Services, Contact
lib/
  resend.ts              -- Cliente inicializado de Resend
  validations.ts          -- Esquemas Zod para formulario
  projects.ts             -- Datos de todos los proyectos (ProjectData[])
  services.ts              -- Datos de los 3 paquetes de servicio
  i18n/
    en.ts
    es.ts
types/
  project.ts
  service.ts
```
