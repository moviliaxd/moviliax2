# MOVILIAX Next.js - Instrucciones para Agentes de IA

## 🎯 Resumen del Proyecto

**MOVILIAX** es una plataforma líder de movilidad en América Latina migrada de HTML estático a **Next.js 16** con TypeScript, Tailwind CSS v4 y arquitectura headless CMS (Sanity). El proyecto conecta el ecosistema de movilidad urbana, vehículos eléctricos, y ciudades inteligentes en LATAM.

**Stack Actual:**
- Next.js 16.1 + TypeScript 5.9
- Tailwind CSS 4.1 (utility-first)
- Sanity CMS (headless, production dataset: `tsyxjl86`)
- Supabase (PostgreSQL) para persistencia de datos
- Resend (email delivery)
- Next-Auth 4.24 (para autenticación futura)
- React 19.2

---

## 📐 Arquitectura y Flujos de Datos

### Estructura de Carpetas (App Router de Next.js)
```
app/
├── layout.tsx          # Root layout con SEO metadata, Header, Footer, Analytics
├── page.tsx            # Homepage
├── globals.css         # Tailwind + custom fonts
├── api/                # API Routes (backend)
│   ├── newsletter/route.ts      # POST: registra emails en Supabase
│   ├── contact/route.ts         # Contact form handling
│   └── send-contact/route.ts    # Email sending via Resend
├── contenido/          # Artículos dinámicos desde Sanity
│   ├── page.tsx        # Lista artículos
│   └── [slug]/page.tsx # Detalle artículo (SSR con Sanity)
├── admin/              # Panel administrativo protegido por middleware
│   └── leads/[id]/route.ts
└── [otras-rutas]/      # Páginas estáticas (acerca, contacto, glosario, etc.)

components/
├── Header.tsx          # 'use client' - menú responsive, scroll detection
├── Footer.tsx          # Navegación y enlaces secundarios
├── NewsletterForm.tsx  # Formulario con validación de email
├── GoogleAnalytics.tsx # Componente Script para GA
└── ScrollToTop.tsx     # Botón flotante

lib/
├── sanity.ts           # Cliente Sanity (createClient, imageBuilder)
├── sanityFetch.ts      # Funciones de queries GROQ
├── queries.ts          # GROQ queries reutilizables
├── supabase.ts         # Cliente Supabase (admin role)
└── analytics.ts        # Eventos personalizados GA

sanity/schemas/         # Esquemas de ejemplo (copiar a Sanity Studio)
├── article.example.ts
├── author.example.ts
└── category.example.ts
```

### Flujos de Datos Clave

#### 1. **Contenido Dinámico (Sanity → Next.js)**
- Sanity Studio almacena artículos, autores, categorías
- `lib/sanityFetch.ts` ejecuta queries GROQ en server components
- `app/contenido/[slug]/page.tsx` renderiza SSR artículos individuales
- Las imágenes se optimizan con `@sanity/image-url` + Next.js Image component

#### 2. **Newsletter (Client Form → Resend + Supabase)**
```
NewsletterForm (form POST)
  ↓
/api/newsletter/route.ts
  ├→ Valida email (regex)
  ├→ Verifica duplicados en Supabase
  ├→ Inserta en tabla newsletter_subscribers
  ├→ Envía email bienvenida con Resend
  └→ Trackea en Google Analytics
```

#### 3. **Admin/Leads (Protegido por Middleware)**
- `middleware.ts` verifica `x-admin-token` para rutas `/admin`
- Acceso solo si `ADMIN_TOKEN` env var coincide
- Tabla `leads` en Supabase almacena contactos

---

## 🔧 Configuración Esencial

### Variables de Entorno (`.env.local`)
```env
# Sanity CMS (público)
NEXT_PUBLIC_SANITY_PROJECT_ID=tsyxjl86
NEXT_PUBLIC_SANITY_DATASET=production

# Supabase (público + privado)
NEXT_PUBLIC_SUPABASE_URL=https://[project].supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ... (servidor)

# Resend (privado)
RESEND_API_KEY=re_...

# Google Analytics (público)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Admin (privado)
ADMIN_TOKEN=tu_token_secreto
```

### TypeScript Config
- **Path alias**: `@/*` apunta a raíz (ej: `import { Header } from '@/components/Header'`)
- **Strict mode**: activado
- **JSX**: react-jsx

### Tailwind CSS v4
- **Colores personalizados** definidos en `tailwind.config.js`:
  - `azul-profundo` (#0A0F2C)
  - `cian-electrico` (#00E0FF)
  - `gris-metalico` (#9CA3AF)
  - `violeta-tech` (#6B46FF)
  - `negro-carbon` (#0D0D0D)
- **Fuentes**: Exo 2 (headings), Inter (body)
- Usar clases en componentes: `className="bg-azul-profundo text-cian-electrico"`

---

## 📝 Patrones y Convenciones

### 1. **Server vs Client Components**
- **Por defecto: Server Components** (mejor performance)
- **`'use client'`** solo para:
  - Interactividad (useState, useEffect, event listeners)
  - Hooks de navegación (useRouter, usePathname)
  - Context API
  - Ejemplo: Header.tsx (menú móvil), NewsletterForm.tsx

### 2. **Importaciones Sanity en Server Components**
```typescript
// ✅ Correcto en page.tsx (server component)
import { sanityFetch } from '@/lib/sanityFetch'
const data = await sanityFetch(query)

// ❌ No usar Sanity client en 'use client' components
// En su lugar, pasar datos como props desde servidor
```

### 3. **API Routes Pattern**
```typescript
// /api/[feature]/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    // Validar env vars
    if (!process.env.VARIABLE_NAME) {
      return NextResponse.json({ error: '...' }, { status: 500 })
    }
    
    // Parsear request
    const body = await request.json()
    
    // Validar datos (email regex, etc.)
    if (!isValid(body)) {
      return NextResponse.json({ error: '...' }, { status: 400 })
    }
    
    // Ejecutar lógica (DB, email, etc.)
    // const result = await supabase.from('table').insert(...)
    
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('[API_ROUTE]', error)
    return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}
```

### 4. **Metadata y SEO**
Definir en `layout.tsx` raíz:
```typescript
export const metadata: Metadata = {
  title: '...',
  description: '...',
  openGraph: { ... },
  twitter: { ... },
}
```
Para páginas dinámicas, usar `generateMetadata()` en page.tsx

### 5. **Componentes Reutilizables**
- Guardar en `/components`
- Props tipadas con TypeScript
- Usar Tailwind para estilos (sin CSS modules a menos que sea necesario)
- Ejemplo: Header, Footer, NewsletterForm son reutilizados en todas las páginas

### 6. **Validación y Manejo de Errores**
- Email regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Verificar duplicados antes de insert
- Retornar códigos HTTP correctos (400 validation, 409 conflict, 500 server)
- Log con prefijo: `console.error('[FEATURE_NAME]', error)`

---

## 🚀 Scripts y Workflow

### Desarrollo Local
```bash
npm run dev              # http://localhost:3000
npm run build           # Build estático/SSR
npm start               # Servidor de producción
npm run lint            # ESLint + TypeScript check
```

### Deploy
- **Vercel** (recomendado): Git push automático CI/CD
- Requiere variables de entorno en Vercel dashboard
- Dominio: moviliax.lat, moviliax.online

---

## 🔌 Integraciones Externas

| Servicio | Uso | Configuración |
|----------|-----|--------------|
| **Sanity CMS** | Contenido dinámico (artículos) | Project ID: tsyxjl86, Dataset: production |
| **Supabase** | Base de datos PostgreSQL | Tabla: newsletter_subscribers, leads |
| **Resend** | Envío de emails | API key en env, dominio verificado |
| **Google Analytics** | Tracking de eventos | GA_ID en env, Componente Script |
| **Next-Auth** | Autenticación | Configurado pero no activado aún |

---

## ⚠️ Errores Comunes y Soluciones

| Problema | Causa | Solución |
|----------|-------|----------|
| `@import` must precede rules | Google Fonts después de Tailwind | Mover `@import url()` antes de `@import "tailwindcss"` |
| `images.domains deprecated` | Config antigua de Next.js | Usar `remotePatterns: [{ protocol, hostname }]` |
| Sanity hydration mismatch | Diferencia SSR/CSR | No usar dinámico en server components |
| Newsletter endpoint 500 | Env vars faltantes | Verificar RESEND_API_KEY y Supabase credentials |
| Middleware no protege /admin | Token header missing | Pasar `x-admin-token` en requests a /admin |

---

## 📚 Documentación Complementaria

- [CHECKLIST_COMPLETO.md](../CHECKLIST_COMPLETO.md) - Verificación de 100% de funcionalidades ✅
- [IMPLEMENTACION_COMPLETA.md](../IMPLEMENTACION_COMPLETA.md) - Setup detallado de 3 fases
- [docs/ANALYTICS_SETUP.md](../docs/ANALYTICS_SETUP.md) - Google Analytics
- [docs/NEWSLETTER_SETUP.md](../docs/NEWSLETTER_SETUP.md) - Resend + Supabase
- [docs/SANITY_SETUP.md](../docs/SANITY_SETUP.md) - Sanity Studio
- [FIXES.md](../FIXES.md) - Correcciones aplicadas

---

## 🎯 Tareas Frecuentes para Agentes

### ✅ Agregar Nueva Página Estática
1. Crear `app/[nombre-pagina]/page.tsx`
2. Agregar a Header menu links (si aplica)
3. Usar metadata para SEO

### ✅ Conectar Sanity para Artículos
1. Crear/actualizar schema en Sanity Studio
2. Escribir GROQ query en `lib/queries.ts`
3. Crear `app/contenido/[slug]/page.tsx` con `generateStaticParams()`
4. Usar `sanityFetch()` para obtener datos

### ✅ Crear Nueva API Route
1. Crear `app/api/[nombre]/route.ts`
2. Validar inputs, verificar env vars
3. Usar Supabase/Resend según corresponda
4. Retornar NextResponse con código HTTP apropiado

### ✅ Agregar Analytics
- Eventos ya disponibles en `lib/analytics.ts`
- Emitir con: `trackEvent('event_name', { param: value })`
- Ver `components/GoogleAnalytics.tsx` para setup

