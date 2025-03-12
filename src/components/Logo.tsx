
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.img
      src="/lovable-uploads/1843bc8b-3185-4369-8a52-ca6eb3e7e0b0.png"
      alt="Sr. Boteco Logo"
      className="h-32 md:h-40 w-auto"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    />
  );
};

export default Logo;
