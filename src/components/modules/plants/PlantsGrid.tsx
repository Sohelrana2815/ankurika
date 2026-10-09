"use client";

import { useState } from "react";
import PlantCard, { Plant } from "./PlantCard";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface PlantsGridProps {
  initialPlants: Plant[];
}

export default function PlantsGrid({ initialPlants }: PlantsGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("সব");

  const categories = ["সব", "Indoor", "Outdoor", "Flowering"];

  // Filter plants based on search query and category
  const filteredPlants = initialPlants.filter((plant) => {
    const matchesSearch =
      plant.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.titleBn.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "সব" || plant.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary tracking-wide mb-3">
          আমাদের গাছগুলোর সংগ্রহ
        </h1>
        <p className="text-muted-foreground text-sm sm:text-base max-w-xl mx-auto">
          আপনার ঘর ও বাগান সাজাতে বেছে নিন আমাদের সেরা ও তাজা গাছের সংগ্রহ।
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start">
        {/* Left Sidebar Filter */}
        <aside className="lg:col-span-1 bg-card border border-border/60 rounded-3xl p-6 shadow-sm space-y-6">
          <h2 className="text-lg font-bold text-foreground border-b border-border/50 pb-3">
            গাছদের ফিল্টার করুন
          </h2>

          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="গাছ খুঁজুন..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 bg-background border-border text-foreground rounded-xl text-sm"
            />
          </div>

          {/* Category Filter Options */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-foreground">গাছের প্রকার</h3>
            <div className="space-y-2.5">
              {categories.map((category) => (
                <label
                  key={category}
                  className="flex items-center gap-3 text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                >
                  <input
                    type="radio"
                    name="category"
                    checked={selectedCategory === category}
                    onChange={() => setSelectedCategory(category)}
                    className="accent-primary w-4 h-4"
                  />
                  <span>
                    {category === "সব"
                      ? "সব"
                      : category === "Indoor"
                      ? "ইনডোর (Indoor)"
                      : category === "Outdoor"
                      ? "আউটডোর (Outdoor)"
                      : "ফুলের (Flowering)"}
                  </span>
                </label>
              ))}
            </div>
          </div>
        </aside>

        {/* Right Grid Section */}
        <div className="lg:col-span-3">
          {filteredPlants.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredPlants.map((plant) => (
                <PlantCard key={plant.id} plant={plant} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-card rounded-3xl border border-border/60">
              <p className="text-muted-foreground text-base">
                কোনো গাছ খুঁজে পাওয়া যায়নি।
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}