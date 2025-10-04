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
    </div>
  );
}
