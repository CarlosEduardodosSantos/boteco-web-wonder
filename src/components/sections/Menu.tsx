
import { motion } from "framer-motion";
import { Wine, Coffee, Utensils } from "lucide-react";

interface MenuItem {
  name: string;
  description: string;
  price: number;
  icon: "wine" | "coffee" | "utensils";
}

const menuItems: MenuItem[] = [
  {
    name: "Pastel de Carne",
    description: "Massa crocante recheada com carne moída temperada",
    price: 8.90,
    icon: "utensils" as const
  },
  {
    name: "Bolinho de Bacalhau",
    description: "Bolinhos dourados de bacalhau, receita portuguesa",
    price: 12.90,
    icon: "utensils" as const
  },
  {
    name: "Caipirinha",
    description: "Limão, açúcar e cachaça artesanal",
    price: 14.90,
    icon: "wine" as const
  },
  {
    name: "Chopp Artesanal",
    description: "Chopp gelado direto do barril",
    price: 12.90,
    icon: "wine" as const
  },
  {
    name: "Porção de Calabresa",
    description: "Calabresa acebolada com farofa",
    price: 24.90,
    icon: "utensils" as const
  },
  {
    name: "Café Colonial",
    description: "Café especial com quitutes tradicionais",
    price: 19.90,
    icon: "coffee" as const
  }
];

const getIcon = (iconName: MenuItem["icon"]) => {
  switch (iconName) {
    case "wine":
      return <Wine className="w-8 h-8" />;
    case "coffee":
      return <Coffee className="w-8 h-8" />;
    case "utensils":
      return <Utensils className="w-8 h-8" />;
  }
};

const MenuCard = ({ item, index }: { item: MenuItem; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative p-6 rounded-xl hover:shadow-2xl transition-all bg-gradient-to-br from-secondary/20 to-secondary/5 hover:from-secondary/30 hover:to-secondary/10 border border-secondary/20"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-primary/5 text-primary group-hover:scale-110 transition-transform">
          {getIcon(item.icon)}
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 text-primary">{item.name}</h3>
          <p className="text-primary/70 mb-4">{item.description}</p>
          <p className="text-primary font-bold text-xl">R$ {item.price.toFixed(2)}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Menu = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Menu em Destaque
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuItems.map((item, index) => (
            <MenuCard key={item.name} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menu;
