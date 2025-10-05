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
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-warm relative overflow-hidden">
        {/* Subtle background decorative elements */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-white/5 rounded-full animate-float"></div>
        <div className="absolute bottom-10 right-10 w-20 h-20 bg-white/3 rounded-full animate-float stagger-2"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/3 rounded-full animate-float stagger-3"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-white mb-4 sm:mb-6 lg:mb-8 animate-fadeIn">
            <span className="text-gradient-sunset">Ready to start your journey?</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-white/90 mb-8 sm:mb-10 lg:mb-12 max-w-xl sm:max-w-2xl mx-auto animate-slideInLeft px-4">
            Join thousands of travelers who've discovered amazing places with TraWell's AI-powered recommendations.
          </p>
          <div className="flex justify-center px-4">
            <Button 
              size="lg"
              className="btn-modern w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-semibold bg-white text-warm-coral hover:bg-white/95 border-0 rounded-xl shadow-modern-lg hover:shadow-modern-lg transition-all duration-300 hover:scale-105 transform-gpu animate-slideInRight ring-2 sm:ring-4 ring-white/30 hover:ring-white/50 animate-pulseGlow"
            >
              Start Planning
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-10 lg:py-12 px-4 sm:px-6 lg:px-8 bg-warm-sand/20 border-t border-warm-sand relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-muted-foreground">
            <div className="font-display text-gradient-sunset text-lg sm:text-xl mb-1 sm:mb-2 animate-fadeIn">TraWell</div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base animate-slideInLeft">
              <span>built with</span>
              <span className="text-warm-coral text-xl sm:text-2xl" style={{background: 'none', backgroundColor: 'transparent', boxShadow: 'none', border: 'none'}}>♥</span>
              <span>during HackYeah.pl</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}