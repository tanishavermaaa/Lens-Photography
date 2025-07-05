import { motion } from "framer-motion";
import MinimalHeader from "../components/MinimalHeader";
import { Button } from "../components/ui/button";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const exhibitions = [
  {
    title: "Eternal Moments",
    description: "A collection of stunning wedding photography capturing love stories from around the world",
    date: "March 15 - April 30, 2024",
    location: "Digital Gallery",
    participants: 45,
    visitors: "12.5k",
    status: "Live",
    image: "https://images.pexels.com/photos/6119578/pexels-photo-6119578.jpeg",
    featured: true,
  },
  {
    title: "Sacred Venues",
    description: "Beautiful ceremony and reception venues showcasing architectural beauty",
    date: "April 1 - May 15, 2024",
    location: "Virtual Exhibition",
    participants: 32,
    visitors: "8.9k",
    status: "Coming Soon",
    image: "https://images.pexels.com/photos/2788494/pexels-photo-2788494.jpeg",
    featured: true,
  },
  {
    title: "Bridal Elegance",
    description: "Professional bridal portraits showcasing beauty, emotion, and style",
    date: "May 1 - June 20, 2024",
    location: "Online Showcase",
    participants: 28,
    visitors: "6.7k",
    status: "Coming Soon",
    image: "https://images.pexels.com/photos/32841796/pexels-photo-32841796.jpeg",
    featured: false,
  },
  {
    title: "Love Stories",
    description: "Intimate moments and candid emotions from real wedding celebrations",
    date: "June 1 - July 15, 2024",
    location: "Premium Gallery",
    participants: 38,
    visitors: "0",
    status: "Coming Soon",
    image: "https://images.pexels.com/photos/27268887/pexels-photo-27268887.jpeg",
    featured: false,
  },
];

export default function Exhibitions() {
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
              Wedding <em className="font-serif italic text-amber-600">Exhibitions</em>
            </motion.h1>
            <motion.p 
              className="text-xl text-stone-600 max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Curated collections of exceptional wedding photography, showcasing the finest work from our global community of artists.
            </p>
          </div>
        </motion.section>

        {/* Current Exhibitions */}
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
                Current & <span className="font-bold">Upcoming</span> Exhibitions
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {exhibitions.map((exhibition, index) => (
                <motion.div
                  key={exhibition.title}
                  className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  {/* Image */}
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={exhibition.image}
                      alt={exhibition.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      {exhibition.featured && (
                        <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                          Featured
                        </span>
                      )}
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        exhibition.status === 'Live' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-blue-500 text-white'
                      }`}>
                        {exhibition.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold text-stone-800 mb-3">
                      {exhibition.title}
                    </h3>

                    <p className="text-stone-600 mb-6 leading-relaxed">
                      {exhibition.description}
                    </p>

                    {/* Meta Information */}
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-stone-500">
                        <Calendar className="h-4 w-4 mr-3" />
                        {exhibition.date}
                      </div>
                      <div className="flex items-center text-sm text-stone-500">
                        <MapPin className="h-4 w-4 mr-3" />
                        {exhibition.location}
                      </div>
                      <div className="flex items-center text-sm text-stone-500">
                        <Users className="h-4 w-4 mr-3" />
                        {exhibition.participants} Participants
                      </div>
                      <div className="flex items-center text-sm text-stone-500">
                        <Clock className="h-4 w-4 mr-3" />
                        {exhibition.visitors} Visitors
                      </div>
                    </div>

                    <Button className="w-full bg-stone-800 hover:bg-stone-700 text-white">
                      {exhibition.status === 'Live' ? 'View Exhibition' : 'Get Notified'}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <motion.section 
          className="py-20 bg-gradient-to-br from-amber-400 via-orange-500 to-purple-600"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Want to <span className="font-bold">exhibit</span> your work?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Submit your wedding photography collection for consideration in our upcoming exhibitions.
            </p>
            <Button size="lg" className="bg-white text-purple-600 hover:bg-white/90 px-12 py-4">
              Submit Portfolio
            </Button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}