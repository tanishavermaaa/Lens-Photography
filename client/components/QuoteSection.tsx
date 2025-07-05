import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="py-16 md:py-25 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Large Quote Mark */}
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="text-6xl md:text-8xl text-stone-300 font-serif">
              "
            </span>
          </motion.div>

          <blockquote className="relative">
            <motion.p
              className="text-2xl md:text-3xl lg:text-4xl font-light text-stone-800 leading-relaxed mb-8 tracking-wide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              {[
                "THE BEST THING ABOUT A PICTURE IS THAT",
                "IT NEVER CHANGES, EVEN WHEN THE ",
                "PEOPLE IN IT DO.",
              ].map((line, index) => (
                <motion.span
                  key={index}
                  className="block"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {line}
                  <br />
                </motion.span>
              ))}
            </motion.p>

            <motion.div
              className="w-24 h-px bg-stone-400 mx-auto mb-6"
              initial={{ width: 0 }}
              whileInView={{ width: 96 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            ></motion.div>

            <motion.cite
              className="text-lg text-stone-600 font-medium not-italic"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              viewport={{ once: true }}
            >
              Andy Warhol
            </motion.cite>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
