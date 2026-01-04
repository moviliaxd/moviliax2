'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-negro-profundo">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Algo salió mal</h2>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-cian-electrico text-negro-profundo rounded-lg"
        >
          Intentar de nuevo
        </button>
      </div>
    </div>
  )
}