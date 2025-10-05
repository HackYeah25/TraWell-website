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
      <section className="py-32 px-8 bg-gradient-warm">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-8 animate-fadeIn">
            Ready to start your journey?
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto animate-slideInLeft">
            Join thousands of travelers who've discovered amazing places with TraWell's AI-powered recommendations.
          </p>
          <Button 
            size="lg"
            className="px-12 py-6 text-lg font-semibold bg-white text-warm-coral hover:bg-white/95 border-0 rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform-gpu animate-slideInRight ring-4 ring-white/30 hover:ring-white/50"
          >
            Start Planning
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 bg-warm-sand/20 border-t border-warm-sand">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-muted-foreground">
            <div className="font-display text-warm-coral text-xl mb-2">TraWell</div>
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