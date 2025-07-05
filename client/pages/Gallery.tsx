import { motion } from "framer-motion";
import MinimalHeader from "../components/MinimalHeader";
import { Button } from "../components/ui/button";

const galleryImages = [
  "https://images.pexels.com/photos/27268887/pexels-photo-27268887.jpeg",
  "https://images.pexels.com/photos/32830848/pexels-photo-32830848.jpeg",
  "https://images.pexels.com/photos/30337239/pexels-photo-30337239.jpeg",
  "https://images.pexels.com/photos/6119578/pexels-photo-6119578.jpeg",
  "https://images.pexels.com/photos/5038559/pexels-photo-5038559.jpeg",
  "https://images.pexels.com/photos/32841796/pexels-photo-32841796.jpeg",
  "https://images.pexels.com/photos/6437094/pexels-photo-6437094.jpeg",
  "https://images.pexels.com/photos/19899977/pexels-photo-19899977.jpeg",
  "https://images.pexels.com/photos/2774081/pexels-photo-2774081.jpeg",
  "https://images.pexels.com/photos/2788494/pexels-photo-2788494.jpeg",
];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-stone-50">
      <MinimalHeader />

      <div className="pt-20">
        {/* Hero Section */}
        <motion.section
          className="py-20 md:py-32 bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-light text-stone-800 mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Wedding{" "}
              <em className="font-serif italic text-amber-500">Gallery</em>
            </motion.h1>
            <motion.p
              className="text-xl text-stone-600 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Explore our curated collection of beautiful wedding moments
              captured by talented photographers from around the world.
            </motion.p>
          </div>
        </motion.section>

        {/* Gallery Grid */}
        <section className="py-16 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={index}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="aspect-[4/5] rounded-lg overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500">
                    <img
                      src={image}
                      alt={`Wedding photo ${index + 1}`}
                      className="w-full h-full object-cover group-hover:brightness-110 transition-all duration-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          className="py-20 bg-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-6">
              Ready to showcase your{" "}
              <span className="font-bold">wedding story</span>?
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Join our community of talented wedding photographers and share
              your most beautiful moments.
            </p>
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white px-12 py-4"
            >
              Submit Your Work
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
