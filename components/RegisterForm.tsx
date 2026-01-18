
'use client';

import { useState } from 'react';
import { validators } from '@/lib/validators';

export default function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setErrors([]);

    // ✅ VALIDACIÓN ROBUSTA: Campos obligatorios
    if (!email || !password || !name) {
      setMessage('Todos los campos son obligatorios');
      setLoading(false);
      return;
    }

    // ✅ VALIDACIÓN ROBUSTA: Email
    if (!validators.email(email)) {
      setMessage('Email inválido');
      setLoading(false);
      return;
    }

    // ✅ VALIDACIÓN ROBUSTA: Password
    const passwordValidation = validators.password(password);
    if (!passwordValidation.valid) {
      setErrors(passwordValidation.errors);
      setMessage('La contraseña no cumple los requisitos');
      setLoading(false);
      return;
    }

    // ✅ SEGURIDAD: SQL Injection
    if (!validators.sqlInjection(name) || !validators.sqlInjection(email)) {
      setMessage('Entrada inválida detectada');
      setLoading(false);
      return;
    }

    try {
      const res = await fetch('/api/auth/registro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: email.toLowerCase().trim(), 
          password, 
          name: validators.xss(name.trim())
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setMessage('✅ Usuario registrado exitosamente');
        setEmail('');
        setPassword('');
        setName('');
      } else {
        setMessage(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      setMessage('❌ Error en la conexión con el servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 border rounded">
      <h2 className="text-xl font-bold mb-4">Registro</h2>
      
      <input
        type="text"
        placeholder="Nombre"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
        required
      />
      
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
        required
      />
      
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full mb-2 p-2 border rounded"
        required
      />
      
      {/* ✅ NUEVO: Mostrar requisitos de contraseña */}
      {errors.length > 0 && (
        <div className="mb-4 p-2 bg-red-50 border border-red-200 rounded text-sm">
          <p className="font-semibold text-red-700">Requisitos de contraseña:</p>
          <ul className="list-disc list-inside text-red-600">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}
      
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? 'Registrando...' : 'Registrarse'}
      </button>
      
      {message && (
        <p className={`mt-4 text-center ${message.includes('✅') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </form>
  );
}
