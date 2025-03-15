import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

const galleryImages = [
  "/lovable-uploads/d700c8c5-a5be-4e7a-ac8f-96849b9100d0.png",
  "/lovable-uploads/296c9637-b5da-4281-918a-347c01f7f429.png",
  "/lovable-uploads/c0295b9e-651c-496f-b846-e233ae37312a.png",
  "/lovable-uploads/677e3fea-5703-48b3-b0bc-70294c07b57c.png",
  "/lovable-uploads/03d48920-88a1-4d5f-a527-099277ae402f.png",
  "/lovable-uploads/bd053290-004b-4cdc-a970-b80c14ef7e97.png",
  "/lovable-uploads/9aaefa7a-0475-4145-a052-01ab0beadb8d.png",
  "/lovable-uploads/8f625ed5-a1f3-4cb2-8429-581a5e42b39e.png"
];

const Features = () => {
  const [loadedImages, setLoadedImages] = useState<{[key: string]: boolean}>({});

  const handleImageLoad = (image: string) => {
    setLoadedImages(prev => ({...prev, [image]: true}));
  };

  return (
    <section className="py-20 relative overflow-hidden bg-[#541c1c]/5">
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-rumble text-2xl md:text-3xl text-[#541c1c] mb-4">
            Nossa Galeria
          </h2>
          <p className="font-canva text-base text-[#541c1c]/70 max-w-2xl mx-auto">
            Momentos especiais capturados em nosso espaço
          </p>
        </motion.div>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            duration: 20,
            dragFree: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
              stopOnInteraction: true,
              stopOnMouseEnter: true,
            }),
          ]}
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
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square overflow-hidden rounded-2xl relative"
                >
                  {!loadedImages[image] && (
                    <Skeleton className="w-full h-full absolute inset-0" />
                  )}
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className={`w-full h-full object-cover transition-all duration-300 ${
                      loadedImages[image] ? 'opacity-100' : 'opacity-0'
                    }`}
                    loading="lazy"
                    decoding="async"
                    onLoad={() => handleImageLoad(image)}
                    width={400}
                    height={400}
                    fetchPriority={index < 2 ? "high" : "low"}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="flex bg-white/80 hover:bg-white border-none absolute left-4 lg:left-8" />
          <CarouselNext className="flex bg-white/80 hover:bg-white border-none absolute right-4 lg:right-8" />
        </Carousel>
      </div>
    </section>
  );
};

export default Features;
