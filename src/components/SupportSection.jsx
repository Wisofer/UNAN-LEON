import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import soporte from "../../public/img/soporte2.jpg";

const SupportSection = () => {
  return (
    <section id="support" className="py-12 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center"> {/* Alineación vertical */}
            <h2 className="text-3xl font-bold mb-4">Soporte Técnico</h2>
            <p className="text-muted-foreground mb-6">
              Encuentra respuestas a tus preguntas más frecuentes o contacta al soporte técnico para asistencia adicional.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <FontAwesomeIcon icon={faEnvelope} className="text-2xl mr-2 text-green-500" />
                <div>
                  <h3 className="text-lg font-medium mb-2">Contactar Soporte</h3>
                  <p className="text-muted-foreground">
                    Si necesitas ayuda adicional, no dudes en contactar a nuestro equipo de soporte.
                  </p>
                  <button className="mt-2 border rounded px-4 py-2 text-sm bg-green-500 text-white hover:bg-green-600 transition duration-300">
                    Contactar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center"> {/* Alineación vertical de la imagen */}
            <img
              src={soporte}
              alt="Support"
              className="max-w-full"
              style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportSection;