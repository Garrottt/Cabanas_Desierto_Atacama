export default function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-serif text-2xl text-stone-50 mb-4">Cabañas del Desierto</h3>
          <p className="text-sm">
            Un oasis de tranquilidad y belleza natural. Desconéctate de la ciudad y reconecta contigo en el desierto.
          </p>
        </div>
        <div>
          <h4 className="text-stone-50 font-medium mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#inicio" className="hover:text-brand-400 transition">Inicio</a></li>
            <li><a href="#historia" className="hover:text-brand-400 transition">Historia</a></li>
            <li><a href="#cabanas" className="hover:text-brand-400 transition">Galería</a></li>
            <li><a href="#reservas" className="hover:text-brand-400 transition">Reservas</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-stone-50 font-medium mb-4">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 San Pedro de Atacama, Chile</li>
            <li>📧 contacto@cabanasdeldesierto.cl</li>
            <li>📞 +56 9 1234 5678</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-stone-800 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} Cabañas del Desierto. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
