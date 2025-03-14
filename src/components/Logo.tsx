
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full flex justify-center items-center"
    >
      <motion.img
        alt="Sr. Boteco Logo"
        className="w-[300px] h-auto drop-shadow-lg" // Increased size here
        style={{ filter: 'contrast(1.1) brightness(1.05)' }}
        src="/lovable-uploads/8434c7e0-9936-4a4d-a896-636756964310.png"
      />
    </motion.div>
  );
};

export default Logo;
