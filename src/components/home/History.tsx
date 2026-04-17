"use client";

import { motion } from "framer-motion";

export default function History() {
  return (
    <section id="experiencia" className="py-32 md:py-48 bg-desert-950 text-stone-100 overflow-hidden relative">
      {/* Background gradients for premium deep look */}
      <div className="absolute top-0 right-0 w-1/3 h-[800px] bg-accent-900/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-1/2 h-[600px] bg-brand-900/20 blur-[140px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20 lg:gap-32">
          
          {/* Text Content */}
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
               className="flex items-center gap-4 mb-6"
            >
               <span className="w-12 h-[1px] bg-brand-400"></span>
               <h2 className="text-xs font-bold text-brand-300 uppercase tracking-[0.3em]">
                 Nuestra Esencia
               </h2>
            </motion.div>
            
            <h3 className="text-4xl sm:text-5xl lg:text-7xl font-serif text-white mb-10 leading-[1.1] tracking-tight">
              Un refugio creado <br/>
              <span className="text-stone-400 italic font-light">con pasión.</span>
            </h3>
            
            <div className="space-y-8 text-stone-300 leading-relaxed text-lg sm:text-x font-light">
              <p className="drop-shadow-sm">
                Todo comenzó con un sueño: crear un espacio donde la majestuosidad del desierto pudiera sentirse desde la 
                comodidad de una cama cálida. Construimos estas cabañas respetando rigurosamente el entorno, 
                utilizando texturas y colores extraídos de la misma tierra.
              </p>
              <p className="drop-shadow-sm">
                Aquí no hay interrupciones, solo el sonido del viento acariciando la pampa y un cielo estrellado 
                que parece abrazarte de noche. Nuestro propósito es que tu experiencia sea una verdadera 
                <span className="text-brand-300 font-medium"> reconexión espiritual</span>.
              </p>
            </div>
            
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="mt-14 overflow-hidden rounded-3xl relative hidden lg:block border border-white/5 shadow-2xl"
            >
               <div className="absolute inset-0 bg-brand-900/20 mix-blend-overlay z-10 transition-opacity hover:opacity-0"></div>
               <img src="https://images.unsplash.com/photo-1518182170546-0766de6b6aad?q=80&w=3000&auto=format&fit=crop" alt="Detalle Desierto" className="w-full h-64 object-cover transition-transform duration-1000 hover:scale-110" />
            </motion.div>
          </motion.div>
          
          {/* Image composition */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            className="lg:w-1/2 relative w-full"
          >
            {/* Glass decoration framework */}
            <div className="absolute -inset-4 bg-white/5 backdrop-blur-2xl rounded-[3rem] border border-white/10 -z-10 rotate-3 transition-transform duration-700 hover:rotate-6"></div>
            
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-gradient-to-t from-desert-950 to-transparent opacity-60 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2621&auto=format&fit=crop" 
                alt="Nuestra Historia" 
                className="w-full object-cover h-[500px] sm:h-[600px] lg:h-[750px] group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
              />
              <div className="absolute bottom-10 left-10 right-10 z-20 text-white">
                 <p className="font-serif text-2xl mb-2 italic text-brand-200 text-shadow-sm">El origen de la paz</p>
                 <div className="w-12 h-[1px] bg-brand-400"></div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
