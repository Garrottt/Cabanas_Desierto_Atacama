"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

// Mockup of original Google Reviews
const reviews = [
  {
    id: 1,
    author: "Bessy Tapia",
    date: "Hace 3 meses",
    text: "Muy buen lugar para compartir en familia, amigos, celebraciónes. Lo recomiendo 100%",
    initials: "BT",
    color: "bg-blue-600"
  },
  {
    id: 2,
    author: "Cristina Lazo",
    date: "Hace 5 mes",
    text: "Excelente servicio! El lugar es hermoso,  la atención muy cordial, muy atentos Catalina y su esposo.  Todo muy limpio y lo mejor de todo es que son pet friendly.",
    initials: "CL",
    color: "bg-emerald-600"
  },
  {
    id: 3,
    author: "Juan Astudillo",
    date: "Hace 6 meses",
    text: "Espectacular para descansar",
    initials: "JA",
    color: "bg-amber-600"
  },
  {
    id: 4,
    author: "Roddy Smriglio",
    date: "Hace 10 meses",
    text: "Muy buena atención",
    initials: "RS",
    color: "bg-purple-600"
  },
  {
    id: 5,
    author: "Yasuko Carolina Villagran Suwa",
    date: "Hace 11 meses",
    text: "Muy recomendable hermoso lugar y cabañas cómodas,un lugar muy tranquilo  y cerca del centro nuestra,familia disfruto cada espacio ,la gente muy amable esperamos volver otra vez ☺️",
    initials: "YCV",
    color: "bg-rose-600"
  },
  {
    id: 6,
    author: "jaqueline manzanarez",
    date: "Hace 11 meses",
    text: "Hermoso lugar, volveria a visitar, preciosa infraestructura, todo el lugar muy acojedor, excelente atención.",
    initials: "JM",
    color: "bg-indigo-600"
  },
  {
    id: 7,
    author: "Osiris Mendez",
    date: "Hace 11 meses",
    text: "Un lugar maravillosoy muy tranquilo tranquilo,excelente atención..lo recomiendo 1000%❤️",
    initials: "OM",
    color: "bg-teal-600"
  },
  {
    id: 8,
    author: "Luis sebastian Manzanarez Antiñir",
    date: "Hace 11 meses",
    text: "Un lugar maravilloso para descansar y disfrutar en familia. Las tinajas están impecables, muy bien cuidadas y con excelente temperatura. Se nota la dedicación en cada detalle, desde la limpieza hasta la atención que fue muy amable y cercana. Rodeado de naturaleza, se respira tranquilidad. ¡100% recomendado, sin duda volvería!",
    initials: "LSMA",
    color: "bg-orange-600"
  },
  {
    id: 9,
    author: "stefania cabello",
    date: "Hace 11 meses",
    text: "Fin de semana de reflexión en cabañas desierto florido superó todas nuestras expectativas lo recomiendo 100000%",
    initials: "SC",
    color: "bg-fuchsia-600"
  },
  {
    id: 10,
    author: "Daniela Gajardo",
    date: "Hace 11 meses",
    text: "Hermoso lugar, las tinajas de lo mejor y la atención y preocupación un detalle importante.... lugar limpio y muy familiar",
    initials: "DG",
    color: "bg-sky-600"
  }

];

export default function Reviews() {
  return (
    <section className="py-24 bg-stone-50 overflow-hidden border-t border-stone-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-end gap-6"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="text-stone-800 font-bold tracking-tight text-xl flex items-center gap-2">
                <span className="w-5 h-5 grid place-items-center bg-blue-600 text-white rounded-full text-[10px]">G</span>
                Reseñas en Google
              </span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
            </div>
            <h3 className="text-4xl md:text-5xl font-serif text-stone-900 leading-tight">
              La opinión de nuestros huéspedes<br />
              <span className="italic text-brand-700 font-light">es importante para nosotros</span>
            </h3>
          </div>

          <div className="text-stone-500 font-light hidden md:flex items-center gap-2">

          </div>
        </motion.div>
      </div>

      <div className="relative max-w-[100vw] mx-auto pb-8 group">
        {/* Gradientes laterales para difuminar las entradas y salidas de las tarjetas */}
        <div className="absolute top-0 left-0 bottom-0 w-8 md:w-32 bg-gradient-to-r from-stone-50 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 bottom-0 w-8 md:w-32 bg-gradient-to-l from-stone-50 to-transparent z-10"></div>

        {/* Carrusel infinito circular 360 (Marquee) */}
        <div className="overflow-hidden flex">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
            className="flex gap-6 pr-6 w-max hover:[animation-play-state:paused] py-4"
          >
            {/* Renderizamos el array DOS veces para hacer el loop perfecto visualmente */}
            {[...reviews, ...reviews].map((review, idx) => (
              <div
                key={`${review.id}-${idx}`}
                className="shrink-0 w-[320px] sm:w-[380px] bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 flex flex-col justify-between transition-transform duration-300 hover:scale-[1.02]"
              >
                <div>
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-stone-600 font-light italic leading-relaxed mb-6 line-clamp-4">
                    "{review.text}"
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full ${review.color} text-white flex items-center justify-center font-semibold text-sm`}>
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-stone-900 font-medium text-sm">{review.author}</p>
                    <p className="text-stone-400 text-xs">{review.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
