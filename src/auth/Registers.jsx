import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabase/supabase';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [registrationAttempts, setRegistrationAttempts] = useState(0); 
  const [showModal, setShowModal] = useState(false);
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
      const { data: signUpData, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signUpError) throw signUpError;

      const userId = signUpData.user.id;

      const { error: profileError } = await supabase.from('profiles').insert({
        id: userId,
        name,
        email,
      });

      if (profileError) throw profileError;

      setShowModal(true);
    } catch (error) {
      console.error("Error durante el registro:", error);
      setError("Hubo un problema al registrarse. Por favor, inténtalo de nuevo más tarde.");
      
      const newAttempts = registrationAttempts + 1;
      setRegistrationAttempts(newAttempts);
      localStorage.setItem('registrationAttempts', newAttempts.toString());
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleRegister = async () => {
    try {
      const { error } = await supabase.auth.signIn({ provider: 'google' });
      if (error) throw error;
    } catch (error) {
      console.error("Error durante el registro con Google:", error);
      setError("Hubo un problema al registrarse con Google. Por favor, inténtalo de nuevo más tarde.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-indigo-800">Registrarse</h2>
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <form onSubmit={handleRegister} className="space-y-4 sm:space-y-6">
          <div>
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
          <div>
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
          <div>
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
        <div className="mt-4">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">O regístrate con</span>
            </div>
          </div>
          <button
            onClick={handleGoogleRegister}
            className="mt-4 w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <FontAwesomeIcon icon={faGoogle} className="mr-2 text-red-500" />
            Google
          </button>
        </div>
        <p className="mt-4 text-center text-sm text-gray-600">
          ¿Ya tienes una cuenta? <button className="text-indigo-600 hover:underline" onClick={() => navigate("/login")}>Inicia sesión aquí</button>
        </p>
      </div>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-md">
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-indigo-800">¡Registro exitoso!</h3>
            <p className="mb-6 text-gray-700">
              Por favor, revisa tu bandeja de entrada en el correo electrónico que proporcionaste. 
              Hemos enviado un enlace de confirmación para activar tu cuenta.
            </p>
            <button
              onClick={closeModal}
              className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Register;
