import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import imagen1 from "../../public/img/img1.jpg";
import imagen2 from "../../public/img/img1.jpg";
import imagen3 from "../../public/img/img1.jpg";
import imagen4 from "../../public/img/img1.jpg";
import {
  faSearch,
  faMapMarkerAlt,
  faDirections,
  faImage,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const Mapa = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedAula, setSelectedAula] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const aulas = [
    {
      id: 1,
      nombre: "Aula 1",
      ubicacion: "Edificio Central, 2do piso",
      imagenes: [imagen1, imagen2],
      indicaciones: [
        "Entra por la puerta principal del campus.",
        "Gira a la derecha y camina hasta el Edificio Central.",
        "Sube al segundo piso por las escaleras principales.",
        "El Aula 15 estará a tu izquierda, claramente señalizada.",
      ],
      coordenadas: { lat: 12.4353, lng: -86.8779 },
    },
    {
      id: 2,
      nombre: "Aula 2",
      ubicacion: "Edificio de Ciencias, 1er piso",
      imagenes: [imagen1, imagen2],
      indicaciones: [
        "Ingresa al campus por la entrada secundaria.",
        "Avanza recto hasta llegar al Edificio de Ciencias.",
        "Entra al edificio y mantente en el primer piso.",
        "El Aula 20 estará al final del pasillo a tu derecha.",
      ],
      coordenadas: { lat: 12.4354, lng: -86.878 },
    },
    {
      id: 3,
      nombre: "Aula 3",
      ubicacion: "Edificio de Humanidades, 3er piso",
      imagenes: [imagen3, imagen4],
      indicaciones: [
        "Entra al campus por la puerta este.",
        "Camina hacia el Edificio de Humanidades.",
        "Sube al tercer piso.",
        "El Aula 30 estará al fondo del pasillo.",
      ],
      coordenadas: { lat: 12.4355, lng: -86.8781 },
    },
  ];

  const filteredAulas = aulas.filter((aula) =>
    aula.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (aula) => {
    setSelectedAula(aula);
    setModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-blue-100 to-indigo-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-800 animate-pulse">
        Mapa del Area de Conocimiento, UNAN-León
      </h1>

      <div className="mb-8 relative">
        <input
          type="text"
          placeholder="Buscar aula (ej. Aula 15)"
          className="w-full p-4 pr-12 rounded-full border-2 border-indigo-300 focus:border-indigo-500 focus:outline-none transition-all duration-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FontAwesomeIcon
          icon={faSearch}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-indigo-500 text-xl"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAulas.map((aula) => (
          <div
            key={aula.id}
            className="bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105"
            onClick={() => openModal(aula)}
          >
            <h2 className="text-2xl font-semibold mb-2 text-indigo-700">
              {aula.nombre}
            </h2>
            <p className="text-gray-600 mb-4">
              <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />
              {aula.ubicacion}
            </p>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition-colors">
              <FontAwesomeIcon icon={faDirections} className="mr-2" />
              Ver Direcciones
            </button>
          </div>
        ))}
      </div>

      {modalOpen && selectedAula && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-indigo-800">
                {selectedAula.nombre}
              </h2>
              <button
                onClick={() => setModalOpen(false)}
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <FontAwesomeIcon icon={faTimes} className="text-2xl" />
              </button>
            </div>
            <p className="text-lg mb-4">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="mr-2 text-indigo-500"
              />
              {selectedAula.ubicacion}
            </p>

            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-1/2">
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                  <FontAwesomeIcon icon={faImage} className="mr-2" />
                  Imágenes
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {selectedAula.imagenes.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`Imagen ${index + 1}`}
                      className="w-full rounded-lg"
                    />
                  ))}
                </div>
              </div>
              <div className="w-full lg:w-1/2">
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                Mapa
              </h3>
              <LoadScript googleMapsApiKey="AIzaSyCm3RJRDLfKYPwrZoKXP8aVoNq_Ji3e7wc">
                <GoogleMap
                  mapContainerStyle={{
                    height: "250px",
                    width: "100%",
                  }}
                  center={selectedAula.coordenadas}
                  zoom={15}
                >
                  <Marker position={selectedAula.coordenadas} />
                </GoogleMap>
              </LoadScript>
            </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                  Indicaciones
                </h3>
                <ul className="list-disc list-inside">
                  {selectedAula.indicaciones.map((ind, index) => (
                    <li key={index} className="text-gray-700">
                      {ind}
                    </li>
                  ))}
                </ul>
              </div>
            </div>


          </div>
        </div>
      )}
    </div>
  );
};

export default Mapa;
