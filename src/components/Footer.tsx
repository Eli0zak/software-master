import { MessageCircle, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateGeneralWhatsAppLink, whatsappNumber } from "@/data/courses";
import logoPrimary from "@/assets/logo-primary.svg";

const quickLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#diplomas", label: "الدبلومات" },
  { href: "#why-us", label: "لماذا نحن" },
  { href: "#faq", label: "الأسئلة الشائعة" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background pt-16 pb-8" dir="rtl">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <img src={logoPrimary} alt="Software Master's Academy" className="h-12 w-auto brightness-0 invert" />
            <p className="text-background/70 leading-relaxed">
              أكاديمية متخصصة في الدبلومات التقنية العملية. 
              نساعدك على بناء مهارات حقيقية تؤهلك لسوق العمل.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-background/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-background/70">
                <Phone className="h-5 w-5 text-accent" />
                <span dir="ltr">+20 {whatsappNumber.slice(2)}</span>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <Mail className="h-5 w-5 text-accent" />
                <span>info@softwaremasters.com</span>
              </li>
              <li className="flex items-center gap-3 text-background/70">
                <MapPin className="h-5 w-5 text-accent" />
                <span>القاهرة، مصر</span>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-lg font-bold mb-6">ابدأ رحلتك الآن</h4>
            <p className="text-background/70 mb-6">
              تواصل معنا على WhatsApp للاستفسار والتسجيل
            </p>
            <Button
              asChild
              size="lg"
              className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold gap-2"
            >
              <a href={generateGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                تواصل على WhatsApp
              </a>
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-background/50 text-sm">
            <p>© {currentYear} Software Master's Academy. جميع الحقوق محفوظة.</p>
            <p className="font-poppins">Built with ❤️ in Egypt</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
