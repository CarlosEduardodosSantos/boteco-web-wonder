
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 relative bg-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="font-rumble text-2xl md:text-3xl text-center mb-8 text-primary">
            Sobre o Sr. Boteco
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="rounded-2xl overflow-hidden">
              <img alt="Ambiente do Sr. Boteco" className="w-full h-64 object-cover" src="/lovable-uploads/47050126-4846-4fa2-85e6-3546807c2c70.jpg" />
            </div>
            <div className="glass-card p-8 rounded-2xl">
              <p className="text-lg text-gray-700 leading-relaxed">
                Desde 2010, o Sr. Boteco tem sido mais que um simples bar - é um ponto de encontro 
                onde amigos se reúnem, histórias são compartilhadas e momentos inesquecíveis são 
                criados. Nossa missão é oferecer não apenas bebidas e petiscos de qualidade, mas 
                uma experiência genuína de boteco tradicional com um toque de modernidade.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
