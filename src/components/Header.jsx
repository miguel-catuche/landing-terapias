import React from "react";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full bg-[--color-bg-header] shadow-md md:fixed top-0 z-50"
    >
      <div className="max-w-[1200px] mx-auto px-4 h-[65px] flex items-center justify-between">
        {/* Logo + título */}
        <div className="flex items-center gap-3">
          <a href="#hero">
            <img
              src="https://res.cloudinary.com/dkmlivs50/image/upload/v1761868863/logofondo_pspjwu.png"
              alt="Logo Centro Terapéutico"
              className="h-12 sm:h-10 w-auto transition-all duration-300"
            />
          </a>
          <h1 className="text-lg sm:text-xl font-bold text-[--color-text-header] whitespace-normal sm:whitespace-nowrap leading-tight">
            Centro Terapéutico Integral
          </h1>

        </div>

        {/* Navegación */}
        <nav className="hidden md:flex gap-6">
          <a href="#about" className="text-[--color-navtext-header] hover:text-[--color-hover-header] transition-colors duration-200">Nosotros</a>
          <a href="#services" className="text-[--color-navtext-header] hover:text-[--color-hover-header] transition-colors duration-200">Servicios</a>
          <a href="#schedule" className="text-[--color-navtext-header] hover:text-[--color-hover-header] transition-colors duration-200">Atención</a>
          <a href="#contact" className="text-[--color-navtext-header] hover:text-[--color-hover-header] transition-colors duration-200">Contacto</a>
        </nav>
      </div>
    </motion.header>
  );
}
