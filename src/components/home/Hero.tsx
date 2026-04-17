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
    <section
      ref={ref}
      id="inicio"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-desert-950"
    >
      <motion.div style={{ y }} className="absolute -top-[10%] inset-x-0 h-[120%] w-full">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542315904-7a0e30a5db22?q=80&w=2938&auto=format&fit=crop')] bg-cover bg-center opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-t from-desert-950 via-desert-950/40 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-desert-950/20 to-desert-950/80" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-8 lg:pt-36"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mb-6 flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-center shadow-[0_0_30px_rgba(0,0,0,0.2)] backdrop-blur-xl sm:mb-8 sm:px-5"
        >
          <MapPin size={16} className="text-brand-300" />
          <span className="text-sm font-light uppercase tracking-widest text-white/90">
            Huasco, Atacama
          </span>
          <span className="mx-2 h-1 w-1 rounded-full bg-brand-400" />
          <Star size={16} className="fill-yellow-400 text-yellow-400" />
          <span className="text-sm font-medium text-white/90">4.9</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)", scale: 0.95 }}
          animate={{ opacity: 1, filter: "blur(0px)", scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="mb-5 text-4xl leading-[1.05] tracking-tighter text-white drop-shadow-2xl sm:text-6xl md:mb-6 md:text-8xl lg:text-9xl">
            Respira el <br />
            <span className="bg-gradient-to-r from-brand-200 via-brand-300 to-accent-300 bg-clip-text pr-2 font-light italic text-transparent">
              silencio absoluto.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="mb-10 max-w-2xl text-center text-base font-light leading-relaxed text-stone-300 drop-shadow-lg sm:text-lg md:mb-14 md:text-2xl"
        >
          Un refugio de lujo integrado en el desierto más árido del mundo. Conecta con
          el origen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="pointer-events-none mb-8 hidden flex-col items-center gap-4 xl:flex"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/40">
            Descubre
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="h-16 w-[1px] bg-gradient-to-b from-white/50 to-transparent"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex w-full flex-col items-center justify-center gap-4 px-2 sm:flex-row sm:gap-6 sm:px-0"
        >
          <a
            href="#reservas"
            className="group relative flex w-full items-center justify-center overflow-hidden rounded-full border border-brand-500/30 bg-gradient-to-r from-brand-600 to-brand-800 px-7 py-4 text-base font-medium text-white shadow-[0_0_40px_rgba(180,112,70,0.3)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(180,112,70,0.6)] sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
          >
            <span className="relative z-10 tracking-wide">Reserva tu Estadía</span>
            <div className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-500 ease-out group-hover:translate-y-0" />
          </a>
          <a
            href="#cabanas"
            className="group flex w-full items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-7 py-4 text-base font-light text-white backdrop-blur-lg transition-all duration-300 hover:border-white/30 hover:bg-white/10 sm:w-auto sm:px-10 sm:py-5 sm:text-lg"
          >
            <Compass
              size={20}
              className="text-brand-300 transition-transform duration-500 group-hover:rotate-45"
            />
            <span>Explorar el Oasis</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
