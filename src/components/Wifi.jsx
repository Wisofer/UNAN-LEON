import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi, faBook, faBuilding, faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const Wifi = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50">
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
            Servicios del Campus
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <ServiceCard
              icon={faWifi}
              title="WiFi del Campus"
              description="Conéctate a nuestra red de alta velocidad en todo el campus."
            />
            <ServiceCard
              icon={faBook}
              title="Biblioteca Central"
              description="Accede a miles de recursos académicos y espacios de estudio."
            />
            <ServiceCard
              icon={faBuilding}
              title="Oficinas Administrativas"
              description="Realiza trámites y consultas en nuestras oficinas."
            />
          </div>
          <div className="mt-12 text-center">
            <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300 flex items-center justify-center mx-auto">
              <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
              Explorar Directorio Completo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
    <FontAwesomeIcon icon={icon} className="text-4xl text-blue-500 mb-4" />
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default Wifi;
