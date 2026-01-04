# 📊 Guía de Configuración: Google Analytics

## ✅ Archivos Creados

- ✅ `/components/GoogleAnalytics.tsx` - Componente de tracking
- ✅ `/lib/analytics.ts` - Funciones para eventos personalizados
- ✅ `app/layout.tsx` - Actualizado con GA

## 🚀 Paso a Paso

### 1. Crear Cuenta de Google Analytics

1. Ve a: https://analytics.google.com/
2. Clic en "Empezar a medir"
3. Configura tu cuenta:
   - **Nombre de la cuenta**: HLG Innovación Digital (o tu nombre)
   - **Nombre de la propiedad**: MOVILIAX
   - **Zona horaria**: (GMT-06:00) Ciudad de México
   - **Moneda**: Peso mexicano (MXN)

4. Selecciona "Web" como plataforma
5. Configura el flujo de datos:
   - **URL del sitio web**: https://moviliax.lat
   - **Nombre del flujo**: MOVILIAX Production

6. **IMPORTANTE**: Copia tu **ID de medición** (formato: `G-XXXXXXXXXX`)

### 2. Configurar en Local

```bash
# En la raíz de tu proyecto
echo "NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX" > .env.local
# Reemplaza G-XXXXXXXXXX con tu ID real
```

### 3. Configurar en Vercel

1. Ve a tu proyecto en Vercel: https://vercel.com/dashboard
2. Settings → Environment Variables
3. Agregar:
   - **Name**: `NEXT_PUBLIC_GA_ID`
   - **Value**: `G-XXXXXXXXXX` (tu ID real)
   - **Environments**: Marca Production, Preview, y Development
4. Clic en "Save"
5. Clic en "Redeploy" para aplicar cambios

### 4. Verificar Instalación

```bash
# En local
npm run dev

# Abre http://localhost:3000
# Abre las DevTools del navegador (F12)
# Ve a la pestaña "Network"
# Busca peticiones a "google-analytics.com" o "gtag"
# Si aparecen → ¡Funciona! ✅
```

**Verificación en vivo:**
1. Ve a Google Analytics
2. Reportes → Tiempo real
3. Abre tu sitio web
4. Deberías ver tu visita en tiempo real

### 5. Configurar Google Search Console (BONUS)

1. Ve a: https://search.google.com/search-console
2. Agrega propiedad: https://moviliax.lat
3. Verifica con método HTML tag o Google Analytics
4. Envía sitemap: https://moviliax.lat/sitemap.xml

## 📈 Eventos que se Trackean Automáticamente

### Eventos del Sistema:
- ✅ Visitas a páginas
- ✅ Sesiones de usuario
- ✅ Tiempo en sitio
- ✅ Rebote (bounce rate)
- ✅ Dispositivos (mobile/desktop)
- ✅ Ubicación geográfica
- ✅ Fuentes de tráfico

### Eventos Personalizados Disponibles:

**Newsletter:**
```typescript
import { trackNewsletterSubscription } from '@/lib/analytics'
trackNewsletterSubscription('user@email.com')
```

**Artículos:**
```typescript
import { trackArticleView } from '@/lib/analytics'
trackArticleView('Título del Artículo')
```

**Podcast:**
```typescript
import { trackPodcastPlay } from '@/lib/analytics'
trackPodcastPlay('Episodio #1')
```

**Social Media:**
```typescript
import { trackSocialClick } from '@/lib/analytics'
trackSocialClick('LinkedIn')
```

**CTAs:**
```typescript
import { trackCTAClick } from '@/lib/analytics'
trackCTAClick('Suscribirse Gratis')
```

## 🎯 Métricas Clave a Monitorear

### Semana 1-2:
- 📊 Usuarios únicos
- 📊 Páginas vistas
- 📊 Duración promedio de sesión
- 📊 Tasa de rebote
- 📊 Dispositivos más usados
- 📊 Países de origen

### Semana 3-4:
- 📊 Conversión de newsletter
- 📊 Contenido más leído
- 📊 Fuentes de tráfico más efectivas
- 📊 Horarios de mayor actividad

### Mes 2+:
- 📊 Crecimiento mes a mes
- 📊 Retención de usuarios
- 📊 Embudo de conversión completo

## 🔍 Reportes Recomendados

### Dashboard Personalizado:
1. En Google Analytics → Explorar → Dashboard en blanco
2. Agregar widgets:
   - Usuarios en tiempo real
   - Usuarios nuevos vs recurrentes
   - Páginas más vistas
   - Tasa de conversión (newsletter)
   - Fuentes de tráfico
   - Dispositivos
   - Ubicación geográfica

### Alertas Personalizadas:
1. Configurar → Alertas
2. Crear alerta: "Caída de tráfico mayor al 20%"
3. Crear alerta: "Aumento de tráfico mayor al 50%"
4. Crear alerta: "Tasa de rebote mayor al 80%"

## 🎨 Integración en Componentes

### Ejemplo en NewsletterForm.tsx:

```typescript
'use client'

import { useState } from 'react'
import { trackNewsletterSubscription, trackFormSubmission } from '@/lib/analytics'

export default function NewsletterForm() {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      // Tu lógica de suscripción...
      
      // Track el evento
      trackNewsletterSubscription(email)
      trackFormSubmission('Newsletter')
      
      setStatus('success')
    } catch (error) {
      setStatus('error')
    }
  }
  
  // ... resto del componente
}
```

### Ejemplo en Enlaces Externos:

```typescript
import { trackExternalLink } from '@/lib/analytics'

<a 
  href="https://external-site.com"
  onClick={() => trackExternalLink('https://external-site.com')}
>
  Visitar sitio
</a>
```

## ⚠️ Consideraciones de Privacidad

### GDPR / Ley de Protección de Datos:
1. Agrega banner de cookies (próxima fase)
2. Política de privacidad actualizada
3. Opción de opt-out

### Configuración Recomendada en GA4:
1. Admin → Configuración de la propiedad
2. Deshabilitar "Señales de Google"
3. Configurar retención de datos: 14 meses
4. Activar "Anonimización de IP"

## ✅ Checklist de Validación

- [ ] ID de medición copiado de Google Analytics
- [ ] Variable de entorno agregada en .env.local
- [ ] Variable de entorno agregada en Vercel
- [ ] Redeploy realizado en Vercel
- [ ] Verificado en Network DevTools
- [ ] Aparece en "Tiempo real" de GA4
- [ ] Google Search Console configurado
- [ ] Sitemap enviado

## 📚 Recursos Útiles

- **Google Analytics 4 Docs**: https://support.google.com/analytics
- **Next.js Analytics**: https://nextjs.org/docs/app/building-your-application/optimizing/analytics
- **GA4 vs Universal**: https://support.google.com/analytics/answer/11583528

---

**¡Analytics configurado! Ahora tienes visibilidad total de tu tráfico.** 📊

**Siguiente paso**: Newsletter Funcional 📧
