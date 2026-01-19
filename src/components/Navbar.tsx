import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { generateGeneralWhatsAppLink } from "@/data/courses";
import logoPrimary from "@/assets/logo-primary.svg";

const navLinks = [
  { href: "#home", label: "الرئيسية" },
  { href: "#diplomas", label: "الدبلومات" },
  { href: "#why-us", label: "لماذا نحن" },
  { href: "#faq", label: "الأسئلة الشائعة" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);

    // If we're not on the homepage, navigate there first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation then scroll to section
      setTimeout(() => {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      // We're already on homepage, just scroll
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-md shadow-lg"
        : "bg-transparent"
        }`}
      dir="rtl"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => navigate("/")} className="flex items-center gap-3 cursor-pointer">
            <img src={logoPrimary} alt="Software Master's Academy" className="h-12 w-auto" />
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 text-base"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="hidden md:block">
            <Button
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold gap-2 px-6"
            >
              <a href={generateGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                تواصل معنا
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden fixed top-20 left-0 right-0 bg-background/98 backdrop-blur-lg shadow-xl border-t border-border animate-fade-in-up z-40 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-foreground hover:text-primary font-medium py-3 text-lg text-right border-b border-border/50 last:border-0"
                >
                  {link.label}
                </button>
              ))}
              <Button
                asChild
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold gap-2 mt-4 py-6 text-lg"
              >
                <a href={generateGeneralWhatsAppLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  تواصل معنا
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
