import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { supabase } from '../supabase/supabase';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    setSuccess(false);

    try {
      // Intentar enviar el correo de recuperación
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo : 'http://localhost:5173/reset-password'
      });
      if (error) {
        // Manejar errores específicos
        if (error.message.includes('User not found')) {
          setError('No se encontró ninguna cuenta asociada a este correo.');
        } else {
          throw error; // Lanzar otros errores
        }
      } else {
        setSuccess(true); // Si se envía correctamente
        setEmail(''); // Limpiar el input después de enviar
      }
    } catch (error) {
      setError("Error al enviar el correo de recuperación. Por favor, intente de nuevo.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-indigo-800">
          Recuperar Contraseña
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex items-center space-x-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-gray-500" />
            <div className="flex-1">
              <label htmlFor="email" className="text-gray-700 text-sm font-bold mb-2">
                Correo:
              </label>
              <input
                type="email"
                id="email"
                aria-label="Correo"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:border-indigo-500 transition duration-300"
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Enviar
          </button>
          {error && (
            <p
              className="text-red-500 text-sm mt-4 text-center"
              aria-live="assertive"
            >
              {error}
            </p>
          )}
          {success && (
            <p
              className="text-green-500 text-sm mt-4 text-center"
              aria-live="assertive"
            >
              Correo de recuperación enviado con éxito.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
