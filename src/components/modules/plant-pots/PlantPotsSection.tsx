"use client";

import { useState, useMemo } from "react";
import { plantPotsData } from "@/data/plant-pots-data";
import PlantPotCard from "./PlantPotCard";
import PlantPotFilter from "./PlantPotFilter";

export default function PlantPotsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedMaterial, setSelectedMaterial] = useState("");

  // Live filter state logic
  const filteredPots = useMemo(() => {
    return plantPotsData.filter((pot) => {
      const matchesSearch =
        pot.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pot.titleBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
        pot.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesMaterial =
        !selectedMaterial || pot.material === selectedMaterial;

      return matchesSearch && matchesMaterial;
    });
  }, [searchTerm, selectedMaterial]);

  return (
    <section className="relative w-full py-10 lg:py-16 bg-background">
      <div className="mx-auto max-w-[1536px] px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 items-start lg:grid-cols-12">
          {/* Left Column: Sidebar Filter */}
          <div className="lg:col-span-3 lg:sticky lg:top-24">
            <PlantPotFilter
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              selectedMaterial={selectedMaterial}
              setSelectedMaterial={setSelectedMaterial}
            />
          </div>

          {/* Right Column: Collection Grid */}
          <div className="space-y-8 lg:col-span-9">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl font-extrabold text-foreground tracking-tight sm:text-4xl">
                আমাদের টব সংগ্রহ
              </h1>
            </div>

            {/* Product Cards Grid */}
            {filteredPots.length > 0 ? (
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
                {filteredPots.map((pot) => (
                  <PlantPotCard key={pot.id} pot={pot} />
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-border p-12 text-center text-muted-foreground">
                কোনো টব পাওয়া যায়নি।
              </div>
            )}

            {/* Bottom Pagination Bar */}
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