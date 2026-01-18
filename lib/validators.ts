export function validateEmail(email: string): boolean {
  if (!email || typeof email !== 'string') return false
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function sanitizeInput(input: string, maxLength: number = 500): string {
  if (!input || typeof input !== 'string') return ''
  return input.replace(/[<>]/g, '').trim().substring(0, maxLength)
}