
import { motion } from "framer-motion";
import Logo from "@/components/Logo";
import { cn } from "@/lib/utils";

const Header = () => {
  const menuItems = [
    { label: "Início", href: "#home" },
    { label: "Sobre", href: "#about" },
    { label: "Cardápio", href: "#menu" },
    { label: "Galeria", href: "#gallery" },
    { label: "Contato", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-end">
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            {menuItems.map((item) => (
              <motion.li
                key={item.label}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href={item.href}
                  className="text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
