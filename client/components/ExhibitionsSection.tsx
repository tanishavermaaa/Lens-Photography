import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

const exhibitions = [
  {
    title: "Eternal Moments",
    description:
      "A collection of stunning wedding photography capturing love stories",
    date: "March 15 - April 30, 2024",
    location: "Digital Gallery",
    participants: 45,
    image: "https://images.pexels.com/photos/6119578/pexels-photo-6119578.jpeg",
  },
  {
    title: "Wedding Venues",
    description:
      "Beautiful ceremony and reception venues from around the world",
    date: "April 1 - May 15, 2024",
    location: "Virtual Exhibition",
    participants: 32,
    image: "https://images.pexels.com/photos/2788494/pexels-photo-2788494.jpeg",
  },
  {
    title: "Bridal Elegance",
    description: "Professional bridal portraits showcasing beauty and emotion",
    date: "May 1 - June 20, 2024",
    location: "Online Showcase",
    participants: 28,
    image:
      "https://images.pexels.com/photos/32841796/pexels-photo-32841796.jpeg",
  },
];

export default function ExhibitionsSection() {
  return (
    <section className="py-20 md:py-32 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-800 mb-4">
            <span className="font-bold">AI</span> Exhibitions
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Curated collections of exceptional photography, showcasing the
            finest work from our global community of artists.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {exhibitions.map((exhibition, index) => (
            <motion.div
              key={exhibition.title}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={exhibition.image}
                  alt={exhibition.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-stone-800 mb-3">
                  {exhibition.title}
                </h3>

                <p className="text-stone-600 mb-4 leading-relaxed">
                  {exhibition.description}
                </p>

                {/* Meta Information */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-stone-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {exhibition.date}
                  </div>
                  <div className="flex items-center text-sm text-stone-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {exhibition.location}
                  </div>
                  <div className="flex items-center text-sm text-stone-500">
                    <Users className="h-4 w-4 mr-2" />
                    {exhibition.participants} Participants
                  </div>
                </div>

                <Button className="w-full bg-stone-800 hover:bg-stone-700 text-white">
                  View Exhibition
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 border-stone-800 text-stone-800 hover:bg-stone-800 hover:text-white"
          >
            View All Exhibitions
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
