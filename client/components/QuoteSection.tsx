import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="py-20 md:py-32 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 md:px-6 text-center">
        <motion.div
          className="relative"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Large Quote Mark */}
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <span className="text-6xl md:text-8xl text-stone-300 font-serif">
              "
            </span>
          </div>

          <blockquote className="relative">
            <p className="text-2xl md:text-3xl lg:text-4xl font-light text-stone-800 leading-relaxed mb-8 tracking-wide">
              THE BEST THING
              <br />
              ABOUT A PICTURE
              <br />
              IS THAT IT NEVER
              <br />
              CHANGES, EVEN
              <br />
              WHEN THE
              <br />
              PEOPLE IN IT DO.
            </p>

            <div className="w-24 h-px bg-stone-400 mx-auto mb-6"></div>

            <cite className="text-lg text-stone-600 font-medium not-italic">
              Andy Warhol
            </cite>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
