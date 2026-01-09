'use client'
import { createSupabaseClient } from '@/lib/supabase'
import { useEffect, useState } from 'react'

interface User {
  id: string
  email: string
  nombre: string
  apellido?: string
  empresa?: string
  created_at: string
}

export default function UserList() {
  const [users, setUsers] = useState<User[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchUsers() {
      const supabase = createSupabaseClient()
      const { data, error } = await supabase
        .from('usuarios')
        .select('id, email, nombre, apellido, empresa, created_at')
        .order('created_at', { ascending: false })
        .limit(10)

      if (error) {
        console.error('Error:', error)
      } else {
        setUsers(data || [])
      }
      setLoading(false)
    }

    fetchUsers()
  }, [])

  if (loading) return <p>Cargando usuarios...</p>

  return (
    <div>
      <h2>Usuarios Registrados</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.nombre} {user.apellido} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  )
}