
import { Card } from "@/components/ui/card";
import { User, Lightbulb, MapPin, Headphones } from "lucide-react";

const stages = [
  {
    number: "1",
    title: "Traweller Profile",
    icon: User,
    description: "TraWell creates your traveller profile to provide customised recommendations.",
    screenshot: "profile-creation.jpg"
  },
  {
    number: "2", 
    title: "Destination Brainstorming",
    icon: Lightbulb,
    description: "We'll help you find potential trip destinations and discover locations that you didn't even know existed.",
    screenshot: "destination-brainstorming.jpg"
  },
  {
    number: "3",
    title: "Trip Planning", 
    icon: MapPin,
    description: "Once you pick the destinations we'll help you build the list of cool stuff to see or do there.",
    screenshot: "activity-planning.jpg"
  },
  {
    number: "4",
    title: "Real-time Guide", 
    icon: Headphones,
    description: "When you actually go there, we will help you navigate around, find those cool spots, restaurants, etc.",
    screenshot: "real-time-support.jpg"
  },
];

export default function TravelStages() {
  return (
    <section className="py-32 px-8 bg-gradient-sky">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-5xl md:text-6xl text-center text-warm-coral mb-24 font-display animate-fadeIn">
          How it works?
        </h2>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-warm-sand via-warm-coral to-warm-turquoise hidden md:block" />

          <div className="space-y-16">
            {stages.map((stage, index) => (
              <div key={stage.number} className="relative flex items-start gap-8">
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-warm-turquoise flex items-center justify-center border-4 border-white shadow-lg">
                    <stage.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-20 h-20 rounded-full bg-warm-coral/10 -z-10" />
                </div>

                {/* Content */}
                <div className="flex-1 pb-12">
                  <Card className="p-10 hover-elevate transition-all duration-300 bg-card border-warm-sand shadow-lg hover:shadow-xl" data-testid={`card-stage-${index + 1}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                      <div>
                        <div className="flex items-center gap-4 mb-6">
                          <span className="text-3xl font-bold text-warm-coral">
                            {stage.number}
                          </span>
                          <h3 className="text-3xl text-card-foreground font-semibold font-sans">
                            {stage.title}
                          </h3>
                        </div>
                        
                        <p className="text-lg text-muted-foreground leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                      
                      {/* Screenshot placeholder */}
                      <div className="order-first lg:order-last">
                        <div className="aspect-video bg-gradient-to-br from-warm-turquoise/20 to-warm-coral/20 rounded-xl flex items-center justify-center border-2 border-dashed border-warm-turquoise/30">
                          <div className="text-center p-6">
                            <stage.icon className="w-12 h-12 text-warm-turquoise mx-auto mb-3 opacity-50" />
                            <p className="text-sm text-muted-foreground">
                              Screenshot placeholder
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
