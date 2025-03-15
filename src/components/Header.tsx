
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Logo from "@/components/Logo";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const NavigationItems = () => (
    <NavigationMenuList className={isMobile ? "flex-col space-y-4" : ""}>
      <NavigationMenuItem>
        <NavigationMenuLink
          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          Home
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
          onClick={() => scrollToSection('about')}
        >
          Sobre
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
          onClick={() => scrollToSection('gallery')}
        >
          Experiência
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 cursor-pointer"
          onClick={() => scrollToSection('contact')}
        >
          Contato
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="h-20 w-32 md:w-36 flex items-center justify-center"
          >
            <Logo />
          </motion.div>

          {isMobile ? (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <button className="p-2">
                  {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[80vw] pt-12">
                <NavigationMenu className="w-full">
                  <NavigationItems />
                </NavigationMenu>
              </SheetContent>
            </Sheet>
          ) : (
            <NavigationMenu>
              <NavigationItems />
            </NavigationMenu>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
