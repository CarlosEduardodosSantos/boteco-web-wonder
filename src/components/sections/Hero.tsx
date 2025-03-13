
import { motion } from "framer-motion";
import { Wine, Utensils, Music, Coffee } from "lucide-react";

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
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-32">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/20 to-accent/10" />
      <FloatingIcons />
      
      <div className="container mx-auto text-center z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-primary mb-8">
            Bem-vindo ao
            <span className="block mt-2">Sr. Boteco</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-accent/90 mb-12 max-w-2xl mx-auto font-medium">
            Um lugar acolhedor onde cada momento se transforma em uma memória especial
          </p>
          
          <div className="flex justify-center items-center mb-16">
            <motion.a 
              href="#menu"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-full text-lg font-bold hover:bg-primary/90 transition-colors"
            >
              Conheça nosso cardápio
            </motion.a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <InfoCard
              icon={Coffee}
              title="Horário"
              info={["Terça a Domingo", "17h às 00h"]}
              delay={0.3}
            />
            <InfoCard
              icon={Utensils}
              title="Endereço"
              info={["Rua dos Botecos, 123", "São Paulo, SP"]}
              delay={0.4}
            />
            <InfoCard
              icon={Music}
              title="Contato"
              info={["Reservas", "(11) 99999-9999"]}
              delay={0.5}
            />
          </div>
        </motion.div>
      </div>
    </section>
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
      className="glass-card p-6 rounded-2xl bg-secondary/50 hover:bg-secondary/60 transition-colors"
    >
      <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
      <h3 className="text-primary font-bold text-lg mb-2">{title}</h3>
      <p className="text-accent/90">{info[0]}</p>
      <p className="font-bold text-accent">{info[1]}</p>
    </motion.div>
  );
};

export default Hero;
