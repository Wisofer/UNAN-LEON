import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import img from "../public/img/img1.jpg";
import unan from "../public/img/escudo.png";
import Mapa from "./components/Mapa";
import Aulas from "./components/Aulas";
import Wifi from "./components/Wifi";
import Conferencias from "./components/Conferencias";
import InteractionSection from "./components/InteractionSection";
import SupportSection from "./components/SupportSection";

function App() {
  

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
             Orientación
            </a>
            <a
              className="rounded-md px-3 py-2 transition-colors hover:bg-blue-200 hover:text-blue-700"
              href="#"
            >
              Aulas Virtuales
            </a>
            <a
              className="rounded-md px-3 py-2 transition-colors hover:bg-blue-200 hover:text-blue-700"
              href="#"
            >
              Correo Institucional

            </a>
            <a
              className="rounded-md px-3 py-2 transition-colors hover:bg-blue-200 hover:text-blue-700"
              href="#"
            >
              WiFi del Campus

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
      <Aulas />
      <Wifi />
      <InteractionSection />
      <SupportSection />



        {/* Resto del contenido principal */}
        {/* ... */}
      </main>
      <footer className="border-t bg-background/80 py-6 backdrop-blur">
        <div className="container flex flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <img src={unan} alt="Logo" className="h-8 w-8" />
            <span>UNAN-LEON</span>
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
