"use client";

import Image from "next/image";
import { Wifi, Coffee, Wind, Sun, ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const cabins = [
  {
    id: 1,
    name: "Cabaña Amanecer",
    description:
      "Ideal para parejas. Vista panorámica al este para disfrutar de los amaneceres del desierto.",
    features: [
      <Wifi key="WIFI" size={18} />,
      <Coffee key="COFFEE" size={18} />,
      <Wind key="WIND" size={18} />,
    ],
    capacity: "2 Personas",
    image:
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2938&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Cabaña Tierra",
    description:
      "Amplitud y comodidad para la familia, con terraza privada y parrilla al aire libre.",
    features: [
      <Wifi key="WIFI" size={18} />,
      <Wind key="WIND" size={18} />,
      <Sun key="SUN" size={18} />,
    ],
    capacity: "4 Personas",
    image:
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2938&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Cabaña Estrella",
    description:
      "Ventanal en el techo para observar el universo desde tu cama. Experiencia inmersiva.",
    features: [
      <Wifi key="WIFI" size={18} />,
      <Coffee key="COFFEE" size={18} />,
      <Sun key="SUN" size={18} />,
    ],
    capacity: "2 Personas",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2787&auto=format&fit=crop",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function Gallery() {
  return (
    <section
      id="cabanas"
      className="relative overflow-hidden bg-stone-50 py-20 sm:py-24 md:py-32 lg:py-40"
    >
      <div className="pointer-events-none absolute top-0 right-0 h-[800px] w-[800px] -translate-y-1/2 translate-x-1/3 rounded-full bg-brand-100/50 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mx-auto mb-16 max-w-4xl text-center sm:mb-20 lg:mb-24"
        >
          <div className="mb-6 flex items-center justify-center gap-4">
            <span className="h-[1px] w-12 bg-brand-400" />
            <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-700">
              Nuestros Espacios
            </h2>
            <span className="h-[1px] w-12 bg-brand-400" />
          </div>
          <h3 className="mb-6 text-4xl leading-tight tracking-tight text-stone-900 sm:text-5xl md:mb-8 md:text-7xl">
            Tu Hogar <span className="italic text-brand-700">en el Desierto</span>
          </h3>
          <p className="text-base font-light text-stone-500 sm:text-lg md:text-xl">
            Cada cabaña está diseñada para ofrecer privacidad absoluta y una
            integración transparente con el entorno natural.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3 lg:gap-10"
        >
          {cabins.map((cabin) => (
            <motion.div
              variants={itemVariants}
              key={cabin.id}
              className="group flex flex-col overflow-hidden rounded-[2rem] border border-stone-100/50 bg-white shadow-sm transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] sm:rounded-[2.5rem]"
            >
              <div className="relative m-3 h-72 overflow-hidden rounded-[1.6rem] bg-stone-100 sm:h-80 sm:rounded-[2rem] lg:h-96">
                <Image
                  src={cabin.image}
                  alt={cabin.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-[2s] ease-in-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-desert-950/60 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

                <div className="absolute top-5 left-5 rounded-full border border-white/50 bg-white/80 px-4 py-2 shadow-sm backdrop-blur-md">
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-800">
                    {cabin.capacity}
                  </span>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6 sm:p-8">
                <h4 className="mb-4 text-2xl text-stone-900 sm:text-3xl">
                  {cabin.name}
                </h4>
                <p className="mb-8 flex-1 text-base leading-relaxed text-stone-500">
                  {cabin.description}
                </p>

                <div className="flex items-end justify-between border-t border-stone-100 pt-6">
                  <div className="flex space-x-3 text-brand-600/80">
                    {cabin.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="rounded-full border border-stone-100 bg-stone-50 p-2.5 shadow-sm"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                  <a
                    href="#reservas"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-stone-200 text-stone-400 transition-all duration-500 hover:scale-110 group-hover:border-transparent group-hover:bg-brand-600 group-hover:text-white"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
