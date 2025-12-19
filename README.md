# MOVILIAX - Next.js Edition

![MOVILIAX](https://img.shields.io/badge/MOVILIAX-Next.js-00E0FF?style=for-the-badge)
![Version](https://img.shields.io/badge/version-1.0.0-blue?style=for-the-badge)
![License](https://img.shields.io/badge/license-ISC-green?style=for-the-badge)

**La plataforma líder en movilidad e innovación en América Latina** - Ahora en Next.js

## 🚀 Tecnologías

- **Next.js 14+** - Framework React con App Router
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Diseño utility-first
- **React 18+** - UI library

## 📁 Estructura del Proyecto

```
moviliax-nextjs/
├── app/
│   ├── layout.tsx          # Layout principal
│   ├── page.tsx            # Página de inicio
│   └── globals.css         # Estilos globales
├── components/
│   ├── Header.tsx          # Header reutilizable
│   ├── Footer.tsx          # Footer reutilizable
│   └── NewsletterForm.tsx  # Formulario de newsletter
├── public/
│   └── images/             # Imágenes y assets
├── lib/                    # Utilidades y configuración
└── next.config.js          # Configuración de Next.js
```

## 🛠️ Instalación y Desarrollo

### Requisitos Previos
- Node.js 18.17 o superior
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone [url-del-repo]
cd moviliax-nextjs

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Scripts Disponibles

```bash
npm run dev      # Modo desarrollo
npm run build    # Build para producción
npm run start    # Iniciar servidor de producción
npm run lint     # Linter de código
```

## 🎨 Diseño y Colores

El proyecto utiliza la paleta de colores original de MOVILIAX:

- **Azul Profundo**: `#0A0F2C` - Color principal
- **Cian Eléctrico**: `#00E0FF` - Color de acento
- **Gris Metálico**: `#9CA3AF` - Texto secundario
- **Violeta Tech**: `#6B46FF` - Color complementario
- **Negro Carbón**: `#0D0D0D` - Fondos oscuros

## ✨ Características Implementadas

### ✅ Fase 1 Completada
- [x] Configuración base de Next.js + TypeScript
- [x] Integración de Tailwind CSS
- [x] Componentes reutilizables (Header, Footer)
- [x] Página principal (Home) migrada
- [x] Diseño responsive
- [x] Optimización de imágenes
- [x] SEO mejorado con metadata
- [x] Accesibilidad (skip to content, ARIA labels)

### 🔄 Próximas Fases

#### Fase 2: Funcionalidad Backend
- [ ] API Routes para newsletter
- [ ] Integración con servicio de email (Resend/SendGrid)
- [ ] Base de datos (Prisma + PostgreSQL)
- [ ] Google Analytics

#### Fase 3: Content Management
- [ ] Integración con CMS headless (Sanity)
- [ ] Sistema de artículos dinámico
- [ ] Páginas de artículos individuales
- [ ] Sistema de categorías y tags

#### Fase 4: Features Avanzadas
- [ ] Sistema de usuarios (NextAuth.js)
- [ ] MOVILIAX Connect funcional
- [ ] Dashboard de métricas
- [ ] Sistema de comentarios

## 🌐 Deploy

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Otras opciones
- Netlify
- Railway
- DigitalOcean App Platform

## 🔧 Configuración de Entorno

Crea un archivo `.env.local` para variables de entorno:

```env
# Base URL
NEXT_PUBLIC_BASE_URL=https://moviliax.com

# Analytics (Fase 2)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Email Service (Fase 2)
RESEND_API_KEY=your_api_key_here

# Database (Fase 2)
DATABASE_URL=postgresql://user:password@localhost:5432/moviliax
```

## 📚 Recursos

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de Tailwind CSS](https://tailwindcss.com/docs)
- [Documentación de TypeScript](https://www.typescriptlang.org/docs)

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push al branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

ISC © HLG Innovación Digital

## 👥 Equipo

Desarrollado por HLG Innovación Digital

---

**MOVILIAX** - El Futuro de la Movilidad en Movimiento 🚀
