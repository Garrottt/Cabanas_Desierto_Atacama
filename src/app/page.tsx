import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import History from "@/components/home/History";
import Gallery from "@/components/home/Gallery";
import ReservationSection from "@/components/home/ReservationSection";
import { supabase } from "@/lib/supabase";

// Next.js Server Component
export default async function Home() {
  // Obtenemos dinámicamente las cabañas de la base de datos!
  const { data: cabins } = await supabase.from('cabins').select('*').order('price_per_night', { ascending: true });

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <History />
      <Gallery />
      
      <ReservationSection cabins={cabins || []} />

      <Footer />
    </main>
  );
}
