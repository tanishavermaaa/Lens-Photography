import { motion } from "framer-motion";
import { Button } from "./ui/button";

export default function OneStopSection() {
  return (
    <section className="py-20 md:py-32 bg-stone-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">
              YOUR ONE-STOP
              <br />
              <span className="font-bold">DESTINATION</span>
              <br />
              FOR
              <br />
              <em className="font-serif italic text-amber-200">Photography</em>
            </h2>

            <p className="text-lg text-white/80 mb-8 leading-relaxed">
              Discover, connect, and showcase your work in the world's most
              comprehensive photography community. From emerging talents to
              established masters, find inspiration at every turn.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-white text-stone-900 hover:bg-white/90 px-8 py-3"
              >
                Start Exploring
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-stone-900 px-8 py-3"
              >
                Join Community
              </Button>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="aspect-[4/5] rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/32803177/pexels-photo-32803177.jpeg"
                alt="Professional photography workspace"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Stats */}
            <motion.div
              className="absolute -bottom-6 -left-6 bg-white text-stone-900 p-6 rounded-lg shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-600">10K+</div>
                <div className="text-sm text-stone-600">Active Artists</div>
              </div>
            </motion.div>

            <motion.div
              className="absolute -top-6 -right-6 bg-amber-500 text-white p-6 rounded-lg shadow-2xl"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-center">
                <div className="text-3xl font-bold">2M+</div>
                <div className="text-sm">Photos Shared</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
