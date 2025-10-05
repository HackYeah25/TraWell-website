import Hero from "@/components/Hero";
import TravelStages from "@/components/TravelStages";
import Exploration from "@/components/Exploration";
import GroupTravel from "@/components/GroupTravel";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TravelStages />
      <GroupTravel />
      <Exploration />

      {/* Call to Action Section */}
      <section className="py-24 px-6 bg-gradient-warm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6 animate-fadeIn">
            Ready to start your journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-slideInLeft">
            Join thousands of travelers who've discovered amazing places with TraWell's AI-powered recommendations.
          </p>
          <Button 
            size="lg"
            className="px-12 py-6 text-lg font-medium bg-white text-warm-coral hover:bg-white/90 border-0 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform-gpu animate-slideInRight"
          >
            Start Planning
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-warm-sand/20 border-t border-warm-sand">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-muted-foreground">
            <div className="font-display text-warm-coral text-lg mb-1">TraWell</div>
            <div className="flex items-center justify-center gap-2">
              <span>built with</span>
              <span className="text-warm-coral text-2xl">♥</span>
              <span>during HackYeah.pl</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}