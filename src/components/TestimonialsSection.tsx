import { testimonials } from "@/data/testimonials";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary/50" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-accent/20 text-accent-foreground border-accent/30 px-4 py-1">
            آراء طلابنا
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            قصص <span className="gradient-text">نجاح</span> ملهمة
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            اكتشف كيف غيّرت دبلوماتنا حياة خريجينا المهنية
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="group bg-card border-2 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 text-right relative">
                {/* Quote Icon */}
                <Quote className="absolute top-4 left-4 h-8 w-8 text-primary/10" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4 justify-end">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                {/* Review */}
                <p className="text-foreground/80 mb-6 leading-relaxed text-sm">
                  "{testimonial.review}"
                </p>

                {/* Divider */}
                <div className="border-t border-border pt-4">
                  {/* Avatar & Info */}
                  <div className="flex items-center gap-3 justify-end">
                    <div className="text-right">
                      <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      <p className="text-xs text-primary font-medium mt-1">{testimonial.diploma}</p>
                    </div>
                    {/* Avatar Placeholder */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
