
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <motion.img
        src="/lovable-uploads/1843bc8b-3185-4369-8a52-ca6eb3e7e0b0.png"
        alt="Sr. Boteco Logo"
        className="w-full h-auto drop-shadow-lg"
        style={{ filter: 'contrast(1.1) brightness(1.05)' }}
      />
    </motion.div>
  );
};

export default Logo;
