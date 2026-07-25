"use client";

import { useState } from "react";
import Nav from "@/app/components/sections/Nav";
import Footer from "@/app/components/sections/Footer";
import Hero from "@/app/components/sections/Hero";
import Services from "@/app/components/sections/Services";
import Work from "@/app/components/sections/Work";
import Process from "@/app/components/sections/Process";
import About from "@/app/components/sections/About";
import TechStack from "@/app/components/sections/TechStack";
import FAQ from "@/app/components/sections/FAQ";
import Contact from "@/app/components/sections/Contact";

export default function Home() {
  const [selectedService, setSelectedService] = useState<string>("");

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <Nav />
      
      <main className="flex-grow">
        <Hero />
        <Services onSelectService={setSelectedService} />
        <Work />
        <Process />
        <About />
        <TechStack />
        <FAQ />
        <Contact selectedService={selectedService} />
      </main>

      <Footer />
    </div>
  );
}
