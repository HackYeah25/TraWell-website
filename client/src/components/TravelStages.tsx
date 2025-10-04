import { Card } from "@/components/ui/card";
import { Lightbulb, MapPin, Pizza } from "lucide-react";

const stages = [
  {
    number: "1",
    title: "Brainstorm",
    icon: Lightbulb,
    description: "When you know you wanna go somewhere... but you don't know where. Thailand in the winter? Surfing in Portugal? Weekend in Sobótka?",
  },
  {
    number: "2",
    title: "Planning",
    icon: MapPin,
    description: "When you know you wanna go see Lake Garda but you want to dig deeper and find what you can do there.",
  },
  {
    number: "3",
    title: "On-trip support",
    icon: Pizza,
    description: "Where you're already there and you're wondering where is the best pizza nearby.",
  },
];

export default function TravelStages() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-display text-5xl md:text-6xl text-center text-orange-500 mb-20">
          When TraWell can help?
        </h2>

        <div className="relative">
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-secondary via-primary to-secondary" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {stages.map((stage, index) => (
              <div key={stage.number} className="relative">
                <Card className="p-8 h-full hover-elevate transition-all duration-300" data-testid={`card-stage-${index + 1}`}>
                  <div className="mb-6 md:hidden">
                    <h3 className="font-display text-3xl text-black">
                      {stage.title}
                    </h3>
                  </div>

                  <div className="mb-6 flex justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                      <stage.icon className="w-8 h-8 text-accent-foreground" />
                    </div>
                  </div>

                  <h3 className="hidden md:block font-display text-3xl text-center text-black mb-4">
                    {stage.title}
                  </h3>

                  <p className="text-lg text-muted-foreground text-center leading-relaxed">
                    {stage.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}