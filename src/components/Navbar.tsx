import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1
            className={`font-quicksand text-2xl font-bold ${
              isScrolled ? "text-pink-500" : "text-white"
            }`}
          >
            Eclat_by_aaliyah
          </h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {["home", "portfolio", "contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize font-medium hover:text-pink-400 transition-colors ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {item === "home"
                ? "Home"
                : item === "portfolio"
                ? "Our Work"
                : "Contact"}
            </button>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`${
              isScrolled ? "text-pink-500" : "text-white"
            } focus:outline-none`}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-md py-4 px-4 transition-all duration-300">
          <div className="flex flex-col space-y-4">
            {["home", "portfolio", "contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="capitalize font-medium text-gray-700 hover:text-pink-400 transition-colors text-left py-2"
              >
                {item === "home"
                  ? "Home"
                  : item === "portfolio"
                  ? "Our Work"
                  : "Contact"}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
