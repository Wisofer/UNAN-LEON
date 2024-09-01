import React from "react";

const Wifi = () => {
  return (
    <div>
      <section className="bg-muted py-12 sm:py-16 lg:py-20">
        <div className="container grid gap-8 px-4 sm:px-6 lg:px-8 lg:grid-cols-2 lg:items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
              Directorio de Servicios
            </h2>
            <p className="text-muted-foreground">
              Descubre todos los servicios y recursos disponibles en el campus,
              desde bibliotecas hasta oficinas administrativas.
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
                    d="M10 1a1 1 0 00-1 1v2a1 1 0 00-1 1v1a1 1 0 00-1 1v1a1 1 0 00-1 1v1a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1v-1a1 1 0 00-1-1v-1a1 1 0 00-1-1v-1a1 1 0 00-1-1V4a1 1 0 00-1-1V2a1 1 0 00-1-1H10zm-1 2V2h2v1H9zM7 8v-1h6v1H7zm-2 2v-1h10v1H5zm2 2v-1h6v1H7zm-2 2v-1h10v1H5zm12 1H3v-1h12v1z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>Biblioteca Central</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Wifi;
