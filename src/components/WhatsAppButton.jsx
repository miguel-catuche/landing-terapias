import React from "react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://api.whatsapp.com/send?phone=573137169950&text=Hola%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      className="fixed bottom-6 left-6 z-50 bg-green-500 hover:bg-green-600 text-white font-semibold
                 h-16 w-16 hover:w-44 rounded-full shadow-lg flex items-center overflow-hidden
                 transition-all duration-300 group"
    >
      {/* Contenedor interno para mantener el centrado vertical */}
      <div className="flex items-center justify-start pl-3 w-full">
        {/* Ícono de WhatsApp */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="w-10 h-10 flex-shrink-0 text-white transition-transform duration-300 group-hover:scale-110 animate-bounce-slow"
        >
          <path d="M16.003 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.59 4.47 1.71 6.42L3.2 28.8l6.59-1.73a12.75 12.75 0 0 0 6.21 1.58h.01c7.06 0 12.8-5.74 12.8-12.8s-5.74-12.8-12.8-12.8zm0 23.2a10.4 10.4 0 0 1-5.3-1.45l-.38-.23-3.91 1.03 1.04-3.8-.25-.39a10.37 10.37 0 0 1-1.6-5.56c0-5.73 4.67-10.4 10.4-10.4s10.4 4.67 10.4 10.4-4.67 10.4-10.4 10.4zm5.7-7.84c-.31-.16-1.84-.91-2.13-1.01-.29-.11-.5-.16-.71.16s-.82 1.01-1.01 1.22c-.19.21-.36.24-.67.08a8.3 8.3 0 0 1-2.46-1.53 9.3 9.3 0 0 1-1.73-2.14c-.19-.33 0-.5.14-.66.14-.14.33-.36.5-.54.17-.18.23-.31.34-.52.11-.21.06-.4 0-.55-.07-.15-.71-1.71-.97-2.33-.26-.62-.53-.54-.75-.55h-.64c-.22 0-.58.08-.88.42s-1.15 1.13-1.15 2.76 1.19 3.2 1.36 3.42a11.9 11.9 0 0 0 4.63 4.07c.64.28 1.15.45 1.55.58.66.2 1.25.17 1.73.1.52-.08 1.6-.63 1.83-1.24.23-.61.23-1.13.16-1.24-.07-.11-.3-.17-.63-.33z" />
        </svg>

        {/* Texto que aparece al hacer hover */}
        <span className="whitespace-nowrap ml-2 opacity-0 group-hover:opacity-100 text-white transition-opacity duration-300 text-base">
          Contáctanos
        </span>
      </div>
    </a>
  );
}
