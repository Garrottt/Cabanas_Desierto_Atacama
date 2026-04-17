"use client";

import { motion } from "framer-motion";

export default function History() {
  return (
    <section id="historia" className="py-32 bg-stone-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:w-1/2"
          >
            <motion.h2 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4"
            >
               Nuestra Esencia
            </motion.h2>
            
            <h3 className="text-5xl lg:text-6xl font-serif text-stone-900 mb-8 leading-tight">Un refugio creado <br/> con pasión.</h3>
            
            <div className="space-y-6 text-stone-600 leading-relaxed text-lg font-light">
              <p>
                Todo comenzó con un sueño: crear un espacio donde la majestuosidad del desierto pudiera sentirse desde la comodidad de una cama cálida. 
                Construimos estas cabañas respetando rigurosamente el entorno, utilizando texturas y colores extraídos de la misma tierra.
              </p>
              <p>
                Aquí no hay interrupciones, solo el sonido del viento acariciando la pampa y un cielo estrellado que parece abrazarte de noche. 
                Nuestro propósito es que tu experiencia sea una verdadera reconexión espiritual.
              </p>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="mt-12 overflow-hidden rounded-3xl"
            >
               <img src="https://images.unsplash.com/photo-1518182170546-0766de6b6aad?q=80&w=3000&auto=format&fit=crop" alt="Detalle Desierto" className="w-full h-56 object-cover shadow-xl transition-transform duration-700 hover:scale-105" />
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-brand-200 translate-x-6 translate-y-6 rounded-[2.5rem] mix-blend-multiply"></div>
            <img 
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop" 
              alt="Nuestra Historia" 
              className="relative z-10 w-full rounded-[2.5rem] shadow-2xl object-cover h-[700px] hover:scale-[1.02] transition-transform duration-700"
            />
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
