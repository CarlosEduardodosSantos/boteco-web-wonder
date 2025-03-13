
import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Wine, Utensils, Coffee } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-secondary/20 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGZpbGw9IiM1NDFjMWMiIGZpbGwtb3BhY2l0eT0iLjA1IiBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L3N2Zz4=')] opacity-50" />
      
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center min-h-screen">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left pt-20 md:pt-0"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-primary mb-6">
              Tradição & Sabor
              <span className="block mt-2 text-2xl md:text-3xl font-medium text-primary/80">
                no coração da cidade
              </span>
            </h1>
            
            <p className="text-lg text-primary/70 mb-8 max-w-md">
              Uma experiência única de boteco, onde a tradição se encontra com o conforto moderno.
              Venha conhecer nossos pratos e drinks especiais.
            </p>

            <div className="flex gap-4 items-center">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-white px-8"
              >
                <a href="#menu">Ver Cardápio</a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
              >
                <a href="#contact">Fazer Reserva</a>
              </Button>
            </div>

            <div className="flex gap-8 mt-12">
              <div className="flex items-center gap-2">
                <Wine className="w-5 h-5 text-primary" />
                <span className="text-sm text-primary/80">Drinks Especiais</span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils className="w-5 h-5 text-primary" />
                <span className="text-sm text-primary/80">Petiscos</span>
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="w-5 h-5 text-primary" />
                <span className="text-sm text-primary/80">Café Colonial</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-transparent to-secondary/20 rounded-full blur-3xl" />
            <div className="relative w-full max-w-md">
              <Logo />
              <motion.div
                className="absolute -inset-4 border-2 border-primary/20 rounded-full"
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
