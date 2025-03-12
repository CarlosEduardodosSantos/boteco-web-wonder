
import { motion } from "framer-motion";

interface MenuItem {
  name: string;
  description: string;
  price: number;
  image: string;
}

const menuItems = [
  {
    name: "Pastel de Carne",
    description: "Massa crocante recheada com carne moída temperada",
    price: 8.90,
    image: "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?q=80&w=1000"
  },
  {
    name: "Bolinho de Bacalhau",
    description: "Bolinhos dourados de bacalhau, receita portuguesa",
    price: 12.90,
    image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=1000"
  },
  {
    name: "Caipirinha",
    description: "Limão, açúcar e cachaça artesanal",
    price: 14.90,
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1000"
  },
  {
    name: "Chopp Artesanal",
    description: "Chopp gelado direto do barril",
    price: 12.90,
    image: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?q=80&w=1000"
  },
  {
    name: "Porção de Calabresa",
    description: "Calabresa acebolada com farofa",
    price: 24.90,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000"
  },
  {
    name: "Porção de Fritas",
    description: "Batatas fritas crocantes com molho especial",
    price: 19.90,
    image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=1000"
  }
];

const MenuCard = ({ item, index }: { item: MenuItem; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="menu-card p-6 rounded-xl hover:shadow-2xl transition-all"
      style={{ backgroundImage: `url(${item.image})` }}
    >
      <div className="glass-card p-6 rounded-xl backdrop-blur-sm">
        <h3 className="text-xl font-semibold mb-2 text-white">{item.name}</h3>
        <p className="text-white/90 mb-4">{item.description}</p>
        <p className="text-white font-bold text-xl">R$ {item.price.toFixed(2)}</p>
      </div>
    </motion.div>
  );
};

const Menu = () => {
  return (
    <section className="py-20 bg-secondary/20 relative">
      <div className="container mx-auto px-4">
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
