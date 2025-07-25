import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Heart, Bookmark, MessageCircle } from "lucide-react";

export default function UserBar() {
  return (
    <div className="sticky top-[73px] bg-white z-40 border-b border-border-light">
      <div className="px-4 md:px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-7xl mx-auto">
        {/* User Info */}
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12 flex-shrink-0">
            <AvatarImage
              src="https://images.pexels.com/photos/32853860/pexels-photo-32853860.jpeg"
              alt="Zeeshan Ali"
            />
            <AvatarFallback>ZA</AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <h2 className="font-semibold text-lg text-foreground truncate">
              Zeeshan Ali
            </h2>
            <div className="flex items-center space-x-3 mt-1">
              <Badge className="bg-success-green hover:bg-success-green/90 text-white text-xs whitespace-nowrap">
                Available for work
              </Badge>
              <Button variant="outline" size="sm" className="text-sm">
                Follow
              </Button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto justify-end">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-accent-pink flex-shrink-0"
          >
            <Heart className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-accent-pink flex-shrink-0"
          >
            <Bookmark className="h-5 w-5" />
          </Button>
          <Button className="bg-accent-dark hover:bg-accent-dark/90 text-white text-sm whitespace-nowrap">
            <MessageCircle className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Get in touch</span>
            <span className="sm:hidden">Contact</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
