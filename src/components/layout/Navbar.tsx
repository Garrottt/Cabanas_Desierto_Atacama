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
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/80 backdrop-blur-2xl border-white/20 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.05)]" 
            : "bg-transparent border-transparent py-8"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            <div className="flex-shrink-0 flex items-center">
              <span className={`font-serif text-3xl font-bold transition-colors duration-500 tracking-tight ${isScrolled || isMobileMenuOpen ? 'text-desert-950' : 'text-white drop-shadow-md'}`}>
                Cabañas del Desierto
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-10 items-center">
              <a href="#experiencia" className={`text-sm tracking-wide transition-colors font-medium ${isScrolled ? 'text-stone-500 hover:text-brand-700' : 'text-stone-300 hover:text-white drop-shadow-sm'}`}>Experiencia</a>
              <a href="#cabanas" className={`text-sm tracking-wide transition-colors font-medium ${isScrolled ? 'text-stone-500 hover:text-brand-700' : 'text-stone-300 hover:text-white drop-shadow-sm'}`}>Cabañas</a>
              <a href="#reservas" className={`relative overflow-hidden group text-sm tracking-wide px-8 py-3 rounded-full font-medium transition-all duration-300 shadow-xl hover:-translate-y-0.5 ${isScrolled ? 'bg-desert-950 text-white hover:shadow-[0_10px_20px_rgba(10,9,8,0.2)]' : 'bg-white text-desert-950 hover:shadow-[0_10px_20px_rgba(255,255,255,0.2)]'}`}>
                <span className="relative z-10">Reservar Ahora</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 focus:outline-none transition-colors ${isScrolled || isMobileMenuOpen ? 'text-desert-950' : 'text-white drop-shadow-md'}`}
              >
                {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-desert-950/95 backdrop-blur-3xl pt-32 px-6 flex flex-col items-center justify-center gap-10 md:hidden shadow-2xl"
          >
            <a 
              href="#experiencia" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-stone-300 text-4xl font-serif hover:text-brand-300 transition-colors"
            >
              Experiencia
            </a>
            <a 
              href="#cabanas" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-stone-300 text-4xl font-serif hover:text-brand-300 transition-colors"
            >
              Cabañas
            </a>
            <a 
              href="#reservas" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-brand-600 text-white px-12 py-5 rounded-full text-2xl mt-8 shadow-xl active:scale-95 transition-transform"
            >
              Reservar Estadía
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
