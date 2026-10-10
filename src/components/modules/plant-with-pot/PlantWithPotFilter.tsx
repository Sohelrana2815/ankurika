"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface FilterProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedPlantType: string;
  setSelectedPlantType: (value: string) => void;
  selectedPotType: string;
  setSelectedPotType: (value: string) => void;
}

const plantTypes = [
  { label: "সব (All)", value: "" },
  { label: "মনস্টে রাখা (Monstera)", value: "Monstera" },
  { label: "স্নেক (Snake Plant)", value: "Snake Plant" },
  { label: "সাকুলেন্ট (Succulent)", value: "Succulent" },
];

const potTypes = [
  { label: "সব (All)", value: "" },
  { label: "মাটির (Terracotta)", value: "Terracotta" },
  { label: "সিরামিক (Ceramic)", value: "Ceramic" },
  { label: "প্লাস্টিক (Plastic)", value: "Plastic" },
  { label: "ধাতব (Metal)", value: "Metal" },
];

export default function PlantWithPotFilter({
  searchTerm,
  setSearchTerm,
  selectedPlantType,
  setSelectedPlantType,
  selectedPotType,
  setSelectedPotType,
}: FilterProps) {
  return (
    <div className="w-full space-y-6 rounded-3xl border border-border bg-card p-6 shadow-sm">
      <h3 className="text-xl font-bold text-foreground">ফিল্টার করুন</h3>

      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-xl border-input bg-background pl-9 text-foreground"
        />
      </div>

      {/* Plant Type Filter */}
      <div className="space-y-3">
        <h4 className="border-b border-border/60 pb-2 text-sm font-semibold text-foreground">
          উদ্ভিদ প্রকার
        </h4>
        <div className="space-y-2">
          {plantTypes.map((type) => (
            <label
              key={type.value}
              className="flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <input
                type="radio"
                name="plantType"
                checked={selectedPlantType === type.value}
                onChange={() => setSelectedPlantType(type.value)}
                className="h-4 w-4 rounded border-input accent-primary"
              />
              <span>{type.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Pot Type Filter */}
      <div className="space-y-3">
        <h4 className="border-b border-border/60 pb-2 text-sm font-semibold text-foreground">
          টব প্রকার
        </h4>
        <div className="space-y-2">
          {potTypes.map((pot) => (
            <label
              key={pot.value}
              className="flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <input
                type="radio"
                name="potType"
                checked={selectedPotType === pot.value}
                onChange={() => setSelectedPotType(pot.value)}
                className="h-4 w-4 rounded border-input accent-primary"
              />
              <span>{pot.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}