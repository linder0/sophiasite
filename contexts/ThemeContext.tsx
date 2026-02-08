"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { themes, Theme } from "@/lib/themes";

interface ThemeContextType {
  theme: Theme;
  randomizeTheme: () => number;
  getThemeIndex: () => number;
  setTheme: (index: number) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [themeIndex, setThemeIndex] = useState(0);
  const [theme, setTheme] = useState(themes[0]);

  useEffect(() => {
    // Load saved theme from localStorage
    const savedIndex = localStorage.getItem("themeIndex");
    if (savedIndex !== null) {
      const index = parseInt(savedIndex);
      setThemeIndex(index);
      setTheme(themes[index]);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.style.setProperty("--bg-color", theme.background);
    document.documentElement.style.setProperty("--text-color", theme.text);
    document.documentElement.style.setProperty("--border-color", theme.border);
  }, [theme]);

  const randomizeTheme = () => {
    // Generate a random index different from current
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * themes.length);
    } while (newIndex === themeIndex && themes.length > 1);

    setThemeIndex(newIndex);
    setTheme(themes[newIndex]);
    localStorage.setItem("themeIndex", newIndex.toString());
    return newIndex;
  };

  const getThemeIndex = () => {
    return themeIndex;
  };

  const setThemeByIndex = (index: number) => {
    setThemeIndex(index);
    setTheme(themes[index]);
    localStorage.setItem("themeIndex", index.toString());
  };

  return (
    <ThemeContext.Provider value={{ theme, randomizeTheme, getThemeIndex, setTheme: setThemeByIndex }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
