import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-white shadow-md fixed top-0 z-50"
    >
      <div className="max-w-[1200px] mx-auto px-4 h-[65px] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a href="#hero">
            <img
              src="https://i.imgur.com/wcJtcSC.png"
              alt="Logo Centro Terapéutico"
              className="h-10 w-auto"
            />
          </a>
          <h1 className="text-xl font-bold text-blue-700 whitespace-nowrap">
            Centro Terapéutico Integral
          </h1>
        </div>
        <nav className="flex gap-6">
          <a href="#about" className="text-gray-700 hover:text-blue-500">Nosotros</a>
          <a href="#services" className="text-gray-700 hover:text-blue-500">Servicios</a>
          <a href="#schedule" className="text-gray-700 hover:text-blue-500">Atención</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-500">Contacto</a>
        </nav>
      </div>
    </motion.header>

  )
}