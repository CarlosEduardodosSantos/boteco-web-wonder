
import { motion } from "framer-motion";
import { Wine, Coffee, Utensils } from "lucide-react";

const features = [
  {
    title: "Ambiente Acolhedor",
    description: "Um espaço pensado para seu conforto e bem-estar",
    icon: Wine,
    gradient: "from-[#fdfcfb] to-[#e2d1c3]"
  },
  {
    title: "Drinks Especiais",
    description: "Bebidas artesanais preparadas com maestria",
    icon: Coffee,
    gradient: "from-[#ee9ca7] to-[#ffdde1]"
  },
  {
    title: "Petiscos Tradicionais",
    description: "Sabor e tradição em cada mordida",
    icon: Utensils,
    gradient: "from-[#accbee] to-[#e7f0fd]"
  }
];

const Gallery = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Nossa Experiência
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`p-8 rounded-2xl bg-gradient-to-br ${feature.gradient} group hover:shadow-xl transition-all`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="p-4 rounded-full bg-white/30 backdrop-blur-sm mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-primary">{feature.title}</h3>
                  <p className="text-primary/70">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
