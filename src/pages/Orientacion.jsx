import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBook, faUsers, faInfoCircle, faCalendarAlt, faUniversity } from '@fortawesome/free-solid-svg-icons';

const Orientacion = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-blue-100 to-indigo-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-800 animate-fade-in-down">Orientación Estudiantil</h1>
      <p className="text-xl mb-8 text-center text-gray-700">
        Bienvenido a la sección de orientación de UNAN-León. Aquí encontrarás información esencial para tu vida universitaria.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <section className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
          <FontAwesomeIcon icon={faGraduationCap} className="text-4xl text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Servicios Estudiantiles</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Asesoría académica personalizada</li>
            <li>Apoyo psicológico y orientación vocacional</li>
            <li>Programas de becas y ayuda financiera</li>
            <li>Servicios de salud estudiantil</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
          <FontAwesomeIcon icon={faBook} className="text-4xl text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Recursos Académicos</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Biblioteca virtual y física</li>
            <li>Laboratorios especializados</li>
            <li>Tutorías y grupos de estudio</li>
            <li>Acceso a bases de datos científicas</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
          <FontAwesomeIcon icon={faUsers} className="text-4xl text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Vida Universitaria</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Clubes y asociaciones estudiantiles</li>
            <li>Eventos culturales y deportivos</li>
            <li>Programas de intercambio internacional</li>
            <li>Actividades de voluntariado y servicio comunitario</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
          <FontAwesomeIcon icon={faInfoCircle} className="text-4xl text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Información Académica</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Calendario académico</li>
            <li>Reglamentos y normativas</li>
            <li>Procesos de matrícula y registro</li>
            <li>Guía de trámites administrativos</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
          <FontAwesomeIcon icon={faCalendarAlt} className="text-4xl text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Eventos y Actividades</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Ferias de empleo y prácticas profesionales</li>
            <li>Conferencias y seminarios académicos</li>
            <li>Talleres de desarrollo personal y profesional</li>
            <li>Actividades de integración estudiantil</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105">
          <FontAwesomeIcon icon={faUniversity} className="text-4xl text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Instalaciones y Servicios</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Mapa interactivo del campus</li>
            <li>Servicios de comedor y cafeterías</li>
            <li>Áreas de estudio y coworking</li>
            <li>Instalaciones deportivas y recreativas</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Orientacion;
