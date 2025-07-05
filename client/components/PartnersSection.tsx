import { motion } from "framer-motion";

const partners = [
  { name: "Canon", logo: "CANON" },
  { name: "Leica", logo: "Leica" },
  { name: "Nikon", logo: "Nikon" },
  { name: "Sony", logo: "SONY" },
  { name: "Fujifilm", logo: "FUJIFILM" },
  { name: "Olympus", logo: "OLYMPUS" },
];

export default function PartnersSection() {
  return (
    <section className="py-16 md:py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl md:text-2xl font-light text-stone-600 mb-8">
            Our partners
          </h2>
        </motion.div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="flex items-center justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-stone-400 hover:text-stone-600 transition-colors duration-300 cursor-pointer">
                <span className="text-lg md:text-xl font-semibold tracking-wide">
                  {partner.logo}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
