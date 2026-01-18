import '@testing-library/jest-dom/vitest'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// Cleanup después de cada test
afterEach(() => {
  cleanup()
})

// Mock de variables de entorno para tests
process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://test.supabase.co'
process.env.NEXT_PUBLIC_GA_ID = 'G-TEST123'
