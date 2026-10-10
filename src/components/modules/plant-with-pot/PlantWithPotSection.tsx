"use client";

import { useState, useMemo } from "react";
import { plantWithPotData } from "@/data/plant-with-pot-data";
import PlantWithPotCard from "./PlantWithPotCard";
import PlantWithPotFilter from "./PlantWithPotFilter";

export default function PlantWithPotSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedPlantType, setSelectedPlantType] = useState("");
  const [selectedPotType, setSelectedPotType] = useState("");

  // Live Filter Logic
  const filteredData = useMemo(() => {
    return plantWithPotData.filter((item) => {
      const matchesSearch =
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.titleBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesPlantType =
        !selectedPlantType || item.plantType === selectedPlantType;

      const matchesPotType =
        !selectedPotType || item.potType === selectedPotType;

      return matchesSearch && matchesPlantType && matchesPotType;
    });
  }, [searchTerm, selectedPlantType, selectedPotType]);

  return (
    <section className="relative w-full py-10 lg:py-16 bg-background">
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 items-start lg:grid-cols-12">
          {/* Left Sidebar Filter */}
          <div className="lg:col-span-3 lg:sticky lg:top-24">
            <PlantWithPotFilter
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedPlantType={selectedPlantType}
              setSelectedPlantType={setSelectedPlantType}
              selectedPotType={selectedPotType}
              setSelectedPotType={setSelectedPotType}
            />
          </div>

          {/* Right Cards Collection */}
          <div className="space-y-8 lg:col-span-9">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
                টবে গাছ সংগ্রহ
              </h1>
            </div>

            {/* Cards Grid */}
            {filteredData.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredData.map((item) => (
                  <PlantWithPotCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground">
                কোনো পণ্য পাওয়া যায়নি।
              </div>
            )}

            {/* Pagination Controls */}
            <div className="flex items-center justify-center gap-2 pt-6 text-sm font-semibold">
              <button className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                ১
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-accent">
                ২
              </button>
              <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-accent">
                ৩
              </button>
              <span className="px-1 text-muted-foreground">...</span>
              <button className="flex h-9 items-center justify-center rounded-lg border border-border bg-card px-4 text-foreground transition-colors hover:bg-accent">
                পরের পৃষ্ঠা
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}