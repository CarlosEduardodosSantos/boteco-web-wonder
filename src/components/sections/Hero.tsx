
import { motion } from "framer-motion";
import { Wine, Utensils, Music, Coffee } from "lucide-react";
import Logo from "@/components/Logo";

const FloatingIcons = () => {
  const icons = [Wine, Utensils, Music, Coffee];
  
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {icons.map((Icon, index) => (
        <motion.div
          key={index}
          initial={{ y: -20, opacity: 0 }}
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 3,
            delay: index * 0.2,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute text-primary/30"
          style={{
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 90}%`
          }}
        >
          <Icon size={40} />
        </motion.div>
      ))}
    </motion.div>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20" />
      <FloatingIcons />
      
      <div className="container mx-auto text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block mb-6"
          >
            <Logo />
          </motion.div>
          
          <h1 className="text-6xl md:text-7xl font-bold text-primary mb-6">
            Sr. Boteco
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Um lugar acolhedor onde cada momento se transforma em uma memória especial
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Conheça nosso cardápio
            </motion.button>
            
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-primary text-primary px-8 py-3 rounded-full text-lg font-medium hover:bg-primary/10 transition-colors"
            >
              Faça sua reserva
            </motion.button>
          </div>

          <InfoCards />
        </motion.div>
      </div>
    </section>
  );
};

const InfoCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
      <InfoCard
        icon={Clock}
        title="Horário"
        info={["Terça a Domingo", "17h às 00h"]}
        delay={0.3}
      />
      <InfoCard
        icon={MapPin}
        title="Endereço"
        info={["Rua dos Botecos, 123", "São Paulo, SP"]}
        delay={0.4}
      />
      <InfoCard
        icon={Phone}
        title="Contato"
        info={["Reservas", "(11) 99999-9999"]}
        delay={0.5}
      />
    </div>
  );
};

interface InfoCardProps {
  icon: React.ElementType;
  title: string;
  info: [string, string];
  delay: number;
}

const InfoCard = ({ icon: Icon, title, info, delay }: InfoCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      className="glass-card p-4 rounded-xl"
    >
      <Icon className="w-8 h-8 text-primary mx-auto mb-2" />
      <p className="text-gray-700">{info[0]}</p>
      <p className="font-semibold">{info[1]}</p>
    </motion.div>
  );
};

export default Hero;
