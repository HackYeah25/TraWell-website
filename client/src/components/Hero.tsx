import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-[64vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-[hsl(28,80%,65%)] to-primary opacity-95" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-12 text-center">
        <div className="mb-12 flex justify-center">
          <div className="relative w-32 h-32">
            <div className="absolute inset-0 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center animate-spin-slow">
              <div className="w-24 h-24 rounded-2xl bg-white/30 backdrop-blur-md flex items-center justify-center">
                <Plane className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>
        </div>
        
        <h1 className="font-display text-7xl md:text-8xl lg:text-9xl text-white mb-6">
          TraWell
        </h1>
        
        <p className="text-2xl md:text-3xl text-white/95 mb-2 font-light">
          Travel Well
        </p>
        
        <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
          with context-aware AI companion
        </p>
        
        <div className="flex items-center justify-center gap-2 text-white/90 mb-12">
          <span className="text-lg">Plan, Discover, Explore</span>
        </div>
        
        <div className="flex justify-center">
          <Button 
            size="lg"
            variant="secondary"
            className="px-10 py-6 text-lg font-medium"
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
