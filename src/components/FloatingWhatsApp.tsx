import { MessageCircle } from "lucide-react";
import { generateGeneralWhatsAppLink } from "@/data/courses";

export const FloatingWhatsApp = () => {
  return (
    <>
      {/* Desktop Floating Button */}
      <a
        href={generateGeneralWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 z-50 hidden md:flex items-center gap-3 bg-accent text-accent-foreground px-6 py-4 rounded-full shadow-lg hover:scale-105 transition-transform accent-glow group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="font-semibold">تواصل معنا</span>
      </a>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border p-4">
        <a
          href={generateGeneralWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-accent text-accent-foreground py-4 rounded-xl font-bold text-lg shadow-lg"
        >
          <MessageCircle className="h-5 w-5" />
          احجز الآن
        </a>
      </div>
    </>
  );
};
