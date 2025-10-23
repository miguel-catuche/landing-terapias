import React from "react";
import { motion } from "framer-motion";

export default function ScheduleLocation() {
    return (
        <motion.section
            id="schedule"
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full min-h-screen px-6 py-20 bg-white flex flex-col items-center justify-center"
        >
            <h2 className="text-4xl font-bold text-blue-700 drop-shadow-sm mb-12 text-center">
                Atención al cliente
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl w-full">
                {/* Tabla de horarios */}
                <div className="w-full bg-blue-50 rounded-xl shadow-md p-6">
                    <h3 className="text-2xl font-semibold text-blue-800 mb-6 text-center">
                        Horarios de Atención
                    </h3>
                    <table className="w-full text-left text-gray-700">
                        <tbody>
                            <tr className="border-b border-blue-200">
                                <td className="py-3 font-medium">Lunes a Viernes</td>
                                <div className="flex flex-col">
                                    <td className="text-right">7:00 AM – 11:00 AM</td>
                                    <td className="text-right">2:00 PM – 6:00 PM</td>
                                </div>
                            </tr>
                            <tr className="border-b border-blue-200">
                                <td className="py-3 font-medium">Sábados</td>
                                <td className="py-3 text-right text-red-600 font-semibold">Cerrado</td>
                            </tr>
                            <tr>
                                <td className="py-3 font-medium">Domingos</td>
                                <td className="py-3 text-right text-red-600 font-semibold">Cerrado</td>
                            </tr>
                        </tbody>
                    </table>

                </div>

                {/* Ubicación en Google Maps con dirección institucional */}
                <div className="w-full rounded-xl shadow-md bg-blue-50 p-6 space-y-4">
                    <div className="text-center">
                        <h3 className="text-2xl font-semibold text-blue-800 mb-2">
                            Ubicación
                        </h3>
                        <p className="text-lg font-medium text-gray-800">
                            Cl. 34 #29-32, Palmira, Valle del Cauca
                        </p>
                    </div>
                    <div className="w-full h-[320px] rounded-lg overflow-hidden">
                        <iframe
                            title="Ubicación institucional"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15928.970263956788!2d-76.29942822023983!3d3.531366192423686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3a04e9284fa3f9%3A0x51bfbf2217bed566!2sCl.%2034%20%2329-32%2C%20Palmira%2C%20Valle%20del%20Cauca!5e0!3m2!1sen!2sco!4v1761176082052!5m2!1sen!2sco"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </motion.section>
    );
}
