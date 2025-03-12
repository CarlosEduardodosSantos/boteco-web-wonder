
import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Endereço",
    lines: ["Rua dos Botecos, 123", "São Paulo, SP"],
    animation: { x: -20 }
  },
  {
    icon: Clock,
    title: "Horário",
    lines: ["Ter - Dom", "17:00 - 00:00"],
    animation: { y: 20 }
  },
  {
    icon: Phone,
    title: "Contato",
    lines: ["(11) 99999-9999", "contato@srboteco.com"],
    animation: { x: 20 }
  }
];

const Contact = () => {
  return (
    <section className="py-20 relative bg-gradient-to-b from-secondary/20 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
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
      </div>
    </section>
  );
};

export default Contact;
