import React, { useState, useEffect } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import unan from "../../public/img/escudo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import Footer from "../pages/Footer";

const Layout = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); // Ajusta este tiempo según lo que desees que dure el loader

    return () => clearTimeout(timer);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="relative min-h-screen flex flex-col">
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-80 z-50">
          <img src={unan} alt="UNAN Logo" className="w-32 h-32 animate-spin" />
        </div>
      )}
      <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold text-blue-500"
          >
            <img src={unan} alt="Logo" className="h-8 w-8" />
            <span>UNAN-LEON</span>
          </Link>
          <nav
            className={`md:flex md:space-x-4 ${
              menuOpen ? "block" : "hidden"
            } absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-gray-100 md:bg-transparent shadow-md md:shadow-none`}
          >
            <Link
              to="/orientacion"
              className="block md:inline-block rounded-md px-3 py-2 transition-colors hover:bg-blue-200 hover:text-blue-700"
            >
              Orientación
            </Link>
            <Link
              to="/aulas-virtuales"
              className="block md:inline-block rounded-md px-3 py-2 transition-colors hover:bg-blue-200 hover:text-blue-700"
            >
              Aulas Virtuales
            </Link>
            <Link
              to="/correo-institucional"
              className="block md:inline-block rounded-md px-3 py-2 transition-colors hover:bg-blue-200 hover:text-blue-700"
            >
              Correo Institucional
            </Link>
            <Link
              to="/wifi"
              className="block md:inline-block rounded-md px-3 py-2 transition-colors hover:bg-blue-200 hover:text-blue-700"
            >
              WiFi del Campus
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <button 
              className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 hidden sm:inline-flex"
              onClick={handleLogin}
            >
              Iniciar Sesión
            </button>
            <button 
              className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white hover:bg-blue-700 h-10 px-4 py-2 hidden sm:inline-flex"
              onClick={handleRegister}
            >
              Registrarse
            </button>
            <button className="md:hidden text-2xl" onClick={toggleMenu}>
              <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
            </button>
          </div>
        </div>
      </header>
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
