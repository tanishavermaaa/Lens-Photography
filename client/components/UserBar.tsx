import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Heart, Bookmark, MessageCircle } from "lucide-react";

export default function UserBar() {
  return (
    <div className="sticky top-[73px] bg-white z-40 border-b border-border-light">
      <div className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto">
        {/* User Info */}
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src="https://images.pexels.com/photos/32853860/pexels-photo-32853860.jpeg"
              alt="Zeeshan Ali"
            />
            <AvatarFallback>ZA</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="font-semibold text-lg text-foreground">
              Zeeshan Ali
            </h2>
            <div className="flex items-center space-x-3">
              <Badge className="bg-success-green hover:bg-success-green/90 text-white text-xs">
                Available for work
              </Badge>
              <Button variant="outline" size="sm">
                Follow
              </Button>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-accent-pink"
          >
            <Heart className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-accent-pink"
          >
            <Bookmark className="h-5 w-5" />
          </Button>
          <Button className="bg-accent-dark hover:bg-accent-dark/90 text-white">
            <MessageCircle className="h-4 w-4 mr-2" />
            Get in touch
          </Button>
        </div>
      </div>
    </div>
  );
}
