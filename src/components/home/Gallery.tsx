"use client";

import { Wifi, Coffee, Wind, Sun, ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const cabins = [
  {
    id: 1,
    name: "Cabaña Amanecer",
    description: "Ideal para parejas. Vista panorámica al este para disfrutar de los amaneceres del desierto.",
    features: [<Wifi key="WIFI" size={18} />, <Coffee key="COFFEE" size={18}/>, <Wind key="WIND" size={18}/>],
    capacity: "2 Personas",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2938&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Cabaña Tierra",
    description: "Amplitud y comodidad para la familia, con terraza privada y parrilla al aire libre.",
    features: [<Wifi key="WIFI" size={18} />, <Wind key="WIND" size={18}/>, <Sun key="SUN" size={18}/>],
    capacity: "4 Personas",
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2938&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Cabaña Estrella",
    description: "Ventanal en el techo para observar el Universo desde tu cama. Experiencia inmersiva.",
    features: [<Wifi key="WIFI" size={18} />, <Coffee key="COFFEE" size={18}/>, <Sun key="SUN" size={18}/>],
    capacity: "2 Personas",
    image: "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2787&auto=format&fit=crop"
  }
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } }
};

export default function Gallery() {
  return (
    <section id="cabanas" className="py-32 md:py-48 bg-stone-50 relative overflow-hidden">
      {/* Soft background textures */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-100/50 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
      
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
             <span className="w-12 h-[1px] bg-brand-400"></span>
             <h2 className="text-xs font-bold text-brand-700 uppercase tracking-[0.3em]">Nuestros Espacios</h2>
             <span className="w-12 h-[1px] bg-brand-400"></span>
          </div>
          <h3 className="text-5xl md:text-7xl font-serif text-stone-900 mb-8 leading-tight tracking-tight">Tu Hogar <span className="italic text-brand-700">en el Desierto</span></h3>
          <p className="text-stone-500 text-lg md:text-xl font-light">
            Cada cabaña está diseñada para ofrecer privacidad absoluta y una integración transparente con el entorno natural.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
        >
          {cabins.map((cabin) => (
            <motion.div 
               variants={itemVariants} 
               key={cabin.id} 
               className="group bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-700 hover:-translate-y-2 border border-stone-100/50 flex flex-col"
            >
              <div className="relative h-80 lg:h-96 overflow-hidden bg-stone-100 overflow-hidden m-3 rounded-[2rem]">
                <img 
                  src={cabin.image} 
                  alt={cabin.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s] ease-in-out"
                />
                
                {/* Overlay for depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-desert-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Capacity badge */}
                <div className="absolute top-5 left-5 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-sm border border-white/50">
                   <span className="text-xs font-bold text-stone-800 tracking-wider uppercase">{cabin.capacity}</span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <h4 className="font-serif text-3xl text-stone-900 mb-4">{cabin.name}</h4>
                <p className="text-stone-500 font-light text-base mb-8 leading-relaxed flex-1">
                  {cabin.description}
                </p>
                
                <div className="flex justify-between items-end pt-6 border-t border-stone-100">
                  <div className="flex space-x-3 text-brand-600/80">
                    {cabin.features.map((feature, idx) => (
                       <div key={idx} className="p-2.5 rounded-full bg-stone-50 shadow-sm border border-stone-100">
                          {feature}
                       </div>
                    ))}
                  </div>
                  <a href="#reservas" className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center text-stone-400 group-hover:bg-brand-600 group-hover:text-white group-hover:border-transparent transition-all duration-500 hover:scale-110">
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
