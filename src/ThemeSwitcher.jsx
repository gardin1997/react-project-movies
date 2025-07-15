import React, { useEffect, useState } from "react";

function ThemeSwitcher() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    if (saved) return saved === "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    const root = window.document.documentElement; // <html>
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(prev => !prev)}
      className="btn-dark"
    >
      {darkMode ? "🌞" : "🌚"}
    </button>
  );
}

export default ThemeSwitcher;
