import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen sm:h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-warm opacity-95" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 text-center">
        <div className="mb-8 sm:mb-12 lg:mb-16 flex justify-center">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32 lg:w-36 lg:h-36">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-2xl sm:rounded-3xl flex items-center justify-center animate-spin-slow">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-xl sm:rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center">
                <Plane className="w-8 h-8 sm:w-10 sm:h-10 lg:w-14 lg:h-14 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white mb-4 sm:mb-6 lg:mb-8 animate-fadeIn leading-tight">
          TraWell
        </h1>
        
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/95 mb-2 sm:mb-3 lg:mb-4 font-light animate-slideInLeft">
          Travel Well
        </p>
        
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-8 sm:mb-12 lg:mb-16 font-light animate-slideInRight max-w-xl sm:max-w-2xl mx-auto px-4">
          with context-aware AI companion
        </p>
        
        <div className="flex justify-center px-4">
          <Button 
            size="lg"
            className="w-full sm:w-auto px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-semibold bg-white text-warm-coral hover:bg-white/95 border-0 rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform-gpu ring-2 sm:ring-4 ring-white/30 hover:ring-white/50"
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
