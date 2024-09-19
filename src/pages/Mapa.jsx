import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  faMapMarked,
  faListOl,
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
      coordenadas: [12.4353, -86.8779],
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
      coordenadas: [12.4354, -86.878],
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
      coordenadas: [12.4355, -86.8781],
    },
    {
      id: 4,
      nombre: "Aula 4",
      ubicacion: "Edificio de Ingeniería, 2do piso",
      imagenes: [imagen1, imagen3],
      indicaciones: [
        "Entra al campus por la puerta norte.",
        "Dirígete al Edificio de Ingeniería.",
        "Sube al segundo piso por las escaleras del ala oeste.",
        "El Aula 40 estará a tu derecha.",
      ],
      coordenadas: [12.4356, -86.8782],
    },
    {
      id: 5,
      nombre: "Aula 5",
      ubicacion: "Edificio de Medicina, 1er piso",
      imagenes: [imagen2, imagen4],
      indicaciones: [
        "Entra al campus por la puerta sur.",
        "Camina hacia el Edificio de Medicina.",
        "Entra y mantente en el primer piso.",
        "El Aula 50 estará en el pasillo principal.",
      ],
      coordenadas: [12.4357, -86.8783],
    },
    {
      id: 6,
      nombre: "Aula 6",
      ubicacion: "Edificio de Artes, 4to piso",
      imagenes: [imagen1, imagen2],
      indicaciones: [
        "Entra al campus por la puerta oeste.",
        "Dirígete al Edificio de Artes.",
        "Sube al cuarto piso usando el ascensor.",
        "El Aula 60 estará frente al ascensor.",
      ],
      coordenadas: [12.4358, -86.8784],
    },
    {
      id: 7,
      nombre: "Aula 7",
      ubicacion: "Edificio de Economía, 2do piso",
      imagenes: [imagen3, imagen4],
      indicaciones: [
        "Entra al campus por la puerta principal.",
        "Gira a la izquierda y camina hasta el Edificio de Economía.",
        "Sube al segundo piso.",
        "El Aula 70 estará al final del pasillo a tu izquierda.",
      ],
      coordenadas: [12.4359, -86.8785],
    },
    {
      id: 8,
      nombre: "Aula 8",
      ubicacion: "Edificio de Derecho, 3er piso",
      imagenes: [imagen1, imagen3],
      indicaciones: [
        "Entra al campus por la puerta este.",
        "Camina hacia el Edificio de Derecho.",
        "Sube al tercer piso por las escaleras centrales.",
        "El Aula 80 estará a tu derecha al salir de las escaleras.",
      ],
      coordenadas: [12.436, -86.8786],
    },
    {
      id: 9,
      nombre: "Aula 9",
      ubicacion: "Edificio de Química, 1er piso",
      imagenes: [imagen2, imagen4],
      indicaciones: [
        "Entra al campus por la puerta norte.",
        "Dirígete al Edificio de Química.",
        "Mantente en el primer piso.",
        "El Aula 90 estará en el ala este del edificio.",
      ],
      coordenadas: [12.4361, -86.8787],
    },
    {
      id: 10,
      nombre: "Aula 10",
      ubicacion: "Edificio de Biología, 2do piso",
      imagenes: [imagen1, imagen2],
      indicaciones: [
        "Entra al campus por la puerta sur.",
        "Camina hacia el Edificio de Biología.",
        "Sube al segundo piso por las escaleras del ala sur.",
        "El Aula 100 estará al final del pasillo principal.",
      ],
      coordenadas: [12.4362, -86.8788],
    },
    {
      id: 11,
      nombre: "Aula 11",
      ubicacion: "Edificio de Física, 3er piso",
      imagenes: [imagen3, imagen4],
      indicaciones: [
        "Entra al campus por la puerta oeste.",
        "Dirígete al Edificio de Física.",
        "Sube al tercer piso usando el ascensor.",
        "El Aula 110 estará a la izquierda al salir del ascensor.",
      ],
      coordenadas: [12.4363, -86.8789],
    },
    {
      id: 12,
      nombre: "Aula 12",
      ubicacion: "Edificio de Psicología, 1er piso",
      imagenes: [imagen1, imagen3],
      indicaciones: [
        "Entra al campus por la puerta principal.",
        "Gira a la derecha y camina hasta el Edificio de Psicología.",
        "Mantente en el primer piso.",
        "El Aula 120 estará cerca de la entrada principal del edificio.",
      ],
      coordenadas: [12.4364, -86.879],
    },
    {
      id: 13,
      nombre: "Dirección",
      ubicacion: "Edificio Administrativo, 2do piso",
      imagenes: [imagen2, imagen4],
      indicaciones: [
        "Entra al campus por la puerta principal.",
        "El Edificio Administrativo estará frente a ti.",
        "Sube al segundo piso.",
        "La oficina de Dirección estará al centro del pasillo.",
      ],
      coordenadas: [12.4365, -86.8791],
    },
    {
      id: 14,
      nombre: "CID",
      ubicacion: "Biblioteca Central, 1er piso",
      imagenes: [imagen1, imagen2],
      indicaciones: [
        "Entra al campus por la puerta este.",
        "Camina hacia la Biblioteca Central.",
        "El Centro de Información y Documentación (CID) estará en el primer piso.",
        "Entra por la puerta principal de la biblioteca y encontrarás el CID a tu derecha.",
      ],
      coordenadas: [12.4366, -86.8792],
    },
    {
      id: 15,
      nombre: "ATM",
      ubicacion: "Plaza Central del Campus",
      imagenes: [imagen3, imagen4],
      indicaciones: [
        "Entra al campus por cualquier puerta.",
        "Dirígete a la Plaza Central.",
        "El cajero automático (ATM) estará ubicado cerca de la fuente central.",
      ],
      coordenadas: [12.4367, -86.8793],
    },
    {
      id: 16,
      nombre: "AICAILA",
      ubicacion: "Edificio de Idiomas, 2do piso",
      imagenes: [imagen1, imagen3],
      indicaciones: [
        "Entra al campus por la puerta sur.",
        "Camina hacia el Edificio de Idiomas.",
        "Sube al segundo piso.",
        "AICAILA estará al final del pasillo a tu izquierda.",
      ],
      coordenadas: [12.4368, -86.8794],
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
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedAula.imagenes.map((imagen, index) => (
                    <img
                      key={index}
                      src={imagen}
                      alt={`Imagen ${index + 1}`}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                  <FontAwesomeIcon icon={faMapMarked} className="mr-2" />
                  Ubicación
                </h3>
                <iframe
                  width="100%"
                  height="250"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src={`https://www.openstreetmap.org/export/embed.html?bbox=${
                    selectedAula.coordenadas[1] - 0.002
                  }%2C${selectedAula.coordenadas[0] - 0.002}%2C${
                    selectedAula.coordenadas[1] + 0.002
                  }%2C${
                    selectedAula.coordenadas[0] + 0.002
                  }&layer=mapnik&marker=${selectedAula.coordenadas[0]}%2C${
                    selectedAula.coordenadas[1]
                  }`}
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-2 text-indigo-700">
                <FontAwesomeIcon icon={faListOl} className="mr-2" />
                Cómo llegar:
              </h3>
              <ol className="list-decimal list-inside text-gray-700">
                {selectedAula.indicaciones.map((indicacion, index) => (
                  <li key={index} className="mb-1">
                    {indicacion}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mapa;
