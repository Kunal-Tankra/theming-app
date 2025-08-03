import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";
import { About as AboutPath, Contact as ContactPath, Home as HomePath } from "../router/path";
import { ReactComponent as Logo } from "../assets/logo.svg";

const Header = () => {
  const { theme, setTheme } = useTheme(); // Accessing current theme and setter from context

  // Function to generate class names dynamically for NavLinks based on active state
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-1 rounded transition-colors duration-300 ${
      isActive
        ? "bg-blue-500 text-white dark:bg-blue-600" // Active link styles
        : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700" // Inactive link hover styles
    }`;

  return (
    <header className="flex flex-wrap gap-4 justify-between items-center p-4 shadow-md fixed top-0 left-0 right-0 bg-white z-50 dark:bg-gray-800">
      {/* SVG Logo */}
      <Logo className="w-10 h-10 ml-5" />

      {/* Navigation links and theme switcher */}
      <nav className="flex flex-wrap items-center gap-2">
        {/* Navigation Link - Home */}
        <NavLink to={HomePath} className={navLinkClass}>
          Home
        </NavLink>

        {/* Navigation Link - About */}
        <NavLink to={AboutPath} className={navLinkClass}>
          About
        </NavLink>

        {/* Navigation Link - Contact */}
        <NavLink to={ContactPath} className={navLinkClass}>
          Contact
        </NavLink>

        {/* Theme selector dropdown */}
        <select
          className="ml-2 border p-1 rounded bg-white text-black dark:bg-gray-700 dark:text-white dark:border-gray-600"
          value={theme}
          onChange={(e) => setTheme(e.target.value as any)} // Updates theme in context
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </nav>
    </header>
  );
};

export default Header;
