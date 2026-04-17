"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Compass, Star, MapPin } from "lucide-react";
import LocalFirstImage from "@/components/shared/LocalFirstImage";
import { heroMedia } from "@/lib/site-content";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) {
      return;
    }

    video.load();

    const tryPlay = async () => {
      try {
        await video.play();
      } catch {
        // Some browsers may delay autoplay; we keep the poster fallback visible.
      }
    };

    void tryPlay();
  }, []);

  return (
    <section
      id="inicio"
      className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-desert-950"
    >
      <div className="absolute inset-0 h-full w-full">
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${
            isVideoVisible ? "opacity-0" : "opacity-100"
          }`}
        >
          <LocalFirstImage
            localSrc={heroMedia.localPoster}
            fallbackSrc={heroMedia.fallbackPoster}
            alt="Vista principal de Cabañas del Desierto"
            fill
            priority
            sizes="100vw"
            className="scale-105 object-cover opacity-28 blur-[10px] saturate-75"
          />
          <div className="absolute inset-0 bg-desert-950/55" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(205,162,118,0.14),_transparent_34%),linear-gradient(to_bottom,rgba(10,9,8,0.32),rgba(10,9,8,0.72))]" />
        </div>

        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          disablePictureInPicture
          onLoadedData={() => setIsVideoVisible(true)}
          onCanPlay={() => {
            setIsVideoVisible(true);
            void videoRef.current?.play();
          }}
          onPlaying={() => setIsVideoVisible(true)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            isVideoVisible ? "opacity-62" : "opacity-0"
          }`}
        >
          <source src={heroMedia.video} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-desert-950/28" />
        <div className="absolute inset-0 bg-gradient-to-t from-desert-950 via-desert-950/62 to-desert-950/18" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-desert-950/32 to-desert-950/88" />
        <div className="absolute inset-x-0 top-0 h-[38%] bg-gradient-to-b from-desert-950/48 to-transparent" />
      </div>

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 pt-28 pb-16 sm:px-6 sm:pt-32 sm:pb-20 lg:px-8 lg:pt-36"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="mb-6 flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/12 bg-black/18 px-4 py-2.5 text-center shadow-[0_12px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl sm:mb-8 sm:px-5"
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
          className="max-w-5xl text-center"
        >
          <h1 className="mb-5 text-4xl leading-[1.05] tracking-tighter text-white drop-shadow-[0_14px_40px_rgba(0,0,0,0.5)] sm:text-6xl md:mb-6 md:text-8xl lg:text-9xl">
            Respira el <br />
            <span className="pr-2 font-light italic text-brand-200">
              silencio absoluto.
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="mb-10 max-w-3xl rounded-[2rem] bg-black/16 px-5 py-3 text-center text-base leading-relaxed text-stone-100 shadow-[0_10px_30px_rgba(0,0,0,0.18)] backdrop-blur-[6px] sm:px-6 sm:text-lg md:mb-14 md:text-2xl"
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
