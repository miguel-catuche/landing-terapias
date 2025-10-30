import React, { useEffect, useState } from "react";

const themes = [
  { id: "theme-ocean", label: "Azul suave" },
  { id: "theme-sunset", label: "Naranja suave" },
  { id: "theme-forest", label: "Verde suave" },
  { id: "theme-blossom", label: "Rosa Pastel" },
  { id: "theme-tech", label: "Azul Indigo" },
  { id: "theme-desert", label: "Dorado suave" },
  { id: "theme-sunflower", label: "Amarillo suave" },
  { id: "theme-deepforest", label: "Verde menta" },
  { id: "theme-autumn", label: "Naranja pastel" },
  { id: "theme-sakura", label: "Rosa fuerte" },
  { id: "theme-retro", label: "Rojo suave" },
  { id: "theme-arctic", label: "Azul fuerte" },
  { id: "theme-olive", label: "Oliva" },
  { id: "theme-lavender", label: "Lavanda" },
  { id: "theme-mint", label: "Menta" },
  { id: "theme-coral", label: "Coral" },
  { id: "theme-slate", label: "Gris elegante" },
];


export default function ThemeSelector() {
  const [currentTheme, setCurrentTheme] = useState("theme-ocean");

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved) {
      setCurrentTheme(saved);
      document.body.className = saved;
    } else {
      document.body.className = currentTheme;
    }
  }, []);

  const handleChange = (e) => {
    const selected = e.target.value;
    setCurrentTheme(selected);
    document.body.className = selected;
    localStorage.setItem("theme", selected);
  };

  return (
    <div className="fixed bottom-4 right-4 bg-[--color-bg-header] shadow-xl rounded-xl p-4 z-50 border border-[--color-glass-border] backdrop-blur-md transition-all duration-500">
      <label
        htmlFor="theme"
        className="block text-sm font-semibold mb-2 text-[--color-text]"
      >
        Paleta de colores
      </label>

      <select
        id="theme"
        value={currentTheme}
        onChange={handleChange}
        className="w-full p-2 rounded-md border text-[--color-text] bg-[--color-bg] border-[--color-glass-border] focus:ring-2 focus:ring-[--color-primary] outline-none transition"
      >
        {themes.map((theme) => (
          <option key={theme.id} value={theme.id}>
            {theme.label}
          </option>
        ))}
      </select>
    </div>
  );
}
