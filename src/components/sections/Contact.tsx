import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    lines: ["Patio Limeira Shopping", "Limeira, SP"],
    animation: { x: -20 }
  },
  {
    icon: Clock,
    title: "Horário",
    lines: ["Seg - Dom", "11:00 - 22:00"],
    animation: { y: 20 }
  },
  {
    icon: Phone,
    title: "Contato",
    lines: ["(19) 99414-7021", "contato@srboteco.com"],
    animation: { x: 20 }
  }
];

const Contact = () => {
  return (
    <section className="py-20 relative bg-[#e6c7af]">
      <div className="container mx-auto px-4">
        <h2 className="font-rumble text-2xl md:text-3xl text-center mb-8 text-primary">
          Visite-nos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, ...info.animation }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass-card p-6 rounded-xl text-center hover:scale-105 transition-transform"
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <div className="text-gray-600">
                  {info.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center gap-6 mt-12"
        >
          <a 
            href="https://www.instagram.com/srbotecopatiolimeira/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=61565552648174" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-primary text-white hover:bg-primary/80 transition-colors"
          >
            <Facebook className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
