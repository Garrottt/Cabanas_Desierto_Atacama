export default function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-900 py-12 text-stone-300">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
        <div>
          <h3 className="mb-4 text-2xl text-stone-50">Cabañas del Desierto</h3>
          <p className="max-w-sm text-sm leading-relaxed">
            Un oasis de tranquilidad y belleza natural. Desconéctate de la ciudad y
            reconecta contigo.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-medium text-stone-50">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#inicio" className="transition hover:text-brand-400">
                Inicio
              </a>
            </li>
            <li>
              <a href="#experiencia" className="transition hover:text-brand-400">
                Experiencia
              </a>
            </li>
            <li>
              <a href="#cabanas" className="transition hover:text-brand-400">
                Galería
              </a>
            </li>
            <li>
              <a href="#reservas" className="transition hover:text-brand-400">
                Reservas
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-medium text-stone-50">Contacto</h4>
          <ul className="space-y-2 text-sm leading-relaxed">
            <li>📍 Huasco, Atacama, Chile</li>
            <li>📧 contacto@cabanasdeldesierto.cl</li>
            <li>📞 +56 9 1234 5678</li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-stone-800 px-4 pt-8 text-center text-sm sm:px-6 lg:px-8">
        <p>
          &copy; {new Date().getFullYear()} Cabañas del Desierto. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
}
