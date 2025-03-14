import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Wine, Utensils, Beer, ExternalLink } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-secondary/10 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiM1NDFjMWMiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L3N2Zz4=')] opacity-30" />
      
      <div className="container mx-auto px-4">
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
