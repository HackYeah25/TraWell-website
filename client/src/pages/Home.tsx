import Hero from "@/components/Hero";
import TravelStages from "@/components/TravelStages";
import GroupTravel from "@/components/GroupTravel";
import Exploration from "@/components/Exploration";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <TravelStages />
      <GroupTravel />
      <Exploration />
      
      {/* Call to Action Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-primary via-[hsl(28,80%,65%)] to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white mb-6">
            Ready to start your journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of travelers who've discovered amazing places with TraWell's AI-powered recommendations.
          </p>
          <Button 
            size="lg"
            variant="secondary"
            className="px-12 py-6 text-lg font-medium"
          >
            Start Planning
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            <span className="font-semibold text-card-foreground">TraWell</span>
            <span>built with</span>
            <span className="text-red-500">♥</span>
            <span>at HackYeah.pl</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
