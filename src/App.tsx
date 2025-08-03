import { useMemo } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import { useTheme } from "./context/ThemeContext";
import Router from "./router";

function App() {
  const { theme } = useTheme();
  const showSidebar = useMemo(() => {
    return theme === "theme2";
  }, [theme]);

  return (
    <div className={`app ${theme} min-h-screen transition-all duration-500`}>
      <Header />

      <div className="flex ">
        {showSidebar && (
          <aside className="w-64 min-h-screen bg-gray-100 dark:bg-gray-800 shadow-md p-4 pt-16 hidden md:block">
            <Sidebar />
          </aside>
        )}

        <main className="flex-1 p-4">
          <Router />
        </main>
      </div>
    </div>
  );
}

export default App;
