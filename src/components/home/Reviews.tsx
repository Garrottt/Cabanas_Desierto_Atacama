"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    id: 1,
    author: "Bessy Tapia",
    date: "Hace 3 meses",
    text: "Muy buen lugar para compartir en familia, amigos y celebraciones. Lo recomiendo 100%.",
    initials: "BT",
    color: "bg-blue-600",
  },
  {
    id: 2,
    author: "Cristina Lazo",
    date: "Hace 5 meses",
    text: "Excelente servicio. El lugar es hermoso, la atención muy cordial y todo muy limpio. Lo mejor es que también son pet friendly.",
    initials: "CL",
    color: "bg-emerald-600",
  },
  {
    id: 3,
    author: "Juan Astudillo",
    date: "Hace 6 meses",
    text: "Espectacular para descansar.",
    initials: "JA",
    color: "bg-amber-600",
  },
  {
    id: 4,
    author: "Roddy Smriglio",
    date: "Hace 10 meses",
    text: "Muy buena atención.",
    initials: "RS",
    color: "bg-violet-600",
  },
  {
    id: 5,
    author: "Yasuko Carolina Villagran Suwa",
    date: "Hace 11 meses",
    text: "Muy recomendable: hermoso lugar, cabañas cómodas, ambiente tranquilo y muy cerca del centro. Nuestra familia disfrutó cada espacio.",
    initials: "YCV",
    color: "bg-rose-600",
  },
  {
    id: 6,
    author: "Jaqueline Manzanarez",
    date: "Hace 11 meses",
    text: "Hermoso lugar, volvería a visitar. La infraestructura es preciosa, todo muy acogedor y con excelente atención.",
    initials: "JM",
    color: "bg-indigo-600",
  },
  {
    id: 7,
    author: "Osiris Mendez",
    date: "Hace 11 meses",
    text: "Un lugar maravilloso y muy tranquilo, con excelente atención. Lo recomiendo muchísimo.",
    initials: "OM",
    color: "bg-teal-600",
  },
  {
    id: 8,
    author: "Luis Sebastian Manzanarez Antiñir",
    date: "Hace 11 meses",
    text: "Un lugar maravilloso para descansar y disfrutar en familia. Las tinajas están impecables y se nota la dedicación en cada detalle.",
    initials: "LS",
    color: "bg-orange-600",
  },
  {
    id: 9,
    author: "Stefania Cabello",
    date: "Hace 11 meses",
    text: "Nuestro fin de semana de reflexión superó todas las expectativas. Lo recomiendo totalmente.",
    initials: "SC",
    color: "bg-fuchsia-600",
  },
  {
    id: 10,
    author: "Daniela Gajardo",
    date: "Hace 11 meses",
    text: "Hermoso lugar, las tinajas de lo mejor y una atención muy preocupada. Todo limpio y muy familiar.",
    initials: "DG",
    color: "bg-sky-600",
  },
];

export default function Reviews() {
  return (
    <section className="overflow-hidden border-t border-stone-200/50 bg-stone-50 py-20 sm:py-24">
      <div className="mx-auto mb-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <div className="mb-4 flex items-center gap-4">
              <span className="flex items-center gap-2 text-xl font-bold tracking-tight text-stone-800">
                <span className="grid h-5 w-5 place-items-center rounded-full bg-blue-600 text-[10px] text-white">
                  G
                </span>
                Reseñas en Google
              </span>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
            <h3 className="text-4xl leading-tight text-stone-900 md:text-5xl">
              La opinión de nuestros huéspedes
              <br />
              <span className="font-light italic text-brand-700">
                es importante para nosotros
              </span>
            </h3>
          </div>

          <div className="hidden items-center gap-2 text-sm text-stone-500 md:flex">
            Desliza con calma o deja que avancen solas.
          </div>
        </motion.div>
      </div>

      <div className="mx-auto max-w-[100vw] px-4 pb-4 md:hidden">
        <div className="mb-4 text-sm text-stone-500">
          En celular puedes deslizar las reseñas a tu ritmo.
        </div>
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="flex min-h-[260px] w-[88vw] max-w-sm shrink-0 snap-start flex-col justify-between rounded-3xl border border-stone-100 bg-white p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
            >
              <div>
                <div className="mb-5 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm italic leading-relaxed text-stone-600">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              <div className="mt-6 flex items-center gap-4">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full ${review.color} text-sm font-semibold text-white`}
                >
                  {review.initials}
                </div>
                <div>
                  <p className="text-sm font-medium text-stone-900">{review.author}</p>
                  <p className="text-xs text-stone-400">{review.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="group relative mx-auto hidden max-w-[100vw] pb-8 md:block">
        <div className="absolute top-0 left-0 bottom-0 z-10 w-8 bg-gradient-to-r from-stone-50 to-transparent md:w-32" />
        <div className="absolute top-0 right-0 bottom-0 z-10 w-8 bg-gradient-to-l from-stone-50 to-transparent md:w-32" />

        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 55 }}
            className="flex w-max gap-6 py-4 pr-6"
          >
            {[...reviews, ...reviews].map((review, idx) => (
              <article
                key={`${review.id}-${idx}`}
                aria-hidden={idx >= reviews.length}
                className="flex w-[340px] shrink-0 flex-col justify-between rounded-3xl border border-stone-100 bg-white p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-transform duration-300 group-hover:[animation-play-state:paused] hover:scale-[1.02] lg:w-[380px]"
              >
                <div>
                  <div className="mb-6 flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-6 line-clamp-4 text-stone-600 italic leading-relaxed">
                    &ldquo;{review.text}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${review.color} text-sm font-semibold text-white`}
                  >
                    {review.initials}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-stone-900">{review.author}</p>
                    <p className="text-xs text-stone-400">{review.date}</p>
                  </div>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
