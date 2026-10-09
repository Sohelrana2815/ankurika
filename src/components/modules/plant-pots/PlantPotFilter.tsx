"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface PlantPotFilterProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  selectedMaterial: string;
  setSelectedMaterial: (value: string) => void;
}

const materials = [
  { label: "সব (All)", value: "" },
  { label: "মাটির (Terracotta)", value: "Terracotta" },
  { label: "সিরামিক (Ceramic)", value: "Ceramic" },
  { label: "প্লাস্টিক (Plastic)", value: "Plastic" },
  { label: "ধাতব (Metal)", value: "Metal" },
  { label: "পাথরকণা (Stone)", value: "Stone" },
];

export default function PlantPotFilter({
  searchTerm,
  setSearchTerm,
  selectedMaterial,
  setSelectedMaterial,
}: PlantPotFilterProps) {
  return (
    <div className="w-full space-y-6 rounded-3xl border border-border bg-card p-6 shadow-sm">
      <h3 className="text-xl font-bold text-foreground">টব ফিল্টার</h3>

      {/* Search Input */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="খুঁজুন..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="rounded-xl border-input bg-background pl-9 text-foreground"
        />
      </div>

      {/* Material Filter Radio Group */}
      <div className="space-y-3">
        <h4 className="border-b border-border/60 pb-2 text-sm font-semibold text-foreground">
          উপাদান (Material)
        </h4>
        <div className="space-y-2">
          {materials.map((mat) => (
            <label
              key={mat.value}
              className="flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <input
                type="radio"
                name="material"
                checked={selectedMaterial === mat.value}
                onChange={() => setSelectedMaterial(mat.value)}
                className="h-4 w-4 rounded border-input accent-primary"
              />
              <span>{mat.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}