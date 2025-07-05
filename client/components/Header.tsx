import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 bg-white z-50 border-b border-border-light">
      <div className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <div className="text-xl font-bold text-accent-dark">Dribbble</div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-lg mx-8">
          <div className="relative flex items-center bg-background-light rounded-full">
            <Input
              type="text"
              placeholder="What are you looking for?"
              className="flex-1 bg-transparent border-none pl-6 pr-4 py-3 text-sm placeholder:text-muted-foreground focus-visible:ring-0"
            />
            <div className="flex items-center px-4 text-sm text-muted-foreground border-l border-border-light">
              <span>Shots</span>
              <ChevronDown className="ml-1 h-4 w-4" />
            </div>
            <Button
              size="sm"
              className="bg-accent-pink hover:bg-accent-pink/90 rounded-full mr-2"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          <a
            href="#"
            className="text-foreground hover:text-accent-pink transition-colors"
          >
            Explore
          </a>
          <a
            href="#"
            className="text-foreground hover:text-accent-pink transition-colors"
          >
            Hire a Designer
          </a>
          <a
            href="#"
            className="text-foreground hover:text-accent-pink transition-colors"
          >
            Find Jobs
          </a>
          <a
            href="#"
            className="text-foreground hover:text-accent-pink transition-colors"
          >
            Blog
          </a>
        </nav>

        {/* Auth Buttons */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-sm font-medium text-foreground hover:text-accent-pink transition-colors"
          >
            Sign up
          </a>
          <Button className="bg-accent-dark hover:bg-accent-dark/90 text-white">
            Log in
          </Button>
        </div>
      </div>
    </header>
  );
}
