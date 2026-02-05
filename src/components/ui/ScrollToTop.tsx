'use client';

import { ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // 300px以上スクロールしたら表示
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full shadow-xl hover:shadow-[0_0_30px_rgba(16,185,129,0.8)] flex items-center justify-center transition-all border-2 border-white group"
          aria-label="ページトップへ戻る"
        >
          <ChevronUp className="w-7 h-7 text-white" strokeWidth={3} />
          
          {/* ツールチップ */}
          <div className="absolute left-full ml-3 px-3 py-1.5 bg-[#0f172a] text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-bold">
            トップへ戻る
          </div>

          {/* 背景の光エフェクト */}
          <motion.div
            className="absolute inset-0 rounded-full bg-[#10b981] opacity-30"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
