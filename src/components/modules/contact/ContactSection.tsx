import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="relative w-full py-10 lg:py-16 bg-background">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Heading */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
            যোগাযোগ করুন
          </h2>
        </div>

        {/* 2-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-6 w-full">
            <ContactForm />
          </div>

          {/* Right Column: Information & Map */}
          <div className="lg:col-span-6 w-full space-y-8">
            <h3 className="text-2xl font-bold text-foreground">আমাদের তথ্য</h3>

            <div className="space-y-6 text-foreground">
              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base">ঠিকানা</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    আপনার প্রধান দোকান রোড ঠিকানা, ধানমন্ডি, ঢাকার, Dhanmondi
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base">ফোন</h4>
                  <p className="text-sm text-muted-foreground">+123-3633-6779</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base">ইমেল</h4>
                  <p className="text-sm text-muted-foreground">info@ankurika.com</p>
                </div>
              </div>

              {/* Office Hours */}
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-base">অফিস সময়</h4>
                  <p className="text-sm text-muted-foreground">
                    অফিস ৮:০০ AM থেকে ৮:০০ AM
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder Container */}
            <div className="relative h-56 w-full overflow-hidden rounded-2xl border border-border bg-muted flex items-center justify-center text-muted-foreground">
              <iframe
                title="Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8972826478957!2d90.3752!3d23.7508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026d81%3A0x8fa563bbdd5904c2!2sDhanmondi%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1680000000000!5m2!1sen!2sbd"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="opacity-90 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}