import { motion } from "framer-motion";
import Header from "../components/Header";
import UserBar from "../components/UserBar";
import ImageGallery from "../components/ImageGallery";
import Footer from "../components/Footer";
import WorkGrid from "../components/WorkGrid";
import { Avatar, AvatarImage, AvatarFallback } from "../components/ui/avatar";
import { Button } from "../components/ui/button";
import { MessageCircle } from "lucide-react";

const portfolioWorks = [
  {
    id: 1,
    image:
      "https://images.pexels.com/photos/32866758/pexels-photo-32866758.jpeg",
    title: "Nature Photography Collection",
    likes: 124,
    views: "2.1k",
  },
  {
    id: 2,
    image:
      "https://images.pexels.com/photos/10850704/pexels-photo-10850704.jpeg",
    title: "Portrait Studio Sessions",
    likes: 89,
    views: "1.5k",
  },
  {
    id: 3,
    image:
      "https://images.pexels.com/photos/32803177/pexels-photo-32803177.jpeg",
    title: "Architecture & Urban",
    likes: 156,
    views: "3.2k",
  },
  {
    id: 4,
    image:
      "https://images.pexels.com/photos/32853860/pexels-photo-32853860.jpeg",
    title: "Fashion Photography",
    likes: 203,
    views: "4.8k",
  },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <UserBar />

      {/* Main Content */}
      <main>
        {/* Page Title */}
        <motion.div
          className="max-w-6xl mx-auto px-6 py-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl font-semibold text-foreground">
            Photography Portfolio Landing Page UI Design
          </h1>
        </motion.div>

        {/* Image Gallery */}
        <ImageGallery />

        {/* Text Content Section */}
        <motion.div
          className="max-w-4xl mx-auto px-6 py-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Hello Dribbble 👋
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Presenting my latest landing page concept for a professional
            photography website. This design showcases clean aesthetics,
            intuitive navigation, and a focus on visual storytelling that helps
            photographers present their work in the most compelling way
            possible.
          </p>
          <p className="text-base text-muted-foreground mb-8">
            Feel free to connect with me if you require any UX/UI Design
            Services:
          </p>
        </motion.div>

        {/* Author Section */}
        <motion.div
          className="max-w-4xl mx-auto px-6 py-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <div className="relative mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border-light"></div>
            </div>
            <div className="relative flex justify-center">
              <div className="bg-white px-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    src="https://images.pexels.com/photos/32853860/pexels-photo-32853860.jpeg"
                    alt="Zeeshan Ali"
                  />
                  <AvatarFallback>ZA</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Zeeshan Ali
          </h3>
          <Button className="bg-accent-dark hover:bg-accent-dark/90 text-white">
            <MessageCircle className="h-4 w-4 mr-2" />
            Get in touch
          </Button>
        </motion.div>

        {/* More Works Section */}
        <motion.div
          className="max-w-6xl mx-auto px-6 py-16"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-semibold text-foreground">
              More by Zeeshan Ali
            </h2>
            <a
              href="#"
              className="text-accent-pink hover:text-accent-pink/80 font-medium transition-colors"
            >
              View profile
            </a>
          </div>

          <WorkGrid works={portfolioWorks} delay={1.4} />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
