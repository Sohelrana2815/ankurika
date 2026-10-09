import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlantPot } from "@/data/plant-pots-data";

interface PlantPotCardProps {
  pot: PlantPot;
}

export default function PlantPotCard({ pot }: PlantPotCardProps) {
  // Convert price to Bengali numerals to match design
  const banglaPrice = pot.price
    .toString()
    .replace(/\d/g, (d) => "০১২৩৪৫৬৭৮৯"[parseInt(d)]);

  return (
    <div className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md">
      <div className="space-y-4">
        {/* Pot Image Container */}
        <div className="relative h-56 w-full overflow-hidden rounded-2xl bg-muted">
          <Image
            src={pot.image}
            alt={pot.titleBn}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="space-y-1.5 px-1">
          <h3 className="text-lg font-bold text-foreground">{pot.titleBn}</h3>
          <p className="text-xs font-medium text-muted-foreground">
            {pot.title}
          </p>
          <p className="pt-1 text-base font-bold text-foreground">
            {pot.currency}
            {banglaPrice}
          </p>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-4 pt-2">
        <Button className="w-full rounded-xl bg-primary py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          অ্যাড করুন
        </Button>
      </div>
    </div>
  );
}