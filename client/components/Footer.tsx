import { motion } from "framer-motion";

const categories = [
  {
    title: "Illustration",
    image:
      "https://images.pexels.com/photos/10850704/pexels-photo-10850704.jpeg",
  },
  {
    title: "Print",
    image:
      "https://images.pexels.com/photos/32866758/pexels-photo-32866758.jpeg",
  },
  {
    title: "Product Design",
    image:
      "https://images.pexels.com/photos/32853860/pexels-photo-32853860.jpeg",
  },
  {
    title: "Branding",
    image:
      "https://images.pexels.com/photos/32803177/pexels-photo-32803177.jpeg",
  },
  {
    title: "Web Design",
    image:
      "https://images.pexels.com/photos/10850704/pexels-photo-10850704.jpeg",
  },
  {
    title: "Typography",
    image:
      "https://images.pexels.com/photos/32866758/pexels-photo-32866758.jpeg",
  },
  {
    title: "Mobile",
    image:
      "https://images.pexels.com/photos/32853860/pexels-photo-32853860.jpeg",
  },
  {
    title: "Animation",
    image:
      "https://images.pexels.com/photos/32803177/pexels-photo-32803177.jpeg",
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t border-border-light">
      {/* Animated Category Showcase */}
      <div className="py-12 overflow-hidden">
        <motion.div
          className="flex space-x-8 animate-pulse"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 20,
              ease: "linear",
            },
          }}
        >
          {[...categories, ...categories].map((category, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 h-40 rounded-lg overflow-hidden bg-gray-100 relative"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <h3 className="text-white font-medium text-lg">
                  {category.title}
                </h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-8 lg:space-y-0">
          {/* Logo and Navigation */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-12">
            <div className="text-xl font-bold text-accent-dark">Dribbble</div>

            <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">
                For designers
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Hire talent
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Inspiration
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Advertising
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Blog
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                About
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Careers
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Support
              </a>
            </nav>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
              </svg>
            </a>
            <a
              href="#"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.222.083.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border-light flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <span>© 2025 Dribbble</span>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Cookies
            </a>
          </div>

          <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              Jobs
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Designers
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Freelancers
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Tags
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Places
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Resources
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
