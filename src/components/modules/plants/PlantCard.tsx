import Image from "next/image";
import { Button } from "@/components/ui/button";

export interface Plant {
  id: number;
  title: string;
  titleBn: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  category: string;
}

interface PlantCardProps {
  plant: Plant;
  onAddToCart?: (plant: Plant) => void;
}

export default function PlantCard({ plant, onAddToCart }: PlantCardProps) {
  return (
    <div className="bg-card text-card-foreground rounded-3xl border border-border/60 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col">
      {/* Plant Image */}
      <div className="relative w-full h-60 sm:h-64 bg-muted/40 overflow-hidden">
        <Image
          src={plant.image}
          alt={plant.title}
          fill
          className="object-cover object-center hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          <h3 className="text-lg font-bold text-foreground mb-1">
            {plant.titleBn}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
            {plant.description}
          </p>
        </div>

        {/* Price & Action Button */}
        <div className="flex items-center justify-between pt-4 border-t border-border/50">
          <span className="text-xl font-extrabold text-primary">
            {plant.currency}
            {plant.price}
          </span>
          <Button
            onClick={() => onAddToCart?.(plant)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-5 py-2 text-sm font-medium transition-colors shadow-sm"
          >
            অ্যাড করুন
          </Button>
        </div>
      </div>
    </div>
  );
}