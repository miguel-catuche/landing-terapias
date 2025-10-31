import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function FacilitySection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (videoRef.current) {
            if (entry.isIntersecting) {
              videoRef.current.play();
            } else {
              videoRef.current.pause();
            }
          }
        });
      },
      { threshold: 0.7 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) observer.unobserve(videoRef.current);
    };
  }, []);

  return (
    <motion.section
      id="facility"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full md:min-h-screen px-6 md:py-10 pb-12 pt-8 bg-[--color-bg] flex flex-col items-center justify-center"
    >
      <div className="relative z-10 w-full flex flex-col items-center">
        <h2 className="text-4xl font-bold text-[--color-primary-title] drop-shadow-sm md:mb-12 mb-8 text-center">
          Nuestra Instalación
        </h2>

        <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg border border-solid border-gray-200 bg-white">
          <video
            ref={videoRef}
            className="w-full h-auto rounded-xl"
            src="https://res.cloudinary.com/dkmlivs50/video/upload/v1761868783/video_instalacion_uq9ia4.mp4"
            controls
            muted
            loop
          />
        </div>
      </div>
    </motion.section>
  );
}
