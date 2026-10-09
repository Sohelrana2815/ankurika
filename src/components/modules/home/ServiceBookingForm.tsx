"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ServiceBookingForm() {
  const [date, setDate] = useState<Date>();
  const [service, setService] = useState<string | null>(null);

  const handleSubmit = (e: React.ChangeEvent) => {
    e.preventDefault();
    console.log("Submitted booking:", { service, date });
  };

  return (
    <div className="w-full rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Service Select Field */}
        <div className="space-y-2">
          <label className="text-base font-bold text-card-foreground">
            প্রয়োজনীয় পরিষেবা
          </label>
          <Select
            value={service ?? ""}
            onValueChange={(val) => setService(val)}
          >
            <SelectTrigger className="h-12 w-full rounded-xl border-input bg-background px-4 text-left text-foreground">
              <SelectValue placeholder="পরিষেবা নির্বাচন করুন" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="maintenance">নিয়মিত রক্ষণাবেক্ষণ</SelectItem>
              <SelectItem value="decoration">গাছ সাজানো</SelectItem>
              <SelectItem value="lawn-care">বাগান ডিজাইন ও পরিচর্যা</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Date Picker Field */}
        <div className="space-y-2">
          <label className="text-base font-bold text-card-foreground">
            তারিখ নির্বাচন করুন
          </label>
          <Popover>
            <PopoverTrigger
              className={cn(
                "flex h-12 w-full items-center justify-between rounded-xl border border-input bg-background px-4 text-left font-normal text-foreground hover:bg-accent transition-colors",
                !date && "text-muted-foreground",
              )}
            >
              {date ? format(date, "PPP") : <span>Select Date</span>}
              <CalendarIcon className="h-5 w-5 text-muted-foreground" />
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={date} onSelect={setDate} />
            </PopoverContent>
          </Popover>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="h-12 w-full rounded-xl bg-primary text-base font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90"
        >
          এখনি পরিষেবা বুক করুন
        </Button>
      </form>
    </div>
  );
}
