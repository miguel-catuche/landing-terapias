import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <motion.section
      id="hero"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Fondo con imagen y degradado vertical */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://i.imgur.com/awI9NQN.jpeg')`,
        }}
      >
        <div
          className="bg-hero-gradient"
        />
      </div>

      {/* Contenido principal centrado */}
      <div className="relative z-10 w-full max-w-[900px] px-6 md:pt-32 pt-10 md:pb-0 pb-10 text-center text-[--color-primary-hero] space-y-8">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg text-[] ">
          Centro Terapéutico Integral <br /> María Del Pilar Tamayo
        </h1>

        <p className="text-xl md:text-2xl italic font-light text-[--color-sub-hero] max-w-2xl mx-auto">
          “Cada sesión, un paso hacia tu mejor versión.”
        </p>

        <a
          href="https://api.whatsapp.com/send?phone=573137169950&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-4 rounded-lg bg-[--color-bg-button] text-[--color-text-button] font-semibold text-lg shadow-lg hover:shadow-2xl hover:bg-[--color-bghover-button] hover:text-[--color-texthover-button] hover:scale-105 transition-all duration-300"
          title="Contactar por WhatsApp"
        >
          Contáctanos
        </a>

        {/* Distintivo institucional estilo glass */}
        <div className="mx-auto mt-6 w-full max-w-[475px] bg-white/20 backdrop-blur-md border border-[--color-glass-border] rounded-xl shadow-lg px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between gap-3 sm:gap-4 text-[--color-primary-hero]">
          {/* Logo institucional */}
          <div className="flex-shrink-0 pr-3 sm:pr-4 border-r border-[--color-glass-divider]">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/2b/Logo_del_Ministerio_de_Salud_de_Colombia_%282022-2026%29.png"
              alt="Logo Ministerio de Salud"
              className="h-8 w-auto sm:h-10 object-contain"
            />
          </div>

          {/* Texto institucional */}
          <div className="flex-1">
            <p className="text-xs sm:text-sm leading-relaxed">
              Distintivo de Habilitación de Servicios otorgado por el Ministerio de Salud y Protección Social.<br />
              Apoyo Diagnóstico y Complementación Terapéutica.
            </p>
          </div>
        </div>

      </div>
    </motion.section>
  );
}
