# 📝 Guía de Configuración: Sanity CMS

## ✅ Archivos Creados

- ✅ `/lib/sanity.ts` - Cliente de Sanity configurado
- ✅ `/sanity/schemas/*.example.ts` - Schemas de ejemplo (artículos, autores, categorías)
- ✅ `/app/contenido/page.tsx` - Página de listado de artículos
- ✅ `/app/contenido/[slug]/page.tsx` - Página de artículo individual
- ✅ `package.json` - Dependencias agregadas

## 🚀 Configuración Paso a Paso

### PARTE 1: Crear Proyecto en Sanity

#### 1. Crear cuenta en Sanity

1. Ve a: https://www.sanity.io/
2. Clic en "Get started for free"
3. Regístrate con GitHub (recomendado) o email
4. Verifica tu cuenta

#### 2. Instalar Sanity CLI globalmente

```bash
npm install -g @sanity/cli
```

#### 3. Crear proyecto de Sanity Studio

```bash
# Navega a una carpeta aparte (NO dentro de tu proyecto Next.js)
cd ~/proyectos

# Crear nuevo proyecto de Sanity Studio
npx create-sanity@latest moviliax-studio

# Responde las preguntas:
# ✓ Create new project - Use Git credentials
# ✓ Project name: MOVILIAX Content
# ✓ Use the default dataset configuration? Yes
# ✓ Project output path: moviliax-studio
# ✓ Select project template: Clean project with no predefined schemas
# ✓ Package manager: npm
```

Esto creará:
- Un proyecto en sanity.io
- Una carpeta `moviliax-studio` con Sanity Studio

### PARTE 2: Configurar Schemas

#### 1. Copiar schemas de ejemplo

```bash
cd moviliax-studio

# Los schemas ya los creamos, ahora necesitas copiarlos:
# Copia el contenido de los archivos .example.ts del proyecto Next.js
# a la carpeta moviliax-studio/schemas/
```

#### 2. Crear archivo de índice de schemas

Crea `moviliax-studio/schemas/index.ts`:

```typescript
import article from './article'
import author from './author'
import category from './category'

export const schemaTypes = [article, author, category]
```

#### 3. Configurar sanity.config.ts

Edita `moviliax-studio/sanity.config.ts`:

```typescript
import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'MOVILIAX Content',

  projectId: 'tu-project-id', // LO OBTIENES DEL DASHBOARD
  dataset: 'production',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
```

#### 4. Ejecutar Sanity Studio

```bash
# Desde moviliax-studio/
npm run dev

# Se abrirá en http://localhost:3333
```

### PARTE 3: Obtener Credenciales

#### 1. Obtener Project ID

1. Ve a: https://www.sanity.io/manage
2. Selecciona tu proyecto "MOVILIAX Content"
3. Copia el **Project ID** (ejemplo: `abc12345`)

#### 2. Crear Token de API

1. En el dashboard del proyecto
2. API → Tokens
3. "Add API token"
4. Nombre: "MOVILIAX Production"
5. Permisos: "Editor" o "Viewer" (Editor si quieres escribir desde el sitio)
6. **COPIA EL TOKEN** (solo se muestra una vez)

#### 3. Configurar CORS

1. En el dashboard → API → CORS origins
2. "Add CORS origin"
3. Agregar:
   - `http://localhost:3000` (desarrollo)
   - `https://moviliax.lat` (producción)
   - `https://moviliax.online` (producción)
4. Allow credentials: ✓

### PARTE 4: Configurar Variables de Entorno

#### En .env.local (Local)

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=abc12345
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=sk_xxxxxxxxxxxx
```

#### En Vercel (Producción)

1. Vercel Dashboard → Tu Proyecto → Settings → Environment Variables
2. Agregar:

```
Name: NEXT_PUBLIC_SANITY_PROJECT_ID
Value: abc12345
Environments: ✓ Production ✓ Preview ✓ Development

Name: NEXT_PUBLIC_SANITY_DATASET
Value: production
Environments: ✓ Production ✓ Preview ✓ Development

Name: SANITY_API_TOKEN
Value: sk_xxxxxxxxxxxx
Environments: ✓ Production ✓ Preview ✓ Development
```

3. Redeploy

### PARTE 5: Crear Contenido de Prueba

#### 1. Crear Categorías

En Sanity Studio (http://localhost:3333):

1. Clic en "Categorías"
2. Create new
3. Crear estas categorías:
   - **Vehículos Eléctricos** (Color: #00E0FF)
   - **Ciudades Inteligentes** (Color: #6B46FF)
   - **Logística** (Color: #10B981)
   - **Startups** (Color: #F59E0B)
   - **Datos y Análisis** (Color: #EF4444)

#### 2. Crear un Autor

1. Clic en "Autores"
2. Create new
3. Datos de ejemplo:
   - **Nombre**: Equipo MOVILIAX
   - **Slug**: Generate from name
   - **Biografía**: "El equipo editorial de MOVILIAX trabaja para traerte las últimas tendencias y análisis sobre movilidad en América Latina."
   - **Rol**: Editor

#### 3. Crear tu Primer Artículo

1. Clic en "Artículos"
2. Create new
3. Datos de ejemplo:

```
Título: El Boom de los Vehículos Eléctricos en México: ¿Está el País Preparado?

Slug: boom-vehiculos-electricos-mexico

Autor: Selecciona el autor creado

Categorías: Vehículos Eléctricos

Fecha de Publicación: Hoy

Extracto: 
México se está convirtiendo en un hub regional para vehículos eléctricos. Con Tesla estableciendo presencia y nuevas marcas chinas entrando al mercado, analizamos si la infraestructura y políticas públicas están a la altura del desafío.

Contenido:
[Escribe aquí el contenido del artículo usando el editor rich text]

Artículo Destacado: ✓

Tiempo de Lectura: 8

SEO:
- Meta Title: El Boom de los EVs en México | MOVILIAX
- Meta Description: Análisis sobre el crecimiento de vehículos eléctricos en México, infraestructura, políticas públicas y el papel de Tesla.
- Keywords: vehículos eléctricos, México, Tesla, movilidad sustentable
```

4. Clic en "Publish"

### PARTE 6: Verificar Funcionamiento

#### 1. Probar en Local

```bash
cd moviliax-nextjs-new
npm run dev

# Abre http://localhost:3000/contenido
# Deberías ver tu artículo
```

#### 2. Verificar en Producción

Después del redeploy en Vercel:
- Ve a: https://moviliax.lat/contenido
- Deberías ver tus artículos publicados

## 📊 Uso del CMS

### Crear Nuevo Artículo

1. Abre Sanity Studio: http://localhost:3333
2. Artículos → Create new
3. Completa todos los campos
4. Clic en "Publish"
5. Espera ~30-60 segundos
6. Refresca tu sitio web

### Editar Artículo Existente

1. Sanity Studio → Artículos
2. Selecciona el artículo
3. Edita los campos necesarios
4. Clic en "Publish" (esquina inferior derecha)

### Gestionar Categorías

1. Sanity Studio → Categorías
2. Agrega, edita o elimina categorías
3. Los artículos se actualizan automáticamente

### Gestionar Autores

1. Sanity Studio → Autores
2. Agrega nuevos autores colaboradores
3. Asigna artículos a diferentes autores

## 🎨 Personalizar el Editor

### Agregar campos personalizados

Edita `moviliax-studio/schemas/article.ts`:

```typescript
{
  name: 'videoUrl',
  title: 'URL de Video (YouTube/Vimeo)',
  type: 'url',
},
{
  name: 'tags',
  title: 'Tags',
  type: 'array',
  of: [{type: 'string'}],
  options: {
    layout: 'tags',
  },
},
```

### Personalizar preview cards

```typescript
preview: {
  select: {
    title: 'title',
    author: 'author.name',
    media: 'mainImage',
    categories: 'categories',
  },
  prepare(selection) {
    const {author, categories} = selection
    const subtitle = [
      author && `por ${author}`,
      categories && `${categories.length} categorías`,
    ]
      .filter(Boolean)
      .join(' • ')

    return {
      ...selection,
      subtitle,
    }
  },
},
```

## 🚀 Deployment de Sanity Studio

### Opción 1: Vercel (Recomendado)

```bash
# En la carpeta moviliax-studio/
npm run build

# Deploy
npx vercel
```

Configura:
- Domain: `studio.moviliax.lat`
- Esto te dará acceso remoto al CMS

### Opción 2: Sanity Hosting

```bash
sanity deploy
```

Esto te da: `moviliax.sanity.studio`

## 📈 Features Avanzadas (Futuras)

### 1. Vista Previa en Tiempo Real

```typescript
// En tu componente de artículo
import { LiveQuery } from '@sanity/preview-kit'

export default function ArticlePreview({ query, params }) {
  return <LiveQuery query={query} params={params} />
}
```

### 2. Programación de Publicaciones

```typescript
// En el schema
{
  name: 'scheduledPublishAt',
  title: 'Programar Publicación',
  type: 'datetime',
}
```

### 3. Traducciones (Contenido Multiidioma)

```bash
npm install @sanity/language-filter
```

### 4. Colaboración en Tiempo Real

Ya incluido por defecto en Sanity - varios editores pueden trabajar simultáneamente.

## 🎯 Workflow Recomendado

### Semanal:
1. **Lunes**: Planificar contenido de la semana
2. **Martes-Jueves**: Escribir artículos en Sanity Studio
3. **Viernes**: Revisar y programar publicaciones
4. **Domingo**: Enviar newsletter con artículos de la semana

### Roles del Equipo:
- **Editor**: Puede publicar y editar todo
- **Colaborador**: Puede crear borradores, necesita aprobación
- **Guest Writer**: Solo puede crear borradores

## 🔧 Troubleshooting

### Artículos no aparecen

1. Verifica que estén publicados (no solo guardados)
2. Verifica credenciales en .env
3. Revisa CORS en Sanity dashboard
4. Verifica que el dataset sea "production"

### Error de CORS

1. Sanity Dashboard → API → CORS
2. Agrega tu dominio completo con https://
3. Marca "Allow credentials"

### Imágenes no cargan

1. Verifica que `urlFor()` esté importado
2. Usa el helper de Sanity: `urlFor(image).width(800).url()`

## 📚 Recursos Útiles

- **Sanity Docs**: https://www.sanity.io/docs
- **Schema Types**: https://www.sanity.io/docs/schema-types
- **Portable Text**: https://www.portabletext.org/
- **Sanity Studio**: https://www.sanity.io/studio

## ✅ Checklist de Validación

- [ ] Cuenta de Sanity creada
- [ ] Project ID obtenido
- [ ] Sanity Studio creado y corriendo
- [ ] Schemas configurados (article, author, category)
- [ ] CORS configurado para tus dominios
- [ ] Variables de entorno en .env.local
- [ ] Variables de entorno en Vercel
- [ ] Redeploy realizado
- [ ] Al menos 1 artículo de prueba creado
- [ ] Artículo visible en /contenido
- [ ] Página individual funciona /contenido/[slug]

## 🎉 ¡Listo!

Ahora tienes un CMS completo donde puedes:
- ✅ Crear artículos con editor rico
- ✅ Gestionar autores y categorías
- ✅ SEO optimizado por artículo
- ✅ Imágenes y multimedia
- ✅ Publicación instantánea
- ✅ Colaboración en equipo

---

**¡CMS configurado! Ya puedes crear contenido dinámico.** 📝

**Las 3 fases completadas:**
1. ✅ Google Analytics - Midiendo tráfico
2. ✅ Newsletter Funcional - Capturando audiencia
3. ✅ Sanity CMS - Creando contenido escalable

**MOVILIAX está listo para despegar** 🚀
