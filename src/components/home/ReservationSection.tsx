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
      // Magic step: Redirigimos al huésped directamente al WhatsApp!
      window.location.href = result.redirectUrl
    }
  }

  return (
    <section id="reservas" className="py-24 bg-stone-900 text-stone-100 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-800/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-stone-700/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-5/12"
          >
            <h2 className="text-sm font-bold text-brand-400 uppercase tracking-widest mb-4">Empieza el viaje</h2>
            <h3 className="text-5xl font-serif text-white mb-6">Reserva tu<br/>Estadía Mágica</h3>
            <p className="text-stone-400 text-lg font-light mb-8 leading-relaxed">
              Verificaremos tu solicitud inmediatamente. Este formulario contactará de forma inteligente a nuestro equipo por WhatsApp para asegurar un trato humano y evitar superposiciones de fechas.
            </p>
            
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10">
              <h4 className="font-serif text-xl border-b border-white/10 pb-4 mb-4">Beneficios de reservar directo</h4>
              <ul className="space-y-3 text-stone-300 text-sm">
                <li className="flex items-center gap-2">✓ Atención prioritaria y flexible</li>
                <li className="flex items-center gap-2">✓ Mejor tarifa garantizada (Sin comisiones)</li>
                <li className="flex items-center gap-2">✓ Pago seguro directo en cabaña</li>
              </ul>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-7/12"
          >
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl space-y-6 text-stone-800">
              {error && (
                <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 text-sm">
                  {error}
                </div>
              )}
              
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Escoge tu Cabaña</label>
                <select name="cabinId" required className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-500 focus:outline-none transition appearance-none">
                  <option value="" disabled selected>Selecciona un refugio...</option>
                  {cabins?.map(cabin => (
                    <option key={cabin.id} value={cabin.id}>{cabin.name} ({cabin.capacity})</option>
                  ))}
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Llegada (Check-in)</label>
                  <input type="date" name="checkIn" required min={getTodayString()} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-500 focus:outline-none transition" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Salida (Check-out)</label>
                  <input type="date" name="checkOut" required min={getTodayString()} className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-500 focus:outline-none transition" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-stone-700 mb-2">Nombre Completo</label>
                <input type="text" name="name" placeholder="Ej. Juan Pérez" required className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-500 focus:outline-none transition" />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">WhatsApp / Teléfono</label>
                  <input type="tel" name="phone" placeholder="+56 9..." required className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-500 focus:outline-none transition" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-stone-700 mb-2">Correo Electrónico</label>
                  <input type="email" name="email" placeholder="tucorreo@ejemplo.com" className="w-full bg-stone-50 border border-stone-200 rounded-xl px-5 py-4 focus:ring-2 focus:ring-brand-500 focus:outline-none transition" />
                </div>
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-brand-600 hover:bg-brand-700 text-white font-bold py-5 px-8 rounded-xl transition shadow-xl mt-4 disabled:opacity-70 disabled:cursor-wait"
              >
                {loading ? 'Procesando tu solicitud...' : 'Solicitar Reserva por WhatsApp'}
              </button>
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  )
}
