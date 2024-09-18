import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const navigate = useNavigate();

  const manejarEnvio = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para manejar el registro
    console.log('Registrando usuario:', nombre, email, contraseña);
  };

  const irAIniciarSesion = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-800">Registrarse</h2>
        <form onSubmit={manejarEnvio}>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-gray-700 text-sm font-bold mb-2">
              <FontAwesomeIcon icon={faUser} className="mr-2" />
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
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
            <label htmlFor="contraseña" className="block text-gray-700 text-sm font-bold mb-2">
              <FontAwesomeIcon icon={faLock} className="mr-2" />
              Contraseña
            </label>
            <input
              type="password"
              id="contraseña"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition duration-300"
          >
            Registrarse
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-gray-600">
          ¿Ya tienes una cuenta? <button onClick={irAIniciarSesion} className="text-indigo-600 hover:underline">Inicia sesión aquí</button>
        </p>
      </div>
    </div>
  );
};

export default Register;
