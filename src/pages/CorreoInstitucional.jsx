import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faCog, faBook, faVideo } from '@fortawesome/free-solid-svg-icons';

const CorreoInstitucional = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const openModal = (url) => {
    setVideoUrl(url);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setVideoUrl('');
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-blue-100 to-indigo-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-800 animate-pulse">Correo Institucional UNAN-León</h1>
      <p className="text-xl mb-8 text-center text-gray-700">
        Bienvenido a tu correo institucional. Aquí encontrarás toda la información necesaria para gestionar tu cuenta de correo electrónico universitaria.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <section className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105">
          <FontAwesomeIcon icon={faEnvelope} className="text-4xl text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Acceso al Correo</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Ingresa con tu cuenta institucional</li>
            <li>Gestiona tus mensajes</li>
            <li>Organiza tus contactos</li>
          </ul>
          <button 
            onClick={() => openModal('https://www.youtube.com/embed/dQw4w9WgXcQ')}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
          >
            Ver Tutorial <FontAwesomeIcon icon={faVideo} className="ml-2" />
          </button>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105">
          <FontAwesomeIcon icon={faCog} className="text-4xl text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Configuración</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Personaliza tu firma</li>
            <li>Configura filtros de correo</li>
            <li>Ajusta la seguridad de tu cuenta</li>
          </ul>
          <button 
            onClick={() => openModal('https://www.youtube.com/embed/dQw4w9WgXcQ')}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
          >
            Ver Tutorial <FontAwesomeIcon icon={faVideo} className="ml-2" />
          </button>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105">
          <FontAwesomeIcon icon={faBook} className="text-4xl text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Políticas de Uso</h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Normas de uso aceptable</li>
            <li>Privacidad y seguridad</li>
            <li>Cuotas y limitaciones</li>
          </ul>
          <button 
            onClick={() => openModal('https://www.youtube.com/embed/dQw4w9WgXcQ')}
            className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
          >
            Ver Tutorial <FontAwesomeIcon icon={faVideo} className="ml-2" />
          </button>
        </section>
      </div>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg">
            <iframe 
              width="560" 
              height="315" 
              src={videoUrl} 
              title="Tutorial Video" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
            <button 
              onClick={closeModal}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CorreoInstitucional;
