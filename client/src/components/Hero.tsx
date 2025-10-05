import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen sm:h-[70vh] flex items-center justify-center overflow-hidden">
      {/* Calm background gradient */}
      <div className="absolute inset-0 bg-gradient-warm opacity-95" />
      
      {/* Subtle floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/20 rounded-full animate-float"></div>
        <div className="absolute top-1/3 right-1/3 w-0.5 h-0.5 bg-white/25 rounded-full animate-float stagger-1"></div>
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white/15 rounded-full animate-float stagger-2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-0.5 h-0.5 bg-white/20 rounded-full animate-float stagger-3"></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 text-center">
        <div className="mb-8 sm:mb-12 lg:mb-16 flex justify-center">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl animate-pulseGlow"></div>
            <div className="absolute inset-0 glass-card rounded-2xl sm:rounded-3xl flex items-center justify-center animate-spin-slow">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-xl sm:rounded-2xl glass-card flex items-center justify-center">
                <Plane className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 text-white animate-float" />
              </div>
            </div>
          </div>
        </div>
        
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-6 sm:mb-8 lg:mb-10 animate-fadeIn leading-tight">
          <span className="text-gradient-sunset">TraWell</span>
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-10 sm:mb-14 lg:mb-18 font-medium animate-slideInRight max-w-xl sm:max-w-2xl mx-auto px-4">
          with context-aware AI companion
        </p>
        
        <div className="flex justify-center px-4">
          <Button 
            size="lg"
            className="btn-modern w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-semibold bg-white text-warm-coral hover:bg-white/95 border-0 rounded-xl shadow-modern-lg hover:shadow-modern-lg transition-all duration-300 hover:scale-105 transform-gpu ring-2 sm:ring-4 ring-white/30 hover:ring-white/50"
            data-testid="button-start-planning"
          >
            Start Planning
          </Button>
        </div>
      </div>
      
      <style>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
