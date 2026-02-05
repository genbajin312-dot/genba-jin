import { useState, useEffect } from "react";
import { HelmetProvider } from "react-helmet-async";
import { SEOHead } from "@/components/seo/SEOHead";
import { LocalSEO } from "@/components/seo/LocalSEO";
import { Hero } from "@/components/lp/Hero";
import { Business } from "@/components/lp/Business";
import { Company } from "@/components/lp/Company";
import { Contact } from "@/components/lp/Contact";
import { Footer } from "@/components/lp/Footer";
import { FloatingMascot } from "@/components/lp/FloatingMascot";
import { Menu, X } from "lucide-react";
import { Toaster } from "sonner";
import logoMark from "figma:asset/ae80718e0143dc4328101914130d1775a74ac11c.png";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
      { id: "business", label: "事業内容", labelEn: "SERVICE" },
      { id: "company", label: "会社概要", labelEn: "COMPANY" },
      { id: "contact", label: "お問い合わせ", labelEn: "CONTACT" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md py-4 border-b border-gray-100" : "bg-white py-8"
      }`}
    >
      <div className="container mx-auto px-4 md:px-12 flex justify-between items-center">
        <div 
            className="flex items-center gap-3 cursor-pointer z-50"
            onClick={() => scrollTo('hero')}
        >
          <img 
            src={logoMark} 
            alt="GENBA JIN Logo" 
            className="h-10 w-auto object-contain"
          />
          <div className="text-lg font-black tracking-tighter transition-colors text-slate-900">
            株式会社現場ジン
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-10 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-xs font-bold tracking-widest text-slate-900 hover:text-[#F2A900] transition-colors relative group"
            >
              <span className="group-hover:hidden">{item.label}</span>
              <span className="hidden group-hover:inline">{item.labelEn}</span>
              <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-[#F2A900] transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="text-slate-900" strokeWidth={2} />
          ) : (
            <Menu className="text-slate-900" strokeWidth={2} />
          )}
        </button>

        {/* Mobile Overlay */}
        {isOpen && (
          <div className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center">
             <div className="flex flex-col gap-8 text-center">
             {navItems.map((item) => (
                <button
                key={item.id}
                onClick={() => {
                    scrollTo(item.id);
                    setIsOpen(false);
                }}
                className="text-3xl font-black tracking-tight text-slate-900 hover:text-[#F2A900] transition-colors"
                >
                {item.label}
                </button>
            ))}
             </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <SEOHead />
      <LocalSEO />
      <div className="min-h-screen bg-white font-sans text-slate-900 antialiased selection:bg-[#F2A900] selection:text-white">
        <Navbar />
        <Hero />
        <Business />
        <Company />
        <Contact />
        <Footer />
        <FloatingMascot />
        <Toaster />
      </div>
    </HelmetProvider>
  );
}