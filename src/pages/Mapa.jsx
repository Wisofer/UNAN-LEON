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
  const [tab, setTab] = useState("mapa");

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
      imagenes: [imagen3, imagen4],
      indicaciones: [
        "Entra por la puerta principal del campus.",
        "Gira a la izquierda y camina hasta el Edificio de Ciencias.",
        "El Aula 2 estará a tu derecha, claramente señalizada.",
      ],
      coordenadas: [12.4363, -86.8789],
    },
    {
      id: 3,
      nombre: "Aula 3",
      ubicacion: "Edificio de Ingeniería, 3er piso",
      imagenes: [imagen1, imagen2],
      indicaciones: [
        "Entra por la puerta principal del campus.",
        "Gira a la derecha y camina hasta el Edificio de Ingeniería.",
        "Sube al tercer piso por las escaleras principales.",
        "El Aula 3 estará a tu derecha, claramente señalizada.",
      ],
      coordenadas: [12.4373, -86.8799],
    },
    {
      id: 4,
      nombre: "Aula 4",
      ubicacion: "Edificio de Humanidades, 2do piso",
      imagenes: [imagen3, imagen4],
      indicaciones: [
        "Entra por la puerta principal del campus.",
        "Gira a la izquierda y camina hasta el Edificio de Humanidades.",
        "Sube al segundo piso por las escaleras principales.",
        "El Aula 4 estará a tu izquierda, claramente señalizada.",
      ],
      coordenadas: [12.4383, -86.8809],
    },
    {
      id: 5,
      nombre: "Aula 5",
      ubicacion: "Edificio de Ciencias Sociales, 1er piso",
      imagenes: [imagen1, imagen2],
      indicaciones: [
        "Entra por la puerta principal del campus.",
        "Gira a la derecha y camina hasta el Edificio de Ciencias Sociales.",
        "El Aula 5 estará a tu derecha, claramente señalizada.",
      ],
      coordenadas: [12.4393, -86.8819],
    },
    {
      id: 6,
      nombre: "Aula 6",
      ubicacion: "Edificio de Economía, 3er piso",
      imagenes: [imagen3, imagen4],
      indicaciones: [
        "Entra por la puerta principal del campus.",
        "Gira a la izquierda y camina hasta el Edificio de Economía.",
        "Sube al tercer piso por las escaleras principales.",
        "El Aula 6 estará a tu izquierda, claramente señalizada.",
      ],
      coordenadas: [12.4403, -86.8829],
    },
    {
      id: 7,
      nombre: "Aula 7",
      ubicacion: "Edificio de Filosofía, 2do piso",
      imagenes: [imagen1, imagen2],
      indicaciones: [
        "Entra por la puerta principal del campus.",
        "Gira a la derecha y camina hasta el Edificio de Filosofía.",
        "Sube al segundo piso por las escaleras principales.",
        "El Aula 7 estará a tu derecha, claramente señalizada.",
      ],
      coordenadas: [12.4413, -86.8839],
    },
    {
      id: 8,
      nombre: "Aula 8",
      ubicacion: "Edificio de Letras, 1er piso",
      imagenes: [imagen3, imagen4],
      indicaciones: [
        "Entra por la puerta principal del campus.",
        "Gira a la izquierda y camina hasta el Edificio de Letras.",
        "El Aula 8 estará a tu izquierda, claramente señalizada.",
      ],
      coordenadas: [12.4423, -86.8849],
    },
    {
      id: 9,
      nombre: "Aula 9",
      ubicacion: "Edificio de Matemáticas, 3er piso",
      imagenes: [imagen1, imagen2],
      indicaciones: [
        "Entra por la puerta principal del campus.",
        "Gira a la derecha y camina hasta el Edificio de Matemáticas.",
        "Sube al tercer piso por las escaleras principales.",
        "El Aula 9 estará a tu derecha, claramente señalizada.",
      ],
      coordenadas: [12.4433, -86.8859],
    },
    {
      id: 10,
      nombre: "Aula 10",
      ubicacion: "Edificio de Física, 2do piso",
      imagenes: [imagen3, imagen4],
      indicaciones: [
        "Entra por la puerta principal del campus.",
        "Gira a la izquierda y camina hasta el Edificio de Física.",
        "Sube al segundo piso por las escaleras principales.",
        "El Aula 10 estará a tu izquierda, claramente señalizada.",
      ],
      coordenadas: [12.4443, -86.8869],
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
            <div className="flex justify-between items-center mb-4">
              <div className="bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <button
                  onClick={() => setTab("mapa")}
                  className={`text-lg font-semibold ${tab === "mapa" ? "text-indigo-700" : "text-gray-700"} hover:text-indigo-700 transition-colors`}
                >
                  <FontAwesomeIcon icon={faMapMarked} className="mr-2" />
                  Mapa
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <button
                  onClick={() => setTab("imagenes")}
                  className={`text-lg font-semibold ${tab === "imagenes" ? "text-indigo-700" : "text-gray-700"} hover:text-indigo-700 transition-colors`}
                >
                  <FontAwesomeIcon icon={faImage} className="mr-2" />
                  Imágenes
                </button>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105">
                <button
                  onClick={() => setTab("indicaciones")}
                  className={`text-lg font-semibold ${tab === "indicaciones" ? "text-indigo-700" : "text-gray-700"} hover:text-indigo-700 transition-colors`}
                >
                  <FontAwesomeIcon icon={faListOl} className="mr-2" />
                  Cómo llegar
                </button>
              </div>
            </div>
            {tab === "mapa" && (
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
            )}
            {tab === "imagenes" && (
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
            )}
            {tab === "indicaciones" && (
              <ol className="list-decimal list-inside text-gray-700">
                {selectedAula.indicaciones.map((indicacion, index) => (
                  <li key={index} className="mb-1">
                    {indicacion}
                  </li>
                ))}
              </ol>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Mapa;
