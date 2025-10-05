import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin as MapPinIcon } from "lucide-react";

const destinations = [
  {
    name: "Hidden Beach Cove",
    location: "Algarve, Portugal",
    rating: 4.9,
    reviews: 127,
    type: "Hidden Gem",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
  },
  {
    name: "Mountain Trail Vista",
    location: "Lake Garda, Italy",
    rating: 4.8,
    reviews: 203,
    type: "Popular",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
  },
  {
    name: "Local Food Market",
    location: "Bangkok, Thailand",
    rating: 4.7,
    reviews: 89,
    type: "Hidden Gem",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=400&h=300&fit=crop",
  },
  {
    name: "Sunset Viewpoint",
    location: "Santorini, Greece",
    rating: 5.0,
    reviews: 412,
    type: "Popular",
    image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=400&h=300&fit=crop",
  },
];

export default function Exploration() {
  return (
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-sky">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-warm-coral mb-4 sm:mb-6 lg:mb-8 animate-fadeIn">
            Discover through community
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto leading-relaxed animate-slideInLeft px-4">
            Benefit from the community's experiences. Based on what you liked, we'll recommend destinations and spots that other users loved
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.name} 
              className="overflow-hidden hover-elevate transition-all duration-300 cursor-pointer bg-card border-warm-sand shadow-lg hover:shadow-xl hover:scale-105 transform-gpu"
              data-testid={`card-destination-${index}`}
            >
              <div className="h-40 sm:h-48 lg:h-52 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    // Fallback to gradient if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, hsl(16, 90%, 58%, 0.2), hsl(180, 65%, 55%, 0.3), hsl(40, 35%, 88%, 0.2))';
                    e.currentTarget.parentElement!.innerHTML = '<div class="flex items-center justify-center h-full"><svg class="w-12 h-12 sm:w-16 sm:h-16 text-warm-coral/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div>';
                  }}
                />
              </div>
              
              <div className="p-4 sm:p-5 lg:p-6">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <h3 className="font-semibold text-base sm:text-lg text-card-foreground leading-tight">
                    {destination.name}
                  </h3>
                  <Badge 
                    variant={destination.type === "Hidden Gem" ? "default" : "secondary"}
                    className={`flex-shrink-0 text-xs sm:text-sm ${
                      destination.type === "Hidden Gem" 
                        ? "bg-warm-turquoise text-white" 
                        : "bg-warm-sand text-card-foreground"
                    }`}
                    data-testid={`badge-type-${index}`}
                  >
                    {destination.type}
                  </Badge>
                </div>
                
                <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 lg:mb-5 flex items-center gap-1 sm:gap-2">
                  <MapPinIcon className="w-3 h-3 sm:w-4 sm:h-4 text-warm-turquoise flex-shrink-0" />
                  <span className="truncate">{destination.location}</span>
                </p>
                
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-warm-coral text-warm-coral" />
                    <span className="font-semibold text-sm sm:text-base text-card-foreground" data-testid={`rating-${index}`}>
                      {destination.rating}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-muted-foreground">
                    ({destination.reviews} reviews)
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
