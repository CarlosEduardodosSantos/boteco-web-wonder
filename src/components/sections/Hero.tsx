
import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Wine, Utensils, Beer, ExternalLink, Coffee, Pizza, CakeSlice } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-[#e6c7af] relative overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-4 gap-16 p-12">
        {[Wine, Utensils, Beer, Coffee, Pizza, CakeSlice].map((Icon, index) => (
          Array.from({ length: 2 }).map((_, i) => (
            <motion.div
              key={`${index}-${i}`}
              initial={{ opacity: 0, rotate: 0 }}
              animate={{ 
                opacity: 0.05,
                rotate: 12,
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.2
              }}
            >
              <Icon className="w-12 h-12 text-primary" />
            </motion.div>
          ))
        ))}
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col items-center justify-center min-h-screen max-w-3xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-96 mb-12"
          >
            <Logo />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="font-rumble text-xl md:text-3xl text-primary mb-4">
              Um novo conceito
              <span className="font-berthold block mt-2 text-base md:text-lg font-medium text-primary/80">
                o mesmo sabor irresistível!
              </span>
            </h1>
            
            <p className="font-canva text-base text-primary/70 mb-6 max-w-2xl mx-auto">
              Uma experiência única de boteco, onde a tradição se encontra com o conforto moderno.
              Venha conhecer nossos pratos e drinks especiais.
            </p>

            <div className="flex justify-center">
              <a 
                href="https://shop.beetech.com.br/srboteco/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  className="bg-primary hover:bg-primary/90 text-white px-8 flex items-center gap-2"
                >
                  Ver Cardápio
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex gap-8 mt-12 justify-center"
            >
              <div className="flex items-center gap-2">
                <Wine className="w-5 h-5 text-primary" />
                <span className="text-sm text-primary/80">Drinks Especiais</span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils className="w-5 h-5 text-primary" />
                <span className="text-sm text-primary/80">Petiscos</span>
              </div>
              <div className="flex items-center gap-2">
                <Beer className="w-5 h-5 text-primary" />
                <span className="text-sm text-primary/80">Chopp Gelado</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
