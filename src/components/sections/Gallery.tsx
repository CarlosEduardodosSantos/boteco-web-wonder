
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1538488881038-e252a119ace7?q=80&w=1000",
    alt: "Ambiente interno"
  },
  {
    src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1000",
    alt: "Bar"
  },
  {
    src: "https://images.unsplash.com/photo-1525268323446-0505b6fe7778?q=80&w=1000",
    alt: "Área externa"
  }
];

const Gallery = () => {
  return (
    <section className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Nosso Ambiente
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.alt}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="rounded-xl overflow-hidden h-64"
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
