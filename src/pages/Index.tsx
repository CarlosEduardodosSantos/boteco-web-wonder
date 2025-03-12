
import { MapPin, Clock, Phone } from "lucide-react";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Menu from "@/components/sections/Menu";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="absolute inset-0 hero-pattern" />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Contact />
    </div>
  );
};

export default Index;
