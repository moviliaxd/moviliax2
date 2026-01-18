export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function sanitizeInput(input: string, maxLength: number = 500): string {
  if (!input || typeof input !== 'string') return ''
  return input.replace(/[<>]/g, '').trim().substring(0, maxLength)
}

export function escapeHtml(str: string): string {
  if (!str || typeof str !== 'string') return ''
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export const validators = {
  email: (email: string): boolean => {
    return validateEmail(email)
  },

  password: (password: string): { valid: boolean; errors: string[] } => {
    const errors: string[] = []
    if (!password || password.length < 8) {
      errors.push('Mínimo 8 caracteres')
    }
    if (!/[A-Z]/.test(password)) {
      errors.push('Al menos una mayúscula')
    }
    if (!/[a-z]/.test(password)) {
      errors.push('Al menos una minúscula')
    }
    if (!/[0-9]/.test(password)) {
      errors.push('Al menos un número')
    }
    return { valid: errors.length === 0, errors }
  },

  sqlInjection: (input: string): boolean => {
    if (!input || typeof input !== 'string') return true
    const sqlPatterns = /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER|CREATE|TRUNCATE)\b)|(--)|(;)|(')/gi
    return !sqlPatterns.test(input)
  },

  xss: (input: string): string => {
    return sanitizeInput(input)
  }
}