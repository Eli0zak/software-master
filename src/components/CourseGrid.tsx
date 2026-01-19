import { courses, Course } from "@/data/courses";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Clock, User, ArrowLeft, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

interface CourseCardProps {
  course: Course;
  index: number;
}

const CourseCard = ({ course, index }: CourseCardProps) => {
  return (
    <Card
      className="group glass-card border-2 hover:border-primary/30 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <Sparkles className="h-16 w-16 text-primary/50 group-hover:text-primary transition-colors" />
        </div>
        {/* Badges */}
        <div className="absolute top-4 right-4 flex flex-wrap gap-2">
          {course.badges.map((badge, i) => (
            <Badge
              key={i}
              className="bg-accent text-accent-foreground font-semibold px-3 py-1"
            >
              {badge}
            </Badge>
          ))}
        </div>
      </div>

      <CardHeader className="pb-2 text-right">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-muted-foreground mt-1">{course.description}</p>
      </CardHeader>

      <CardContent className="space-y-4 text-right">
        {/* Features */}
        <div className="flex flex-wrap gap-2">
          {course.features.slice(0, 4).map((feature, i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-secondary text-secondary-foreground"
            >
              {feature}
            </span>
          ))}
        </div>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-muted-foreground border-t border-border pt-4">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>{course.instructor}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between pt-0">
        <div className="text-right">
          <span className="text-2xl font-bold text-primary">{course.price}</span>
          <span className="text-sm text-muted-foreground mr-1">جنيه</span>
        </div>
        <Button
          asChild
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold gap-2 hover:scale-105 transition-transform"
        >
          <Link to={`/diplomas/${course.slug}`}>
            <ArrowLeft className="h-4 w-4" />
            التفاصيل والحجز
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export const CourseGrid = () => {
  return (
    <section id="diplomas" className="py-24 bg-secondary/50" dir="rtl">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-1">
            دبلوماتنا المتخصصة
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            اختر مسارك <span className="gradient-text">المهني</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            دبلومات احترافية مصممة لتأهيلك لسوق العمل بمهارات عملية ومشاريع حقيقية
          </p>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {courses.map((course, index) => (
            <CourseCard key={course.id} course={course} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
