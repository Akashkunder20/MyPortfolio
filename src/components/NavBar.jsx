import React, { useState, useEffect } from "react";

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-2 md:top-6 left-1/2 transform -translate-x-1/2 z-50 w-full px-2">
      <nav className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-4 py-2 md:px-8 md:py-3 shadow-lg max-w-md mx-auto">
        <ul className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 md:gap-8 text-xs sm:text-sm md:text-base text-gray-200">
          {["home", "about", "skills", "projects", "contact"].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={activeSection === id ? "page" : undefined}
                className={`relative transition ${
                  activeSection === id
                    ? "text-white font-semibold"
                    : "hover:text-white"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
                {activeSection === id && (
                  <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-400"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
