
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
    <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-sky relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 right-10 w-20 h-20 bg-warm-coral/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 left-10 w-16 h-16 bg-warm-turquoise/10 rounded-full animate-float stagger-2"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-12 sm:mb-16 lg:mb-24 font-display animate-fadeIn">
          <span className="text-gradient-sunset">How it works?</span>
        </h2>

        <div className="relative">
          {/* Enhanced timeline line with gradient */}
          <div className="absolute left-4 sm:left-6 lg:left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-warm-sand via-warm-coral to-warm-turquoise hidden md:block rounded-full shadow-modern"></div>

          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {stages.map((stage, index) => (
              <div key={stage.number} className={`relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 lg:gap-8 animate-fadeIn stagger-${index + 1}`}>
                {/* Enhanced timeline dot */}
                <div className="relative z-10 flex-shrink-0 self-center sm:self-start">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-ocean-enhanced flex items-center justify-center border-2 sm:border-4 border-white shadow-modern-lg hover-scale">
                    <stage.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                  </div>
                  <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-warm-coral/20 -z-10 animate-pulseGlow"></div>
                </div>

                {/* Enhanced content card */}
                <div className="flex-1 w-full">
                  <Card className="card-hover p-4 sm:p-6 lg:p-10 bg-gradient-card border-warm-sand shadow-modern hover:shadow-modern-lg" data-testid={`card-stage-${index + 1}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center">
                      <div className="order-2 lg:order-1">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-4 sm:mb-6">
                          <span className="text-2xl sm:text-3xl font-bold text-gradient-sunset">
                            {stage.number}
                          </span>
                          <h3 className="text-xl sm:text-2xl lg:text-3xl text-card-foreground font-semibold font-sans">
                            {stage.title}
                          </h3>
                        </div>
                        
                        <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                          {stage.description}
                        </p>
                      </div>
                      
                      {/* Enhanced feature preview */}
                      <div className="order-1 lg:order-2">
                        <div className="aspect-video bg-gradient-to-br from-warm-turquoise/20 to-warm-coral/20 rounded-lg sm:rounded-xl flex items-center justify-center border-2 border-dashed border-warm-turquoise/30 hover-scale shadow-modern">
                          <div className="text-center p-4 sm:p-6">
                            <stage.icon className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gradient-ocean mx-auto mb-2 sm:mb-3 opacity-70" />
                            <p className="text-xs sm:text-sm text-muted-foreground">
                              Feature preview
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
