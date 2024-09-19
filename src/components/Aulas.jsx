import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboardTeacher,
  faEnvelope,
  faWifi,
  faPlay,
  faUser,
  faTimes
} from "@fortawesome/free-solid-svg-icons";

const Aulas = () => {
  const [displayedText, setDisplayedText] = useState("");
  const [videoId, setVideoId] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const text =
      "Aprende a utilizar las herramientas virtuales de UNAN-León a través de tutoriales multimedia.";
    let index = 0;

    const type = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
        setTimeout(type, 40);
      }
    };

    type();

    return () => {
      index = text.length;
    };
  }, []);

  const abrirVideo = (id) => {
    setVideoId(id);
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
    setVideoId("");
  };

  const tutoriales = [
    {
      icon: faUser,
      title: "Iniciar Sesión",
      description:
        "Aprende a iniciar sesión en la plataforma con tu usuario y contraseña.",
      color: "yellow",
      videoId: "g0LLlJZNVEM",
    },
    {
      icon: faChalkboardTeacher,
      title: "Aulas Virtuales",
      description:
        "Descubre cómo navegar y participar en las aulas virtuales.",
      color: "blue",
      videoId: "ytIezQSqq3w",
    },
    {
      icon: faEnvelope,
      title: "Correo Institucional",
      description:
        "Aprende a utilizar todas las funcionalidades de tu correo electrónico.",
      color: "green",
      videoId: "TTGAoZZwL0g",
    },
    {
      icon: faWifi,
      title: "WiFi del Campus",
      description:
        "Conoce cómo conectarte y navegar en la red WiFi del campus.",
      color: "red",
      videoId: "s2k3IdTY1Fc",
    },
  ];

  return (
    <div className="relative w-full">
      <section id="training" className="py-4 sm:py-8 md:py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 sm:mb-8 text-center">
            Capacitación
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground mb-4 sm:mb-6 text-center">
            {displayedText}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {tutoriales.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-md rounded-lg p-6 transition-transform duration-300 hover:shadow-lg hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  <FontAwesomeIcon
                    icon={item.icon}
                    className={`text-5xl md:text-6xl text-${item.color}-500 mb-4`}
                  />
                  <h3 className="text-lg md:text-xl font-medium mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-muted-foreground mb-4">
                    {item.description}
                  </p>
                  <button
                    className={`mt-2 bg-${item.color}-500 hover:bg-${item.color}-600 text-white font-medium py-2 px-4 rounded text-sm md:text-base transition duration-300 ease-in-out transform hover:scale-105`}
                    onClick={() => abrirVideo(item.videoId)}
                  >
                    <FontAwesomeIcon icon={faPlay} className="mr-2" />
                    Ver Tutorial
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-4/5 lg:w-3/4 xl:w-2/3 h-5/6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">{tutoriales.find(item => item.videoId === videoId)?.title || "Tutorial"}</h2>
              <button
                onClick={cerrarModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <FontAwesomeIcon icon={faTimes} className="text-3xl" />
              </button>
            </div>
            <div className="aspect-w-16 aspect-h-9 h-5/6">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Aulas;
