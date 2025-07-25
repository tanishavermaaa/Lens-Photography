import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function MinimalHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();

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
          className="text-xl md:text-2xl font-light tracking-wide cursor-pointer"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onClick={() => navigate("/")}
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
          <Link
            to="/gallery"
            className={`text-sm font-medium transition-colors duration-300 hover:text-amber-500 ${
              isScrolled ? "text-stone-700" : "text-white/90"
            }`}
          >
            Gallery
          </Link>
          <Link
            to="/artists"
            className={`text-sm font-medium transition-colors duration-300 hover:text-amber-500 ${
              isScrolled ? "text-stone-700" : "text-white/90"
            }`}
          >
            Artists
          </Link>
          <Link
            to="/exhibitions"
            className={`text-sm font-medium transition-colors duration-300 hover:text-amber-500 ${
              isScrolled ? "text-stone-700" : "text-white/90"
            }`}
          >
            Exhibitions
          </Link>
          <Link
            to="/about"
            className={`text-sm font-medium transition-colors duration-300 hover:text-amber-500 ${
              isScrolled ? "text-stone-700" : "text-white/90"
            }`}
          >
            About
          </Link>
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
            onClick={() => navigate("/signin")}
          >
            Sign In
          </Button>
          <Button
            size="sm"
            className="bg-amber-500 hover:bg-amber-600 text-white border-none"
            onClick={() => navigate("/join")}
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
            <Link
              to="/gallery"
              className="block text-stone-700 hover:text-amber-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/artists"
              className="block text-stone-700 hover:text-amber-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Artists
            </Link>
            <Link
              to="/exhibitions"
              className="block text-stone-700 hover:text-amber-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Exhibitions
            </Link>
            <Link
              to="/about"
              className="block text-stone-700 hover:text-amber-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <div className="pt-4 space-y-3">
              <Button
                variant="outline"
                size="sm"
                className="w-full"
                onClick={() => {
                  navigate("/signin");
                  setIsMenuOpen(false);
                }}
              >
                Sign In
              </Button>
              <Button
                size="sm"
                className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                onClick={() => {
                  navigate("/join");
                  setIsMenuOpen(false);
                }}
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
