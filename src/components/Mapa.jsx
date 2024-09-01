import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faEnvelope,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";

import img from "../../public/img/img1.jpg";

const Mapa = () => {
  return (
    <div>
      <section id="orientation" className="py-12 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-800">
                Orientación
              </h2>
              <p className="text-gray-600 mb-6">
                Descubre cómo utilizar las herramientas virtuales de UNAN-León.
              </p>
              <div className="space-y-6">
                <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center">
                    <div className="text-blue-500 mr-4">
                      <FontAwesomeIcon
                        icon={faChalkboardTeacher}
                        className="text-2xl"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-gray-800">
                        Aulas Virtuales
                      </h3>
                      <p className="text-gray-600">
                        Aprende a acceder y navegar en las aulas virtuales de
                        tus cursos.
                      </p>
                      <button className="mt-2 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded px-4 py-2 text-sm transition-colors duration-300">
                        Ver Tutorial
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center">
                    <div className="text-green-500 mr-4">
                      <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-gray-800">
                        Correo Institucional
                      </h3>
                      <p className="text-gray-600">
                        Conoce cómo utilizar tu correo electrónico de UNAN-León.
                      </p>
                      <button className="mt-2 border border-green-500 text-green-500 hover:bg-green-500 hover:text-white rounded px-4 py-2 text-sm transition-colors duration-300">
                        Ver Tutorial
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-center">
                    <div className="text-purple-500 mr-4">
                      <FontAwesomeIcon icon={faWifi} className="text-2xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-2 text-gray-800">
                        WiFi del Campus
                      </h3>
                      <p className="text-gray-600">
                        Aprende a conectarte a la red WiFi del campus
                        universitario.
                      </p>
                      <button className="mt-2 border border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white rounded px-4 py-2 text-sm transition-colors duration-300">
                        Ver Tutorial
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={img}
                alt="Orientation"
                className="max-w-full rounded-lg shadow-lg"
                style={{ aspectRatio: "1 / 1", objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mapa;

// import React, { useEffect, useRef } from "react";
// import img from "../../public/img/img1.jpg"

// const Mapa = () => {
//   const mapRef = useRef(null);
//   const mapInstance = useRef(null);

//   useEffect(() => {
//     if (mapRef.current && !mapInstance.current) {
//       // Inicializar el mapa
//       mapInstance.current = L.map(mapRef.current).setView(
//         [12.4353, -86.8779],
//         15
//       ); // Coordenadas de León, Nicaragua

//       // Añadir capa de OpenStreetMap
//       L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(mapInstance.current);

//       // Estilos opcionales
//       mapInstance.current.getPane("tilePane").style.filter = "saturate(0%)"; // Desaturar colores

//       // Añadir marcador con popup
//       L.marker([12.4353, -86.8779])
//         .addTo(mapInstance.current)
//         .bindPopup("Ciencias y Tecnología UNAN-León")
//         .openPopup();
//     }

//     // Limpiar el mapa en el desmontaje del componente
//     return () => {
//       if (mapInstance.current) {
//         mapInstance.current.remove();
//         mapInstance.current = null;
//       }
//     };
//   }, []);

//   return (
//     <div>
//       <div
//         className="relative bg-muted py-12 sm:py-16 lg:py-20"
//         style={{ height: "100vh" }}
//       >
//         <div
//           ref={mapRef}
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//           }}
//         />
//         <div className="relative z-10 container grid gap-8 px-4 sm:px-6 lg:px-8 lg:grid-cols-2 lg:items-center">
//           <div className="space-y-6 bg-white bg-opacity-80 p-6 rounded-lg">
//             <div className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
//               Bienvenido a UNANGuide.edu.ni
//             </div>
//             <div className="text-muted-foreground">
//               Descubre y navega por el campus de la UNAN-León con nuestra
//               plataforma integral de guía y orientación.
//             </div>
//             <div className="flex flex-col gap-4 sm:flex-row">
//               <div
//                 className="w-full sm:w-auto bg-primary text-primary-foreground rounded-md px-4 py-2 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer"
//                 role="button"
//               >
//                 Explorar el Mapa
//               </div>
//               <div
//                 className="w-full sm:w-auto border border-muted rounded-md px-4 py-2 bg-background text-muted-foreground hover:bg-muted/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer"
//                 role="button"
//               >
//                 Ver Aulas y Horarios
//               </div>
//             </div>
//           </div>
//           <div className="relative">
//             <img
//               src={img}
//               width={600}
//               height={400}
//               alt="Campus Map"
//               className="rounded-lg object-cover"
//               style={{ aspectRatio: "600/400", objectFit: "cover" }}
//             />
//             <div className="absolute top-4 left-4 rounded-lg bg-background/80 px-4 py-2 backdrop-blur-sm">
//               <div className="flex items-center gap-2">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="24"
//                   height="24"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   className="h-5 w-5 text-primary"
//                 >
//                   <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
//                   <circle cx="12" cy="10" r="3"></circle>
//                 </svg>
//                 <div>Edificio Principal</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Mapa;
