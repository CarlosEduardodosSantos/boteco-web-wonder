import { motion } from "framer-motion";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
const About = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  return <section className="py-20 relative bg-white">
      <div className="container mx-auto px-4">
        <motion.div initial={{
        opacity: 0
      }} whileInView={{
        opacity: 1
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="max-w-4xl mx-auto">
          <h2 className="font-rumble text-2xl md:text-3xl text-center mb-8 text-primary">
            Sobre o Sr. Boteco
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden relative">
              {!imageLoaded && <Skeleton className="w-full h-64 absolute inset-0" />}
              <img alt="Ambiente do Sr. Boteco" className={`w-full h-64 object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`} src="/lovable-uploads/7e95a03b-d3a8-47be-b01d-b8df638d0870.png" loading="lazy" decoding="async" onLoad={() => setImageLoaded(true)} width={600} height={400} fetchPriority="high" sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <p className="text-lg text-gray-700 leading-relaxed">Desde 2017, o Sr. Boteco tem sido mais que um simples bar - é um ponto de encontro onde amigos se reúnem, histórias são compartilhadas e momentos inesquecíveis são criados. Nossa missão é oferecer não apenas bebidas e petiscos de qualidade, mas uma experiência genuína de boteco tradicional com um toque de modernidade.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default About;