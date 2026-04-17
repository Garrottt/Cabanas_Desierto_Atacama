export type CabinShowcaseItem = {
  id: number;
  name: string;
  description: string;
  capacity: string;
  localImage: string;
  fallbackImage: string;
};

export const heroMedia = {
  localPoster: "/images/hero/hero-poster.webp",
  fallbackPoster:
    "https://images.unsplash.com/photo-1542315904-7a0e30a5db22?q=80&w=2938&auto=format&fit=crop",
  video: "/videos/hero-desierto.mp4",
};

export const cabinShowcase: CabinShowcaseItem[] = [
  {
    id: 1,
    name: "Cabaña Amanecer",
    description:
      "Ideal para parejas. Vista panorámica al este para disfrutar de los amaneceres del desierto.",
    capacity: "2 Personas",
    localImage: "/images/cabanas/cabana-amanecer-1.webp",
    fallbackImage:
      "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2938&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Cabaña Tierra",
    description:
      "Amplitud y comodidad para la familia, con terraza privada y parrilla al aire libre.",
    capacity: "4 Personas",
    localImage: "/images/cabanas/cabana-tierra-1.webp",
    fallbackImage:
      "https://images.unsplash.com/photo-1542718610-a1d656d1884c?q=80&w=2938&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Cabaña Estrella",
    description:
      "Ventanal en el techo para observar el universo desde tu cama. Experiencia inmersiva.",
    capacity: "2 Personas",
    localImage: "/images/cabanas/cabana-estrella-1.webp",
    fallbackImage:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?q=80&w=2787&auto=format&fit=crop",
  },
];
