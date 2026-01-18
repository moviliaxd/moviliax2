# MOVILIAX - Next.js Edition

![MOVILIAX](https://img.shields.io/badge/MOVILIAX-Next.js%2016-00E0FF?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-100%25%20Operacional-success?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge)
![License](https://img.shields.io/badge/license-ISC-green?style=for-the-badge)

**La plataforma líder en movilidad e innovación en América Latina** - Completamente migrada de HTML estático a Next.js con email funcional (Resend), analytics (Google Analytics) y base de datos (Supabase).

## 🎯 Estado del Proyecto

✅ **100% FUNCIONAL** - Todas las características esenciales implementadas y operacionales.

### Características Completadas:
- ✅ Frontend responsivo con Tailwind CSS v4
- ✅ Newsletter funcional (Resend + Supabase)
- ✅ Google Analytics integrado
- ✅ API Routes para newsletter y contacto
- ✅ Lead scoring y dashboard administrativo
- ✅ SEO optimizado con sitemap dinámico
- ✅ Middleware para rutas protegidas
- ✅ Componentes accesibles y reutilizables

Ver detalles completos: [CHECKLIST_COMPLETO.md](CHECKLIST_COMPLETO.md)

## 🚀 Tech Stack

| Tecnología | Versión | Propósito |
|-----------|---------|----------|
| **Next.js** | 16.1 | Framework React con App Router |
| **TypeScript** | 5.9 | Tipado estático |
| **Tailwind CSS** | 4.1 | Estilos utility-first |
| **React** | 19.2 | UI library |
| **Supabase** | PostgreSQL | Base de datos |
| **Resend** | Email API | Envío de emails |
| **Google Analytics** | GA4 | Tracking |
| **Next-Auth** | 4.24 | Autenticación (fase futura) |

## 📁 Estructura del Proyecto

```
moviliax-nextjs/
├── app/                          # App Router (Next.js 16)
│   ├── api/                      # API Routes
│   │   ├── newsletter/route.ts   # ✅ Newsletter
│   │   ├── contact/route.ts      # ✅ Contacto
│   │   └── send-contact/route.ts # ✅ Email
│   ├── admin/                    # ✅ Dashboard protegido
│   │   └── leads/page.tsx        # Gestión de leads
│   ├── layout.tsx                # Root layout con GA
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Estilos globales
│   └── [páginas]/page.tsx        # Páginas estáticas
│
├── components/                   # Componentes reutilizables
│   ├── Header.tsx                # ✅ Menú responsivo
│   ├── Footer.tsx                # ✅ Footer
│   ├── NewsletterForm.tsx        # ✅ Newsletter funcional
│   ├── GoogleAnalytics.tsx       # ✅ GA tracking
│   └── ScrollToTop.tsx           # ✅ Botón flotante
│
├── lib/                          # Utilidades
│   ├── supabase.ts               # ✅ Cliente Supabase
│   └── analytics.ts              # ✅ GA eventos
│
├── docs/                         # Documentación
│   ├── ANALYTICS_SETUP.md
│   └── NEWSLETTER_SETUP.md
│
├── public/                       # Assets estáticos
├── .github/                      # GitHub
│   └── copilot-instructions.md   # ✅ Instrucciones para agentes IA
│
├── .env.example                  # ✅ Template variables
├── CHECKLIST_COMPLETO.md         # ✅ Verificación 100%
├── IMPLEMENTACION_COMPLETA.md    # Setup 3 fases
├── QUICK_START.md                # Guía rápida
└── FIXES.md                      # Correcciones aplicadas
```

## 🛠️ Instalación y Desarrollo

### Requisitos Previos
- **Node.js** 18.17+ 
- **npm** o **yarn**
- Variables de entorno configuradas (ver `.env.example`)

### Instalación

```bash
# Clonar repositorio
git clone https://github.com/tu-usuario/moviliax-nextjs.git
cd moviliax-nextjs

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
# Editar .env.local con tus valores reales
```

### Ejecutar en Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build para Producción

```bash
npm run build
npm start
```

### Linting

```bash
npm run lint
```

## 📊 Funcionalidades Principales

### 1️⃣ Newsletter (Totalmente Operacional)

```typescript
// Formulario en cualquier página
<NewsletterForm />

// Flujo:
// Usuario → Newsletter Form → POST /api/newsletter 
// → Validación → Supabase → Resend → GA Tracking
```

**Características:**
- ✅ Validación de email en client y server
- ✅ Verificación de duplicados
- ✅ Email de bienvenida automático
- ✅ Tracking de conversión en GA
- ✅ Almacenamiento en `newsletter_subscribers` tabla

### 2️⃣ Contacto con Lead Scoring

```typescript
// POST /api/contact
{
  "nombre": "Juan",
  "email": "juan@empresa.com",
  "empresa": "Tech Corp",
  "asunto": "partnership",
  "mensaje": "Queremos colaborar..."
}
```

**Características:**
- ✅ Scoring automático de leads
- ✅ Clasificación de prioridad (high/medium/low)
- ✅ Email de confirmación al usuario
- ✅ Notificación al equipo
- ✅ Dashboard en `/admin/leads`

### 3️⃣ Google Analytics

```typescript
import { trackEvent, trackNewsletterSubscription } from '@/lib/analytics'

// Eventos automáticos + personalizados
trackNewsletterSubscription(email)
trackArticleView('Título del artículo')
trackCTAClick('Suscribirse')
```

**Características:**
- ✅ Tracking automático de páginas
- ✅ Eventos personalizados
- ✅ Tiempo real disponible
- ✅ Conversiones medidas

### 4️⃣ Admin Dashboard

Acceso protegido en `/admin/leads` con:
- 📊 Estadísticas (total, nuevos, alta prioridad)
- 📋 Tabla de todos los contactos
- 🎨 Colores por prioridad
- 📧 Emails directos desde tabla

## 🔐 Configuración de Entorno

Crear `.env.local` basado en `.env.example`:

```env
# SUPABASE
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# RESEND (Email)
RESEND_API_KEY=re_...

# GOOGLE ANALYTICS
NEXT_PUBLIC_GA_ID=G-...

# ADMIN
ADMIN_TOKEN=tu_token_secreto

# BASE URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

Ver guías completas:
- [Google Analytics Setup](docs/ANALYTICS_SETUP.md)
- [Newsletter Setup](docs/NEWSLETTER_SETUP.md)

## 🎨 Paleta de Colores

Personalizada en `tailwind.config.js`:

```
🔵 Azul Profundo:    #0A0F2C
🔷 Cian Eléctrico:   #00E0FF
⚪ Gris Metálico:    #9CA3AF
🟣 Violeta Tech:     #6B46FF
⚫ Negro Carbón:     #0D0D0D
```

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel
```

**Configurar en Vercel:**
1. Agregar todas las variables de `.env.local` en Environment Variables
2. Conectar repositorio para CI/CD automático
3. Redeploy después de agregar variables

### Otros Proveedores

- **Netlify**: Soporta Next.js, seguir documentación oficial
- **Railway**: Soporta Node.js + PostgreSQL
- **DigitalOcean**: App Platform soporta Next.js

## 📚 Documentación Completa

- [CHECKLIST_COMPLETO.md](CHECKLIST_COMPLETO.md) - Verificación de todas las features
- [QUICK_START.md](QUICK_START.md) - Guía rápida 5 minutos
- [IMPLEMENTACION_COMPLETA.md](IMPLEMENTACION_COMPLETA.md) - Setup detallado
- [docs/ANALYTICS_SETUP.md](docs/ANALYTICS_SETUP.md) - Google Analytics paso a paso
- [docs/NEWSLETTER_SETUP.md](docs/NEWSLETTER_SETUP.md) - Resend + Supabase
- [.github/copilot-instructions.md](.github/copilot-instructions.md) - Instrucciones para agentes IA

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 🔗 Enlaces Útiles

- 🌐 **Dominio Principal:** https://moviliax.lat
- 🌐 **Dominio Secundario:** https://moviliax.online
- 📊 **Google Analytics:** https://analytics.google.com
- 💾 **Supabase:** https://supabase.com
- 📧 **Resend:** https://resend.com

## 📞 Soporte y Contacto

- 📧 Email: moviliaxdigital@gmail.com
- 🐦 Twitter: @MoviliaxD54988
- 🔗 LinkedIn: [MOVILIAX](https://linkedin.com/company/moviliax)

## 📄 Licencia

Este proyecto está bajo la licencia ISC. Ver [LICENSE](LICENSE) para más detalles.

---

## ✨ Agradecimientos

- [Next.js](https://nextjs.org) - Framework excelente
- [Vercel](https://vercel.com) - Deploy y hosting
- [Tailwind CSS](https://tailwindcss.com) - Estilos utility-first
- [Supabase](https://supabase.com) - PostgreSQL en la nube
- [Resend](https://resend.com) - Email API
- Comunidad de Next.js y React

---

**Made with ❤️ by HLG Innovación Digital**

**MOVILIAX - El Futuro de la Movilidad en Movimiento** 🚀
