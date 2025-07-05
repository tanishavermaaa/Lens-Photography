import { motion } from "framer-motion";
import MinimalHeader from "../components/MinimalHeader";
import { Button } from "../components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Badge } from "../components/ui/badge";

const featuredArtists = [
  {
    name: "Adam Denison",
    specialty: "Wedding Photography",
    image:
      "https://images.pexels.com/photos/32830848/pexels-photo-32830848.jpeg",
    works: 124,
    followers: "12.5k",
    featured: true,
  },
  {
    name: "Sarah Mitchell",
    specialty: "Bridal Portraits",
    image: "https://images.pexels.com/photos/5038559/pexels-photo-5038559.jpeg",
    works: 89,
    followers: "8.2k",
    featured: true,
  },
  {
    name: "Marcus Chen",
    specialty: "Ceremony Photography",
    image:
      "https://images.pexels.com/photos/19899977/pexels-photo-19899977.jpeg",
    works: 156,
    followers: "15.7k",
    featured: true,
  },
  {
    name: "Elena Rodriguez",
    specialty: "Destination Weddings",
    image:
      "https://images.pexels.com/photos/27268887/pexels-photo-27268887.jpeg",
    works: 98,
    followers: "9.8k",
    featured: false,
  },
  {
    name: "James Wilson",
    specialty: "Reception Photography",
    image: "https://images.pexels.com/photos/6119578/pexels-photo-6119578.jpeg",
    works: 167,
    followers: "18.3k",
    featured: false,
  },
  {
    name: "Sophia Kim",
    specialty: "Engagement Sessions",
    image: "https://images.pexels.com/photos/2774081/pexels-photo-2774081.jpeg",
    works: 203,
    followers: "22.1k",
    featured: false,
  },
];

export default function Artists() {
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
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-light text-stone-800 mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Talented{" "}
              <em className="font-serif italic text-amber-600">Artists</em>
            </motion.h1>
            <motion.p
              className="text-xl text-stone-600 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Meet the passionate photographers who specialize in capturing
              life's most precious moments with artistry and emotion.
            </motion.p>
          </div>
        </motion.section>

        {/* Featured Artists */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-stone-800 mb-4">
                Featured <span className="font-bold">Artists</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {featuredArtists.map((artist, index) => (
                <motion.div
                  key={artist.name}
                  className="group cursor-pointer"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                    {/* Featured Image */}
                    <div className="aspect-[4/5] overflow-hidden relative">
                      <img
                        src={artist.image}
                        alt={`Work by ${artist.name}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      {artist.featured && (
                        <Badge className="absolute top-4 left-4 bg-amber-500 hover:bg-amber-500 text-white">
                          Featured
                        </Badge>
                      )}
                    </div>

                    {/* Artist Info */}
                    <div className="p-6">
                      <div className="flex items-center mb-4">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src={artist.image} alt={artist.name} />
                          <AvatarFallback>
                            {artist.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="text-xl font-semibold text-stone-800">
                            {artist.name}
                          </h3>
                          <p className="text-stone-600">{artist.specialty}</p>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex justify-between text-sm text-stone-500 mb-6">
                        <span>{artist.works} Works</span>
                        <span>{artist.followers} Followers</span>
                      </div>

                      {/* View Profile Button */}
                      <Button className="w-full bg-stone-800 hover:bg-stone-700 text-white">
                        View Profile
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section
          className="py-20 bg-stone-900 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-6">
              Are you a{" "}
              <span className="font-bold text-amber-400">
                wedding photographer
              </span>
              ?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Join our community and showcase your talent to couples around the
              world.
            </p>
            <Button
              size="lg"
              className="bg-amber-500 hover:bg-amber-600 text-white px-12 py-4"
            >
              Become an Artist
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
