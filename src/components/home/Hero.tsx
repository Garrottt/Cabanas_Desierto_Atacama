"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Compass, Star, MapPin } from "lucide-react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.2]);

  return (
    <section ref={ref} id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden bg-desert-950">
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
         <div className="absolute inset-0 opacity-80 bg-[url('https://images.unsplash.com/photo-1542315904-7a0e30a5db22?q=80&w=2938&auto=format&fit=crop')] bg-cover bg-center"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-desert-950 via-desert-950/40 to-transparent"></div>
         <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-desert-950/20 to-desert-950/80"></div>
      </motion.div>
      
      <motion.div 
        style={{ opacity }}
        className="relative z-10 w-full px-4 max-w-7xl mx-auto mt-20 flex flex-col items-center"
      >
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
           className="mb-8 flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.2)]"
        >
          <MapPin size={16} className="text-brand-300" />
          <span className="text-sm font-light tracking-widest text-white/90 uppercase">San Pedro de Atacama</span>
          <span className="w-1 h-1 rounded-full bg-brand-400 mx-2"></span>
          <Star size={16} className="text-yellow-400 fill-yellow-400" />
          <span className="text-sm font-medium text-white/90">5.0 (48 res.)</span>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
           animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
           transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
           className="text-center"
        >
          <h1 className="text-5xl md:text-8xl lg:text-9xl font-serif text-white mb-6 drop-shadow-2xl tracking-tighter leading-[1.1]">
            Respira el <br/>
            <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-brand-200 via-brand-300 to-accent-300 font-light pr-2">
              silencio absoluto.
            </span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="text-lg md:text-2xl text-stone-300 mb-14 max-w-2xl text-center font-light leading-relaxed drop-shadow-lg"
        >
          Un refugio de lujo integrado en el desierto más árido del mundo. Conecta con el origen.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full px-4 sm:px-0"
        >
          <a href="#reservas" className="group relative flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 bg-gradient-to-r from-brand-600 to-brand-800 text-white rounded-full text-base sm:text-lg font-medium transition-all duration-300 shadow-[0_0_40px_rgba(180,112,70,0.3)] hover:shadow-[0_0_60px_rgba(180,112,70,0.6)] w-full sm:w-auto overflow-hidden border border-brand-500/30">
            <span className="relative z-10 tracking-wide">Reserva tu Estadía</span>
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </a>
          <a href="#experiencia" className="group flex items-center justify-center gap-3 px-8 py-4 sm:px-10 sm:py-5 bg-white/5 backdrop-blur-lg border border-white/15 text-white rounded-full text-base sm:text-lg font-light hover:bg-white/10 hover:border-white/30 transition-all duration-300 w-full sm:w-auto">
            <Compass size={20} className="text-brand-300 group-hover:rotate-45 transition-transform duration-500" />
            <span>Explorar el Oasis</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 1, delay: 2 }}
         className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-white/40 uppercase tracking-[0.3em] text-xs font-semibold">Descubre</span>
        <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
           className="w-[1px] h-16 bg-gradient-to-b from-white/50 to-transparent"
        />
      </motion.div>
    </section>
  );
}
