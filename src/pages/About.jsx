"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const creators = [
  {
    name: 'William Fernando Borge Vanegas',
    role: 'Creador del proyecto, ex estudiante de la carrera de Ingeniería Telemática, Plan 2019, de la UNAN-León',
    email: 'william.borge@unanleon.edu.ni',
    phone: '+505 8153 9569',
    imgSrc: 'https://img.freepik.com/foto-gratis/firewall-datos-negro_1150-1733.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1727568000&semt=ais_hybrid',
  },
  {
    name: 'Freddy Ariel Ocon Paz',
    role: 'Creador del proyecto, ex estudiante de la carrera de Ingeniería Telemática, Plan 2019, de la UNAN-León',
    email: 'freddy.ocon@unanleon.edu.ni',
    phone: '+505 5732 8906',
    imgSrc: 'https://t4.ftcdn.net/jpg/05/50/95/87/360_F_550958748_OeGcRonEUNoVhd0wjd9zSEMhLFIGO9Bt.jpg',
  },
]

const CreatorCard = ({ creator, onHover, isHovered }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300 hover:scale-105 relative"
      onMouseEnter={onHover}
      onMouseLeave={() => isHovered(false)}
    >
      <div className="relative">
        <img src={creator.imgSrc} alt={creator.name} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70" />
        <div className="absolute bottom-0 left-0 p-6 text-white">
          <h2 className="text-3xl font-bold mb-2">{creator.name}</h2>
          <p className="text-lg">{creator.role}</p>
        </div>
      </div>
      <div className="p-6 space-y-4">
        <a href={`mailto:${creator.email}`} className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
          <EmailIcon /> {creator.email}
        </a>
        <a href={`tel:${creator.phone}`} className="flex items-center text-indigo-600 hover:text-indigo-800 transition-colors duration-300">
          <PhoneIcon /> {creator.phone}
        </a>
      </div>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute inset-0 bg-indigo-800 bg-opacity-90 flex items-center justify-center"
        >
          <div className="text-white text-center p-6">
            <h3 className="text-2xl font-bold mb-4">¡Conéctate conmigo!</h3>
            <p className="mb-4">Estoy siempre dispuesto a colaborar en nuevos proyectos y compartir ideas innovadoras.</p>
            <button className="bg-white text-indigo-800 font-bold py-2 px-4 rounded-full hover:bg-indigo-100 transition-colors duration-300">
              Enviar mensaje
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  )
}

const EmailIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

export default function About() {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!event.target.closest('.creator-card')) {
        setHoveredIndex(null)
      }
    }

    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center text-indigo-800 mb-12"
        >
          Acerca de los Creadores
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-xl text-gray-700 text-center mb-16 max-w-3xl mx-auto"
        >
          Este proyecto fue creado como tema esencial de tesis para el Área de Conocimiento de la Universidad UNAN-León.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {creators.map((creator, index) => (
            <CreatorCard
              key={index}
              creator={creator}
              onHover={() => setHoveredIndex(index)}
              isHovered={hoveredIndex === index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
