'use client';

import { Mail, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigation } from "../../contexts/NavigationContext";
import { motion, AnimatePresence } from "motion/react";
import logoImage from "figma:asset/0e41ff1ef46b722b7d7ddd43e3c37d2e5cde9d91.png";

export function Navbar() {
  const { navigateTo } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (page: string, targetId?: string) => {
    navigateTo(page as any, targetId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className="fixed w-full top-0 z-50 transition-all duration-300 bg-white border-b border-gray-200 shadow-sm"
        style={{ backgroundColor: 'white' }}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <button 
              onClick={() => handleNavClick('home')}
              className="flex items-center gap-3 group"
            >
              {/* Logo Image - 画像を /public/logo.png に配置してください */}
              <div className="relative w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={logoImage} 
                  alt="現場JINロゴ" 
                  className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]"
                />
              </div>
              <div className="flex flex-col">
                <h1 className="text-base sm:text-lg md:text-2xl font-black text-white tracking-[0.15em]">株式会社現場JIN</h1>
                <p className="text-[10px] text-[#facc15] font-black tracking-[0.2em] leading-none uppercase">Construction & Tech</p>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8 font-black text-sm tracking-[0.1em] text-white/90">
              <button 
                onClick={() => handleNavClick('about')}
                className="hover:text-[#facc15] transition-colors relative group"
              >
                会社について
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#facc15] transition-all group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => handleNavClick('service')}
                className="hover:text-[#facc15] transition-colors relative group"
              >
                事業内容
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#facc15] transition-all group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => handleNavClick('works')}
                className="hover:text-[#facc15] transition-colors relative group"
              >
                施工実績
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#facc15] transition-all group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => handleNavClick('recruit')}
                className="px-5 py-2.5 bg-gradient-to-r from-[#10b981] to-emerald-600 text-white rounded hover:from-[#facc15] hover:to-yellow-500 hover:text-[#022c22] hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all transform hover:-translate-y-0.5"
              >
                採用情報
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="flex items-center gap-2 px-5 py-2.5 border border-[#facc15] text-[#facc15] rounded hover:bg-[#facc15] hover:text-[#022c22] transition-all shadow-[0_0_10px_rgba(250,204,21,0.2)]"
              >
                <Mail className="w-4 h-4" /> お問い合わせ
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-btn"
              className="md:hidden text-white text-2xl focus:outline-none hover:text-[#facc15] transition"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden fixed inset-0 bg-[#0f172a]/98 backdrop-blur-xl z-40 top-20"
          >
            <nav className="flex flex-col p-8 space-y-6 font-black text-center text-white text-lg tracking-[0.1em]">
              <button
                onClick={() => handleNavClick('about')}
                className="block py-2 hover:text-[#facc15] transition"
              >
                会社について
              </button>
              <button
                onClick={() => handleNavClick('service')}
                className="block py-2 hover:text-[#facc15] transition"
              >
                事業内容
              </button>
              <button
                onClick={() => handleNavClick('works')}
                className="block py-2 hover:text-[#facc15] transition"
              >
                施工実績
              </button>
              <button
                onClick={() => handleNavClick('recruit')}
                className="block py-2 text-[#facc15]"
              >
                採用情報
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="block py-3 bg-[#facc15] text-[#022c22] rounded shadow-lg mt-4"
              >
                <Mail className="inline-block w-4 h-4 mr-2" /> お問い合わせ
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}