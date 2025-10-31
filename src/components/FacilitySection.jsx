import React from "react";
import { motion } from "framer-motion";

export default function FacilitySection() {
  return (
    <motion.section
      id="facility"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full min-h-screen px-6 py-10 md:pt-20 bg-[--color-bg] flex flex-col items-center justify-center"
    >
      {/* Contenido principal */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="text-4xl font-bold text-[--color-primary-title] drop-shadow-sm mb-12 text-center">
          Nuestra Instalación
        </h2>

        {/* Contenedor del video */}
        <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg border border-solid border-gray-200 bg-white">
          <video
            className="w-full h-auto rounded-xl"
            src="https://res.cloudinary.com/dkmlivs50/video/upload/v1761868783/video_instalacion_uq9ia4.mp4"
            controls
            autoPlay
            muted
            loop
          />
        </div>
      </div>
    </motion.section>
  );
}
