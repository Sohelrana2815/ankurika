import Image from "next/image";
import Link from "next/link";
import {
  Container,
  Wrench,
  Scissors,
  Flower2,
  LucideIcon,
  Sprout,
} from "lucide-react";

// Map icon string names from data to Lucide React components
const iconMap: Record<string, LucideIcon> = {
  Sprout,
  Container,
  Wrench,
  Scissors,
  Flower2,
};

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: string;
  link: string;
  imagePosition?: string; // Updated to accept string type
}

export default function ServiceCard({ service }: { service: ServiceItem }) {
  const IconComponent = iconMap[service.icon] || Sprout;
  const imagePositionClass = service.imagePosition || "object-bottom";

  return (
    <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-card p-4 shadow-sm transition-all duration-300 hover:shadow-md border border-border/50">
      <div className="space-y-4">
        {/* Aspect Ratio Container for proportional scaling */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-muted">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover ${imagePositionClass} transition-transform duration-500 group-hover:scale-105`}
          />

          {/* Floating Circle Icon Badge */}
          <div className="absolute top-3 left-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md">
            <IconComponent className="h-5 w-5" />
          </div>
        </div>

        {/* Card Content */}
        <div className="space-y-2 px-1">
          <h3 className="text-lg font-bold text-foreground">{service.title}</h3>
          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      {/* Action Link */}
      <div className="mt-4 px-1 pt-2">
        <Link
          href={service.link}
          className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          see more
        </Link>
      </div>
    </div>
  );
}
