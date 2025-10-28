import React from "react"
import { motion } from "framer-motion"

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Imagen de fondo con degradado vertical */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('https://i.imgur.com/awI9NQN.jpeg')`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.1) 0%, rgba(30,58,138,0.3) 40%, rgba(30,58,138,0.85) 100%)",
          }}
        />
      </div>

      {/* Tarjeta de contenido institucional */}
      <div className="relative z-10 max-w-3xl w-full bg-white/90 backdrop-blur-md shadow-2xl rounded-xl border border-gray-200 p-10 space-y-6">
        <h2 className="text-4xl font-bold text-[var(--color-primary)] text-center">
          Sobre Nosotros
        </h2>

        <p className="text-lg text-gray-800 leading-relaxed text-center">
          Somos un <strong>centro de fisioterapia</strong> ubicado en Palmira, Valle del Cauca, comprometido con el bienestar físico y emocional de nuestros pacientes. Desde el <strong>29 de marzo de 2007</strong>, hemos brindado atención profesional y personalizada, guiados por un enfoque integral que combina experiencia clínica y sensibilidad humana.
        </p>

        <p className="text-lg text-gray-800 leading-relaxed text-center">
          Estamos <strong>habilitados oficialmente</strong> por el <strong>Ministerio de Salud y Protección Social</strong> bajo el grupo de servicio <em>Apoyo Diagnóstico y Complementación Terapéutica</em>, en la modalidad <strong>739 - Fisioterapia</strong>. Nuestro distintivo único de habilitación es <strong>DHSS0134802</strong>, lo que garantiza que cumplimos con todos los estándares de calidad exigidos por la normativa nacional.
        </p>
      </div>
    </motion.section>
  )
}
