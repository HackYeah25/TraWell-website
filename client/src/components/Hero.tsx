import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-warm opacity-95" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-8 py-16 text-center">
        <div className="mb-16 flex justify-center">
          <div className="relative w-36 h-36">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center animate-spin-slow">
              <div className="w-28 h-28 rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center">
                <Plane className="w-14 h-14 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <h1 className="font-display text-6xl md:text-7xl lg:text-8xl text-white mb-8 animate-fadeIn leading-tight">
          TraWell
        </h1>
        
        <p className="text-2xl md:text-3xl text-white/95 mb-4 font-light animate-slideInLeft">
          Travel Well
        </p>
        
        <p className="text-xl md:text-2xl text-white/90 mb-16 font-light animate-slideInRight max-w-2xl mx-auto">
          with context-aware AI companion
        </p>
        
        <div className="flex justify-center">
          <Button 
            size="lg"
            className="px-12 py-6 text-lg font-semibold bg-white text-warm-coral hover:bg-white/95 border-0 rounded-xl shadow-2xl hover:shadow-2xl transition-all duration-300 hover:scale-105 transform-gpu ring-4 ring-white/30 hover:ring-white/50"
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
