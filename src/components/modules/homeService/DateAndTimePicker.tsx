"use client";

import { Calendar } from "@/components/ui/calendar";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface DateAndTimePickerProps {
  selectedDate: Date | undefined;
  setSelectedDate: (date: Date | undefined) => void;
  selectedTimeSlot: string;
  setSelectedTimeSlot: (slot: string) => void;
}

export default function DateAndTimePicker({
  selectedDate,
  setSelectedDate,
  selectedTimeSlot,
  setSelectedTimeSlot,
}: DateAndTimePickerProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
      {/* Left Column: Calendar Component */}
      <div className="flex justify-center rounded-2xl border border-border bg-background p-3 shadow-sm">
        <Calendar
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-md"
        />
      </div>

      {/* Right Column: Time Slot Radio Selection */}
      <div className="space-y-4 pt-2">
        <Label className="text-base font-bold text-foreground">
          পছন্দের সময় স্লট (ঐচ্ছিক)
        </Label>
        
        <RadioGroup
          value={selectedTimeSlot}
          onValueChange={setSelectedTimeSlot}
          className="space-y-3 pt-2"
        >
          <div className="flex items-center space-x-3 rounded-xl border border-border/80 p-3 hover:bg-accent/50 cursor-pointer transition-colors">
            <RadioGroupItem value="morning" id="morning" />
            <Label htmlFor="morning" className="cursor-pointer font-medium">
              সকাল (Morning)
            </Label>
          </div>

          <div className="flex items-center space-x-3 rounded-xl border border-border/80 p-3 hover:bg-accent/50 cursor-pointer transition-colors">
            <RadioGroupItem value="noon" id="noon" />
            <Label htmlFor="noon" className="cursor-pointer font-medium">
              দুপুর (Noon)
            </Label>
          </div>

          <div className="flex items-center space-x-3 rounded-xl border border-border/80 p-3 hover:bg-accent/50 cursor-pointer transition-colors">
            <RadioGroupItem value="afternoon" id="afternoon" />
            <Label htmlFor="afternoon" className="cursor-pointer font-medium">
              বিকেল (Afternoon)
            </Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}