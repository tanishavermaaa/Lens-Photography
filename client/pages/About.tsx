import { motion } from "framer-motion";
import MinimalHeader from "../components/MinimalHeader";
import { Button } from "../components/ui/button";
import { Heart, Camera, Users, Award } from "lucide-react";

const stats = [
  { icon: Camera, label: "Photos Shared", value: "2M+" },
  { icon: Users, label: "Active Artists", value: "10K+" },
  { icon: Heart, label: "Love Stories", value: "50K+" },
  { icon: Award, label: "Awards Won", value: "150+" },
];

const team = [
  {
    name: "Sarah Johnson",
    role: "Founder & CEO",
    image: "https://images.pexels.com/photos/5038559/pexels-photo-5038559.jpeg",
    description:
      "Former wedding photographer with 15 years of experience capturing love stories.",
  },
  {
    name: "Michael Chen",
    role: "Creative Director",
    image:
      "https://images.pexels.com/photos/19899977/pexels-photo-19899977.jpeg",
    description:
      "Award-winning photographer specializing in destination weddings worldwide.",
  },
  {
    name: "Emma Rodriguez",
    role: "Community Manager",
    image:
      "https://images.pexels.com/photos/32830848/pexels-photo-32830848.jpeg",
    description:
      "Passionate about connecting photographers and helping them grow their craft.",
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <MinimalHeader />

      <div className="pt-20">
        {/* Hero Section */}
        <motion.section
          className="py-20 md:py-32 bg-gradient-to-br from-stone-50 to-amber-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-4xl md:text-6xl font-light text-stone-800 mb-6">
                  About{" "}
                  <em className="font-serif italic text-amber-600">LENS</em>
                </h1>
                <p className="text-xl text-stone-600 mb-8 leading-relaxed">
                  We believe every love story deserves to be told beautifully.
                  LENS is the premier platform connecting couples with talented
                  wedding photographers who capture life's most precious
                  moments.
                </p>
                <p className="text-lg text-stone-600 mb-8">
                  Founded in 2020 by photographers, for photographers, we've
                  grown into a global community that celebrates the art of
                  wedding photography while helping artists thrive.
                </p>
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3"
                >
                  Join Our Community
                </Button>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="aspect-[4/5] rounded-lg overflow-hidden">
                  <img
                    src="https://images.pexels.com/photos/27268887/pexels-photo-27268887.jpeg"
                    alt="Beautiful wedding moment"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                      <stat.icon className="h-8 w-8 text-amber-600" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-stone-800 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-stone-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <motion.section
          className="py-20 bg-stone-900 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-light mb-8">
              Our <span className="font-bold text-amber-400">Mission</span>
            </h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              "To elevate the art of wedding photography by creating a platform
              where photographers can showcase their talent, connect with
              couples, and build thriving businesses while preserving the most
              beautiful moments of human connection."
            </p>
            <div className="w-24 h-px bg-amber-400 mx-auto"></div>
          </div>
        </motion.section>

        {/* Team Section */}
        <section className="py-20 bg-stone-50">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-4">
                Meet Our <span className="font-bold">Team</span>
              </h2>
              <p className="text-lg text-stone-600 max-w-2xl mx-auto">
                Passionate individuals dedicated to supporting photographers and
                preserving beautiful moments.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-stone-800 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-amber-600 font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-stone-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
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
              Ready to be part of our <span className="font-bold">story</span>?
            </h2>
            <p className="text-lg text-stone-600 mb-8">
              Whether you're a photographer looking to showcase your work or a
              couple searching for the perfect artist, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3"
              >
                For Photographers
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-stone-300 text-stone-700 hover:bg-stone-100 px-8 py-3"
              >
                For Couples
              </Button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
