"use client";

import { useState } from "react";
import { Upload, User, MapPin, Phone, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DateAndTimePicker from "./DateAndTimePicker";

export default function HomeServiceBookingForm() {
  const [service, setService] = useState<string | null>(null);
  const [date, setDate] = useState<Date>();
  const [timeSlot, setTimeSlot] = useState<string>("morning");
  const [imageFile, setImageFile] = useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted Data:", {
      service,
      date,
      timeSlot,
      imageFile,
    });
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-3xl border border-border bg-card p-6 sm:p-10 shadow-lg space-y-10">
      <form onSubmit={handleSubmit} className="space-y-10">
        {/* Step 1: Necessary Service */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">
            ১. প্রয়োজনীয় পরিষেবা
          </h2>

          <div className="space-y-2">
            <label className="text-sm font-semibold text-muted-foreground">
              পরিষেবা নির্বাচন করুন
            </label>
            <Select value={service ?? ""} onValueChange={setService}>
              <SelectTrigger className="h-12 rounded-xl bg-background border-input text-foreground">
                <SelectValue placeholder="ল্যান্ডস্কেপিং / পরিষেবা নির্বাচন করুন" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="landscaping">ল্যান্ডস্কেপিং</SelectItem>
                <SelectItem value="maintenance">নিয়মিত রক্ষণাবেক্ষণ</SelectItem>
                <SelectItem value="plant-care">গাছ লাগানো</SelectItem>
                <SelectItem value="pest-control">বালাই নিয়ন্ত্রণ</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Textarea
              placeholder="পরিষেবার বিবরণ এবং বিশেষ প্রয়োজনীয়তা লিখুন..."
              rows={4}
              className="rounded-xl bg-background border-input text-foreground resize-none"
            />
          </div>

          {/* File Upload Box */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-muted-foreground">
              ছবি যোগ করুন (ঐচ্ছিক)
            </label>
            <div className="relative border-2 border-dashed border-border rounded-2xl p-6 text-center bg-background/50 hover:bg-accent/30 transition-colors">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
              <div className="flex flex-col items-center justify-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-foreground">
                  <Upload className="h-6 w-6" />
                </div>
                <p className="text-xs text-muted-foreground">
                  {imageFile ? imageFile.name : "ছবি আপলোড করতে ক্লিক করুন"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Step 2: Your Info */}
        <div className="space-y-4 pt-4 border-t border-border/60">
          <h2 className="text-xl font-bold text-foreground">
            ২. আপনার তথ্য
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="নাম"
                className="pl-10 h-12 rounded-xl bg-background"
              />
            </div>

            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="ঠিকানা"
                className="pl-10 h-12 rounded-xl bg-background"
              />
            </div>

            <div className="relative">
              <Input
                type="text"
                placeholder="শহর"
                className="h-12 rounded-xl bg-background px-4"
              />
            </div>

            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="tel"
                placeholder="ফোন নম্বর"
                className="pl-10 h-12 rounded-xl bg-background"
              />
            </div>

            <div className="relative md:col-span-2">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="email"
                placeholder="ইমেইল"
                className="pl-10 h-12 rounded-xl bg-background"
              />
            </div>
          </div>
        </div>

        {/* Step 3: Service Date & Time */}
        <div className="space-y-4 pt-4 border-t border-border/60">
          <h2 className="text-xl font-bold text-foreground">
            ৩. পরিষেবা তারিখ ও সময়
          </h2>
          <DateAndTimePicker
            selectedDate={date}
            setSelectedDate={setDate}
            selectedTimeSlot={timeSlot}
            setSelectedTimeSlot={setTimeSlot}
          />
        </div>

        {/* Step 4: Submit Button */}
        <div className="space-y-4 pt-4 border-t border-border/60">
          <h2 className="text-xl font-bold text-foreground">
            ৪. নিশ্চিতকরণ ও জমা
          </h2>

          <Button
            type="submit"
            className="w-full h-14 rounded-2xl bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 shadow-md transition-all"
          >
            বুকিং নিশ্চিত করুন এবং জমা দিন
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            বুকিং সংক্রান্ত বিস্তারিত তথ্য নিশ্চিতকরণ ইমেইল পাঠানো হবে।
          </p>
        </div>
      </form>
    </div>
  );
}