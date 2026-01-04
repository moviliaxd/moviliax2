'use client'

import { useState } from 'react'
import { trackNewsletterSubscription } from '@/lib/analytics'

export default function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      setMessage('Por favor ingresa un email válido')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Error al suscribirse')
      }

      // Track evento en Google Analytics
      trackNewsletterSubscription(email)

      setStatus('success')
      setMessage('¡Bienvenido a RADARX! Revisa tu email para confirmar tu suscripción.')
      setEmail('')
    } catch (error: any) {
      setStatus('error')
      setMessage(error.message || 'Hubo un error. Por favor intenta de nuevo.')
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="tu@email.com"
          className="flex-1 px-6 py-4 rounded-lg bg-white/10 border border-cian-electrico/30 text-white placeholder-gris-metalico focus:outline-none focus:border-cian-electrico transition-colors"
          disabled={status === 'loading'}
          aria-label="Correo electrónico para suscripción"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-8 py-4 bg-cian-electrico text-azul-profundo font-bold rounded-lg hover:bg-opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? 'Enviando...' : 'Suscribirme'}
        </button>
      </form>

      {message && (
        <div
          className={`mt-4 p-4 rounded-lg ${
            status === 'success' 
              ? 'bg-green-500/20 text-green-300 border border-green-500/30' 
              : 'bg-red-500/20 text-red-300 border border-red-500/30'
          }`}
          role="alert"
        >
          {message}
        </div>
      )}

      <p className="text-gris-metalico text-sm text-center mt-4">
        Los profesionales ya reciben RADARX. ¿Y tú?
      </p>
    </div>
  )
}
