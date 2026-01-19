import { GraduationCap, Briefcase, Rocket, Award, Users, HeartHandshake } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "مدرب معتمد",
    description: "خبراء معتمدين بخبرة سنوات في المجال",
  },
  {
    icon: Briefcase,
    title: "بناء بورتفوليو",
    description: "مشاريع حقيقية تضيفها لسيرتك الذاتية",
  },
  {
    icon: Rocket,
    title: "تأهيل لسوق العمل",
    description: "مهارات مطلوبة في سوق العمل اليوم",
  },
  {
    icon: Award,
    title: "شهادات معتمدة",
    description: "شهادة إتمام معتمدة لكل دبلوم",
  },
  {
    icon: Users,
    title: "دعم مستمر",
    description: "مجتمع متواصل ودعم بعد التخرج",
  },
  {
    icon: HeartHandshake,
    title: "مرونة في الدفع",
    description: "خطط تقسيط مريحة تناسبك",
  },
];

export const FeaturesStrip = () => {
  return (
    <section id="why-us" className="py-24" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            لماذا <span className="gradient-text">Software Master's</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            نقدم لك تجربة تعليمية فريدة تجمع بين الجودة والعملية
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <feature.icon className="h-8 w-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
