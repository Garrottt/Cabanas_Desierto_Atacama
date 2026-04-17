"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cabinShowcase } from "@/lib/site-content";

export default function History() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % cabinShowcase.length);
    }, 4200);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <section
      id="experiencia"
      className="relative overflow-hidden bg-desert-950 py-20 text-stone-100 sm:py-24 md:py-32 lg:py-40"
    >
      <div className="pointer-events-none absolute top-0 right-0 h-[800px] w-1/3 rounded-full bg-accent-900/10 blur-[150px] mix-blend-screen" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-[600px] w-1/2 rounded-full bg-brand-900/20 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:gap-24 xl:gap-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 flex items-center gap-4"
            >
              <span className="h-[1px] w-12 bg-brand-400" />
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-300">
                Nuestra Esencia
              </h2>
            </motion.div>

            <h3 className="mb-8 text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl lg:mb-10 lg:text-7xl">
              Un refugio creado <br />
              <span className="font-light italic text-stone-400">con pasión.</span>
            </h3>

            <div className="space-y-6 text-base font-light leading-relaxed text-stone-300 sm:text-lg">
              <p className="drop-shadow-sm">
                Todo comenzó con un sueño: crear un espacio donde la majestuosidad
                del desierto pudiera sentirse desde la comodidad de una cama cálida.
                Construimos estas cabañas respetando rigurosamente el entorno,
                utilizando texturas y colores extraídos de la misma tierra.
              </p>
              <p className="drop-shadow-sm">
                Aquí no hay interrupciones, solo el sonido del viento acariciando la
                pampa y un cielo estrellado que parece abrazarte de noche. Nuestro
                propósito es que tu experiencia sea una verdadera
                <span className="font-medium text-brand-300"> reconexión espiritual</span>.
              </p>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative mt-12 hidden overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-2xl lg:block"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(180,112,70,0.22),_transparent_48%),radial-gradient(circle_at_bottom_right,_rgba(17,76,78,0.18),_transparent_42%)]" />
              <div className="relative min-h-72">
                {cabinShowcase.map((cabin, index) => (
                  <motion.div
                    key={cabin.id}
                    initial={false}
                    animate={{
                      opacity: index === activeIndex ? 1 : 0,
                      scale: index === activeIndex ? 1 : 1.04,
                    }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute inset-0"
                    aria-hidden={index !== activeIndex}
                  >
                    <Image
                      src={cabin.image}
                      alt={cabin.name}
                      fill
                      sizes="(max-width: 1024px) 0vw, 50vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-desert-950 via-desert-950/55 to-transparent" />
                  </motion.div>
                ))}

                <div className="relative z-10 flex min-h-72 flex-col justify-between px-8 py-8">
                  <div>
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-brand-300/80">
                      Espacios para desconectar
                    </p>
                    <div className="max-w-lg">
                      <p className="text-2xl leading-tight text-white">
                        {cabinShowcase[activeIndex].name}
                      </p>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-200/85">
                        {cabinShowcase[activeIndex].description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-end justify-between gap-6">
                    <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 backdrop-blur-sm">
                      <p className="text-xs uppercase tracking-[0.28em] text-stone-400">
                        Capacidad
                      </p>
                      <p className="mt-2 text-lg text-white">
                        {cabinShowcase[activeIndex].capacity}
                      </p>
                    </div>

                    <div className="flex gap-2">
                      {cabinShowcase.map((cabin, index) => (
                        <button
                          key={cabin.id}
                          type="button"
                          onClick={() => setActiveIndex(index)}
                          className={`h-2.5 rounded-full transition-all ${
                            index === activeIndex
                              ? "w-10 bg-brand-300"
                              : "w-2.5 bg-white/35 hover:bg-white/60"
                          }`}
                          aria-label={`Ver ${cabin.name}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="relative w-full lg:w-1/2"
          >
            <div className="absolute -inset-4 -z-10 rotate-3 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-2xl transition-transform duration-700 hover:rotate-6" />

            <div className="group relative overflow-hidden rounded-[2.5rem] border border-white/10 shadow-2xl">
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-desert-950 to-transparent opacity-60" />
              <div className="relative h-[380px] sm:h-[500px] lg:h-[680px] xl:h-[750px]">
                <Image
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop"
                  alt="Nuestra historia"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute right-6 bottom-6 left-6 z-20 text-white sm:right-10 sm:bottom-10 sm:left-10">
                <p className="mb-2 text-xl italic text-brand-200 text-shadow-sm sm:text-2xl">
                  El origen de la paz
                </p>
                <div className="h-[1px] w-12 bg-brand-400" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
