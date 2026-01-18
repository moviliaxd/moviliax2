/**
 * Rate limiting simple basado en memoria
 * Para producción considerar usar Redis (upstash/ratelimit)
 */

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

// Limpiar entradas expiradas cada 5 minutos
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitStore.entries()) {
    if (now > entry.resetTime) {
      rateLimitStore.delete(key);
    }
  }
}, 5 * 60 * 1000);

interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

interface RateLimitResult {
  success: boolean;
  remaining: number;
  resetIn: number;
}

/**
 * Verifica si una IP ha excedido el límite de requests
 */
export function checkRateLimit(
  identifier: string,
  config: RateLimitConfig = { maxRequests: 5, windowMs: 60 * 1000 }
): RateLimitResult {
  const now = Date.now();
  const key = identifier;

  const entry = rateLimitStore.get(key);

  if (!entry || now > entry.resetTime) {
    // Nueva entrada o expirada
    rateLimitStore.set(key, {
      count: 1,
      resetTime: now + config.windowMs
    });
    return {
      success: true,
      remaining: config.maxRequests - 1,
      resetIn: config.windowMs
    };
  }

  if (entry.count >= config.maxRequests) {
    // Límite excedido
    return {
      success: false,
      remaining: 0,
      resetIn: entry.resetTime - now
    };
  }

  // Incrementar contador
  entry.count++;
  rateLimitStore.set(key, entry);

  return {
    success: true,
    remaining: config.maxRequests - entry.count,
    resetIn: entry.resetTime - now
  };
}

/**
 * Obtener IP del request de Next.js
 */
export function getClientIP(request: Request): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const realIP = request.headers.get('x-real-ip');

  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }

  if (realIP) {
    return realIP;
  }

  return '127.0.0.1';
}

/**
 * Configuraciones predefinidas
 */
export const rateLimitConfigs = {
  // Endpoints de autenticación: 5 intentos por minuto
  auth: { maxRequests: 5, windowMs: 60 * 1000 },
  // Formularios de contacto: 3 por minuto
  contact: { maxRequests: 3, windowMs: 60 * 1000 },
  // Newsletter: 2 por minuto
  newsletter: { maxRequests: 2, windowMs: 60 * 1000 },
  // API general: 30 por minuto
  api: { maxRequests: 30, windowMs: 60 * 1000 },
};
