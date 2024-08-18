import React, { useEffect, useRef } from "react";

import L from "leaflet";
import "leaflet/dist/leaflet.css";
import img from "../public/img/img1.jpg";
import unan from "../public/img/unan.png";

function App() {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (mapRef.current && !mapInstance.current) {
      // Inicializar el mapa
      mapInstance.current = L.map(mapRef.current).setView(
        [12.4353, -86.8779],
        15
      ); // Coordenadas de León, Nicaragua

      // Añadir capa de OpenStreetMap
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(mapInstance.current);

      // Estilos opcionales
      mapInstance.current.getPane("tilePane").style.filter = "saturate(0%)"; // Desaturar colores

      // Añadir marcador con popup
      L.marker([12.4353, -86.8779])
        .addTo(mapInstance.current)
        .bindPopup("Ciencias y Tecnología UNAN-León")
        .openPopup();
    }

    // Limpiar el mapa en el desmontaje del componente
    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove();
        mapInstance.current = null;
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            className="flex items-center gap-2 font-bold text-blue-500"
            href="#"
          >
            <img src={unan} alt="Logo" className="h-8 w-8" />
            <span>UNAN-LEON</span>
          </a>
          <nav className="hidden space-x-4 md:flex">
            <a
              className="rounded-md px-3 py-2 transition-colors hover:bg-blue-200 hover:text-blue-700"
              href="#"
            >
              Mapa del Campus
            </a>
            <a
              className="rounded-md px-3 py-2 transition-colors hover:bg-blue-200 hover:text-blue-700"
              href="#"
            >
              Aulas y Horarios
            </a>
            <a
              className="rounded-md px-3 py-2 transition-colors hover:bg-blue-200 hover:text-blue-700"
              href="#"
            >
              Directorio de Servicios
            </a>
            <a
              className="rounded-md px-3 py-2 transition-colors hover:bg-blue-200 hover:text-blue-700"
              href="#"
            >
              Calendario de Eventos
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 hidden sm:inline-flex">
              Iniciar Sesión
            </button>
            <button className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 hidden sm:inline-flex">
              Registrarse
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <div
          className="relative bg-muted py-12 sm:py-16 lg:py-20"
          style={{ height: "100vh" }}
        >
          <div
            ref={mapRef}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
          <div className="relative z-10 container grid gap-8 px-4 sm:px-6 lg:px-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6 bg-white bg-opacity-80 p-6 rounded-lg">
              <div className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Bienvenido a UNANGuide.edu.ni
              </div>
              <div className="text-muted-foreground">
                Descubre y navega por el campus de la UNAN-León con nuestra
                plataforma integral de guía y orientación.
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <div
                  className="w-full sm:w-auto bg-primary text-primary-foreground rounded-md px-4 py-2 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer"
                  role="button"
                >
                  Explorar el Mapa
                </div>
                <div
                  className="w-full sm:w-auto border border-muted rounded-md px-4 py-2 bg-background text-muted-foreground hover:bg-muted/10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary cursor-pointer"
                  role="button"
                >
                  Ver Aulas y Horarios
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src={img}
                width={600}
                height={400}
                alt="Campus Map"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="absolute top-4 left-4 rounded-lg bg-background/80 px-4 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 text-primary"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <div>Edificio Principal</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="container grid gap-8 px-4 sm:px-6 lg:px-8 lg:grid-cols-2">
            <div className="relative">
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Classroom"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="absolute bottom-4 left-4 rounded-lg bg-background/80 px-4 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M15.78 4.22a.75.75 0 00-1.06 0L6.3 11.37 4.72 9.8a.75.75 0 00-1.06 1.06l1.58 1.58a.75.75 0 00.54.22h.02a.75.75 0 00.54-.22l8.42-8.42a.75.75 0 000-1.06zM5 12.3l8.7-8.7L16.3 5 7.6 13.7 5 12.3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Aula 101</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Aulas y Horarios
              </h2>
              <p className="text-muted-foreground">
                Encuentra información detallada sobre la ubicación, capacidad y
                horarios de cada aula y laboratorio en el campus.
              </p>
              <button className="border border-gray-300 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-100">
                Explorar Aulas y Horarios
              </button>
            </div>
          </div>
        </div>
        (
        <div className="bg-muted py-12 sm:py-16 lg:py-20">
          <div className="container grid gap-8 px-4 sm:px-6 lg:px-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Directorio de Servicios
              </h2>
              <p className="text-muted-foreground">
                Descubre todos los servicios y recursos disponibles en el
                campus, desde bibliotecas hasta oficinas administrativas.
              </p>
              <button className="border border-gray-300 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-100">
                Explorar Directorio
              </button>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Services"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="absolute top-4 right-4 rounded-lg bg-background/80 px-4 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a1 1 0 00-1 1v2a1 1 0 00-1 1v1a1 1 0 00-1 1v1a1 1 0 00-1 1v1a1 1 0 00-1 1v1a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1v-1a1 1 0 00-1-1v-1a1 1 0 00-1-1v-1a1 1 0 00-1-1V4a1 1 0 00-1-1V2a1 1 0 00-1-1H10zm-1 2V2h2v1H9zM7 8v-1h6v1H7zm-2 2v-1h10v1H5zm2 2v-1h6v1H7zm-2 2v-1h10v1H5zm12 1H3v-1h12v1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Biblioteca Central</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="container grid gap-8 px-4 sm:px-6 lg:px-8 lg:grid-cols-2">
            <div className="relative">
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Events"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="absolute bottom-4 left-4 rounded-lg bg-background/80 px-4 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 1a1 1 0 00-1 1v2a1 1 0 00-1 1v1h-1a1 1 0 00-1 1v1a1 1 0 00-1 1v1a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1v-1a1 1 0 00-1-1v-1a1 1 0 00-1-1V4a1 1 0 00-1-1V2a1 1 0 00-1-1H10zm-1 2V2h2v1H9zM7 8v-1h6v1H7zm-2 2v-1h10v1H5zm2 2v-1h6v1H7zm-2 2v-1h10v1H5zm12 1H3v-1h12v1z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Conferencia de Emprendimiento</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Calendario de Eventos
              </h2>
              <p className="text-muted-foreground">
                Mantente al tanto de todas las actividades, conferencias y
                eventos que se llevan a cabo en el campus.
              </p>
              <button className="border border-gray-300 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-100">
                Ver Calendario de Eventos
              </button>
            </div>
          </div>
        </div>
        <div className="bg-muted py-12 sm:py-16 lg:py-20">
          <div className="container grid gap-8 px-4 sm:px-6 lg:px-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Acceso a Plataformas
              </h2>
              <p className="text-muted-foreground">
                Aprende cómo acceder a las diferentes plataformas y sistemas de
                la UNAN-León, como el campus virtual, el sistema de gestión
                académica y más.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="border border-gray-300 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-100">
                  Acceder al Campus Virtual
                </button>
                <button className="border border-gray-300 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-100">
                  Gestión Académica
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Platforms"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="absolute top-4 right-4 rounded-lg bg-background/80 px-4 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H4zm0 2h12v12H4V5zm7 9v-4h-2v4H7l3 3 3-3h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Plataformas UNAN-León</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12 sm:py-16 lg:py-20">
          <div className="container grid gap-8 px-4 sm:px-6 lg:px-8 lg:grid-cols-2">
            <div className="relative">
              <img
                src="/placeholder.svg"
                width={600}
                height={400}
                alt="Submissions"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "600/400", objectFit: "cover" }}
              />
              <div className="absolute bottom-4 left-4 rounded-lg bg-background/80 px-4 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <svg
                    className="h-5 w-5 text-primary"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4 4a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V5a1 1 0 00-1-1H4zm1 2h10v10H5V6zm4 2v4H7l3 3 3-3h-3z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Subir Trabajos</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
                Subir Trabajos
              </h2>
              <p className="text-muted-foreground">
                Aprende cómo subir tus trabajos, tareas y proyectos a las
                diferentes plataformas de la UNAN-León de manera sencilla e
                interactiva.
              </p>
              <button className="border border-gray-300 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-100">
                Instrucciones para Subir Trabajos
              </button>
            </div>
          </div>
        </div>
        {/* Resto del contenido principal */}
        {/* ... */}
      </main>
      <footer className="border-t bg-background/80 py-6 backdrop-blur">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
            </svg>
            <span className="text-sm font-medium">UNANGuide.edu.ni</span>
          </div>
          <nav className="flex items-center gap-4">
            <a
              className="text-sm transition-colors hover:text-muted-foreground"
              href="#"
            >
              Términos de Uso
            </a>
            <a
              className="text-sm transition-colors hover:text-muted-foreground"
              href="#"
            >
              Política de Privacidad
            </a>
            <a
              className="text-sm transition-colors hover:text-muted-foreground"
              href="#"
            >
              Contacto
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default App;
