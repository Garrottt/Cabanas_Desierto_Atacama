"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { submitReservation } from "@/app/actions/reservations";

type CabinOption = {
  id: number | string;
  name: string;
  capacity: number | string;
};

export default function ReservationSection({ cabins }: { cabins: CabinOption[] }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getTodayString = () => new Date().toISOString().split("T")[0];

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const result = await submitReservation(formData);

    if (result.error) {
      setError(result.error);
      setLoading(false);
    } else if (result.success && result.redirectUrl) {
      window.location.href = result.redirectUrl;
    }
  }

  return (
    <section
      id="reservas"
      className="relative overflow-hidden bg-desert-950 py-20 text-stone-100 sm:py-24 lg:py-32 xl:py-40"
    >
      <div className="pointer-events-none absolute top-0 right-0 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-brand-800/10 blur-[100px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[600px] w-[600px] translate-y-1/3 -translate-x-1/3 rounded-full bg-accent-900/15 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-20 xl:gap-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-5/12"
          >
            <div className="mb-6 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-brand-400" />
              <h2 className="text-xs font-bold uppercase tracking-[0.3em] text-brand-300">
                Empieza el Viaje
              </h2>
            </div>

            <h3 className="mb-6 text-4xl leading-[1.1] tracking-tight text-white sm:text-5xl lg:mb-8 lg:text-7xl">
              Asegura tu <br />
              <span className="font-light italic text-stone-400">
                Estadía Mágica
              </span>
            </h3>

            <p className="mb-10 text-base leading-relaxed text-stone-400 sm:text-lg lg:mb-12">
              Reserva directamente con nosotros para vivir una experiencia sin
              fricciones de principio a fin. Verificaremos tu solicitud de forma
              personalizada a través de WhatsApp.
            </p>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 shadow-2xl backdrop-blur-2xl">
              <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-brand-600 to-accent-600" />
              <h4 className="mb-6 text-2xl tracking-wide text-white">
                Beneficios Exclusivos
              </h4>
              <ul className="space-y-5 text-sm text-stone-300 sm:text-[15px]">
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-brand-400">✦</span>
                  <span className="leading-relaxed">
                    Atención prioritaria y mayor flexibilidad en fechas.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-brand-400">✦</span>
                  <span className="leading-relaxed">
                    Mejor tarifa garantizada sin comisiones ocultas.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="mt-1 text-brand-400">✦</span>
                  <span className="leading-relaxed">
                    Contacto directo con el equipo anfitrión en el lugar.
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-7/12"
          >
            <div className="relative">
              <div className="pointer-events-none absolute -inset-2 rounded-[2.5rem] bg-gradient-to-tr from-brand-800/20 to-accent-800/10 blur-xl opacity-50" />

              <form
                onSubmit={handleSubmit}
                className="relative flex flex-col space-y-7 rounded-[1.75rem] border border-white/10 bg-white/[0.02] p-5 shadow-2xl backdrop-blur-3xl sm:rounded-[2rem] sm:p-8 lg:space-y-8 lg:p-10 xl:p-12"
              >
                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="rounded-xl border border-red-900/50 bg-red-950/40 p-4 text-sm font-medium text-red-300"
                  >
                    {error}
                  </motion.div>
                )}

                <div>
                  <label className="mb-3 block text-xs font-bold uppercase tracking-widest text-stone-300">
                    Escoge tu Refugio
                  </label>
                  <select
                    name="cabinId"
                    required
                    defaultValue=""
                    className="w-full appearance-none rounded-xl border border-white/20 bg-desert-950/50 px-4 py-4 font-light text-white transition placeholder-stone-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 sm:px-5"
                  >
                    <option value="" disabled>
                      Selecciona una opción...
                    </option>
                    {cabins?.map((cabin) => (
                      <option key={cabin.id} value={cabin.id} className="text-stone-900">
                        {cabin.name} ({cabin.capacity})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-xs font-bold uppercase tracking-widest text-stone-300">
                      Llegada
                    </label>
                    <input
                      type="date"
                      name="checkIn"
                      required
                      min={getTodayString()}
                      className="w-full rounded-xl border border-white/20 bg-desert-950/50 px-4 py-4 font-light text-white transition focus:border-brand-500 focus:ring-1 focus:ring-brand-500 [color-scheme:dark] sm:px-5"
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-xs font-bold uppercase tracking-widest text-stone-300">
                      Salida
                    </label>
                    <input
                      type="date"
                      name="checkOut"
                      required
                      min={getTodayString()}
                      className="w-full rounded-xl border border-white/20 bg-desert-950/50 px-4 py-4 font-light text-white transition focus:border-brand-500 focus:ring-1 focus:ring-brand-500 [color-scheme:dark] sm:px-5"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-xs font-bold uppercase tracking-widest text-stone-300">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Ej. Juan Pérez"
                    required
                    className="w-full rounded-xl border border-white/20 bg-desert-950/50 px-4 py-4 font-light text-white transition placeholder-stone-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 sm:px-5"
                  />
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-3 block text-xs font-bold uppercase tracking-widest text-stone-300">
                      WhatsApp
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+56 9..."
                      required
                      className="w-full rounded-xl border border-white/20 bg-desert-950/50 px-4 py-4 font-light text-white transition placeholder-stone-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 sm:px-5"
                    />
                  </div>
                  <div>
                    <label className="mb-3 block text-xs font-bold uppercase tracking-widest text-stone-300">
                      Correo
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="tucorreo@ejemplo.com"
                      className="w-full rounded-xl border border-white/20 bg-desert-950/50 px-4 py-4 font-light text-white transition placeholder-stone-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500 sm:px-5"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="group relative mt-4 w-full overflow-hidden rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 p-px font-bold text-white shadow-2xl transition-all disabled:cursor-wait disabled:opacity-70"
                >
                  <div className="relative flex items-center justify-center rounded-xl border border-white/5 bg-desert-950/40 px-8 py-5 transition-all group-hover:bg-transparent">
                    <span className="font-sans tracking-wide">
                      {loading
                        ? "Procesando tu solicitud..."
                        : "Solicitar Reserva por WhatsApp"}
                    </span>
                  </div>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
