# 📧 Guía de Configuración: Newsletter Funcional

## ✅ Archivos Creados

- ✅ `/app/api/newsletter/route.ts` - API endpoint para suscripciones
- ✅ `/components/NewsletterForm.tsx` - Actualizado con API real
- ✅ `package.json` - Dependencias agregadas (resend, supabase)

## 🚀 Configuración Paso a Paso

### PARTE 1: Resend (Servicio de Email)

#### 1. Crear cuenta en Resend

1. Ve a: https://resend.com
2. Clic en "Get Started"
3. Regístrate con GitHub o email
4. Verifica tu cuenta

#### 2. Configurar dominio

1. En Resend Dashboard → Domains
2. Clic en "Add Domain"
3. Ingresa: `moviliax.lat`
4. Copia los registros DNS que te muestra

#### 3. Configurar DNS en tu proveedor

Agrega estos registros DNS (los valores exactos te los da Resend):

```
Tipo: TXT
Nombre: _resend
Valor: resend-verify=xxxxxxxxxxxxx

Tipo: MX
Nombre: @
Valor: feedback-smtp.resend.com
Prioridad: 10

Tipo: TXT  
Nombre: @
Valor: v=spf1 include:amazonses.com ~all

Tipo: TXT
Nombre: resend._domainkey
Valor: p=MIGfMA0GCS... (largo)
```

#### 4. Verificar dominio

- Espera 5-10 minutos
- En Resend → Domains → Verify
- Debería aparecer como "Verified" ✅

#### 5. Obtener API Key

1. Resend Dashboard → API Keys
2. Clic en "Create API Key"
3. Nombre: "MOVILIAX Production"
4. Permiso: "Sending access"
5. **COPIA LA API KEY** (solo se muestra una vez)
6. Formato: `re_xxxxxxxxxxxxx`

### PARTE 2: Supabase (Base de Datos)

#### 1. Crear proyecto en Supabase

1. Ve a: https://supabase.com
2. Clic en "Start your project"
3. New Project:
   - **Name**: moviliax-production
   - **Database Password**: (guarda esto de forma segura)
   - **Region**: South America (São Paulo) o más cercano
4. Espera ~2 minutos mientras se crea

#### 2. Crear tabla de suscriptores

1. En Supabase Dashboard → SQL Editor
2. Clic en "New Query"
3. Pega este SQL:

```sql
-- Crear tabla de suscriptores
CREATE TABLE newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  source TEXT DEFAULT 'website',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Crear índice para búsquedas rápidas
CREATE INDEX idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX idx_newsletter_status ON newsletter_subscribers(status);

-- Habilitar Row Level Security (Seguridad)
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Política: Permitir inserción desde la API
CREATE POLICY "Allow API inserts" 
  ON newsletter_subscribers 
  FOR INSERT 
  WITH CHECK (true);

-- Política: Permitir lectura desde la API (service role)
CREATE POLICY "Allow API selects" 
  ON newsletter_subscribers 
  FOR SELECT 
  USING (true);
```

4. Clic en "Run" (▶️)
5. Deberías ver: "Success. No rows returned"

#### 3. Obtener credenciales de Supabase

1. Settings → API
2. Copia:
   - **Project URL**: `https://xxxxxxxxxx.supabase.co`
   - **service_role key** (secret): `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxx`

⚠️ **IMPORTANTE**: Usa `service_role` key, NO la `anon` key

### PARTE 3: Configurar Variables de Entorno

#### En Local (.env.local)

```bash
# Crea el archivo
touch .env.local

# Agrega estas variables (reemplaza con tus valores reales):
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
RESEND_API_KEY=re_xxxxxxxxxxxxx
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxx.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxx
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

#### En Vercel (Producción)

1. Ve a: https://vercel.com/dashboard
2. Selecciona tu proyecto MOVILIAX
3. Settings → Environment Variables
4. Agrega una por una:

```
Name: RESEND_API_KEY
Value: re_xxxxxxxxxxxxx
Environments: ✓ Production ✓ Preview ✓ Development

Name: NEXT_PUBLIC_SUPABASE_URL  
Value: https://xxxxxxxxxx.supabase.co
Environments: ✓ Production ✓ Preview ✓ Development

Name: SUPABASE_SERVICE_ROLE_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.xxxxx
Environments: ✓ Production ✓ Preview ✓ Development
```

5. **IMPORTANTE**: Después de agregar las variables, ve a Deployments
6. Selecciona el último deploy → ⋯ → Redeploy

### PARTE 4: Probar el Sistema

#### Prueba en Local

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Abre http://localhost:3000
# Prueba el formulario de newsletter
```

#### Verificar que funciona:

1. **Frontend**:
   - Ingresa un email en el formulario
   - Deberías ver: "¡Bienvenido a RADARX! Revisa tu email..."

2. **Email**:
   - Revisa tu inbox
   - Deberías recibir el email de bienvenida

3. **Base de Datos**:
   - Ve a Supabase → Table Editor
   - Tabla: `newsletter_subscribers`
   - Deberías ver tu email registrado

4. **Google Analytics**:
   - Ve a GA4 → Eventos en tiempo real
   - Deberías ver el evento `newsletter_subscription`

## 📊 Dashboard de Suscriptores

### Ver suscriptores en Supabase

```sql
-- Total de suscriptores activos
SELECT COUNT(*) as total_subscribers 
FROM newsletter_subscribers 
WHERE status = 'active';

-- Últimos 10 suscriptores
SELECT email, subscribed_at, source
FROM newsletter_subscribers
ORDER BY subscribed_at DESC
LIMIT 10;

-- Suscriptores por día (última semana)
SELECT 
  DATE(subscribed_at) as date,
  COUNT(*) as subscribers
FROM newsletter_subscribers
WHERE subscribed_at > NOW() - INTERVAL '7 days'
GROUP BY DATE(subscribed_at)
ORDER BY date DESC;
```

## 📧 Personalizar Email de Bienvenida

El email está en `/app/api/newsletter/route.ts`. Puedes personalizarlo:

```typescript
// Línea ~60 en route.ts
subject: '¡Bienvenido a RADARX! 🚀',
html: `
  <!-- Tu HTML personalizado aquí -->
`
```

### Tips para emails:
- ✅ Usa HTML inline styles (no CSS externo)
- ✅ Mantén width máximo de 600px
- ✅ Usa fuentes web-safe (Arial, Helvetica, Georgia)
- ✅ Incluye link de unsubscribe
- ✅ Testea en diferentes clientes (Gmail, Outlook, Apple Mail)

## 🔄 Enviar Newsletter Semanal

### Opción 1: Manual (Fase actual)

1. Exporta emails de Supabase:
```sql
SELECT email FROM newsletter_subscribers WHERE status = 'active';
```

2. Usa Resend Dashboard:
   - Broadcasts → New Broadcast
   - Sube la lista
   - Diseña tu email
   - Envía

### Opción 2: Automatizado (Futuro)

Crear API endpoint `/api/newsletter/send`:
- Trigger manual o programado
- Lee suscriptores de Supabase
- Envía email en batch con Resend
- Registra envíos

## 🎯 Métricas a Monitorear

### Semana 1-2:
- 📧 Total de suscriptores
- 📧 Tasa de suscripción (conversiones / visitas)
- 📧 Fuente de suscriptores (website, social, etc)

### Semana 3-4:
- 📧 Open rate (tasa de apertura)
- 📧 Click rate (tasa de clicks)
- 📧 Unsubscribe rate
- 📧 Engagement por tipo de contenido

## ⚠️ Consideraciones Importantes

### Límites de Resend (Plan Free):
- ✅ 100 emails / día
- ✅ 3,000 emails / mes
- Si superas esto, necesitas upgrade a plan Pro ($20/mes)

### Buenas Prácticas:
- ✅ Siempre incluye opción de unsubscribe
- ✅ Cumple con GDPR / CAN-SPAM
- ✅ Envía contenido de valor, no solo promociones
- ✅ Mantén frecuencia consistente (cada domingo)
- ✅ Segmenta tu audiencia cuando crezca

### Seguridad:
- ✅ Nunca expongas SUPABASE_SERVICE_ROLE_KEY en frontend
- ✅ Siempre valida emails en backend
- ✅ Prevén duplicados en base de datos
- ✅ Rate limiting para evitar spam

## 🐛 Troubleshooting

### Email no llega:
1. Verifica que el dominio esté verificado en Resend
2. Revisa spam/junk folder
3. Verifica los registros DNS (SPF, DKIM, DMARC)

### Error de base de datos:
1. Verifica que la tabla exista: `SELECT * FROM newsletter_subscribers LIMIT 1;`
2. Verifica las credenciales en .env
3. Revisa los logs de Supabase

### Error 500 en API:
1. Verifica variables de entorno
2. Revisa logs en Vercel: Deployments → View Function Logs
3. Testea en local primero

## ✅ Checklist de Validación

- [ ] Cuenta de Resend creada
- [ ] Dominio verificado en Resend
- [ ] API Key de Resend obtenida
- [ ] Proyecto de Supabase creado
- [ ] Tabla `newsletter_subscribers` creada
- [ ] Credenciales de Supabase obtenidas
- [ ] Variables en .env.local configuradas
- [ ] Variables en Vercel configuradas
- [ ] Redeploy realizado en Vercel
- [ ] Prueba exitosa de suscripción
- [ ] Email de bienvenida recibido
- [ ] Suscriptor visible en Supabase
- [ ] Evento trackeado en Google Analytics

## 📚 Recursos Útiles

- **Resend Docs**: https://resend.com/docs
- **Supabase Docs**: https://supabase.com/docs
- **Email Templates**: https://github.com/resend/react-email

---

**¡Newsletter funcional completado! Ya estás capturando tu audiencia.** 📧

**Siguiente paso**: CMS para contenido dinámico 📝
