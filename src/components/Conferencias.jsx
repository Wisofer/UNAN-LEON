import React from "react";
import img from "../../public/img/aulavirtual.jpg"

const Conferencias = () => {
  return (
    <div>
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container grid gap-8 px-4 sm:px-6 lg:px-8 lg:grid-cols-2">
          <div className="relative">
            <img
              src={img}
              width={600}
              height={400}
              alt="Events"
              className="rounded-lg object-cover"
              
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
              Mantente al tanto de todas las actividades, conferencias y eventos
              que se llevan a cabo en el campus.
            </p>
            <button className="border border-gray-300 rounded-md py-2 px-4 text-gray-700 hover:bg-gray-100">
              Ver Calendario de Eventos
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conferencias;
