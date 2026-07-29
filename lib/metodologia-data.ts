// ─────────────────────────────────────────────────────────────────────────────
//  METODOLOGÍA DATA LAYER
//  Agrega o modifica disciplinas aquí. Sin tocar ningún componente ni plantilla.
// ─────────────────────────────────────────────────────────────────────────────

export type BlockType =
  | "paragraph"
  | "heading2"
  | "heading3"
  | "callout"
  | "tools"
  | "list"
  | "highlight";

export interface ContentBlock {
  id: string;
  type: BlockType;
  content?: string;       // paragraph, heading2, heading3
  items?: string[];       // list
  tools?: string[];       // tools block
  calloutText?: string;   // callout body
  calloutSource?: string; // callout citation / source
  highlightLabel?: string;
  highlightText?: string;
}

export interface MetodologiaDiscipline {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  summary: string;
  tools: string[];
  readingTime: number; // minutes
  content: ContentBlock[];
}

// ── Dropdown nav structure ────────────────────────────────────────────────────
export const metodologiaCategories = [
  {
    title: "Conversión & Psicología",
    items: [
      {
        slug: "cro-psicologia-visual",
        name: "CRO & Psicología Visual",
        description: "Optimización de tasa de conversión con neurociencia aplicada.",
      },
      {
        slug: "investigacion-mapa-empatia",
        name: "Investigación & Mapa de Empatía",
        description: "Diagnóstico profundo del cliente ideal y sus sesgos de decisión.",
      },
    ],
  },
  {
    title: "Captación & Tráfico",
    items: [
      {
        slug: "seo-tecnico",
        name: "SEO Técnico & Posicionamiento",
        description: "Autoridad orgánica y visibilidad en búsquedas de alta intención.",
      },
      {
        slug: "publicidad-digital",
        name: "Publicidad Digital (Google & Meta)",
        description: "Paid media orientado a conversión y ROI medible desde el día 1.",
      },
    ],
  },
  {
    title: "Infraestructura & Ventas",
    items: [
      {
        slug: "desarrollo-web-performance",
        name: "Desarrollo Web & Performance",
        description: "Landing pages de alta velocidad orientadas a conversión.",
      },
      {
        slug: "metricas-negocio",
        name: "Métricas de Negocio & Medición",
        description: "CAC, LTV, tasas de cierre y auditoría completa del embudo.",
      },
    ],
  },
];

// ── Individual discipline data ────────────────────────────────────────────────
export const metodologiaData: MetodologiaDiscipline[] = [
  // ── 01: CRO & Psicología Visual ──────────────────────────────────────────
  {
    slug: "cro-psicologia-visual",
    title: "CRO & Psicología Visual",
    category: "Conversión & Psicología",
    categorySlug: "conversion-psicologia",
    summary:
      "La tasa de conversión no es magia: es el resultado directo de decisiones de diseño basadas en cómo el cerebro humano procesa la información. Aplicamos CRO (Conversion Rate Optimization) y patrones de psicología cognitiva para guiar al usuario hacia la acción de compra de forma deliberada y medible.",
    tools: ["Google Optimize", "Hotjar", "GA4", "Figma", "Microsoft Clarity"],
    readingTime: 8,
    content: [
      {
        id: "intro",
        type: "heading2",
        content: "¿Qué es CRO y por qué importa más que el tráfico?",
      },
      {
        id: "intro-p1",
        type: "paragraph",
        content:
          "La mayoría de las empresas invierten el 90% de su presupuesto en captar tráfico (Ads, SEO) y apenas el 10% en convertir ese tráfico en clientes. Es un error costoso. Duplicar la tasa de conversión de 1% a 2% tiene el mismo efecto económico que duplicar el tráfico, pero a una fracción del costo.",
      },
      {
        id: "callout-1",
        type: "callout",
        calloutText:
          "El 96% de los visitantes que llegan a un sitio web se van sin convertir. La pregunta no es cómo conseguir más tráfico, sino por qué ese tráfico no convierte.",
        calloutSource: "Econsultancy, Conversion Rate Optimization Report",
      },
      {
        id: "patron-visual",
        type: "heading2",
        content: "Patrones de escaneo visual: F-Pattern y Z-Pattern",
      },
      {
        id: "patron-visual-p",
        type: "paragraph",
        content:
          "Estudios de eye-tracking demuestran que los usuarios no leen las páginas web: las escanean. El F-Pattern aplica en páginas de mucho texto (blogs, listados), donde los ojos siguen una F: leen la primera línea completa, luego la segunda, luego bajan por el margen izquierdo. El Z-Pattern aplica en landing pages: los ojos van de izquierda a derecha, luego en diagonal hacia la izquierda, y luego de nuevo a la derecha. Diseñamos la jerarquía de información y la ubicación de CTAs respetando estos patrones.",
      },
      {
        id: "sesgos",
        type: "heading2",
        content: "Sesgos cognitivos que aplicamos deliberadamente",
      },
      {
        id: "sesgos-list",
        type: "list",
        items: [
          "Prueba social (Social Proof): testimonios, logos de clientes, contadores de resultados.",
          "Escasez y urgencia (Scarcity): plazas limitadas, disponibilidad por tiempo acotado.",
          "Efecto ancla (Anchoring): mostrar el precio más alto primero para que el siguiente parezca razonable.",
          "Reciprocidad: ofrecer algo de valor (diagnóstico gratuito) antes de pedir el contacto.",
          "Autoridad: certificaciones, casos de estudio con números reales, fotografías del equipo.",
          "Reducción de fricción: minimizar campos de formulario, eliminar distracciones de navegación.",
        ],
      },
      {
        id: "jerarquia",
        type: "heading2",
        content: "Jerarquía visual y arquitectura de la atención",
      },
      {
        id: "jerarquia-p",
        type: "paragraph",
        content:
          "Cada elemento de una página compite por la atención del usuario. La jerarquía visual establece qué ve primero (H1 grande y contrastado), qué ve segundo (beneficio principal o propuesta de valor), y qué ve tercero (CTA). Un error común es dar el mismo peso visual a todos los elementos. Aplicamos principios de contraste, tamaño, espacio negativo y color para crear una ruta de atención intencionada que lleve al usuario al botón de conversión.",
      },
      {
        id: "tools-cro",
        type: "tools",
        tools: ["Hotjar (mapas de calor)", "Microsoft Clarity (grabaciones)", "GA4 (eventos)", "Figma (diseño CRO)", "Google Optimize (A/B testing)"],
      },
      {
        id: "proceso",
        type: "heading2",
        content: "Nuestro proceso de optimización CRO",
      },
      {
        id: "proceso-list",
        type: "list",
        items: [
          "Auditoría inicial: análisis de mapas de calor, grabaciones de sesión y métricas de comportamiento.",
          "Identificación de friction points: dónde abandonan los usuarios y por qué.",
          "Hipótesis de mejora: formulamos hipótesis concretas basadas en datos, no en opiniones.",
          "Implementación y A/B testing: probamos las variantes contra el control.",
          "Análisis de resultados: validamos estadísticamente cuál variante gana.",
          "Iteración: aplicamos el aprendizaje y comenzamos el siguiente ciclo.",
        ],
      },
      {
        id: "highlight-cro",
        type: "highlight",
        highlightLabel: "Resultado demostrado",
        highlightText: "+83% de incremento en consultas calificadas tras optimizar la estructura del embudo y aplicar principios de CRO en una landing page del sector automotriz.",
      },
    ],
  },

  // ── 02: Investigación & Mapa de Empatía ──────────────────────────────────
  {
    slug: "investigacion-mapa-empatia",
    title: "Investigación & Mapa de Empatía",
    category: "Conversión & Psicología",
    categorySlug: "conversion-psicologia",
    summary:
      "Antes de gastar un solo peso en publicidad o diseño, necesitás saber exactamente quién es tu cliente ideal, qué piensa, qué siente, qué lo frena y qué lo impulsa a comprar. La investigación de mercado y el mapa de empatía son la base de toda estrategia de conversión efectiva.",
    tools: ["Typeform", "Google Forms", "Notion", "Miro", "SparkToro", "SimilarWeb"],
    readingTime: 7,
    content: [
      {
        id: "intro",
        type: "heading2",
        content: "Por qué la mayoría de las campañas fallan desde el principio",
      },
      {
        id: "intro-p",
        type: "paragraph",
        content:
          "El error más frecuente en marketing es crear anuncios o landing pages sin entender profundamente al cliente ideal. Se asume que el público es 'todo el mundo' o se define de forma superficial ('hombres de 25-45 años interesados en autos'). Esta falta de precisión resulta en mensajes que no conectan, leads no calificados y presupuesto desperdiciado.",
      },
      {
        id: "buyer-persona",
        type: "heading2",
        content: "Más allá del Buyer Persona: el Mapa de Empatía",
      },
      {
        id: "buyer-persona-p",
        type: "paragraph",
        content:
          "El Buyer Persona tradicional define datos demográficos (edad, género, ubicación). El Mapa de Empatía va más profundo: ¿qué piensa y siente el cliente? ¿qué ve en su entorno? ¿qué dice y hace? ¿qué escucha de su círculo? ¿cuáles son sus dolores reales y sus ganancias deseadas? Esta herramienta, desarrollada por XPLANE y popularizada por Alexander Osterwalder, permite construir mensajes que resuenan a nivel emocional con el cliente ideal.",
      },
      {
        id: "callout-empatia",
        type: "callout",
        calloutText:
          "Las personas no compran productos ni servicios. Compran mejores versiones de sí mismas. El marketing efectivo conecta el producto con la identidad que el cliente quiere proyectar.",
        calloutSource: "Seth Godin, This is Marketing",
      },
      {
        id: "jobs-to-be-done",
        type: "heading2",
        content: "Framework Jobs-to-be-Done (JTBD)",
      },
      {
        id: "jtbd-p",
        type: "paragraph",
        content:
          "El framework JTBD, desarrollado por Clayton Christensen, plantea que los clientes no compran productos: los 'contratan' para completar un trabajo funcional, emocional o social. Cuando una empresa entiende exactamente qué 'trabajo' está contratando su producto para hacer, puede ajustar su propuesta de valor, su mensaje y su oferta para ganar la decisión de compra en ese momento específico.",
      },
      {
        id: "proceso-investigacion",
        type: "heading2",
        content: "Nuestro proceso de investigación",
      },
      {
        id: "proceso-list",
        type: "list",
        items: [
          "Entrevistas cualitativas: conversaciones profundas con clientes actuales para entender su proceso de decisión.",
          "Análisis de reseñas de competidores: minería de datos en Google Reviews, Mercado Libre, foros para identificar dolores no resueltos.",
          "Encuestas de salida y post-compra: qué casi los hizo no comprar, qué los convenció finalmente.",
          "Análisis semántico de keywords: qué lenguaje usa el cliente al buscar soluciones.",
          "Mapa de la competencia: posicionamiento, mensajes y propuestas de valor del mercado.",
          "Value Proposition Canvas: mapeo de dolores, ganancias y trabajos del cliente vs. productos y servicios de la empresa.",
        ],
      },
      {
        id: "tools-investigacion",
        type: "tools",
        tools: ["Typeform (encuestas)", "Miro (mapas colaborativos)", "SparkToro (audiencias)", "SimilarWeb (análisis competidor)", "Google Keyword Planner"],
      },
    ],
  },

  // ── 03: SEO Técnico ───────────────────────────────────────────────────────
  {
    slug: "seo-tecnico",
    title: "SEO Técnico & Posicionamiento Orgánico",
    category: "Captación & Tráfico",
    categorySlug: "captacion-trafico",
    summary:
      "El SEO técnico es la base invisible que determina si Google puede rastrear, indexar y posicionar tu sitio. Sin una base técnica sólida, el contenido más brillante queda invisible. Combinamos SEO técnico, on-page y de autoridad para generar tráfico orgánico sostenible de alta intención de compra.",
    tools: ["Ahrefs", "Screaming Frog", "Google Search Console", "PageSpeed Insights", "Semrush"],
    readingTime: 10,
    content: [
      {
        id: "intro",
        type: "heading2",
        content: "Las tres dimensiones del SEO moderno",
      },
      {
        id: "intro-p",
        type: "paragraph",
        content:
          "El SEO no es solo escribir artículos con keywords. Es una disciplina técnica que combina tres dimensiones: SEO técnico (crawlability, indexación, Core Web Vitals), SEO on-page (estructura de contenido, intención de búsqueda, semántica) y SEO off-page (autoridad de dominio, backlinks, menciones). Las tres deben funcionar en conjunto para lograr posicionamiento sostenible.",
      },
      {
        id: "cwv",
        type: "heading2",
        content: "Core Web Vitals: el factor técnico que Google más valora",
      },
      {
        id: "cwv-p",
        type: "paragraph",
        content:
          "Desde 2021, Google incorporó los Core Web Vitals como factor de ranking. Miden la experiencia real del usuario: LCP (Largest Contentful Paint, velocidad de carga del elemento principal), FID/INP (interactividad y tiempo de respuesta a la primera interacción) y CLS (Cumulative Layout Shift, estabilidad visual). Un sitio lento no solo pierde posicionamiento, pierde conversiones: cada segundo adicional de carga reduce la tasa de conversión en un 7%.",
      },
      {
        id: "callout-seo",
        type: "callout",
        calloutText:
          "El primer resultado orgánico en Google recibe el 27.6% de todos los clics. El segundo recibe el 15.8%. La primera página captura el 95% del tráfico total. No estar en el top 3 es casi como no existir.",
        calloutSource: "Backlinko, Google Click-Through-Rate (CTR) Study",
      },
      {
        id: "intencion",
        type: "heading2",
        content: "Intención de búsqueda: el principio que todo lo gobierna",
      },
      {
        id: "intencion-p",
        type: "paragraph",
        content:
          "Google no rankea páginas; satisface intenciones. Cada búsqueda tiene una intención: informacional ('qué es el CRO'), navegacional ('Delanoe Growth contacto'), comercial ('mejor agencia marketing Neuquén') o transaccional ('contratar agencia Google Ads'). El contenido debe alinearse perfectamente con la intención detrás de cada keyword objetivo. Un blog post no compite con una landing page; cada formato sirve a una intención distinta.",
      },
      {
        id: "auditoria",
        type: "heading2",
        content: "Auditoría técnica SEO: qué analizamos",
      },
      {
        id: "auditoria-list",
        type: "list",
        items: [
          "Rastreo e indexación: robots.txt, sitemap.xml, errores 404, redirecciones incorrectas.",
          "Arquitectura de la información: estructura de URLs, breadcrumbs, jerarquía de páginas.",
          "Datos estructurados (Schema.org): LocalBusiness, FAQPage, Organization, BreadcrumbList.",
          "Velocidad de carga: LCP, INP, CLS, TTFB (Time to First Byte).",
          "Mobile-first: usabilidad en dispositivos móviles, viewport, tamaño de fuentes y botones.",
          "Contenido duplicado, thin content y canibalización de keywords.",
          "Perfil de backlinks: calidad, relevancia y toxicidad de los dominios enlazantes.",
        ],
      },
      {
        id: "tools-seo",
        type: "tools",
        tools: ["Ahrefs (keywords & backlinks)", "Screaming Frog (crawl)", "Google Search Console", "PageSpeed Insights", "Semrush (análisis competidor)"],
      },
    ],
  },

  // ── 04: Publicidad Digital ────────────────────────────────────────────────
  {
    slug: "publicidad-digital",
    title: "Publicidad Digital (Google & Meta Ads)",
    category: "Captación & Tráfico",
    categorySlug: "captacion-trafico",
    summary:
      "La publicidad digital bien ejecutada es el activo de crecimiento más rápido disponible para una empresa: permite captar clientes calificados en horas desde el lanzamiento. Pero mal ejecutada, es la forma más rápida de quemar presupuesto. La diferencia está en la estrategia, la segmentación y la optimización continua del embudo completo.",
    tools: ["Google Ads", "Meta Ads Manager", "Google Tag Manager", "GA4", "Looker Studio"],
    readingTime: 9,
    content: [
      {
        id: "intro",
        type: "heading2",
        content: "Google Ads vs. Meta Ads: cuándo usar cada plataforma",
      },
      {
        id: "intro-p",
        type: "paragraph",
        content:
          "La elección entre Google Ads y Meta Ads no es una preferencia: es una decisión estratégica basada en la etapa del embudo y la intención del usuario. Google Ads captura demanda existente: el usuario ya sabe que necesita algo y lo busca activamente. Meta Ads genera demanda latente: interrumpe al usuario con un mensaje relevante antes de que busque activamente. Ambas plataformas son complementarias y potentes, pero con distintos roles en el embudo.",
      },
      {
        id: "google-ads",
        type: "heading2",
        content: "Google Ads: captar la demanda en el momento exacto",
      },
      {
        id: "google-ads-p",
        type: "paragraph",
        content:
          "Las campañas de Search en Google Ads son la herramienta de conversión más directa que existe: el usuario escribe 'agencia de marketing digital Neuquén' con intención activa de contratar, y tu anuncio aparece primero. La clave está en la arquitectura de la campaña: grupos de anuncios ajustados por intención, keywords de concordancia exacta y de frase, extensiones de anuncio relevantes, quality score optimizado y una landing page que cumple exactamente lo que el anuncio promete.",
      },
      {
        id: "callout-ads",
        type: "callout",
        calloutText:
          "El ROAS (Return on Ad Spend) promedio de Google Ads es de $2 por cada $1 invertido. Las campañas bien optimizadas con landing pages específicas pueden superar el 5:1.",
        calloutSource: "Google Economic Impact Report",
      },
      {
        id: "meta-ads",
        type: "heading2",
        content: "Meta Ads: construir audiencias y generar intención",
      },
      {
        id: "meta-ads-p",
        type: "paragraph",
        content:
          "Facebook e Instagram permiten segmentación por intereses, comportamientos, demografía y audiencias lookalike (personas similares a tus mejores clientes). Son ideales para negocios con un producto visual, para generar reconocimiento de marca o para retargeting de visitantes del sitio web. La clave en Meta Ads es el creativo: el primer segundo del video o la imagen del carrusel determina si el usuario para el scroll o sigue pasando.",
      },
      {
        id: "funnel",
        type: "heading2",
        content: "El embudo completo de conversión en publicidad",
      },
      {
        id: "funnel-list",
        type: "list",
        items: [
          "TOFU (Top of Funnel): campañas de awareness para audiencias frías. Objetivo: reconocimiento y tráfico.",
          "MOFU (Middle of Funnel): campañas de consideración para usuarios que ya interactuaron. Objetivo: leads y registros.",
          "BOFU (Bottom of Funnel): campañas de conversión para usuarios con alta intención. Objetivo: contacto, compra o reunión agendada.",
          "Retargeting: reactivación de visitantes que no convirtieron, con mensajes personalizados según el punto del embudo donde abandonaron.",
        ],
      },
      {
        id: "metricas-ads",
        type: "heading2",
        content: "Métricas que miramos (y las que ignoramos)",
      },
      {
        id: "metricas-ads-p",
        type: "paragraph",
        content:
          "Ignoramos métricas de vanidad: impresiones, alcance, 'me gustas'. Optimizamos para métricas de negocio: CPL (costo por lead), calidad del lead (tasa de cierre), ROAS y CPA (costo por adquisición). Un lead que cuesta $5 pero no cierra vale menos que un lead que cuesta $50 y cierra al 40%.",
      },
      {
        id: "tools-ads",
        type: "tools",
        tools: ["Google Ads", "Meta Ads Manager", "Google Tag Manager", "GA4 (conversiones)", "Looker Studio (reporting)"],
      },
    ],
  },

  // ── 05: Desarrollo Web & Performance ─────────────────────────────────────
  {
    slug: "desarrollo-web-performance",
    title: "Desarrollo Web & Performance",
    category: "Infraestructura & Ventas",
    categorySlug: "infraestructura-ventas",
    summary:
      "Una landing page no es un sitio web. Es una herramienta de conversión con un único objetivo: convertir visitas en leads. La performance técnica (velocidad, Core Web Vitals, mobile-first) no es solo SEO: cada segundo de carga adicional reduce directamente la tasa de conversión. Construimos páginas que cargan rápido, convierten bien y escalan sin fricción.",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel", "Cloudflare"],
    readingTime: 8,
    content: [
      {
        id: "intro",
        type: "heading2",
        content: "Landing page vs página web; La diferencia es la conversión.",
      },
      {
        id: "intro-p",
        type: "paragraph",
        content:
          "Un sitio web corporativo tiene múltiples objetivos: informar, mostrar servicios, contar la historia de la empresa. Una landing page tiene un único objetivo: que el visitante realice UNA acción específica (dejar su contacto, agendar una llamada, solicitar un diagnóstico). Todo elemento de la página debe empujar hacia esa acción o debe eliminarse.",
      },
      {
        id: "velocidad",
        type: "heading2",
        content: "Velocidad de carga: el factor de conversión más ignorado",
      },
      {
        id: "velocidad-p",
        type: "paragraph",
        content:
          "Amazon calculó que cada 100ms de mejora en velocidad de carga se traduce en un 1% de incremento en ingresos. Google descubrió que una página que carga en 1 segundo convierte 3 veces más que una que tarda 5 segundos. En mobile, de donde proviene el 70%+ del tráfico, la velocidad es aún más crítica porque las conexiones son más lentas y la tolerancia del usuario es menor.",
      },
      {
        id: "callout-perf",
        type: "callout",
        calloutText:
          "53% de los usuarios abandona un sitio mobile que tarda más de 3 segundos en cargar. Y el 79% de ellos no regresa.",
        calloutSource: "Google, The State of Mobile Web 2023",
      },
      {
        id: "stack",
        type: "heading2",
        content: "Stack técnico y por qué lo elegimos",
      },
      {
        id: "stack-p",
        type: "paragraph",
        content:
          "Construimos con Next.js (React) por su capacidad de Server-Side Rendering (SSR) y Static Site Generation (SSG), lo que garantiza HTML pre-renderizado que Google puede indexar eficientemente y usuarios reciben con tiempo de carga mínimo. TypeScript para type-safety y mantenibilidad. Tailwind CSS para UI consistente sin CSS custom pesado. Vercel para despliegue en edge CDN global. Cloudflare para caché adicional y protección.",
      },
      {
        id: "estructura",
        type: "heading2",
        content: "Estructura de una landing page de alta conversión",
      },
      {
        id: "estructura-list",
        type: "list",
        items: [
          "Above the fold: propuesta de valor clara, CTA visible sin scroll, social proof inmediato.",
          "Sección de problema/solución: articular el dolor del cliente y posicionar el servicio como la solución.",
          "Prueba social: casos de estudio con métricas reales, testimonios, logos de clientes.",
          "Proceso/metodología: explicar cómo funciona para reducir incertidumbre y generar confianza.",
          "CTA secundario: para usuarios que necesitan más información antes de decidir.",
          "FAQ: eliminar las objeciones más frecuentes antes de que el usuario las piense.",
          "CTA final: repetir el llamado a la acción con un mensaje de urgencia o beneficio adicional.",
        ],
      },
      {
        id: "tools-dev",
        type: "tools",
        tools: ["Next.js 15 (SSR/SSG)", "TypeScript", "Tailwind CSS", "Vercel (edge deployment)", "Cloudflare (CDN & caché)"],
      },
    ],
  },

  // ── 06: Métricas de Negocio ───────────────────────────────────────────────
  {
    slug: "metricas-negocio",
    title: "Métricas de Negocio & Medición de Leads",
    category: "Infraestructura & Ventas",
    categorySlug: "infraestructura-ventas",
    summary:
      "No gestionás lo que no medís. La diferencia entre una agencia que 'hace marketing' y una que genera retorno de inversión es la capacidad de medir, atribuir y optimizar métricas de negocio reales: CAC, LTV, tasa de cierre, costo por lead calificado y velocidad del embudo comercial.",
    tools: ["GA4", "Looker Studio", "Google Tag Manager", "HubSpot", "Notion"],
    readingTime: 7,
    content: [
      {
        id: "intro",
        type: "heading2",
        content: "El problema del marketing que no se puede medir",
      },
      {
        id: "intro-p",
        type: "paragraph",
        content:
          "La mayoría de las agencias entrega reportes de 'impresiones', 'alcance' y 'engagement'. Son métricas de vanidad: no tienen correlación directa con las ventas. Nosotros construimos sistemas de medición que conectan cada actividad de marketing con su impacto real en la facturación del negocio.",
      },
      {
        id: "metricas-clave",
        type: "heading2",
        content: "Las métricas que realmente importan",
      },
      {
        id: "cac",
        type: "heading3",
        content: "CAC — Costo de Adquisición de Cliente",
      },
      {
        id: "cac-p",
        type: "paragraph",
        content:
          "El CAC es el costo total (inversión en ads + honorarios de agencia + tiempo del equipo de ventas) dividido por la cantidad de nuevos clientes adquiridos en un período. Es la métrica más importante para evaluar la eficiencia de un canal de marketing. Si tu CAC supera el LTV de un cliente, el negocio no es rentable a escala.",
      },
      {
        id: "ltv",
        type: "heading3",
        content: "LTV — Lifetime Value del Cliente",
      },
      {
        id: "ltv-p",
        type: "paragraph",
        content:
          "El LTV es el valor económico total que un cliente promedio genera durante toda su relación con el negocio. La regla general es que el LTV debe ser al menos 3 veces mayor que el CAC. Si es menor, el negocio gasta más en adquirir clientes de lo que gana con ellos. Aumentar el LTV (retención, upselling, frecuencia de compra) es tan importante como reducir el CAC.",
      },
      {
        id: "callout-metricas",
        type: "callout",
        calloutText:
          "La regla de oro: LTV / CAC > 3. Si el ratio es menor a 1, el modelo de adquisición es insostenible. Si es mayor a 5, hay oportunidad de escalar agresivamente el presupuesto de marketing.",
        calloutSource: "David Skok, For Entrepreneurs Blog — SaaS Metrics",
      },
      {
        id: "embudo",
        type: "heading2",
        content: "Auditoría del embudo: dónde se rompe el proceso",
      },
      {
        id: "embudo-list",
        type: "list",
        items: [
          "Tasa de clics (CTR): % de personas que ven el anuncio y hacen clic. Indica relevancia del anuncio.",
          "Tasa de conversión de landing: % de visitantes que completan el formulario. Indica efectividad de la página.",
          "Tasa de calificación de leads: % de leads que cumplen el perfil del cliente ideal.",
          "Tasa de contacto: % de leads con los que se logra hacer contacto.",
          "Tasa de apertura de pipeline: % de leads que aceptan una reunión o llamada.",
          "Tasa de cierre: % de oportunidades que se convierten en clientes pagos.",
          "Velocidad del embudo: tiempo promedio desde el primer contacto hasta el cierre.",
        ],
      },
      {
        id: "tracking",
        type: "heading2",
        content: "Sistema de tracking y atribución",
      },
      {
        id: "tracking-p",
        type: "paragraph",
        content:
          "Configuramos GA4 con eventos de conversión específicos (formulario enviado, página /gracias visitada, clic en WhatsApp), Google Tag Manager para gestión centralizada de tags sin modificar el código, y Looker Studio para dashboards ejecutivos que muestran el ROI de cada canal en tiempo real. La atribución correcta permite saber exactamente qué canal trae los mejores clientes, no solo los más baratos.",
      },
      {
        id: "tools-metricas",
        type: "tools",
        tools: ["GA4 (eventos y conversiones)", "Google Tag Manager", "Looker Studio (dashboards)", "HubSpot (CRM)", "Notion (tracking manual)"],
      },
    ],
  },
];
