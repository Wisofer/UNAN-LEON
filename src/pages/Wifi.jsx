import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imagen1 from '../../public/img/img1.jpg';
import imagen2 from '../../public/img/img1.jpg';
import imagen3 from '../../public/img/img1.jpg';
import imagen4 from '../../public/img/img1.jpg';
import { faSearch, faMapMarkerAlt, faDirections, faImage } from '@fortawesome/free-solid-svg-icons';

const Wifi = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedAula, setSelectedAula] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const aulas = [
    { 
      id: 1, 
      nombre: 'Aula 15', 
      ubicacion: 'Edificio Central, 2do piso', 
      imagenes: [imagen1, imagen2, imagen3, imagen4],
      indicaciones: [
        "Entra por la puerta principal del campus.",
        "Gira a la derecha y camina hasta el Edificio Central.",
        "Sube al segundo piso por las escaleras principales.",
        "El Aula 15 estará a tu izquierda, claramente señalizada."
      ]
    },
    { 
      id: 2, 
      nombre: 'Aula 20', 
      ubicacion: 'Edificio de Ciencias, 1er piso', 
      imagenes: [imagen1, imagen2, imagen3, imagen4],
      indicaciones: [
        "Ingresa al campus por la entrada secundaria.",
        "Avanza recto hasta llegar al Edificio de Ciencias.",
        "Entra al edificio y mantente en el primer piso.",
        "El Aula 20 estará al final del pasillo a tu derecha."
      ]
    },
    // Agrega más aulas aquí
  ];

  const filteredAulas = aulas.filter(aula =>
    aula.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openModal = (aula) => {
    setSelectedAula(aula);
    setModalOpen(true);
  };

  return (
    <div className="container mx-auto px-4 py-8 bg-gradient-to-br from-blue-100 to-indigo-100">
      <h1 className="text-4xl font-bold mb-6 text-center text-indigo-800 animate-pulse">Mapa del Campus UNAN-León</h1>
      
      <div className="mb-8 relative">
        <input
          type="text"
          placeholder="Buscar aula (ej. Aula 15)"
          className="w-full p-4 pr-12 rounded-full border-2 border-indigo-300 focus:border-indigo-500 focus:outline-none transition-all duration-300"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <FontAwesomeIcon icon={faSearch} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-indigo-500 text-xl" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAulas.map(aula => (
          <div
            key={aula.id}
            className="bg-white rounded-lg shadow-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-105"
            onClick={() => openModal(aula)}
          >
            <h2 className="text-2xl font-semibold mb-2 text-indigo-700">{aula.nombre}</h2>
            <p className="text-gray-600 mb-4"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2" />{aula.ubicacion}</p>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition-colors">
              <FontAwesomeIcon icon={faDirections} className="mr-2" />Ver Direcciones
            </button>
          </div>
        ))}
      </div>

      {modalOpen && selectedAula && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg p-8 max-w-4xl w-full">
            <h2 className="text-3xl font-bold mb-4 text-indigo-800">{selectedAula.nombre}</h2>
            <p className="text-xl mb-4"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-indigo-500" />{selectedAula.ubicacion}</p>
            <div className="grid grid-cols-2 gap-4 mb-6">
              {selectedAula.imagenes.map((imagen, index) => (
                <img key={index} src={imagen} alt={`Paso ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
              ))}
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-indigo-700">Cómo llegar:</h3>
            <ol className="list-decimal list-inside mb-4 text-gray-700">
              {selectedAula.indicaciones.map((indicacion, index) => (
                <li key={index} className="mb-2">{indicacion}</li>
              ))}
            </ol>
            <button
              onClick={() => setModalOpen(false)}
              className="bg-indigo-500 text-white px-6 py-2 rounded-full hover:bg-indigo-600 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wifi;
