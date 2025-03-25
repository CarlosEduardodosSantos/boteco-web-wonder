
import { motion } from 'framer-motion';
import { MapPin, Clock, Phone } from 'lucide-react';
import LocationMap from './LocationMap';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary/5 border-t border-primary/10 py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-4 space-y-4"
          >
            <h3 className="font-rumble text-xl text-primary mb-2">Nos encontre</h3>
            <div className="flex flex-col space-y-3">
              <div className="flex items-center gap-2">
                <MapPin className="text-primary w-4 h-4" />
                <p className="text-gray-700 text-sm">
                  Patio Limeira Shopping, Praça de alimentação
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="text-primary w-4 h-4" />
                <p className="text-gray-700 text-sm">
                  Segunda a Sábado: 10h às 22h | Domingo: 12h às 20h
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="text-primary w-4 h-4" />
                <p className="text-gray-700 text-sm">
                  (19) 99414-7021
                </p>
              </div>
            </div>
            <div className="mt-4 w-full">
              <LocationMap />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3 flex flex-col items-center justify-center"
          >
            <img 
              src="/lovable-uploads/8434c7e0-9936-4a4d-a896-636756964310.png" 
              alt="Sr. Boteco Logo" 
              className="w-28 h-28 object-contain mb-2"
            />
            <p className="text-gray-500 text-xs text-center">
              © {currentYear} Sr. Boteco. Todos os direitos reservados.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
