import { faqItems } from "@/data/faq";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";

export const FAQSection = () => {
  return (
    <section id="faq" className="py-24" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1">
              <HelpCircle className="h-4 w-4 ml-2 inline" />
              الأسئلة الشائعة
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              أسئلة <span className="gradient-text">متكررة</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              إجابات على الأسئلة الأكثر شيوعاً عن الدبلومات والتسجيل
            </p>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="bg-card border-2 border-border rounded-xl px-6 hover:border-primary/30 transition-colors data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="text-right hover:no-underline py-6 text-lg font-semibold">
                  <span className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm font-bold shrink-0">
                      {index + 1}
                    </span>
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pr-11 pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
