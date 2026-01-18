import { describe, it, expect } from 'vitest'
import { validateEmail, sanitizeInput } from '@/lib/validators'

describe('validators', () => {
  describe('validateEmail', () => {
    it('acepta emails válidos', () => {
      expect(validateEmail('test@example.com')).toBe(true)
      expect(validateEmail('user.name+tag@example.co.uk')).toBe(true)
      expect(validateEmail('test123@domain.io')).toBe(true)
    })

    it('rechaza emails inválidos', () => {
      expect(validateEmail('invalid')).toBe(false)
      expect(validateEmail('invalid@')).toBe(false)
      expect(validateEmail('@example.com')).toBe(false)
      expect(validateEmail('test@')).toBe(false)
      expect(validateEmail('')).toBe(false)
    })
  })

  describe('sanitizeInput', () => {
    it('elimina caracteres peligrosos', () => {
      expect(sanitizeInput('<script>alert("xss")</script>')).toBe('scriptalert("xss")/script')
      expect(sanitizeInput('Normal text')).toBe('Normal text')
    })

    it('limita la longitud del input', () => {
      const longString = 'a'.repeat(1000)
      const result = sanitizeInput(longString, 100)
      expect(result.length).toBeLessThanOrEqual(100)
    })

    it('maneja strings vacíos', () => {
      expect(sanitizeInput('')).toBe('')
      expect(sanitizeInput('   ')).toBe('')
    })
  })
})
