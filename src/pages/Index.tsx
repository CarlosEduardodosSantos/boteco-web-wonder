
import { MapPin, Clock, Phone } from "lucide-react";
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Menu from "@/components/sections/Menu";
import Gallery from "@/components/sections/Gallery";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <div className="absolute inset-0 hero-pattern" />
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="menu">
          <Menu />
        </section>
        <section id="gallery">
          <Gallery />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
    </div>
  );
};

export default Index;
