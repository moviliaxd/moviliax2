# MOVILIAX Next.js - Instrucciones para Agentes de IA

## 🎯 Resumen del Proyecto

**MOVILIAX** es una plataforma líder de movilidad en América Latina construida con **Next.js 16** (App Router), TypeScript y Tailwind CSS. El proyecto conecta el ecosistema de movilidad urbana, vehículos eléctricos, y ciudades inteligentes en LATAM.

**Stack Actual:**
- **Next.js 16.1** (App Router) + TypeScript 5.9 (strict mode)
- **React 18.3** (con hooks y componentes funcionales)
- **Tailwind CSS 3.4** (utility-first con 6 colores personalizados: azul-profundo, cian-electrico, gris-metalico, gris-oscuro, negro-carbon, violeta-tech)
- **Supabase** (PostgreSQL) para newsletter_subscribers, leads, y futuras tablas
- **Resend** (email delivery SMTP para newsletter y contacto)
- **Google Analytics 4** (GA_ID env var, con tracking automático)
- **Next-Auth 4.24** (configurado con NEXTAUTH_SECRET, sin rutas protegidas aún activas)
- **Stripe** (integración pagos, rutas creadas)

**Estado Operacional (2026):** ✅ 100% completo
- Newsletter: subscripción → Supabase + email Resend ✅
- Contacto: lead capture con scoring → admin dashboard ✅
- GA4: tracking automático + eventos personalizados ✅
- +40 páginas estáticas (movilidad, deep-tech, logística, etc.) ✅
- Admin leads: dashboard con estadísticas y filtros ✅



---

## 🎬 Actividades Principales para Agentes de IA

**Cuando trabajes en MOVILIAX, estas son las tareas más comunes:**

1. **Agregar nuevas páginas estáticas** → Copiar estructura de `app/[nombre]/page.tsx` con metadata
2. **Implementar formularios** → Crear `components/[NombreForm].tsx` ('use client') → API route → Supabase/Resend
3. **Conectar servicios externos** → Resend para emails, Supabase para datos, GA4 para tracking
4. **Mantener estilos** → Usar Tailwind con colores personalizados (azul-profundo, cian-electrico, etc.)
5. **Debugging** → Revisar `.env.local`, logs en `/api/[feature]`, verificar `npm run build`

**Archivos clave a revisar primero:**
- `app/layout.tsx` - Root layout con metadata y providers
- `app/api/newsletter/route.ts` - Patrón estándar API (validación → DB → email → GA)
- `components/Header.tsx` - Ejemplo componente 'use client' con hooks
- `lib/analytics.ts` - Funciones GA4 reutilizables
- `app/api/contacto/route.ts` - API más compleja con múltiples integraciones

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
└── authOptions.ts          # Configuración NextAuth

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
  

### 2. **API Routes Pattern (ESTRICTO)**
```typescript
// /api/[feature]/route.ts
// ESTRUCTURA EXACTA (ver app/api/contacto/route.ts como referencia)
import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

export const runtime = 'nodejs'           // ← SIEMPRE para rutas que usan Resend/Supabase
export const dynamic = 'force-dynamic'    // ← SIEMPRE para rutas con POST

export async function POST(request: NextRequest) {
  try {
    // 1. VALIDAR ENV VARS PRIMERO (líneas 1-25)
    const API_KEY = process.env.RESEND_API_KEY
    if (!API_KEY) {
      return NextResponse.json({ error: 'Config error' }, { status: 500 })
    }
    
    // 2. INICIALIZAR CLIENTES
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )
    
    // 3. PARSEAR Y VALIDAR REQUEST
    const body = await request.json()
    const { email } = body
    
    // Email regex es CRÍTICA: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Email inválido' }, { status: 400 })
    }
    
    // 4. DUPLICADOS CHECK (app/api/newsletter/route.ts línea 43)
    const { data: existing } = await supabase
      .from('newsletter_subscribers')
      .select('email')
      .eq('email', email)
      .single()
    
    if (existing) {
      return NextResponse.json(
        { error: 'Este email ya existe' }, 
        { status: 409 }  // Conflict, no 400
      )
    }
    
    // 5. OPERACIÓN PRINCIPAL (DB insert + email)
    const { error: dbError } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email, status: 'active', source: 'website' }])
    
    if (dbError) {
      console.error('[NEWSLETTER_ERROR]', dbError)
      return NextResponse.json({ error: 'DB error' }, { status: 500 })
    }
    
    // 6. RETORNAR SUCCESS
    return NextResponse.json({ success: true, message: 'Suscrito' }, { status: 200 })
    
  } catch (error) {
    console.error('[FEATURE_NAME]', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
```

**HTTP Status Codes (ESTRICTOS):**
- `200`: Success
- `400`: Validation error (email inválido, campo faltante)
- `409`: Conflict (email ya existe, duplicado)
- `500`: Server error (DB crash, API key faltante, Resend fail)

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

### Debugging Común
- **Newsletter no guarda**: Revisar `SUPABASE_SERVICE_ROLE_KEY` en `.env.local`
- **Email no envía**: Verificar `RESEND_API_KEY` y que el dominio esté verificado en Resend
- **GA no trackea**: Verificar `NEXT_PUBLIC_GA_ID` y que el script se cargue (DevTools → Network)
- **Error 409 (email duplicado)**: La validación en API comprueba `newsletter_subscribers.email`
- **Build falla**: Ejecutar `npm run lint` para detectar errores TypeScript
- **Componentes no renderean**: Usar `'use client'` si usan hooks, de lo contrario son server components por defecto

---

## 🧪 Testing en Local (Antes de Push)

### Checklist de Validación
1. **TypeScript sin errores**: `npm run lint` ✅
2. **Build completa**: `npm run build` ✅
3. **Server inicia**: `npm run dev` (verifica puerto 3000) ✅
4. **Componentes renderean**: Abrir navegador, inspeccionar sin JS errors
5. **API routes responden**: Usar Postman/curl a `http://localhost:3000/api/[feature]`
6. **Env vars cargadas**: DevTools → Network → Revisar headers y respuesta

### Comandos Útiles
```bash
# Verificar tipos TypeScript
npx tsc --noEmit

# Limpiar caché y rebuild
rm -r .next && npm run build

# Ejecutar en modo debug
NODE_OPTIONS='--inspect' npm run dev

# Revisar qué env vars se cargan
npm run dev 2>&1 | grep "NEXT_PUBLIC\|SUPABASE\|RESEND"
```



| Servicio | Uso | Estado | Requisitos |
|----------|-----|--------|-----------|
| **Supabase** | Newsletter + Leads DB | ✅ Activo | URL, Service Role Key |
| **Resend** | Email delivery | ✅ Activo | API Key, dominio verificado |
| **Google Analytics** | Tracking eventos | ✅ Activo | GA_ID env var |
| **Next-Auth** | Autenticación | ⏳ CONFIGURADO | NEXTAUTH_SECRET |
| **Stripe** | Pagos | ⏳ FUTURO | Keys en env |

---

## ⚠️ Gotchas y Errores Comunes

| Problema | Causa Raíz | Solución |
|----------|-----------|----------|
| **Email regex falla** | Espacios antes/después | Validar en client: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` (app/api/newsletter/route.ts, línea 31) |
| **Supabase 409 conflict** | Email duplicado | Query de check existe: `.select('email').eq('email', email).single()` retorna dato |
| **Newsletter endpoint 500** | Falta RESEND_API_KEY o URLs | Verificar 3 vars en .env.local: RESEND_API_KEY, SUPABASE_URL, SERVICE_ROLE_KEY |
| **Tailwind clases no aplican** | Clases nuevas en archivos nuevos | content array (tailwind.config.js) cubre `app/**` y `components/**` |
| **Script GA no carga** | NEXT_PUBLIC_GA_ID undefined o valor incorrecto | Verificar env var es `G-XXXXXXXXXX` (no UA-) y que GoogleAnalytics.tsx esté en ClientProviders |
| **Build falla con imports** | Rutas incorrectas o archivos faltantes | Verificar alias en tsconfig.json: `@/components/*`, `@/lib/*`, etc. |
| **Componentes 'use client' son lentos** | Demasiada lógica en client | Mover queries/fetches de BD a server components padre, pasar datos como props |
| **Supabase throws error en client** | Importar admin client fuera de servidor | Usar `lib/supabase.ts` (service role) SOLO en `/api`, nunca en componentes 'use client' |
| **Resend retorna 400** | Headers o estructura email mal | Verificar estructura en app/api/newsletter/route.ts línea ~75: `from`, `to`, `html` |
| **Middleware auth no protege ruta** | NextAuth headers no en lugar | Middleware no implementado aún - Las rutas `/admin` y `/dashboard` existen pero SIN protección activa |

---

## 📚 Documentación Complementaria (EN `/docs/`)

- **ANALYTICS_SETUP.md** - Google Analytics 4 configuración
- **NEWSLETTER_SETUP.md** - Resend + Supabase configuración  
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

