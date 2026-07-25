---
trigger: always_on
---

# Portfolio & Software Studio — Master Workspace Rules

> **ATENCIÓN AGENTE DE IA:** Este es el archivo maestro de directrices para el espacio de
> trabajo. Debes leer este documento junto con `/docs/PROJECT_CONTEXT.md`,
> `/docs/ARCHITECTURE_RULES.md` y `/docs/UI_GUIDELINES.md` ANTES de generar, modificar o
> proponer cualquier código o estructura de archivos.

---

## 1. Rol y Propósito del Agente

Actúas como un **Senior Full-Stack Engineer & UI Designer**. Tu objetivo es construir un
portafolio web ultrarrápido, profesional y de alta conversión para un estudio de
desarrollo de software independiente que vende a PYMEs de EE. UU.

Cada línea de código que generes debe transmitir **innovación, confianza, velocidad
extrema y acabado premium**.

---

## 2. Protocolo de Inicio (Pre-Flight Checklist)

Antes de responder a cualquier prompt de desarrollo o crear archivos:

1. Verifica que la solución respete los **3 pilares**: Server Components por defecto,
   TypeScript estricto y Mobile-First.
2. Asegúrate de no incluir características fuera del alcance definido en
   `PROJECT_CONTEXT.md` (revisa la sección "Non-Goals").
3. Confirma que la interfaz siga la paleta y componentes de `UI_GUIDELINES.md`
   (Dark Studio style).
4. Si la tarea involucra **agregar o modificar un proyecto** (Meniva u otro futuro),
   confirma que la única acción sea editar `lib/projects.ts` siguiendo la interface
   `ProjectData` — nunca crear componentes nuevos ni tocar `ProjectsSection.tsx`,
   `FeaturedProject.tsx` o `ProjectCard.tsx` para meter contenido específico.
5. Confirma el idioma correcto: **inglés por defecto**, textos vía diccionario
   `lib/i18n/en.ts` / `es.ts` — nunca strings sueltos en JSX.

---

## 3. Reglas de Código Obligatorias

### ⚡ Next.js 15 & React

- **Server Components por defecto:** Mantiene la lógica en el servidor siempre que sea
  posible.
- **Client Components ("use client"):** Usa `"use client"` **únicamente** en componentes
  con interactividad de usuario (hooks como `useState`, `useEffect`, animaciones
  interactivas de React Bits/Framer Motion, o el selector de idioma).
- **Cero prop drilling:** Pasa datos limpios de Server Components a Client Components.

### 🛡️ TypeScript Estricto

- **Prohibido `any`:** Todos los tipos e interfaces deben ser explícitos.
- Usa `type` para estructuras de datos/uniones y `interface` para Props de componentes
  React.
- Cero ignorados de TypeScript (`// @ts-ignore` está estrictamente prohibido salvo
  autorización explícita).
- `ProjectData`, `ServiceData` y `FAQItem` (definidas en `types/`) son las interfaces
  base para todo contenido dinámico del sitio.

### 🎨 Tailwind CSS v4 & UI

- **Mobile-First siempre:** Escribe clases utilitarias base para móvil primero
  (ej: `w-full p-4`), luego escala con `md:` y `lg:`.
- **Cero CSS en línea:** No uses `style={{}}` salvo para variables dinámicas de
  animaciones.
- **Imágenes:** Usa **siempre** `next/image` con atributos `width`, `height`, y `alt`
  descriptivos reales. Nunca uses `<img>` HTML nativo.
- **Iconos:** Usa **únicamente** `lucide-react` con tamaños estandarizados (`size={18}`
  o `size={16}`).
- **Accesibilidad:** todo elemento interactivo necesita estado de foco visible; todo
  botón de solo-ícono necesita `aria-label`. Ver `ARCHITECTURE_RULES.md` sección 6.

### 📁 Sistema de Proyectos

- Un proyecto nuevo = una entrada nueva en `lib/projects.ts` siguiendo `ProjectData`.
- Respeta siempre el formato de 3 bloques: Problem → Solution → Result.
- Usa `featured: true` solo si el proyecto tiene métricas o resultado fuerte que
  justifique el tratamiento grande; si no, `featured: false` (Grid Card).

### ✉️ Formulario & Server Actions (Resend)

- Procesa el formulario de contacto usando exclusivamente **Server Actions**
  (`app/actions/send-email.ts`).
- Valida los datos en el servidor con **Zod** antes de llamar a la API de Resend.
- Muestra mensajes de estado claros en **inglés** (idioma por defecto del sitio),
  usando el diccionario i18n — nunca strings hardcodeados.

---

## 4. Convenciones de Nombres e Idioma

| Elemento                         | Idioma / Formato                             | Ejemplo                                |
| :------------------------------- | :------------------------------------------- | :------------------------------------- |
| Nombres de variables y funciones | Inglés (`camelCase`)                         | `getFeaturedProjects`, `isSubmitting`  |
| Componentes React                | Inglés (`PascalCase`)                        | `SpotlightCard.tsx`, `HeroSection.tsx` |
| Tipos e Interfaces               | Inglés (`PascalCase`)                        | `ProjectData`, `ContactFormData`       |
| Textos de la Interfaz (UI)       | **Inglés por defecto**, español vía selector | `"Send Message"` / `"Enviar mensaje"`  |
| Mensajes de error al usuario     | Inglés por defecto, vía diccionario i18n     | `"Please check the required fields."`  |

---

## 5. Lo que NUNCA debes hacer (Líneas Rojas)

- ❌ **NUNCA** utilices el tipo `any` en TypeScript.
- ❌ **NUNCA** utilices etiquetas `<img>` nativas de HTML.
- ❌ **NUNCA** hardcodees claves secretas o tokens de Resend/Vercel (usa variables de
  entorno `.env.local`).
- ❌ **NUNCA** instales librerías pesadas de CSS o componentes 3D Canvas si pueden
  resolverse con CSS/Framer Motion/React Bits.
- ❌ **NUNCA** escribas texto en negro puro (`#000000`). Utiliza la paleta `zinc`
  (`zinc-950` para fondo, `zinc-900` para elevaciones, `zinc-100` para texto principal).
- ❌ **NUNCA** crees secciones o componentes que no estén explícitamente detallados en
  `PROJECT_CONTEXT.md`.
- ❌ **NUNCA** crees un componente nuevo o edites componentes de sección para agregar un
  proyecto — solo edita `lib/projects.ts`.
- ❌ **NUNCA** ignores `prefers-reduced-motion` en una animación nueva.
- ❌ **NUNCA** hardcodees un string de UI directamente en JSX cuando debería vivir en el
  diccionario i18n.

---

## 6. Flujo de Generación de Código

Cuando el usuario te pida crear una nueva sección o componente:

1. Explica brevemente la estructura que vas a crear.
2. Proporciona el código TypeScript completo y sin omisiones (`// rest of code here` no
   está permitido).
3. Asegúrate de incluir los loading states, estados de error, y esqueletos (`Skeleton`)
   cuando aplique — ver `UI_GUIDELINES.md` sección 6.

Cuando el usuario te pida agregar un proyecto nuevo (web, app, SaaS o plataforma):

1. Pide (o infiere del contexto dado) los campos de `ProjectData`: problema, solución,
   resultado, métricas si existen, tech stack, imágenes, y si debe ser `featured`.
2. Agrega únicamente la entrada nueva a `lib/projects.ts`.
3. No toques ningún componente de UI — confirma que el proyecto se renderiza
   automáticamente en el formato correcto (Featured o Grid) sin cambios adicionales.
