'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function UserList() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase.from('users').select('*');
        
        if (error) {
          setError(error.message);
        } else {
          setUsers(data || []);
        }
      } catch (err) {
        setError('Error al cargar usuarios');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Cargando usuarios...</div>;
  if (error) return <div className="text-red-600">Error: {error}</div>;

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Lista de Usuarios</h2>
      {users.length === 0 ? (
        <p>No hay usuarios registrados</p>
      ) : (
        <ul className="space-y-2">
          {users.map((user) => (
            <li key={user.id} className="p-2 border rounded">
              {user.name || user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

