
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const galleryImages = [
  "/lovable-uploads/47050126-4846-4fa2-85e6-3546807c2c70.jpg",
  "/lovable-uploads/920b2123-44de-422b-9591-51a46e30afe7.jpg",
  "/lovable-uploads/1843bc8b-3185-4369-8a52-ca6eb3e7e0b0.png",
  "/lovable-uploads/8434c7e0-9936-4a4d-a896-636756964310.png",
  "/lovable-uploads/47050126-4846-4fa2-85e6-3546807c2c70.jpg",
  "/lovable-uploads/920b2123-44de-422b-9591-51a46e30afe7.jpg",
];

const Features = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-[#541c1c]/5">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#541c1c] mb-4">
            Nossa Galeria
          </h2>
          <p className="text-[#541c1c]/70 max-w-2xl mx-auto">
            Momentos especiais capturados em nosso espaço
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="aspect-square overflow-hidden rounded-2xl"
                >
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Features;
