import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faEnvelope,
  faWifi,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import img from "../../public/img/facultad.jpeg";

const Aulas = () => {
  return (
    <div className="relative">
      <section id="training" className="py-12 md:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex justify-center">
              <img
                src={img}
                alt="Capacitación en herramientas virtuales"
                className="max-w-full"
                style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Capacitación</h2>
              <p className="text-muted-foreground mb-6">
                Aprende a utilizar las herramientas virtuales de UNAN-León a
                través de tutoriales multimedia.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FontAwesomeIcon
                    icon={faChalkboardTeacher}
                    className="text-4xl mr-4 text-blue-500"
                  />
                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      Aulas Virtuales
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      Descubre cómo navegar y participar en las aulas virtuales.
                    </p>
                    <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
                      <FontAwesomeIcon icon={faPlay} className="mr-2" />
                      Ver Tutorial
                    </button>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-4xl mr-4 text-green-500"
                  />
                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      Correo Institucional
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      Aprende a utilizar todas las funcionalidades de tu correo
                      electrónico.
                    </p>
                    <button className="mt-2 bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
                      <FontAwesomeIcon icon={faPlay} className="mr-2" />
                      Ver Tutorial
                    </button>
                  </div>
                </div>
                <div className="flex items-start">
                  <FontAwesomeIcon
                    icon={faWifi}
                    className="text-4xl mr-4 text-red-500"
                  />
                  <div>
                    <h3 className="text-lg font-medium mb-2">
                      WiFi del Campus
                    </h3>
                    <p className="text-muted-foreground mb-2">
                      Conoce cómo conectarte y navegar en la red WiFi del
                      campus.
                    </p>
                    <button className="mt-2 bg-red-500 hover:bg-red-600 text-white font-medium py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">
                      <FontAwesomeIcon icon={faPlay} className="mr-2" />
                      Ver Tutorial
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aulas;
