import { MapPin, Clock, Phone, Utensils, Music, Star } from "lucide-react";
import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  return <div className="min-h-screen">
      <div className="absolute inset-0 hero-pattern" />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/30 to-accent/20" />
        
        {/* Floating Icons */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="absolute inset-0 overflow-hidden pointer-events-none"
        >
          {[Beer, Utensils, Music, Star].map((Icon, index) => (
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="glass-card p-4 rounded-xl"
              >
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-gray-700">Terça a Domingo</p>
                <p className="font-semibold">17h às 00h</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="glass-card p-4 rounded-xl"
              >
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-gray-700">Rua dos Botecos, 123</p>
                <p className="font-semibold">São Paulo, SP</p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="glass-card p-4 rounded-xl"
              >
                <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-gray-700">Reservas</p>
                <p className="font-semibold">(11) 99999-9999</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="py-20 relative bg-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Sobre o Sr. Boteco
            </h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1074" alt="Ambiente do Sr. Boteco" className="w-full h-64 object-cover" />
              </div>
              <div className="glass-card p-8 rounded-2xl">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Desde 2010, o Sr. Boteco tem sido mais que um simples bar - é um ponto de encontro 
                  onde amigos se reúnem, histórias são compartilhadas e momentos inesquecíveis são 
                  criados. Nossa missão é oferecer não apenas bebidas e petiscos de qualidade, mas 
                  uma experiência genuína de boteco tradicional com um toque de modernidade.
                </p>
              </div>
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
            {menuItems.map((item, index) => <motion.div key={item.name} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: index * 0.1
          }} className="menu-card p-6 rounded-xl hover:shadow-2xl transition-all" style={{
            backgroundImage: `url(${item.image})`
          }}>
                <div className="glass-card p-6 rounded-xl backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.name}</h3>
                  <p className="text-white/90 mb-4">{item.description}</p>
                  <p className="text-white font-bold text-xl">R$ {item.price.toFixed(2)}</p>
                </div>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Galeria de Fotos */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Nosso Ambiente
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} className="rounded-xl overflow-hidden h-64">
              <img src="https://images.unsplash.com/photo-1538488881038-e252a119ace7?q=80&w=1000" alt="Ambiente interno" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </motion.div>
            <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.2
          }} className="rounded-xl overflow-hidden h-64">
              <img src="https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1000" alt="Bar" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </motion.div>
            <motion.div initial={{
            opacity: 0
          }} whileInView={{
            opacity: 1
          }} viewport={{
            once: true
          }} transition={{
            delay: 0.4
          }} className="rounded-xl overflow-hidden h-64">
              <img src="https://images.unsplash.com/photo-1525268323446-0505b6fe7778?q=80&w=1000" alt="Área externa" className="w-full h-full object-cover hover:scale-110 transition-transform duration-300" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Informações de Contato */}
      <section className="py-20 relative bg-gradient-to-b from-secondary/20 to-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-primary">
            Visite-nos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6
          }} className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Endereço</h3>
              <div className="text-gray-600">
                Rua dos Botecos, 123<br />São Paulo, SP
              </div>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.2
          }} className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform">
              <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Horário</h3>
              <p className="text-gray-600">Ter - Dom<br />17:00 - 00:00</p>
            </motion.div>
            
            <motion.div initial={{
            opacity: 0,
            x: 20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.6,
            delay: 0.4
          }} className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">Contato</h3>
              <p className="text-gray-600">(11) 99999-9999<br />contato@srboteco.com</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      
    </div>;
};

const menuItems = [{
  name: "Pastel de Carne",
  description: "Massa crocante recheada com carne moída temperada",
  price: 8.90,
  image: "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?q=80&w=1000"
}, {
  name: "Bolinho de Bacalhau",
  description: "Bolinhos dourados de bacalhau, receita portuguesa",
  price: 12.90,
  image: "https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?q=80&w=1000"
}, {
  name: "Caipirinha",
  description: "Limão, açúcar e cachaça artesanal",
  price: 14.90,
  image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1000"
}, {
  name: "Chopp Artesanal",
  description: "Chopp gelado direto do barril",
  price: 12.90,
  image: "https://images.unsplash.com/photo-1600788886242-5c96aabe3757?q=80&w=1000"
}, {
  name: "Porção de Calabresa",
  description: "Calabresa acebolada com farofa",
  price: 24.90,
  image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1000"
}, {
  name: "Porção de Fritas",
  description: "Batatas fritas crocantes com molho especial",
  price: 19.90,
  image: "https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?q=80&w=1000"
}];

export default Index;

