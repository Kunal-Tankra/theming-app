import React, { createContext, useContext, useState, useEffect } from "react";

// Define the available theme types
type Theme = "theme1" | "theme2" | "theme3";

// Interface for the theme context, containing the current theme and a method to update it
interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

// Create a React context with an initial undefined value
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// ThemeProvider component to wrap around the part of the app where theme should be accessible
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>("theme1");

  // On initial render, retrieve theme from localStorage if it exists
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") as Theme;
    if (storedTheme) setThemeState(storedTheme);
  }, []);

  // Effect to add/remove dark mode class depending on the selected theme
  useEffect(() => {
    if (theme === "theme2") {
      document.documentElement.classList.add("dark"); // Enables dark mode
    } else {
      document.documentElement.classList.remove("dark"); // Disables dark mode
    }
  }, [theme]);

  // Updates theme state and persists it to localStorage
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Provide the current theme and the setTheme function to context consumers
  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};

// Custom hook to access the ThemeContext
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);

  // Throw an error if the hook is used outside of a ThemeProvider
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
};
