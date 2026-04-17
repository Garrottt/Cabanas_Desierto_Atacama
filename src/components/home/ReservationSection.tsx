"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { submitReservation } from "@/app/actions/reservations"

export default function ReservationSection({ cabins }: { cabins: any[] }) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const getTodayString = () => new Date().toISOString().split('T')[0]

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const result = await submitReservation(formData)

    if (result.error) {
      setError(result.error)
      setLoading(false)
    } else if (result.success && result.redirectUrl) {
      window.location.href = result.redirectUrl
    }
  }

  return (
    <section id="reservas" className="py-24 lg:py-40 bg-desert-950 text-stone-100 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-800/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent-900/15 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:w-5/12"
          >
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-brand-400"></span>
              <h2 className="text-xs font-bold text-brand-300 uppercase tracking-[0.3em]">Empieza el Viaje</h2>
            </div>
            
            <h3 className="text-5xl lg:text-7xl font-serif text-white mb-8 leading-[1.1] tracking-tight">
              Asegura tu <br/>
              <span className="text-stone-400 italic font-light">Estadía Mágica</span>
            </h3>
            
            <p className="text-stone-400 text-lg font-light mb-12 leading-relaxed">
              Reserva directamente con nosotros para vivir una experiencia sin fricciones de principio a fin. Verificaremos 
              tu solicitud de forma personalizada a través de WhatsApp.
            </p>
            
            <div className="bg-white/[0.03] backdrop-blur-2xl rounded-[2rem] p-8 border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-600 to-accent-600"></div>
              <h4 className="font-serif text-2xl mb-6 text-white tracking-wide">Beneficios Exclusivos</h4>
              <ul className="space-y-5 text-stone-300 text-sm font-light">
                <li className="flex items-start gap-4">
                  <span className="text-brand-400 mt-1">✦</span>
                  <span className="leading-relaxed">Atención prioritaria y mayor flexibilidad en fechas.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-brand-400 mt-1">✦</span>
                  <span className="leading-relaxed">Mejor tarifa garantizada sin comisiones ocultas.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-brand-400 mt-1">✦</span>
                  <span className="leading-relaxed">Contacto directo con el equipo anfitrión en el lugar.</span>
                </li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:w-7/12 w-full"
          >
            <div className="relative">
              {/* Form aesthetic decoration */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-brand-800/20 to-accent-800/10 rounded-[2.5rem] blur-xl opacity-50 pointer-events-none"></div>
              
              <form onSubmit={handleSubmit} className="relative bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[2rem] p-8 sm:p-12 shadow-2xl space-y-8 flex flex-col">
                {error && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="bg-red-950/40 text-red-300 p-4 rounded-xl border border-red-900/50 text-sm font-medium">
                    {error}
                  </motion.div>
                )}
                
                <div>
                  <label className="block text-xs font-bold text-stone-300 tracking-widest uppercase mb-3">Escoge tu Refugio</label>
                  <select name="cabinId" required defaultValue="" className="w-full bg-desert-950/50 border border-white/20 rounded-xl px-5 py-4 text-white focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition appearance-none placeholder-stone-500 font-light">
                    <option value="" disabled>Selecciona una opción...</option>
                    {cabins?.map(cabin => (
                      <option key={cabin.id} value={cabin.id} className="text-stone-900">{cabin.name} ({cabin.capacity})</option>
                    ))}
                  </select>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-stone-300 tracking-widest uppercase mb-3">Llegada</label>
                    <input type="date" name="checkIn" required min={getTodayString()} className="w-full bg-desert-950/50 border border-white/20 rounded-xl px-5 py-4 text-white focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition font-light [color-scheme:dark]" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-300 tracking-widest uppercase mb-3">Salida</label>
                    <input type="date" name="checkOut" required min={getTodayString()} className="w-full bg-desert-950/50 border border-white/20 rounded-xl px-5 py-4 text-white focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition font-light [color-scheme:dark]" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs font-bold text-stone-300 tracking-widest uppercase mb-3">Nombre Completo</label>
                  <input type="text" name="name" placeholder="Ej. Juan Pérez" required className="w-full bg-desert-950/50 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-stone-500 focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition font-light" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-stone-300 tracking-widest uppercase mb-3">WhatsApp</label>
                    <input type="tel" name="phone" placeholder="+56 9..." required className="w-full bg-desert-950/50 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-stone-500 focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition font-light" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-stone-300 tracking-widest uppercase mb-3">Correo</label>
                    <input type="email" name="email" placeholder="tucorreo@ejemplo.com" className="w-full bg-desert-950/50 border border-white/20 rounded-xl px-5 py-4 text-white placeholder-stone-500 focus:ring-1 focus:ring-brand-500 focus:border-brand-500 transition font-light" />
                  </div>
                </div>
                
                <button 
                  type="submit" 
                  disabled={loading}
                  className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-brand-600 to-accent-600 p-px font-bold text-white transition-all shadow-2xl disabled:opacity-70 disabled:cursor-wait mt-4"
                >
                  <div className="relative bg-desert-950/40 px-8 py-5 transition-all group-hover:bg-transparent rounded-xl flex items-center justify-center border border-white/5">
                     <span className="font-sans tracking-wide">{loading ? 'Procesando tu solicitud...' : 'Solicitar Reserva por WhatsApp'}</span>
                  </div>
                </button>
              </form>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
