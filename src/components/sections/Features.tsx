
import { motion } from "framer-motion";
import { Award, Star, Heart, Trophy, Users } from "lucide-react";

const features = [
  {
    icon: Star,
    title: "Gastronomia Premiada",
    description: "Pratos exclusivos reconhecidos pela crítica especializada"
  },
  {
    icon: Users,
    title: "Ambiente Acolhedor",
    description: "Espaço ideal para encontros com amigos e família"
  },
  {
    icon: Trophy,
    title: "Melhor Boteco 2023",
    description: "Premiado como melhor boteco da cidade"
  },
  {
    icon: Heart,
    title: "Tradição & Qualidade",
    description: "13 anos servindo com amor e dedicação"
  }
];

const Features = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-secondary/5 to-transparent">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-primary mb-4">
            Por Que Nos Escolher?
          </h2>
          <p className="text-primary/70 max-w-2xl mx-auto">
            Descubra o que torna o Sr. Boteco um lugar único e especial
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/50 backdrop-blur-sm p-8 rounded-2xl border border-primary/10 hover:border-primary/20 transition-all hover:shadow-xl">
                  <div className="bg-primary/5 p-4 rounded-xl inline-block mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">
                    {feature.title}
                  </h3>
                  <p className="text-primary/70">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
