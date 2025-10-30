import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
    return (
        <motion.section
            id="contact"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full min-h-[100vh] px-6 pt-20 pb-0 bg-[--color-bg]"
        >

            {/* Contenido principal */}
            <div className="relative z-10 max-w-6xl mx-auto">
                <h2 className="text-4xl font-bold text-[--color-primary-title] drop-shadow-sm mb-12 text-center">
                    Contáctanos
                </h2>

                <div className="flex flex-wrap justify-center gap-8">
                    {/* Tarjeta unificada: Teléfono + Correo */}
                    <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md space-y-8">
                        {/* Teléfono */}
                        <div className="flex items-start gap-4">
                            <div className="bg-[--color-bg-icon] p-3 rounded-full text-[--color-subtext]">
                                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[--color-subtext] mb-1">Teléfono</h3>
                                <p className="text-[--color-text] text-base mb-2">
                                    ¿Necesitas orientación o quieres agendar una cita? Comunícate con nosotros directamente y con gusto te atenderemos.
                                </p>
                                <p className="text-lg font-medium text-[--color-subtext]">+57 3137169950</p>
                            </div>
                        </div>

                        {/* Correo */}
                        <div className="flex items-start gap-4">
                            <div className="bg-[--color-bg-icon] p-3 rounded-full text-[--color-subtext]">
                                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                                    <rect x="2" y="4" width="20" height="16" rx="2" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-[--color-subtext] mb-1">Correo Electrónico</h3>
                                <p className="text-[--color-text] text-base mb-2">
                                    Escríbenos si tienes dudas, necesitas información o deseas coordinar servicios. Estamos para ayudarte.
                                </p>
                                <p className="text-lg font-medium text-[--color-subtext]">mapilartamayog@hotmail.es</p>
                            </div>
                        </div>
                    </div>
                    {/* Redes Sociales */}
                    <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md text-center">
                        <h3 className="text-2xl font-bold text-[--color-subtext] mb-4">Síguenos en redes</h3>
                        <p className="text[--color-text] mb-6">
                            Mantente al tanto de nuestras actividades y novedades institucionales.
                        </p>
                        <div className="flex items-center justify-center gap-6">
                            <a
                                href="https://m.facebook.com/itcpalmira/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-blue-500 transition hover:scale-105"
                                aria-label="Facebook"
                            >
                                <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://www.instagram.com/cterapeuticointegral"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-pink-500 transition hover:scale-105"
                                aria-label="Instagram"
                            >
                                <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                            <a
                                href="https://api.whatsapp.com/send?phone=573137169950&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n"
                                target="_blank"
                                rel="noreferrer"
                                className="text-gray-400 hover:text-green-500 transition hover:scale-105"
                                aria-label="WhatsApp"
                            >
                                <svg className="h-10 w-10" fill="currentColor" viewBox="0 0 448 512" aria-hidden="true">
                                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32 101.5 32 2 131.6 2 254c0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zM223.9 438.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                                </svg>
                            </a>

                        </div>
                    </div>
                </div>
            </div>
        </motion.section>

    )
}