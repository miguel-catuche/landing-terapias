import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#1e3a8a]"
    >
      <div
        className="absolute right-0 top-0 w-full md:w-1/2 h-full overflow-hidden z-0"
        style={{
          clipPath: "polygon(20% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      >
        <div
          className="relative w-full h-full bg-cover"
          style={{
            backgroundImage: `url('https://i.imgur.com/awI9NQN.jpeg')`,
            backgroundPosition: "10% center",
          }}
        >
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to left, rgba(30,58,138,0.95) 0%, rgba(30,58,138,0.2) 25%, transparent 55%)",
            }}
          />
        </div>
      </div>
      <div className="relative z-10 w-full max-w-[1200px] px-8 grid md:grid-cols-[3fr_2fr] gap-8 md:gap-16 items-center">
        <div className="flex flex-col justify-center items-start text-white space-y-8">
          <h2 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-lg">
            Centro Terapéutico Integral
          </h2>

          <h1 className="text-4xl md:text-5xl font-semibold text-blue-100 drop-shadow-sm tracking-wide">
            María Del Pilar Tamayo
          </h1>

          <p className="text-xl md:text-2xl italic font-light text-blue-100 max-w-md">
            “Cada sesión, un paso hacia tu mejor versión.”
          </p>

          <a
            href="https://api.whatsapp.com/send?phone=573137169950&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-lg bg-white text-blue-700 font-semibold text-lg shadow-lg hover:shadow-2xl hover:bg-blue-100 hover:text-blue-800 hover:scale-105 transition-all duration-300"
          >
            Contáctanos
          </a>
        </div>
        <div className="hidden md:block" />
      </div>
    </motion.section>
  );
}
