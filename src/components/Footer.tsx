
import { motion } from 'framer-motion';
import LocationMap from './LocationMap';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white border-t border-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <h3 className="font-rumble text-xl text-primary mb-4">Nos encontre</h3>
            <p className="text-gray-700 mb-6">
              Visite o Sr. Boteco no Patio Limeira Shopping.<br />
              Estamos localizados na praça de alimentação.
            </p>
            <LocationMap />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 md:order-2 flex flex-col items-center"
          >
            <img 
              src="/lovable-uploads/8434c7e0-9936-4a4d-a896-636756964310.png" 
              alt="Sr. Boteco Logo" 
              className="w-32 h-32 object-contain mb-4"
            />
            <p className="text-gray-500 text-sm text-center">
              © {currentYear} Sr. Boteco. Todos os direitos reservados.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
