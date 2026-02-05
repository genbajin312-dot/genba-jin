import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import mascot from "figma:asset/eb6019c35f14731b927eb1f14384d4d06d9352a6.png";

export function FloatingMascot() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past the hero (e.g. 500px)
      // And hide if we are near the bottom (contact section is usually at the bottom)
      const contactSection = document.getElementById("contact");
      if (!contactSection) {
         setIsVisible(window.scrollY > 300);
         return;
      }

      const contactRect = contactSection.getBoundingClientRect();
      const isContactVisible = contactRect.top < window.innerHeight && contactRect.bottom >= 0;
      
      // Hide if contact section is visible, otherwise show if scrolled past hero
      if (isContactVisible) {
        setIsVisible(false);
      } else {
        setIsVisible(window.scrollY > 300);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once on mount to check initial state
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50 cursor-pointer group"
          onClick={scrollToContact}
        >
            <div className="relative">
                {/* Speech Bubble */}
                <div className="absolute -top-14 right-0 bg-white text-black text-xs font-bold py-2 px-4 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 whitespace-nowrap border border-gray-100 pointer-events-none">
                    お問い合わせはこちら！
                    <div className="absolute -bottom-2 right-8 w-4 h-4 bg-white rotate-45 border-b border-r border-gray-100"></div>
                </div>

                <div className="relative hover:scale-110 transition-transform duration-300">
                    <div className="absolute inset-0 bg-[#F2A900] blur-xl opacity-20 rounded-full animate-pulse"></div>
                    <img 
                        src={mascot} 
                        alt="Contact Mascot" 
                        className="w-20 md:w-24 h-auto drop-shadow-2xl relative z-10"
                    />
                </div>
            </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
