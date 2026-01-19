import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { courses } from "@/data/courses";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, User, Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

const CourseDetails = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    const course = courses.find((c) => c.slug === slug);

    if (!course) {
        return (
            <div className="min-h-screen bg-background flex items-center justify-center" dir="rtl">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">الكورس غير موجود</h1>
                    <Button onClick={() => navigate("/")}>العودة للرئيسية</Button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-background" dir="rtl">
            <Navbar />

            {/* Hero Section */}
            <section className="pt-24 pb-12 bg-gradient-to-br from-primary/5 to-accent/5">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Course Info */}
                        <div className="space-y-6">
                            <div className="flex gap-2 flex-wrap">
                                {course.badges.map((badge, i) => (
                                    <Badge key={i} className="bg-accent text-accent-foreground px-3 py-1">
                                        {badge}
                                    </Badge>
                                ))}
                            </div>

                            <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{ fontFamily: "Rubik, sans-serif" }}>
                                {course.title}
                            </h1>

                            <p className="text-lg text-muted-foreground">{course.description}</p>

                            <div className="flex items-center gap-6 text-sm">
                                <div className="flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-primary" />
                                    <span>{course.duration}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <User className="h-5 w-5 text-primary" />
                                    <span>{course.instructor}</span>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 pt-4">
                                <div>
                                    <span className="text-4xl font-bold text-primary" style={{ fontFamily: "Poppins, sans-serif" }}>
                                        {course.price}
                                    </span>
                                    <span className="text-lg text-muted-foreground mr-2">جنيه</span>
                                </div>
                                <Button
                                    onClick={() => setIsBookingModalOpen(true)}
                                    size="lg"
                                    className="bg-gradient-to-r from-[#0044CC] to-[#0066FF] hover:from-[#0033AA] hover:to-[#0055EE] text-white font-bold text-lg px-8"
                                >
                                    حجز الآن
                                    <ArrowRight className="mr-2 h-5 w-5" />
                                </Button>
                            </div>
                        </div>

                        {/* Hero Image */}
                        <div className="hidden lg:block">
                            <div className="h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                                <Sparkles className="h-32 w-32 text-primary/50" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Tabs Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <Tabs defaultValue="overview" className="w-full">
                        <TabsList className="grid w-full grid-cols-4 mb-8 h-auto">
                            <TabsTrigger value="overview" className="text-base py-3">نظرة عامة</TabsTrigger>
                            <TabsTrigger value="curriculum" className="text-base py-3">المنهج</TabsTrigger>
                            <TabsTrigger value="instructor" className="text-base py-3">المدرب</TabsTrigger>
                            <TabsTrigger value="projects" className="text-base py-3">المشاريع</TabsTrigger>
                        </TabsList>

                        {/* Overview Tab */}
                        <TabsContent value="overview">
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-2xl font-bold mb-4">نظرة عامة عن الدبلوم</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                        {course.overview || course.description}
                                    </p>

                                    <h4 className="text-xl font-bold mb-4">ماذا ستتعلم؟</h4>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {course.features.map((feature, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                                                <span className="text-base">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Curriculum Tab */}
                        <TabsContent value="curriculum">
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-2xl font-bold mb-6">محتوى المنهج التدريبي</h3>
                                    {course.curriculum && course.curriculum.length > 0 ? (
                                        <div className="space-y-4">
                                            {course.curriculum.map((item, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
                                                >
                                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                                                        {i + 1}
                                                    </div>
                                                    <p className="text-base pt-2">{item}</p>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-muted-foreground">المنهج التفصيلي سيتم توفيره قريباً.</p>
                                    )}
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Instructor Tab */}
                        <TabsContent value="instructor">
                            <Card>
                                <CardContent className="pt-6">
                                    <div className="flex items-start gap-6">
                                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0">
                                            <User className="h-12 w-12 text-primary" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-bold mb-2">{course.instructor}</h3>
                                            <p className="text-lg text-muted-foreground leading-relaxed">
                                                {course.instructorBio ||
                                                    "مدرب محترف بخبرة واسعة في المجال. سيقوم بتوجيهك خطوة بخطوة لتحقيق أهدافك التعليمية."}
                                            </p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Projects Tab */}
                        <TabsContent value="projects">
                            <Card>
                                <CardContent className="pt-6">
                                    <h3 className="text-2xl font-bold mb-6">المشاريع العملية</h3>
                                    {course.projects && course.projects.length > 0 ? (
                                        <div className="grid md:grid-cols-2 gap-6">
                                            {course.projects.map((project, i) => (
                                                <div
                                                    key={i}
                                                    className="p-6 rounded-lg border-2 border-primary/20 hover:border-primary/40 hover:shadow-lg transition-all"
                                                >
                                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                                        <Sparkles className="h-6 w-6 text-primary" />
                                                    </div>
                                                    <h4 className="text-lg font-bold mb-2">مشروع {i + 1}</h4>
                                                    <p className="text-muted-foreground">{project}</p>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className="text-muted-foreground">قائمة المشاريع سيتم توفيرها قريباً.</p>
                                    )}
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Sticky Bottom Bar - Mobile Only */}
            <div className="fixed bottom-0 left-0 right-0 lg:hidden bg-background border-t border-border p-4 shadow-lg z-50">
                <div className="container mx-auto flex items-center justify-between">
                    <div>
                        <span className="text-2xl font-bold text-primary" style={{ fontFamily: "Poppins, sans-serif" }}>
                            {course.price}
                        </span>
                        <span className="text-sm text-muted-foreground mr-1">جنيه</span>
                    </div>
                    <Button
                        onClick={() => setIsBookingModalOpen(true)}
                        className="bg-gradient-to-r from-[#0044CC] to-[#0066FF] hover:from-[#0033AA] hover:to-[#0055EE] text-white font-bold px-6"
                    >
                        حجز الآن
                    </Button>
                </div>
            </div>

            <Footer />

            {/* Booking Modal */}
            <BookingModal
                open={isBookingModalOpen}
                onOpenChange={setIsBookingModalOpen}
                courseName={course.title}
            />
        </div>
    );
};

export default CourseDetails;
