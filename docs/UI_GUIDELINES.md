# Guía de Diseño Visual — Studio Dark Premium

## 1. Estética Visual

- **Tema:** Dark Studio (estilo Vercel / Linear), fijo — sin toggle de light mode en V1.
- **Fondo Base:** `bg-zinc-950`
- **Tarjetas / Elevación:** `bg-zinc-900/50` con bordes `border-zinc-800`
- **Acento Primario:** `emerald-500` / `emerald-400` (acción, ROI, precisión)
- **Acento Secundario:** `indigo-500` (hover / glow sutil)
- **Texto principal:** `zinc-100` — nunca negro puro (`#000000`).
- **Texto secundario/muted:** `zinc-400` / `zinc-500`

## 2. Tipografía

- Fuente técnica/moderna (ej. Inter o Space Grotesk para headings, Inter para body) —
  transmite precisión de ingeniería, no plantilla genérica de agencia.
- Jerarquía clara: H1 Hero grande y contundente, H2 de sección con peso medio, body
  legible en `zinc-400` sobre fondo oscuro.

## 3. Animaciones React Bits Integradas (máximo 2-3 efectos signature)

- **Hero Title:** `SplitText` o `DecryptedText` para una entrada cibernética y profesional.
- **Cards de Featured Case Study / Servicios:** `SpotlightCard` (luz que sigue al cursor
  en desktop; en móvil se desactiva o se reemplaza por un estado estático).
- **CTA principal del Hero:** `MagnetButton` (efecto magnético al acercar el cursor).
- **Badge de disponibilidad:** `ShinyText` para resaltar ("Currently taking 2 new
  projects this month").
- **Todo lo demás:** sobrio, sin animación decorativa adicional — evitar que el sitio se
  sienta "template de Behance". Menos es más.
- **Obligatorio:** respetar `prefers-reduced-motion: reduce` en cada efecto.

## 4. Formato de Proyectos — dos niveles (ver `ARCHITECTURE_RULES.md` sección 2)

Ambos niveles comparten el mismo copy estructural: 🚨 Problema → ⚙️ Arquitectura →
📈 Resultado. Solo cambia el tratamiento visual.

### 4.1 Featured Case Study (`featured: true`) — Meniva empieza aquí

Tratamiento grande, casi una mini-landing dentro de la página:

- Imagen de portada grande (`priority` en next/image).
- Título + categoría + badge de estado (ej. "Live Product").
- 3 bloques Problem/Solution/Result en grid, con más espacio y texto más largo que en
  la card estándar.
- Métricas destacadas en números grandes si existen (`ProjectMetric[]`).
- Botón "Ver Demostración Técnica" / link a `liveUrl` o `loomUrl`.
- Tech stack tags visibles.

```tsx
// Estructura conceptual (ejemplo con Meniva)
<SpotlightCard className="p-6 bg-zinc-900/60 border border-zinc-800 rounded-2xl">
  <div className="flex items-center gap-2 mb-4">
    <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-mono rounded-full border border-emerald-500/20">
      Case Study — Multi-Tenant SaaS
    </span>
  </div>

  <h3 className="text-2xl font-bold text-zinc-100 mb-2">{project.title}</h3>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
    <div className="p-4 bg-zinc-950/50 rounded-xl border border-zinc-800/80">
      <span className="text-red-400 font-semibold text-sm flex items-center gap-1 mb-1">
        🚨 The Problem
      </span>
      <p className="text-xs text-zinc-400">{project.problem}</p>
    </div>

    <div className="p-4 bg-zinc-950/50 rounded-xl border border-zinc-800/80">
      <span className="text-indigo-400 font-semibold text-sm flex items-center gap-1 mb-1">
        ⚙️ The Solution
      </span>
      <p className="text-xs text-zinc-400">{project.solution}</p>
    </div>

    <div className="p-4 bg-zinc-950/50 rounded-xl border border-zinc-800/80">
      <span className="text-emerald-400 font-semibold text-sm flex items-center gap-1 mb-1">
        ⚡ The Result
      </span>
      <p className="text-xs text-zinc-400">{project.result}</p>
    </div>
  </div>

  <div className="flex items-center justify-between pt-2">
    <button className="text-xs text-zinc-300 flex items-center gap-2 hover:text-white transition-colors">
      <span>View Technical Demo</span> →
    </button>
  </div>
</SpotlightCard>
```

### 4.2 Project Grid Card (`featured: false`)

Versión condensada del mismo formato, para proyectos nuevos o sin métricas fuertes
todavía:

- Imagen de portada más pequeña (aspect ratio fijo, ej. 16:9).
- Título + categoría (`web` / `app` / `saas` / `platform` como badge).
- Los 3 bloques Problem/Solution/Result en versión de 1-2 líneas cada uno (no el
  párrafo completo del featured).
- Sin métricas grandes — solo tech stack tags.
- Grid responsivo: 1 columna en móvil, 2 en tablet, 3 en desktop.

## 5. Servicios — Cards de Pricing (Founding Client Offer)

- Cada uno de los 3 paquetes en su propia card, mismo ancho, mismo formato.
- Precio regular visible pero secundario (tachado o en `zinc-500`, tamaño menor).
- Precio "founding client" destacado en `emerald-400`, tamaño grande.
- Badge de urgencia real: "X spots left at this rate" — nunca inventar el número.
- Condición del founding price visible pero no intrusiva (texto pequeño debajo del
  precio, ej. "Includes a 60-second video testimonial after delivery").
- Lista de "Incluye" con check ✅ y "No incluye" con ✕ en `zinc-500`, para manejar
  expectativas desde el principio.
- CTA de cada card lleva directo al formulario de contacto con el servicio
  pre-seleccionado.

## 6. Estados de carga y error (obligatorio en toda operación async)

- **Loading:** skeletons con `bg-zinc-800/50 animate-pulse` — nunca un spinner genérico
  sin contexto. El formulario de contacto muestra el botón en estado "Sending..." con
  el texto del botón cambiado, no un overlay separado.
- **Success:** mensaje claro en el mismo espacio del formulario (no un modal aparte),
  con ícono de check y el mensaje "Thanks — we'll reply within 24 hours."
- **Error:** mensaje específico si es posible (ej. error de validación de Zod por
  campo) o genérico "Something went wrong. Please try again or email us directly at
  [email]" si es error de servidor.

## 7. Responsive — breakpoints

- Mobile-first siempre. Breakpoints estándar de Tailwind: `sm` 640px, `md` 768px,
  `lg` 1024px, `xl` 1280px.
- Featured Case Study: en móvil, el grid de 3 columnas Problem/Solution/Result pasa a
  1 columna apilada.
- Nav: en móvil colapsa a menú hamburguesa; el selector de idioma se mantiene visible
  siempre (no se esconde dentro del menú).

## 8. Formato Único de Proyectos — resumen de la regla

Cada proyecto no se muestra solo con una captura, sino con el formato de 3 bloques
(Problema / Arquitectura / Resultado), en el nivel de detalle correspondiente a si es
`featured` o no. Esta regla aplica a **todo** proyecto que se agregue, sin excepción —
sea web, app, SaaS o plataforma.
