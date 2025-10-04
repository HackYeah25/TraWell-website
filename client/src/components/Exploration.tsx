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
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-black/80 mb-6">
            Explore the unknown
          </h2>
          <p className="text-xl text-black/60 max-w-3xl mx-auto leading-relaxed">
            Or visit cool spots already visited and high-rated by fellow Trawellers from all over the world
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {destinations.map((destination, index) => (
            <Card 
              key={destination.name} 
              className="overflow-hidden hover-elevate transition-all duration-300 cursor-pointer"
              data-testid={`card-destination-${index}`}
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={destination.image} 
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  onError={(e) => {
                    // Fallback to gradient if image fails to load
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.parentElement!.style.background = 'linear-gradient(135deg, hsl(var(--primary) / 0.2), hsl(var(--accent) / 0.3), hsl(var(--secondary) / 0.2))';
                    e.currentTarget.parentElement!.innerHTML = '<div class="flex items-center justify-center h-full"><svg class="w-16 h-16 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg></div>';
                  }}
                />
              </div>
              
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-semibold text-lg text-card-foreground leading-tight">
                    {destination.name}
                  </h3>
                  <Badge 
                    variant={destination.type === "Hidden Gem" ? "default" : "secondary"}
                    className="flex-shrink-0"
                    data-testid={`badge-type-${index}`}
                  >
                    {destination.type}
                  </Badge>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 flex items-center gap-1">
                  <MapPinIcon className="w-4 h-4" />
                  {destination.location}
                </p>
                
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="font-semibold text-card-foreground" data-testid={`rating-${index}`}>
                      {destination.rating}
                    </span>
                  </div>
                  <span className="text-sm text-muted-foreground">
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
