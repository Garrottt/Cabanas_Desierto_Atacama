"use client";

import { Wifi, Coffee, Wind, Sun } from "lucide-react";
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
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export default function Gallery() {
  return (
    <section id="cabanas" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-sm font-bold text-brand-600 uppercase tracking-widest mb-4">Nuestros Espacios</h2>
          <h3 className="text-5xl md:text-6xl font-serif text-stone-900 mb-6">Tu Hogar en el Desierto</h3>
          <p className="text-stone-600 text-lg md:text-xl font-light">
            Cada cabaña está diseñada para ofrecer privacidad absoluta y una integración transparente con el entorno natural.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {cabins.map((cabin) => (
            <motion.div 
               variants={itemVariants} 
               key={cabin.id} 
               className="group bg-stone-50 rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-stone-100"
            >
              <div className="relative h-72 overflow-hidden">
                <img 
                  src={cabin.image} 
                  alt={cabin.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-stone-800 shadow-sm">
                  {cabin.capacity}
                </div>
              </div>
              <div className="p-8">
                <h4 className="font-serif text-3xl text-stone-900 mb-3">{cabin.name}</h4>
                <p className="text-stone-600 font-light text-base mb-8 line-clamp-2 leading-relaxed">
                  {cabin.description}
                </p>
                <div className="flex justify-between items-center border-t border-stone-200 pt-6">
                  <div className="flex space-x-4 text-brand-600">
                    {cabin.features}
                  </div>
                  <a href="#reservas" className="text-sm font-semibold text-brand-700 hover:text-brand-900 transition flex items-center gap-1 group/btn">
                    Ver Detalles 
                    <span className="transform group-hover/btn:translate-x-1 transition-transform">&rarr;</span>
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
