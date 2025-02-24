
import { Beer, MapPin, Clock, Phone } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="absolute inset-0 hero-pattern" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="container mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-primary mb-6">
              Sr. Boteco
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Um lugar acolhedor onde cada momento se transforma em uma memória especial
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-primary/90 transition-colors">
              Conheça nosso cardápio
            </button>
          </motion.div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Sobre o Sr. Boteco
            </h2>
            <div className="glass-card p-8 rounded-2xl">
              <p className="text-lg text-gray-700 leading-relaxed">
                Desde 2010, o Sr. Boteco tem sido mais que um simples bar - é um ponto de encontro 
                onde amigos se reúnem, histórias são compartilhadas e momentos inesquecíveis são 
                criados. Nossa missão é oferecer não apenas bebidas e petiscos de qualidade, mas 
                uma experiência genuína de boteco tradicional com um toque de modernidade.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Destaque */}
      <section className="py-20 bg-secondary/20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Menu em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="glass-card p-6 rounded-xl hover:shadow-2xl transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <p className="text-primary font-bold">R$ {item.price.toFixed(2)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Visite-nos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card p-6 rounded-xl text-center"
            >
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Endereço</h3>
              <p className="text-gray-600">Rua dos Botecos, 123<br />São Paulo, SP</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card p-6 rounded-xl text-center"
            >
              <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Horário</h3>
              <p className="text-gray-600">Ter - Dom<br />17:00 - 00:00</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card p-6 rounded-xl text-center"
            >
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Contato</h3>
              <p className="text-gray-600">(11) 99999-9999<br />contato@srboteco.com</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary/5 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-600">
            © 2024 Sr. Boteco - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
};

const menuItems = [
  {
    name: "Pastel de Carne",
    description: "Massa crocante recheada com carne moída temperada",
    price: 8.90
  },
  {
    name: "Bolinho de Bacalhau",
    description: "Bolinhos dourados de bacalhau, receita portuguesa",
    price: 12.90
  },
  {
    name: "Caipirinha",
    description: "Limão, açúcar e cachaça artesanal",
    price: 14.90
  },
  {
    name: "Chopp Artesanal",
    description: "Chopp gelado direto do barril",
    price: 12.90
  },
  {
    name: "Porção de Calabresa",
    description: "Calabresa acebolada com farofa",
    price: 24.90
  },
  {
    name: "Porção de Fritas",
    description: "Batatas fritas crocantes com molho especial",
    price: 19.90
  }
];

export default Index;
