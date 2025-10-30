import React from "react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Terapia Física",
    image:
      "https://hospitalangeles.com/assets/img/imgservicios/terapia-fisica-y-rehabilitacion.webp",
    description:
      "Recuperación funcional y movilidad con enfoque personalizado.",
  },
  {
    title: "Terapia vestibular",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu6bPsjzd-6gfMwd37w6k4Jpxpz4cXilVgoA&s",
    description:
      "Tratamiento para mareo, vértigo y equilibrio corporal.",
  },
  {
    title: "Terapia Respiratoria",
    image:
      "https://www.respiravital.com/wp-content/uploads/2024/11/terapia-respiratoria-en-ninos.png",
    description:
      "Mejoramos la función pulmonar y la capacidad respiratoria.",
  },
  {
    title: "Terapia de piso pélvico",
    image:
      "https://staticnew-prod.topdoctors.com.co/article/13036/image/large/fisioterapia-del-piso-pelvico-1693590507-1693591334.png",
    description:
      "Fortalecimiento y rehabilitación del suelo pélvico.",
  },
  {
    title: "Drenaje Linfático Manual",
    image:
      "https://cuidateplus.marca.com/sites/default/files/styles/ratio_43/public/cms/2024-04/drenaje-linfatico.jpg.webp?itok=5eGouQxL",
    description:
      "Estimulación del sistema linfático para reducir inflamación.",
  },
  {
    title: "Acondicionamiento Físico",
    image:
      "https://s1.significados.com/foto/acondicionamiento-fisico-og.jpg",
    description:
      "Programas personalizados para mejorar fuerza y resistencia.",
  },
];

export default function Services() {
  return (
    <motion.section
      id="services"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full min-h-screen px-6 py-20 bg-[--color-bg] flex flex-col items-center justify-center"
    >

      {/* Contenido principal */}
      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="text-4xl font-bold text-[--color-primary-title] drop-shadow-sm mb-12 text-center">
          Nuestros Servicios
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl w-full">
          {services.map((service, index) => (
            <article
              key={index}
              className="overflow-hidden rounded-xl shadow-md transition hover:shadow-xl bg-white"
            >
              <img
                alt={service.title}
                src={service.image}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-[--color-text] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[--color-text]">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
