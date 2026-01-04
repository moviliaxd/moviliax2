# MOVILIAX Next.js - Instrucciones para Agentes de IA

## 🎯 Resumen del Proyecto

**MOVILIAX** es una plataforma líder de movilidad en América Latina construida con **Next.js 16** (App Router), TypeScript, Tailwind CSS, y preparada para CMS Sanity. El proyecto conecta el ecosistema de movilidad urbana, vehículos eléctricos, y ciudades inteligentes en LATAM.

**Stack Actual:**
- **Next.js 16.1** (App Router) + TypeScript 5.9
- **Tailwind CSS 3.4** (utility-first con colores personalizados)
- **Supabase** (PostgreSQL) para newsletter_subscribers, leads
- **Resend** (email delivery para newsletter)
- **Google Analytics 4** (tracking GA_ID env var)
- **Next-Auth 4.24** (configurado pero sin activación)
- **Stripe** (checkout routes para futura monetización)
- **React 18.3** (con hooks y componentes funcionales)

---

## 📐 Arquitectura y Flujos de Datos

### Estructura de Carpetas (App Router de Next.js)
```
app/
├── layout.tsx              # Root layout (metadata, Header, Footer, GA)
├── page.tsx                # Homepage (estática)
├── globals.css             # Tailwind imports + custom fonts
├── api/                    # API Routes
│   ├── newsletter/route.ts      # POST suscripción → Supabase + Resend email
│   ├── contacto/route.ts        # Contacto (en desarrollo)
│   ├── send-contact/route.ts    # Envío email contacto
│   ├── auth/[...nextauth]/      # NextAuth endpoints
│   ├── checkout/route.ts        # Stripe checkout (futura)
│   └── [otros]/                 # Rutas de API diversas
├── contenido/              # Sección de artículos (EN DESARROLLO)
│   ├── page.tsx            # Lista de artículos (placeholder)
│   └── [slug]/             # Detalle artículo (cuando Sanity esté activo)
├── dashboard/              # Panel usuario (protegido)
├── admin/                  # Panel admin (protegido)
│   └── leads/[id]/route.ts # Gestión de leads
└── [páginas-estáticas]/    # acerca/, contacto/, glosario/, etc.

components/
├── Header.tsx              # 'use client' - menú responsive, scroll detector
├── Footer.tsx              # Navegación y links secundarios
├── NewsletterForm.tsx      # 'use client' - suscripción con validación
├── GoogleAnalytics.tsx     # Script GA4 en root
├── ScrollToTop.tsx         # Botón flotante
├── RegisterForm.tsx        # Registro de usuarios
├── ConnectForm.tsx         # Formulario conectar
└── [otros].tsx             # Componentes diversos

lib/
├── analytics.ts            # Funciones GA4 (trackEvent, trackNewsletterSubscription)
├── supabase.ts             # Cliente Supabase con service role
├── supabaseadmin.ts        # Admin Supabase (alias)
├── supabaseclient.ts       # Cliente Supabase (si aplica)
├── authOptions.ts          # Configuración NextAuth
└── [queries.ts]            # GROQ queries (cuando Sanity esté activo)

sanity/schemas/             # Esquemas de ejemplo (OPCIONAL - para futura implementación)
├── article.example.ts
├── author.example.ts
└── category.example.ts

public/
├── robots.txt              # SEO
├── images/                 # Activos estáticos
└── site.webmanifest        # PWA
```

### Flujos de Datos Clave

#### 1. **Newsletter (Formulario → Supabase + Email)**
```
NewsletterForm.tsx ('use client')
  ↓ (POST request)
/api/newsletter/route.ts
  ├→ Valida email con regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  ├→ Verifica duplicados en Supabase.newsletter_subscribers
  ├→ Inserta { email, status: 'active', source: 'website' }
  ├→ Envía email bienvenida con Resend
  ├→ Trackea evento GA4: trackNewsletterSubscription(email)
  └→ Retorna { success: true } o error con código HTTP
```

#### 2. **Contacto (Form → Email)**
```
Form ('use client')
  ↓
/api/contacto/route.ts o /api/send-contact/route.ts
  ├→ Valida datos (name, email, message)
  ├→ Envía vía Resend
  └→ Guarda en Supabase.leads (opcional)
```

#### 3. **Google Analytics (Cliente + Servidor)**
```
Root layout.tsx
  ├→ Carga GoogleAnalytics.tsx (GA4 script)
  └→ window.gtag disponible globalmente

Componentes 'use client'
  └→ Usan trackEvent() de lib/analytics.ts
```

#### 4. **Admin/Leads (Protegido por header)**
- Dashboard y admin routes pueden requerir auth futura
- Tabla `leads` en Supabase almacena contactos
- NextAuth configurado pero SIN rutas protegidas activas aún

---

## 🔧 Configuración Esencial

### Variables de Entorno (`.env.local`)
```env
# Supabase (público + privado)
NEXT_PUBLIC_SUPABASE_URL=https://[project].supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ... (solo servidor)

# Resend (privado)
RESEND_API_KEY=re_...

# Google Analytics (público)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# NextAuth (privado)
NEXTAUTH_SECRET=tu_secret_aqui
NEXTAUTH_URL=http://localhost:3000 (dev) / https://moviliax.lat (prod)

# Sanity (cuando esté activo)
NEXT_PUBLIC_SANITY_PROJECT_ID=tsyxjl86
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk_... (opcional, si necesitas escribir desde Next.js)

# Admin/Stripe
ADMIN_TOKEN=tu_token_secreto (si existe middleware.ts)
STRIPE_PUBLIC_KEY=pk_...
STRIPE_SECRET_KEY=sk_...
```

### TypeScript Config
- **Path alias**: `@/*` apunta a raíz (ej: `import { Header } from '@/components/Header'`)
- También configurados: `@/app/*`, `@/components/*`, `@/lib/*`, `@/types/*`, `@/public/*`
- **Strict mode**: activado (`"strict": true`)
- **JSX**: react-jsx

### Tailwind CSS v3.4
- **Colores personalizados** en `tailwind.config.js`:
  - `azul-profundo` (#0A0F2C) - Brand principal
  - `cian-electrico` (#00E0FF) - Acentos
  - `gris-metalico` (#9CA3AF)
  - `gris-oscuro` (#2D2D2D)
  - `negro-carbon` (#0D0D0D)
  - `violeta-tech` (#6B46FF)
- **Fuentes**: Exo 2 (headings `font-exo`), Inter (body `font-inter`)
- **Patrón**: Clases directas en className, NO CSS modules
- **Ejemplo**: `<div className="bg-azul-profundo text-cian-electrico">`

---

## 📝 Patrones y Convenciones CRÍTICOS

### 1. **Server vs Client Components (REGLA FUNDAMENTAL)**
- **Por defecto: Server Components** (mejor performance, cero JS cliente)
- **`'use client'`** SOLO para:
  - Interactividad: `useState`, `useEffect`, event listeners
  - Hooks de navegación: `useRouter`, `usePathname`, `useSearchParams`
  - Context API y providers
  - **Ejemplo**: `Header.tsx` (menú móvil), `NewsletterForm.tsx` (form submit)
  
- **NUNCA**: Importar Sanity client o hacer queries en 'use client'
  - Alternativa: Pasar datos como props desde server component padre

### 2. **API Routes Pattern (ESTRICTO)**
```typescript
// /api/[feature]/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // 1. PRIMERO: Validar env vars
    if (!process.env.VARIABLE_NAME) {
      return NextResponse.json({ error: 'Config error' }, { status: 500 })
    }
    
    // 2. Parsear y validar request
    const body = await request.json()
    if (!isValid(body)) {
      return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
    }
    
    // 3. Ejecutar lógica (DB, emails, etc.)
    // const result = await supabase.from('table').insert(...)
    
    // 4. Retornar respuesta
    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error('[FEATURE_NAME]', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
```

**Validaciones típicas en MOVILIAX:**
- Email: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Verificar duplicados antes de insertar
- HTTP status codes: `400` validation, `409` conflict, `500` server error

### 3. **Componentes Reutilizables**
- Guardar en `/components`
- Props **siempre tipadas** con TypeScript
- Usar **Tailwind classes** para estilos (sin CSS modules)
- Ejemplos existentes: `Header`, `Footer`, `NewsletterForm`

### 4. **Metadata y SEO**
Definir en `app/layout.tsx` (root):
```typescript
export const metadata: Metadata = {
  title: '...',
  description: '...',
  keywords: [...],
  openGraph: { ... },
  twitter: { ... },
}
```
Para páginas dinámicas, usar `generateMetadata()` en el page.tsx de esa ruta

### 5. **Analytics Tracking**
```typescript
// En componentes 'use client'
import { trackEvent, trackNewsletterSubscription } from '@/lib/analytics'

// Evento genérico
trackEvent('purchase', { category: 'membership', value: 99 })

// Evento específico newsletter
trackNewsletterSubscription('user@example.com')
```

Ver `lib/analytics.ts` para todas las funciones disponibles

---

## 🚀 Scripts y Workflow

### Desarrollo Local
```bash
npm run dev              # http://localhost:3000
npm run build           # Verificar build sin errores
npm start               # Servidor de producción local
npm run lint            # Validar código (ESLint + TypeScript)
```

### Deploy en Vercel
- **Automático**: Git push a rama main
- **Verificar**: Variables de entorno en Settings → Environment Variables
- **Post-deploy**: Revisar deployments y logs en Vercel dashboard
- Dominios: moviliax.lat, moviliax.online

---

## 🔌 Integraciones Externas (ESTADO ACTUAL)

| Servicio | Uso | Estado | Requisitos |
|----------|-----|--------|-----------|
| **Supabase** | Newsletter + Leads DB | ✅ Activo | URL, Service Role Key |
| **Resend** | Email delivery | ✅ Activo | API Key, dominio verificado |
| **Google Analytics** | Tracking eventos | ✅ Activo | GA_ID env var |
| **Sanity CMS** | Contenido dinámico | ⏳ EN DESARROLLO | Project ID, API token |
| **Next-Auth** | Autenticación | ⏳ CONFIGURADO | NEXTAUTH_SECRET |
| **Stripe** | Pagos | ⏳ FUTURO | Keys en env |

---

## ⚠️ Gotchas y Errores Comunes

| Problema | Causa Raíz | Solución |
|----------|-----------|----------|
| Email regex falla | Espacios o caracteres especiales | Usar `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` |
| Supabase 409 conflict | Email duplicado en BD | Verificar `SELECT * FROM newsletter_subscribers WHERE email = ...` |
| Newsletter endpoint 500 | RESEND_API_KEY o Supabase URL faltando | Verificar `.env.local` y vars en Vercel |
| Tailwind clases no aplican | Clases nuevas no en content path | Agregar ruta a `tailwind.config.js` content array |
| Script GA no carga | NEXT_PUBLIC_GA_ID undefined | Verificar variable env y redeploy en Vercel |
| Build falla con imports | Importar archivo que no existe | Verificar path alias en tsconfig.json |

---

## 📚 Documentación Complementaria (EN `/docs/`)

- **ANALYTICS_SETUP.md** - Google Analytics 4 configuración
- **NEWSLETTER_SETUP.md** - Resend + Supabase configuración  
- **SANITY_SETUP.md** - Sanity CMS setup (cuando se active)
- **AUDITORIA_COMPLETADA.md** - Auditoría de seguridad y mejoras
- **RESUMEN_FINAL.md** - Estado actual del proyecto

---

## 🎯 Tareas Comunes para Agentes

### ✅ Agregar Nueva Página Estática
1. Crear `app/[nombre-pagina]/page.tsx` como server component
2. Exportar `metadata` object con título, descripción
3. Agregar link en Header si aplica
4. Testear en local: `npm run dev`

### ✅ Crear Nueva API Route
1. Crear `app/api/[nombre]/route.ts`
2. Validar env vars al inicio
3. Parsear, validar request
4. Usar `supabase` o `resend` según corresponda
5. Retornar NextResponse con status apropiado
6. Loguear errores con `console.error('[FEATURE]', error)`

### ✅ Agregar Formulario (Client Component)
1. Crear `components/[NombreForm].tsx` con `'use client'`
2. Usar `useState` para form state
3. POST a `/api/[nombre]` con fetch
4. Trackear evento con `trackEvent()` en success
5. Manejo de errores con try/catch

### ✅ Modificar Estilo Global
1. Tailwind colors → editar `tailwind.config.js` extend.colors
2. Tailwind fonts → editar `tailwind.config.js` extend.fontFamily
3. CSS global → editar `app/globals.css`
4. NO crear CSS modules (usar Tailwind classes)

### ✅ Conectar a Sanity (Futuro)
1. Crear/copiar schemas de `sanity/schemas/*.example.ts` a Sanity Studio
2. Escribir GROQ queries en `lib/queries.ts`
3. Crear server component con `sanityFetch(query)` 
4. Pasar datos a client components como props
5. Agregar ruta dinámica en `app/contenido/[slug]/page.tsx`

