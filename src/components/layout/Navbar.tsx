"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/85 backdrop-blur-xl border-stone-200 py-3 shadow-sm" 
            : "bg-transparent border-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            <div className="flex-shrink-0 flex items-center">
              <span className={`font-serif text-2xl font-bold transition-colors duration-500 ${isScrolled || isMobileMenuOpen ? 'text-brand-800' : 'text-white drop-shadow-md'}`}>
                Cabañas del Desierto
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 items-center">
              <a href="#historia" className={`transition-colors font-medium ${isScrolled ? 'text-stone-600 hover:text-brand-700' : 'text-stone-100 hover:text-white drop-shadow-sm'}`}>Nuestra Historia</a>
              <a href="#cabanas" className={`transition-colors font-medium ${isScrolled ? 'text-stone-600 hover:text-brand-700' : 'text-stone-100 hover:text-white drop-shadow-sm'}`}>Cabañas</a>
              <a href="#reservas" className="bg-brand-600 text-white px-6 py-2.5 rounded-full hover:bg-brand-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-medium">
                Reservar
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 focus:outline-none transition-colors ${isScrolled || isMobileMenuOpen ? 'text-stone-800' : 'text-white drop-shadow-md'}`}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-xl pt-28 px-4 flex flex-col items-center gap-8 md:hidden shadow-2xl"
          >
            <a 
              href="#historia" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-stone-800 text-2xl font-serif hover:text-brand-600 transition-colors"
            >
              Nuestra Historia
            </a>
            <a 
              href="#cabanas" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-stone-800 text-2xl font-serif hover:text-brand-600 transition-colors"
            >
              Cabañas
            </a>
            <a 
              href="#reservas" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-brand-600 text-white px-10 py-4 rounded-full text-xl mt-4 shadow-lg active:scale-95 transition-transform"
            >
              Reservar Estadía
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
