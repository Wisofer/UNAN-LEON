import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faReply, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const InteractionSection = () => {
  return (
    <section id="interaction" className="py-12 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Foro</h2>
        <p className="text-muted-foreground mb-8">Comparte tus experiencias y colabora con otros estudiantes.</p>
        
        {/* Comentario de usuario */}
        <div className="bg-background rounded-lg shadow-md p-6 mb-6">
          <div className="flex items-center mb-4">
            <FontAwesomeIcon icon={faUserCircle} className="text-4xl mr-2 text-gray-500" />
            <div>
              <h3 className="text-lg font-medium">Juan Díaz</h3>
              <p className="text-muted-foreground text-sm">Hace 2 horas</p>
            </div>
          </div>
          <p className="text-muted-foreground mb-4">
            Acabo de aprender a usar el correo institucional de UNAN-León, ¡es muy fácil! Ahora puedo estar en contacto con mis profesores y compañeros.
          </p>
          <div className="flex justify-between items-center">
            <button className="flex items-center text-muted-foreground text-sm hover:text-blue-500 transition duration-300">
              <FontAwesomeIcon icon={faReply} className="mr-1" />
              Responder
            </button>
            <div className="flex items-center gap-2">
              <button className="flex items-center text-muted-foreground text-sm hover:text-green-500 transition duration-300">
                <FontAwesomeIcon icon={faThumbsUp} className="mr-1" />
                Me gusta
              </button>
              <span className="text-muted-foreground text-sm">3</span>
            </div>
          </div>
        </div>

        {/* Área para nuevos comentarios */}
        <div className="bg-background rounded-lg shadow-md p-6">
          <h3 className="text-lg font-medium mb-4">Comparte tu experiencia</h3>
          <textarea
            className="w-full p-2 border rounded-md mb-4"
            rows="4"
            placeholder="Escribe tu comentario aquí..."
          ></textarea>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition duration-300">
            Publicar Comentario
          </button>
        </div>
      </div>
    </section>
  );
};

export default InteractionSection;