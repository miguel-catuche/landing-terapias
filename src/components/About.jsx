import React from "react"
import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full min-h-screen bg-[--color-bg] flex items-center justify-center px-6 py-10 md:py-20 overflow-hidden"
    >
      {/* Fondo azul al lado derecho (como en el ejemplo de Clio) */}
      <div className="hidden md:block bg-lateral-about"></div>

      <div className="relative max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center z-10">
        {/* Columna izquierda: texto institucional */}
        <div className="space-y-6">
          <span className="text-sm font-semibold text-[--color-primary-title] uppercase tracking-wide">
            Sobre nosotros
          </span>
          <h2 className="text-4xl font-bold text-[--color-text]">
            ¿Quiénes somos?
          </h2>
          <p className="text-lg leading-relaxed text-[--color-text]">
            Somos un <strong>Centro Terapéutico Integral</strong> ubicado en Palmira, Valle del Cauca, dedicado al bienestar físico y emocional de nuestros pacientes.
            Desde el <strong>1 de Agosto de 1997</strong>, ofrecemos atención profesional, personalizada y humana, enfocada en promover una recuperación efectiva y duradera.
          </p>
          <p className="text-lg leading-relaxed text-[--color-text]">
            Estamos <strong>habilitados oficialmente</strong> por el <strong>Ministerio de Salud y Protección Social</strong>, bajo el grupo de servicio 
            <em> Apoyo Diagnóstico y Complementación Terapéutica</em>, modalidad <strong>739 - Fisioterapia</strong>. 
            Nuestro <strong>Distintivo de Habilitación de Servicios</strong> es <strong>DHSS0134802</strong>, garantizando el cumplimiento de los estándares de calidad exigidos para los servicios de salud en Colombia.
          </p>
        </div>

        {/* Columna derecha: imagen con fondo azul lateral */}
        <div className="relative flex justify-center">
          <div className="relative w-full h-80 md:h-[420px] rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://i.imgur.com/awI9NQN.jpeg"
              alt="Centro Terapéutico Integral María del Pilar Tamayo en Palmira, habilitado por el Ministerio de Salud de Colombia"
              className="w-full h-full object-cover rounded-xl"
            />
            <div className="caption-about">
              Distintivo de Habilitación de Servicios — Ministerio de Salud y Protección Social — 
              Grupo 739 Fisioterapia — Código DHSS0134802
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
