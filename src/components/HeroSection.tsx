import { useState } from "react";
import { Play, ArrowDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MouseTiltLogo } from "@/components/MouseTiltLogo";

interface HeroSectionProps {
  videoUrl?: string;
}

export const HeroSection = ({ videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ" }: HeroSectionProps) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const scrollToDiplomas = () => {
    const element = document.querySelector("#diplomas");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center overflow-hidden pt-20"
      dir="rtl"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 grid-background opacity-50" />

      {/* Gradient Overlays */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content - Right Side (RTL) */}
          <div className="space-y-8 text-right">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 animate-fade-in-up">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-primary">دبلومات متكاملة مع الذكاء الاصطناعي</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up delay-100">
              ابدأ مسيرتك المهنية في
              <span className="block mt-2 gradient-text">التكنولوجيا</span>
              <span className="block mt-2">بخبرة عملية حقيقية</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-in-up delay-200">
              دبلومات احترافية تأهلك لسوق العمل بمشاريع حقيقية وشهادات معتمدة.
              تعلّم من خبراء المجال وابني بورتفوليو يميزك.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <Button
                onClick={scrollToDiplomas}
                size="lg"
                className="btn-gradient text-primary-foreground font-semibold gap-2 px-8 py-6 text-lg hover:scale-105 transition-transform"
              >
                عرض الدبلومات
                <ArrowDown className="h-5 w-5" />
              </Button>

              <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    size="lg"
                    className="font-semibold gap-2 px-8 py-6 text-lg border-2 hover:bg-primary/5 hover:scale-105 transition-all"
                  >
                    <Play className="h-5 w-5 fill-current" />
                    كيف نُعلّم
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 bg-black">
                  <div className="aspect-video">
                    <iframe
                      src={videoUrl}
                      title="How We Teach"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 animate-fade-in-up delay-400">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">+500</div>
                <div className="text-sm text-muted-foreground">خريج ناجح</div>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">4</div>
                <div className="text-sm text-muted-foreground">دبلومات متخصصة</div>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">تطبيق عملي</div>
              </div>
            </div>
          </div>

          {/* 3D Logo - Left Side (RTL) */}
          <div className="relative hidden lg:block">
            <div className="relative z-10 animate-float">
              {/* SVG 3D Tilt Logo */}
              <MouseTiltLogo className="w-full h-[500px]" />
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-primary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};
