
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary/5 border-t border-primary/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <img 
              src="/lovable-uploads/8434c7e0-9936-4a4d-a896-636756964310.png" 
              alt="Sr. Boteco Logo" 
              className="w-28 h-28 object-contain"
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <p className="text-gray-500 text-sm">
              © {currentYear} Sr. Boteco. Todos os direitos reservados.
            </p>
            <div className="mt-3 flex items-center justify-center">
              <p className="text-xs text-gray-400">
                Desenvolvido por{" "}
                <a 
                  href="http://web.trendbyte.com.br" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-1 transition-colors"
                >
                  Trendbyte
                  <ExternalLink className="h-3 w-3" />
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
