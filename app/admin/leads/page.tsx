import { supabase } from '@/lib/supabase'

export default async function LeadsPage() {
  const { data: leads } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  return (
    <div className="min-h-screen bg-slate-950 text-white p-10">
      <h1 className="text-3xl font-bold mb-8">Leads Entrantes</h1>

      <div className="space-y-4">
        {leads?.map(lead => (
          <div
            key={lead.id}
            className="border border-cyan-500/30 rounded-xl p-5 flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{lead.nombre}</p>
              <p className="text-sm text-slate-400">
                {lead.empresa || 'Sin empresa'} · {lead.asunto}
              </p>
              <p className="text-xs text-slate-500">{lead.email}</p>
              <p className="text-xs mt-1">Estado: {lead.status}</p>
            </div>

            <div className="text-right space-y-2">
              <p
                className={`font-bold ${
                  lead.priority === 'high'
                    ? 'text-red-400'
                    : lead.priority === 'medium'
                    ? 'text-yellow-400'
                    : 'text-green-400'
                }`}
              >
                {lead.priority.toUpperCase()}
              </p>
              <p className="text-sm">Score: {lead.score}</p>

              <form
                action={`/admin/leads/${lead.id}`}
                method="post"
                className="flex gap-2 justify-end"
              >
                <button name="status" value="contacted" className="text-xs text-green-400">
                  Contactado
                </button>
                <button name="status" value="discarded" className="text-xs text-red-400">
                  Descartar
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
