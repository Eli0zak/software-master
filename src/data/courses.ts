export interface Course {
  id: string;
  title: string;
  titleEn: string;
  slug: string;
  price: string;
  description: string;
  features: string[];
  instructor: string;
  duration: string;
  badges: string[];
  // Extended fields
  curriculum?: string[];
  projects?: string[];
  instructorBio?: string;
  instructorImage?: string;
  heroImage?: string;
  overview?: string;
}

export const courses: Course[] = [
  {
    id: "1",
    title: "دبلوم التصميم الجرافيكي بالذكاء الاصطناعي",
    titleEn: "Graphic Design with AI Diploma",
    slug: "graphic-design-ai",
    price: "2,500",
    description: "تعلم أحدث تقنيات التصميم الجرافيكي باستخدام أدوات الذكاء الاصطناعي المتقدمة",
    features: ["Photoshop", "Illustrator", "Midjourney", "بناء Portfolio", "مشروع تخرج على Behance"],
    instructor: "مدرب معتمد من Adobe",
    duration: "3 شهور",
    badges: ["متكامل مع AI", "تطبيق عملي 100%"],
    overview: "دبلوم شامل يجمع بين أساسيات التصميم الجرافيكي التقليدي وأحدث تقنيات الذكاء الاصطناعي. ستتعلم كيفية استخدام أدوات مثل Photoshop و Illustrator بجانب أدوات AI المتقدمة مثل Midjourney لإنشاء تصاميم احترافية في وقت قياسي. يشمل الدبلوم مشاريع عملية حقيقية وبناء Portfolio احترافي على Behance.",
    curriculum: [
      "أساسيات التصميم الجرافيكي ونظرية الألوان",
      "Adobe Photoshop - من المبتدئ للمحترف",
      "Adobe Illustrator - تصميم الشعارات والهويات",
      "مقدمة في الذكاء الاصطناعي للمصممين",
      "Midjourney - إنشاء تصاميم فريدة بالـ AI",
      "DALL-E و Stable Diffusion للتصميم",
      "Typography - فن التعامل مع الخطوط",
      "تصميم الهوية البصرية الكاملة",
      "إنشاء Portfolio احترافي على Behance",
      "مشروع التخرج العملي",
    ],
    projects: [
      "تصميم هوية بصرية كاملة لشركة ناشئة",
      "إنشاء مجموعة من المنشورات لحملة إعلانية باستخدام AI",
      "تصميم شعار وهوية تجارية متكاملة",
      "بناء Portfolio شخصي ونشره على Behance",
    ],
    instructorBio: "مدرب معتمد من Adobe مع خبرة 8+ سنوات في مجال التصميم الجرافيكي. عمل مع أكثر من 50 شركة محلية ودولية وقام بتدريب أكثر من 500 طالب.",
  },
  {
    id: "2",
    title: "دبلوم تطوير الويب الشامل",
    titleEn: "Full-Stack Web Development",
    slug: "web-development",
    price: "3,000",
    description: "ابني مواقع ويب احترافية من الصفر حتى الاحتراف",
    features: ["HTML/CSS", "JavaScript", "React", "Node.js", "مشاريع حقيقية"],
    instructor: "مطور Full-Stack",
    duration: "4 شهور",
    badges: ["الأكثر طلباً", "تطبيق عملي 100%"],
    overview: "تعلم تطوير الويب من الصفر حتى الاحتراف! ستبدأ من أساسيات HTML و CSS ثم تتقدم إلى JavaScript الحديث و React للواجهات الأمامية، ثم Node.js للخلفية. البرنامج يركز على التطبيق العملي مع مشاريع حقيقية تضيفها لـ Portfolio الخاص بك.",
    curriculum: [
      "أساسيات الويب - HTML5 و CSS3",
      "Responsive Design و Flexbox/Grid",
      "JavaScript - من الأساسيات للمتقدم",
      "DOM Manipulation و Event Handling",
      "ES6+ و Modern JavaScript",
      "React.js - بناء واجهات تفاعلية",
      "React Hooks و State Management",
      "Node.js و Express.js",
      "MongoDB و قواعد البيانات",
      "RESTful APIs و Authentication",
      "Git & GitHub للتحكم في الإصدارات",
      "مشروع تخرج Full-Stack متكامل",
    ],
    projects: [
      "موقع شخصي Portfolio احترافي",
      "تطبيق To-Do List تفاعلي بـ React",
      "متجر إلكتروني متكامل E-Commerce",
      "تطبيق Social Media مصغر",
      "مشروع تخرج Full-Stack حسب اختيارك",
    ],
    instructorBio: "مطور Full-Stack مع خبرة 10+ سنوات في تطوير تطبيقات الويب. عمل مع شركات عالمية وطور أكثر من 100 تطبيق ويب. حاصل على شهادات من Google و Meta في تطوير الويب.",
  },
  {
    id: "3",
    title: "دبلوم تحليل البيانات",
    titleEn: "Data Analysis Diploma",
    slug: "data-analysis",
    price: "2,800",
    description: "تحليل البيانات واستخراج رؤى قيّمة للأعمال",
    features: ["Excel المتقدم", "Python", "SQL", "Power BI", "تقارير تفاعلية"],
    instructor: "محلل بيانات محترف",
    duration: "3 شهور",
    badges: ["متكامل مع AI", "مطلوب في السوق"],
    overview: "كن محلل بيانات محترف! تعلم كيفية جمع البيانات، تنظيفها، تحليلها، وتحويلها إلى رؤى قيّمة تساعد في اتخاذ القرارات. ستتعلم أدوات مثل Excel المتقدم، Python، SQL، و Power BI لإنشاء تقارير تفاعلية احترافية.",
    curriculum: [
      "مقدمة في علم البيانات والتحليل",
      "Excel المتقدم - الدوال والجداول المحورية",
      "أساسيات البرمجة بـ Python",
      "مكتبات Python للبيانات (Pandas, NumPy)",
      "تنظيف ومعالجة البيانات",
      "SQL - التعامل مع قواعد البيانات",
      "تحليل البيانات الإحصائي",
      "Data Visualization مع Matplotlib و Seaborn",
      "Power BI - إنشاء Dashboards تفاعلية",
      "تطبيق AI في تحليل البيانات",
      "مشروع تحليل بيانات حقيقي",
    ],
    projects: [
      "تحليل بيانات مبيعات شركة تجارية",
      "بناء Dashboard تفاعلي لشركة ناشئة",
      "تحليل بيانات Social Media وإستخراج Insights",
      "مشروع تحليل بيانات في مجال تخصصك",
    ],
    instructorBio: "محلل بيانات محترف مع خبرة 7+ سنوات في تحليل البيانات في شركات كبرى. حاصل على شهادات من Google و IBM في Data Analysis و Machine Learning.",
  },
  {
    id: "4",
    title: "دبلوم التسويق الرقمي",
    titleEn: "Digital Marketing Diploma",
    slug: "digital-marketing",
    price: "2,200",
    description: "استراتيجيات التسويق الرقمي وإدارة الحملات الإعلانية",
    features: ["Social Media", "Google Ads", "SEO", "Content Marketing", "Analytics"],
    instructor: "خبير تسويق رقمي",
    duration: "2 شهور",
    badges: ["حملات حقيقية", "تطبيق عملي 100%"],
    overview: "تعلم التسويق الرقمي من الصفر! ستتعلم كيفية بناء استراتيجيات تسويقية فعالة، إدارة حملات إعلانية ناجحة على Facebook و Google، تحسين محركات البحث SEO، وتحليل نتائج الحملات. البرنامج يركز على التطبيق العملي مع إدارة حملات حقيقية.",
    curriculum: [
      "مقدمة في التسويق الرقمي",
      "استراتيجيات التسويق عبر وسائل التواصل",
      "Facebook & Instagram Ads - من الصفر للاحتراف",
      "Google Ads و إعلانات البحث",
      "SEO - تحسين محركات البحث",
      "Content Marketing و كتابة المحتوى",
      "Email Marketing والتسويق بالبريد",
      "Google Analytics و تحليل النتائج",
      "Landing Pages عالية التحويل",
      "إدارة حملة إعلانية حقيقية",
    ],
    projects: [
      "بناء استراتيجية تسويقية متكاملة لشركة",
      "إدارة حملة Facebook Ads بميزانية حقيقية",
      "تحسين موقع ويب لمحركات البحث SEO",
      "إنشاء وإدارة حملة Google Ads",
    ],
    instructorBio: "خبير تسويق رقمي مع 9+ سنوات خبرة في إدارة حملات إعلانية بملايين الجنيهات. عمل مع أكثر من 80 شركة ومشروع تجاري. حاصل على شهادات من Google و Facebook في الإعلانات الرقمية.",
  },
];

export const whatsappNumber = "201055373537";

export const generateWhatsAppLink = (courseName: string) => {
  const message = `مرحباً، أنا مهتم بالتسجيل في ${courseName}. أرجو إرسال التفاصيل.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const generateGeneralWhatsAppLink = () => {
  const message = "مرحباً، أريد الاستفسار عن الدبلومات المتاحة.";
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};

export const generateBookingWhatsAppLink = (
  courseName: string,
  fullName: string,
  phone: string,
  walletNumber: string
) => {
  const message = `مرحباً Software Masters،
أرغب في الاشتراك في: ${courseName}

بياناتي للتسجيل:
- الاسم: ${fullName}
- رقم الهاتف: ${phone}
- رقم التحويل: ${walletNumber}

برجاء تأكيد الحجز وتفاصيل الدفع.`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
};
