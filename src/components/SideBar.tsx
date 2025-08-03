import { NavLink } from "react-router-dom";
import { About as AboutPath, Contact as ContactPath, Home as HomePath } from "../router/path";

const Sidebar = () => {
  // Function to dynamically generate class names based on whether the link is active
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 rounded text-sm font-medium transition-colors duration-300 ${
      isActive
        ? "bg-blue-500 text-white" // Active link styling
        : "text-gray-700 hover:bg-gray-200 dark:text-gray-200 dark:hover:bg-gray-700" // Inactive link styling
    }`;

  return (
    // Sidebar navigation container
    <nav className="fixed top-20 left-0 h-full w-48 bg-white dark:bg-gray-800 shadow-md p-4 z-40">
      <ul className="space-y-2">
        {/* Navigation Link to Home */}
        <li>
          <NavLink to={HomePath} className={navLinkClass}>
            Home
          </NavLink>
        </li>

        {/* Navigation Link to About */}
        <li>
          <NavLink to={AboutPath} className={navLinkClass}>
            About
          </NavLink>
        </li>

        {/* Navigation Link to Contact */}
        <li>
          <NavLink to={ContactPath} className={navLinkClass}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
