import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faHome } from '@fortawesome/free-solid-svg-icons';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-800 to-blue-600">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-9xl font-bold text-blue-800 mb-4 animate-bounce">
          4<span className="text-yellow-500">0</span>4
        </h1>
        <div className="text-blue-800 text-6xl mb-8 animate-pulse">
          <FontAwesomeIcon icon={faExclamationTriangle} className="mr-4" />
          <span>¡Oops!</span>
        </div>
        <p className="text-blue-700 text-2xl mb-8">
          La página que buscas no se encuentra disponible.
        </p>
        <Link to="/" className="bg-blue-800 text-white px-6 py-3 rounded-full text-xl font-semibold hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105">
          <FontAwesomeIcon icon={faHome} className="mr-2" />
          Volver a Inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
