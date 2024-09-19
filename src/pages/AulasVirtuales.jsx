import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faBook, faQuestionCircle, faCloudUploadAlt, faVideo, faUserGraduate, faCalendarAlt, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const AulasVirtuales = () => {
  const [modalAbierto, setModalAbierto] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');

  const abrirModal = (url) => {
    setVideoUrl(url);
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
    setVideoUrl('');
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-blue-100 to-indigo-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-800 animate-pulse">Aulas Virtuales UNAN-León</h1>
      <p className="text-xl mb-8 text-center text-gray-700">
        Bienvenido a tu espacio de aprendizaje en línea. Descubre todas las herramientas y recursos disponibles para tu éxito académico.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <section className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105">
          <FontAwesomeIcon icon={faSignInAlt} className="text-4xl text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Acceso a Plataformas</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Ingresa con tu cuenta institucional</li>
            <li>Explora tus cursos activos</li>
            <li>Accede a material didáctico</li>
            <li>Participa en foros y discusiones</li>
          </ul>
          <button onClick={() => abrirModal('https://www.youtube.com/embed/dQw4w9WgXcQ')} className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
            <FontAwesomeIcon icon={faVideo} className="mr-2" />
            Ver Tutorial
          </button>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105">
          <FontAwesomeIcon icon={faBook} className="text-4xl text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Guías de Uso</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Tutoriales interactivos</li>
            <li>Manuales descargables</li>
            <li>Videos explicativos</li>
            <li>FAQs y resolución de problemas comunes</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105">
          <FontAwesomeIcon icon={faQuestionCircle} className="text-4xl text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Soporte Técnico</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Chat en vivo con soporte</li>
            <li>Formulario de reporte de problemas</li>
            <li>Base de conocimientos</li>
            <li>Contacto directo con el equipo técnico</li>
          </ul>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105 md:col-span-2 lg:col-span-3">
          <FontAwesomeIcon icon={faCloudUploadAlt} className="text-4xl text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Cómo Subir Trabajos</h2>
          <ol className="list-decimal list-inside text-gray-700">
            <li className="mb-2">Accede a tu curso en la plataforma de Aulas Virtuales UNAN-León.</li>
            <li className="mb-2">Busca la sección o módulo donde debes subir tu trabajo.</li>
            <li className="mb-2">Haz clic en el botón "Agregar entrega" o similar.</li>
            <li className="mb-2">Arrastra y suelta tu archivo o selecciónalo desde tu computadora.</li>
            <li className="mb-2">Verifica que el archivo se haya cargado correctamente.</li>
            <li className="mb-2">Haz clic en "Guardar cambios" o "Enviar" para finalizar la entrega.</li>
          </ol>
          <p className="mt-4 text-gray-700">
            Recuerda siempre verificar el formato solicitado por tu profesor y la fecha límite de entrega.
          </p>
          <button onClick={() => abrirModal('https://www.youtube.com/embed/dQw4w9WgXcQ')} className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
            <FontAwesomeIcon icon={faVideo} className="mr-2" />
            Ver Tutorial
          </button>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105 md:col-span-2 lg:col-span-3">
          <FontAwesomeIcon icon={faCalendarAlt} className="text-4xl text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Cómo Matricularse</h2>
          <ol className="list-decimal list-inside text-gray-700">
            <li className="mb-2">Ingresa al <a href="https://matricula.unanleon.edu.ni/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">portal de matrícula</a> con tu usuario y contraseña.</li>
            <li className="mb-2">Selecciona la opción "Matrícula" en el menú principal.</li>
            <li className="mb-2">Verifica tus datos personales y académicos.</li>
            <li className="mb-2">Selecciona el período académico para el cual deseas matricularte.</li>
            <li className="mb-2">Confirma tu matrícula y guarda o imprime el comprobante.</li>
            <li className="mb-2">Realiza el pago de matrícula según las instrucciones proporcionadas.</li>
          </ol>
          <p className="mt-4 text-gray-700">
            Es importante que respetes las fechas establecidas para el proceso de matrícula.
          </p>
          <button onClick={() => abrirModal('https://www.youtube.com/embed/dQw4w9WgXcQ')} className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
            <FontAwesomeIcon icon={faVideo} className="mr-2" />
            Ver Tutorial de Matrícula
          </button>
        </section>

        <section className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105 md:col-span-2 lg:col-span-3">
          <FontAwesomeIcon icon={faPencilAlt} className="text-4xl text-indigo-600 mb-4" />
          <h2 className="text-2xl font-semibold mb-4 text-indigo-800">Cómo Inscribir Componentes</h2>
          <ol className="list-decimal list-inside text-gray-700">
            <li className="mb-2">Ingresa al <a href="https://inscripcioncomponentes.unanleon.edu.ni/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">portal de inscripción de componentes</a> con tu usuario y contraseña.</li>
            <li className="mb-2">Selecciona la opción "Inscripción de componentes" en el menú principal.</li>
            <li className="mb-2">Verifica tus datos académicos y el período actual.</li>
            <li className="mb-2">Elige los componentes que deseas cursar de la lista disponible.</li>
            <li className="mb-2">Revisa cuidadosamente tu selección de componentes.</li>
            <li className="mb-2">Confirma tu inscripción y guarda o imprime el comprobante.</li>
          </ol>
          <p className="mt-4 text-gray-700">
            Asegúrate de verificar los requisitos previos de cada componente y respetar las fechas establecidas para la inscripción.
          </p>
          <button onClick={() => abrirModal('https://www.youtube.com/embed/dQw4w9WgXcQ')} className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors">
            <FontAwesomeIcon icon={faVideo} className="mr-2" />
            Ver Tutorial de Inscripción de Componentes
          </button>
        </section>
      </div>

      {modalAbierto && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-3xl w-full">
            <h2 className="text-2xl font-bold mb-4">Tutorial</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe 
                className="w-full h-full"
                src={videoUrl}
                title="Tutorial" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
            <button 
              onClick={cerrarModal}
              className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AulasVirtuales;
