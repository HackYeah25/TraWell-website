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
  },
  {
    name: "Mountain Trail Vista",
    location: "Lake Garda, Italy",
    rating: 4.8,
    reviews: 203,
    type: "Popular",
  },
  {
    name: "Local Food Market",
    location: "Bangkok, Thailand",
    rating: 4.7,
    reviews: 89,
    type: "Hidden Gem",
  },
  {
    name: "Sunset Viewpoint",
    location: "Santorini, Greece",
    rating: 5.0,
    reviews: 412,
    type: "Popular",
  },
];

export default function Exploration() {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-primary/5 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-5xl md:text-6xl text-card-foreground mb-6">
            Explore the unknown
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
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
              <div className="h-48 bg-gradient-to-br from-primary/20 via-accent/30 to-secondary/20 flex items-center justify-center">
                <MapPinIcon className="w-16 h-16 text-primary/40" />
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
