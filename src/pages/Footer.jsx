import React from 'react';
import unan from '../../public/img/escudo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-400 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <img src={unan} alt="Logo" className="h-16 w-16 mb-4 animate-pulse" />
            <h2 className="text-2xl font-bold mb-4">UNAN-LEÓN</h2>
            <p className="text-sm text-center md:text-left">Excelencia académica y compromiso social</p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Enlaces Académicos</h3>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="hover:text-yellow-300 transition-colors duration-300">Facultades</a>
              <a href="#" className="hover:text-yellow-300 transition-colors duration-300">Biblioteca</a>
              <a href="#" className="hover:text-yellow-300 transition-colors duration-300">Acerca del creador</a>
            </nav>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl font-semibold mb-4">Contáctanos</h3>
            <div className="flex flex-col space-y-2">
              <a href="mailto:info@unan-leon.edu.ni" className="flex items-center hover:text-yellow-300 transition-colors duration-300">
                <span className="mr-2">📧</span>
                info@unan-leon.edu.ni
              </a>
              <a href="tel:+50523111000" className="flex items-center hover:text-yellow-300 transition-colors duration-300">
                <span className="mr-2">📞</span>
                +505 2311-1000
              </a>
              <p className="flex items-center">
                <span className="mr-2">📍</span>
                Ciencias y Tecnologia UNAN-León
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white border-opacity-30 flex flex-col items-center">
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-2xl hover:text-yellow-300 transition-colors duration-300">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#" className="text-2xl hover:text-yellow-300 transition-colors duration-300">
              <FontAwesomeIcon icon={faXTwitter} />
            </a>
            <a href="#" className="text-2xl hover:text-yellow-300 transition-colors duration-300">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
          <p className="text-sm text-center">&copy; {new Date().getFullYear()} Universidad Nacional Autónoma de Nicaragua, León. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
