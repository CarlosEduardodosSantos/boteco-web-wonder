
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Wine, Utensils, Beer, ExternalLink } from "lucide-react";
import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const Hero = () => {
  const [bgImageLoaded, setBgImageLoaded] = useState(false);

  return (
    <section className="min-h-screen relative overflow-hidden pt-20">
      {!bgImageLoaded && (
        <div className="absolute inset-0 bg-black">
          <Skeleton className="w-full h-full" />
        </div>
      )}
      <div 
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/lovable-uploads/47050126-4846-4fa2-85e6-3546807c2c70.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: 0,
          opacity: bgImageLoaded ? 1 : 0,
          transition: 'opacity 0.3s ease-in-out'
        }}
        role="img"
        aria-label="Background do Sr. Boteco"
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col items-center justify-center min-h-screen max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h1 className="font-rumble text-xl md:text-3xl text-white mb-4">
              Um novo conceito
              <span className="font-berthold block mt-2 text-base md:text-lg font-medium text-white/80">
                o mesmo sabor irresistível!
              </span>
            </h1>
            
            <p className="font-canva text-base text-white/70 mb-6 max-w-2xl mx-auto">
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
                <Wine className="w-5 h-5 text-white" />
                <span className="text-sm text-white/80">Drinks Especiais</span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils className="w-5 h-5 text-white" />
                <span className="text-sm text-white/80">Petiscos</span>
              </div>
              <div className="flex items-center gap-2">
                <Beer className="w-5 h-5 text-white" />
                <span className="text-sm text-white/80">Chopp Gelado</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <img 
        src="/lovable-uploads/47050126-4846-4fa2-85e6-3546807c2c70.jpg"
        alt="Background do Sr. Boteco"
        onLoad={() => setBgImageLoaded(true)}
        className="hidden"
        width={1920}
        height={1080}
        fetchPriority="high"
        decoding="async"
      />
    </section>
  );
};

export default Hero;
