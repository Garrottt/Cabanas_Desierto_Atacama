"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-stone-900">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
         <div className="absolute inset-0 opacity-60 bg-[url('https://images.unsplash.com/photo-1542315904-7a0e30a5db22?q=80&w=2938&auto=format&fit=crop')] bg-cover bg-center"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-stone-900/40"></div>
      </motion.div>
      
      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16"
      >
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5, delay: 0.3, ease: "easeOut" }}
        >
          <h1 className="text-6xl md:text-8xl font-serif text-white mb-6 drop-shadow-2xl tracking-tight leading-tight">
            Respira la Calma <br/><span className="text-brand-300 italic">del Desierto</span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-xl md:text-2xl text-stone-200 mb-12 max-w-2xl mx-auto font-light drop-shadow-md"
        >
          Refúgiate donde el silencio y las estrellas son tus únicos acompañantes.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a href="#reservas" className="px-10 py-4 bg-brand-600 text-white rounded-full text-lg font-medium hover:bg-brand-500 transition-all duration-300 shadow-[0_0_40px_rgba(180,112,70,0.4)] hover:shadow-[0_0_60px_rgba(180,112,70,0.6)] hover:-translate-y-1 w-full sm:w-auto">
            Consulta Disponibilidad
          </a>
          <a href="#cabanas" className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full text-lg font-medium hover:bg-white/20 transition-all duration-300 w-full sm:w-auto hover:-translate-y-1">
            Ver Cabañas
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
