import { useEffect, useState } from "react";
import Menubar from "./components/Menubar";
import About from "./components/About";
import Work from "./components/Work";
import Tools from "./components/Tools";
import Contact from "./components/Contact";
import { AnimatePresence } from "motion/react";

type Page = "menu" | "about" | "experience" | "tools" | "contact";

function App() {
  const [currentPage, setCurrentPage] = useState<Page>("menu");

  useEffect(() => {
    const handleBackToMenu = (e: KeyboardEvent) => {
      if (e.key === "Backspace" || e.key === "Escape") {
        setCurrentPage("menu");
      }
    };

    window.addEventListener("keydown", handleBackToMenu);
    return () => window.removeEventListener("keydown", handleBackToMenu);
  }, []);

  return (
    <div className="main-bg">
      <div className="flex flex-col border-8 flex-1 min-h-full">
        <AnimatePresence mode="wait">
          {currentPage === "menu" && (
            <Menubar onNavigate={(target) => setCurrentPage(target)} />
          )}
          {currentPage === "about" && <About />}
          {currentPage === "experience" && <Work />}
          {currentPage === "tools" && <Tools />}
          {currentPage === "contact" && <Contact />}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
