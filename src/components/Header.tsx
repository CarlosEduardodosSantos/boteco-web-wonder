
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
    <header className="fixed top-0 left-0 right-0 bg-secondary/80 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="w-32">
          <Logo />
        </div>
        
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
                  className={cn(
                    "text-primary font-medium hover:text-primary/80 transition-colors",
                    "relative after:content-[''] after:absolute after:w-full after:scale-x-0",
                    "after:h-0.5 after:bottom-0 after:left-0 after:bg-primary",
                    "after:origin-bottom-right after:transition-transform after:duration-300",
                    "hover:after:scale-x-100 hover:after:origin-bottom-left"
                  )}
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
