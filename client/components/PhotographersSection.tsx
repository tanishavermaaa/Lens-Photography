import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

const photographers = [
  {
    name: "Adam Denison",
    specialty: "Wedding Photography",
    image:
      "https://images.pexels.com/photos/32830848/pexels-photo-32830848.jpeg",
    works: 124,
    followers: "12.5k",
  },
  {
    name: "Sarah Mitchell",
    specialty: "Bridal Portraits",
    image: "https://images.pexels.com/photos/5038559/pexels-photo-5038559.jpeg",
    works: 89,
    followers: "8.2k",
  },
  {
    name: "Marcus Chen",
    specialty: "Ceremony Photography",
    image:
      "https://images.pexels.com/photos/19899977/pexels-photo-19899977.jpeg",
    works: 156,
    followers: "15.7k",
  },
];

export default function PhotographersSection() {
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
            Meet the <em className="font-serif italic">Photographers</em>
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Discover the talented artists behind the lens, each bringing their
            unique perspective and passion to the world of photography.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {photographers.map((photographer, index) => (
            <motion.div
              key={photographer.name}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              {/* Featured Image */}
              <div className="aspect-[4/5] rounded-lg overflow-hidden mb-6 relative">
                <img
                  src={photographer.image}
                  alt={`Work by ${photographer.name}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>

              {/* Photographer Info */}
              <div className="flex items-center mb-4">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage
                    src={photographer.image}
                    alt={photographer.name}
                  />
                  <AvatarFallback>
                    {photographer.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-xl font-semibold text-stone-800">
                    {photographer.name}
                  </h3>
                  <p className="text-stone-600">{photographer.specialty}</p>
                </div>
              </div>

              {/* Stats */}
              <div className="flex justify-between text-sm text-stone-500 mb-6">
                <span>{photographer.works} Works</span>
                <span>{photographer.followers} Followers</span>
              </div>

              {/* View Profile Button */}
              <Button
                variant="outline"
                className="w-full group-hover:bg-stone-800 group-hover:text-white transition-colors duration-300"
              >
                View Profile
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
