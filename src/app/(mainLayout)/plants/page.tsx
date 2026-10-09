import PlantsGrid from "@/components/modules/plants/PlantsGrid";
import { plantsData } from "@/data/plants-data"; // Path to your existing data file[cite: 13]

export default function PlantsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden">
      <PlantsGrid initialPlants={plantsData} />
    </main>
  );
}
