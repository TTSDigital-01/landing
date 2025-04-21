/// src/app/page.tsx

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PorqueDigitalizar from "@/components/PorqueDigitalizar";
import PrimerCTA from "@/components/PrimerCTA";
import NuestrosServicios from "@/components/NuestrosServicios";
import SegundoCTA from "@/components/SegundoCTA";
import NuestrosValores from "@/components/NuestrosValores";
import FormularioContacto from "@/components/FormularioContacto";
import TercerCTA from "@/components/TercerCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white text-black min-h-screen p-10">
      <Header />
      <Hero />
      <PrimerCTA />
      <PorqueDigitalizar />
      <SegundoCTA />
      <NuestrosServicios />
      <TercerCTA />
      <NuestrosValores />
      <FormularioContacto />
      <Footer />
    </main>
  );
}
