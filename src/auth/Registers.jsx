import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/supabase';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [registrationAttempts, setRegistrationAttempts] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedAttempts = localStorage.getItem('registrationAttempts');
    if (storedAttempts) {
      setRegistrationAttempts(parseInt(storedAttempts));
    }
  }, []);

  const handleRegister = async (e) => {
    e.preventDefault();

    if (registrationAttempts >= 5) {
      setError("Has alcanzado el límite de intentos de registro. Por favor, inténtalo más tarde.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      // Registrando al usuario con email y contraseña
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) throw signUpError;

      const userId = signUpData.user.id; // Obtener el ID del usuario creado

      // Guardar el perfil del usuario en la tabla profiles
      const { error: profileError } = await supabase.from('profiles').insert({
        id: userId, // El id del usuario
        name, // El nombre ingresado por el usuario
        email, // El correo del usuario
      });

      if (profileError) throw profileError;

      console.log("¡Registro exitoso! Revisa tu correo electrónico para confirmar.");
      navigate("/login");
    } catch (error) {
      console.error("Error durante el registro:", error);
      setError("Hubo un problema al registrarse. Por favor, inténtalo de nuevo más tarde.");
      
      // Incrementar el contador de intentos
      const newAttempts = registrationAttempts + 1;
      setRegistrationAttempts(newAttempts);
      localStorage.setItem('registrationAttempts', newAttempts.toString());
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800">Registrarse</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Nombre
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              <FontAwesomeIcon icon={faLock} className="mr-2" />
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
            disabled={loading || registrationAttempts >= 5}
          >
            {loading ? 'Registrando...' : 'Registrarse'}
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          ¿Ya tienes una cuenta? <button className="text-indigo-600 hover:underline" onClick={() => navigate("/login")}>Inicia sesión aquí</button>
        </p>
      </div>
    </div>
  );
};

export default Register;
