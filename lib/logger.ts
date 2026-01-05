/**
 * Sistema de logging profesional con sanitización de datos sensibles
 */

type LogLevel = 'info' | 'warn' | 'error' | 'debug';

interface LogData {
  [key: string]: any;
}

const SENSITIVE_KEYS = ['password', 'token', 'secret', 'apiKey', 'credit_card'];

function sanitizeData(data: LogData): LogData {
  const sanitized = { ...data };
  
  Object.keys(sanitized).forEach(key => {
    if (SENSITIVE_KEYS.some(sensitive => key.toLowerCase().includes(sensitive))) {
      sanitized[key] = '[REDACTED]';
    }
  });
  
  return sanitized;
}

export const logger = {
  info: (message: string, data?: LogData) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[INFO] ${message}`, data ? sanitizeData(data) : '');
    }
  },
  
  warn: (message: string, data?: LogData) => {
    if (process.env.NODE_ENV === 'development') {
      console.warn(`[WARN] ${message}`, data ? sanitizeData(data) : '');
    }
  },
  
  error: (message: string, error?: Error | LogData) => {
    if (process.env.NODE_ENV === 'development') {
      console.error(`[ERROR] ${message}`, error);
    }
    // En producción, aquí se enviaría a Sentry/LogRocket
  },
  
  debug: (message: string, data?: LogData) => {
    if (process.env.NODE_ENV === 'development') {
      console.debug(`[DEBUG] ${message}`, data ? sanitizeData(data) : '');
    }
  }
};
