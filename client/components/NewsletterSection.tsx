import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

export default function NewsletterSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-amber-400 via-orange-500 to-purple-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-6 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white mb-6 leading-tight">
            Join the <em className="font-serif italic">Creative</em>
            <br />
            <span className="font-bold">Newsletter</span>
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Stay updated with the latest exhibitions, featured artists, and
            photography trends. Get inspiration delivered to your inbox weekly.
          </p>

          {/* Newsletter Form */}
          <motion.div
            className="max-w-md mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-white/20 border-white/30 text-white placeholder:text-white/70 backdrop-blur-sm focus:bg-white/30 focus:border-white"
              />
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-white/90 font-semibold px-8 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>

            <p className="text-sm text-white/80 mt-4">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
