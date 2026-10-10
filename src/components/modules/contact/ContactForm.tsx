"use client";

import { Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted");
  };

  return (
    <div className="w-full rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm space-y-6">
      {/* Top Floating Badge Icon */}
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
        <Sprout className="h-6 w-6" />
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div className="space-y-1.5">
          <label className="text-sm font-bold text-card-foreground">নাম</label>
          <Input
            type="text"
            placeholder="নাম"
            required
            className="h-12 rounded-xl bg-background border-input text-foreground"
          />
        </div>

        {/* Email Input */}
        <div className="space-y-1.5">
          <label className="text-sm font-bold text-card-foreground">ইমেইল</label>
          <Input
            type="email"
            placeholder="ইমেইল"
            required
            className="h-12 rounded-xl bg-background border-input text-foreground"
          />
        </div>

        {/* Subject Input */}
        <div className="space-y-1.5">
          <label className="text-sm font-bold text-card-foreground">বিষয়</label>
          <Input
            type="text"
            placeholder="বিষয়"
            required
            className="h-12 rounded-xl bg-background border-input text-foreground"
          />
        </div>

        {/* Message Input */}
        <div className="space-y-1.5">
          <label className="text-sm font-bold text-card-foreground">বার্তা</label>
          <Textarea
            placeholder="বার্তা"
            rows={4}
            required
            className="rounded-xl bg-background border-input text-foreground resize-none"
          />
        </div>

        {/* Submit Button */}
        <div className="pt-2">
          <Button
            type="submit"
            className="w-full h-12 rounded-xl bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 transition-all shadow-md"
          >
            বার্তা পাঠান
          </Button>
        </div>
      </form>
    </div>
  );
}