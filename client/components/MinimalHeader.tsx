import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";

export default function MinimalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="text-xl md:text-2xl font-light tracking-wide"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span
            className={`${
              isScrolled ? "text-stone-800" : "text-white"
            } transition-colors duration-300`}
          >
            LENS
          </span>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a
            href="#gallery"
            className={`text-sm font-medium transition-colors duration-300 hover:text-amber-500 ${
              isScrolled ? "text-stone-700" : "text-white/90"
            }`}
          >
            Gallery
          </a>
          <a
            href="#photographers"
            className={`text-sm font-medium transition-colors duration-300 hover:text-amber-500 ${
              isScrolled ? "text-stone-700" : "text-white/90"
            }`}
          >
            Artists
          </a>
          <a
            href="#exhibitions"
            className={`text-sm font-medium transition-colors duration-300 hover:text-amber-500 ${
              isScrolled ? "text-stone-700" : "text-white/90"
            }`}
          >
            Exhibitions
          </a>
          <a
            href="#about"
            className={`text-sm font-medium transition-colors duration-300 hover:text-amber-500 ${
              isScrolled ? "text-stone-700" : "text-white/90"
            }`}
          >
            About
          </a>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant={isScrolled ? "outline" : "ghost"}
            size="sm"
            className={`transition-all duration-300 ${
              isScrolled
                ? "border-stone-300 text-stone-700 hover:bg-stone-100"
                : "border-white/30 text-white hover:bg-white/10"
            }`}
          >
            Sign In
          </Button>
          <Button
            size="sm"
            className="bg-amber-500 hover:bg-amber-600 text-white border-none"
          >
            Join Now
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden p-2 transition-colors duration-300 ${
            isScrolled ? "text-stone-800" : "text-white"
          }`}
        >
          {isMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-white/95 backdrop-blur-md border-t border-stone-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-6 space-y-4">
            <a
              href="#gallery"
              className="block text-stone-700 hover:text-amber-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
            <a
              href="#photographers"
              className="block text-stone-700 hover:text-amber-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Artists
            </a>
            <a
              href="#exhibitions"
              className="block text-stone-700 hover:text-amber-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Exhibitions
            </a>
            <a
              href="#about"
              className="block text-stone-700 hover:text-amber-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <div className="pt-4 space-y-3">
              <Button variant="outline" size="sm" className="w-full">
                Sign In
              </Button>
              <Button
                size="sm"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white"
              >
                Join Now
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
