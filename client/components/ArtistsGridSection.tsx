import { motion } from "framer-motion";
import { Button } from "./ui/button";

const artistImages = [
  "https://images.pexels.com/photos/27268887/pexels-photo-27268887.jpeg",
  "https://images.pexels.com/photos/32830848/pexels-photo-32830848.jpeg",
  "https://images.pexels.com/photos/30337239/pexels-photo-30337239.jpeg",
  "https://images.pexels.com/photos/6119578/pexels-photo-6119578.jpeg",
  "https://images.pexels.com/photos/5038559/pexels-photo-5038559.jpeg",
  "https://images.pexels.com/photos/32841796/pexels-photo-32841796.jpeg",
  "https://images.pexels.com/photos/6437094/pexels-photo-6437094.jpeg",
  "https://images.pexels.com/photos/19899977/pexels-photo-19899977.jpeg",
  "https://images.pexels.com/photos/2774081/pexels-photo-2774081.jpeg",
];

export default function ArtistsGridSection() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-800 mb-4">
            CONNECT WITH
            <br />
            TODAY'S
            <br />
            <span className="font-bold">TOP IMAGE MAKERS</span>
          </h2>
        </motion.div>

        {/* Artists Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 mb-16">
          {artistImages.map((image, index) => (
            <motion.div
              key={index}
              className="aspect-square rounded-lg overflow-hidden group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={image}
                alt={`Artist work ${index + 1}`}
                className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Browse Through Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-light text-stone-800 mb-8">
            <em className="font-serif italic">Browse Through</em>
            <br />
            <span className="font-bold">Hundreds of Artists</span>
          </h3>

          <Button
            size="lg"
            className="bg-stone-800 hover:bg-stone-700 text-white px-12 py-4 text-lg"
          >
            Explore All Artists
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
