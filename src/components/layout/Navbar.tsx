"use client";

import { useEffect, useState } from "react";
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

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${
          isScrolled || isMobileMenuOpen
            ? "border-white/20 bg-white/85 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.05)] backdrop-blur-2xl"
            : "border-transparent bg-transparent py-4 md:py-6"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex min-h-12 items-center justify-between gap-4">
            <div className="flex shrink-0 items-center">
              <a
                href="#inicio"
                className={`font-serif text-xl leading-none font-bold tracking-tight transition-colors duration-500 sm:text-2xl lg:text-3xl ${
                  isScrolled || isMobileMenuOpen
                    ? "text-desert-950"
                    : "text-white drop-shadow-md"
                }`}
              >
                Cabañas del Desierto
              </a>
            </div>

            <div className="hidden items-center space-x-10 md:flex">
              <a
                href="#experiencia"
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isScrolled
                    ? "text-stone-500 hover:text-brand-700"
                    : "text-stone-300 drop-shadow-sm hover:text-white"
                }`}
              >
                Experiencia
              </a>
              <a
                href="#cabanas"
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isScrolled
                    ? "text-stone-500 hover:text-brand-700"
                    : "text-stone-300 drop-shadow-sm hover:text-white"
                }`}
              >
                Cabañas
              </a>
              <a
                href="#reservas"
                className={`group relative overflow-hidden rounded-full px-8 py-3 text-sm font-medium tracking-wide shadow-xl transition-all duration-300 hover:-translate-y-0.5 ${
                  isScrolled
                    ? "bg-desert-950 text-white hover:shadow-[0_10px_20px_rgba(10,9,8,0.2)]"
                    : "bg-white text-desert-950 hover:shadow-[0_10px_20px_rgba(255,255,255,0.2)]"
                }`}
              >
                <span className="relative z-10">Reservar Ahora</span>
              </a>
            </div>

            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen((current) => !current)}
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                className={`grid h-11 w-11 place-items-center rounded-full border transition-colors ${
                  isScrolled || isMobileMenuOpen
                    ? "border-stone-200 bg-white text-desert-950 shadow-sm"
                    : "border-white/15 bg-white/10 text-white backdrop-blur-md drop-shadow-md"
                }`}
              >
                {isMobileMenuOpen ? <X size={30} /> : <Menu size={30} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-desert-950/95 px-6 pt-28 pb-10 shadow-2xl backdrop-blur-3xl md:hidden"
          >
            <div className="flex w-full max-w-sm flex-1 flex-col justify-center gap-5 self-center">
              <a
                href="#experiencia"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-3xl font-serif text-stone-200 transition-colors hover:text-brand-300"
              >
                Experiencia
              </a>
              <a
                href="#cabanas"
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-3xl border border-white/10 bg-white/5 px-6 py-5 text-3xl font-serif text-stone-200 transition-colors hover:text-brand-300"
              >
                Cabañas
              </a>
              <a
                href="#reservas"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 rounded-full bg-brand-600 px-8 py-5 text-center text-xl text-white shadow-xl transition-transform active:scale-95"
              >
                Reservar Estadía
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
