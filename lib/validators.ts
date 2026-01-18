/**
 * Validación robusta de inputs
 */

// Regex de email estándar para usar en todo el proyecto
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export const validators = {
  email: (email: string): boolean => {
    return EMAIL_REGEX.test(email);
  },

  // Exportar regex para uso directo
  emailRegex: EMAIL_REGEX,

  password: (password: string): { valid: boolean; errors: string[] } => {
    const errors: string[] = [];

    if (password.length < 8) {
      errors.push('Mínimo 8 caracteres');
    }
    if (!/[A-Z]/.test(password)) {
      errors.push('Debe incluir al menos una mayúscula');
    }
    if (!/[0-9]/.test(password)) {
      errors.push('Debe incluir al menos un número');
    }

    return {
      valid: errors.length === 0,
      errors
    };
  },

  sqlInjection: (input: string): boolean => {
    const sqlPatterns = /(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|UNION)\b|--|;|\/\*|\*\/)/gi;
    return !sqlPatterns.test(input);
  },

  xss: (input: string): string => {
    return input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#x27;');
  }
};

/**
 * Escapa HTML para uso en emails y prevenir inyección
 */
export function escapeHtml(text: string): string {
  if (!text) return '';
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
