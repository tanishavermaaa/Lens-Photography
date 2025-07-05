import { motion } from "framer-motion";

export default function ImageGallery() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {/* Large Featured Image */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="aspect-[16/11] rounded-lg overflow-hidden bg-gray-100">
            <img
              src="https://images.pexels.com/photos/32866758/pexels-photo-32866758.jpeg"
              alt="Bright sunflower reaching towards the blue sky"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* Tall Portrait Image */}
        <motion.div
          className="lg:row-span-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="aspect-[3/4] lg:aspect-[3/5] rounded-lg overflow-hidden bg-gray-100">
            <img
              src="https://images.pexels.com/photos/32853860/pexels-photo-32853860.jpeg"
              alt="A fashionable man in a black suit posing confidently"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>

        {/* Second Row - Architecture Image */}
        <motion.div
          className="lg:col-span-2"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="aspect-[16/10] rounded-lg overflow-hidden bg-gray-100">
            <img
              src="https://images.pexels.com/photos/32803177/pexels-photo-32803177.jpeg"
              alt="Charming view of waterfront houses reflecting on water at dusk"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
