'use client';

import { MessageCircle, Phone, Mail, Send } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { useNavigation } from "../../contexts/NavigationContext";
import mascotImage from "figma:asset/92bf8a39a0cd0e80028b71c7a593d0f8cea647ab.png";

export function FloatingButtons() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { navigateTo } = useNavigation();

  const handleContactClick = () => {
    navigateTo('contact' as any);
    setIsExpanded(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <AnimatePresence>
        {isExpanded && (
          <>
            {/* お問い合わせボタン（新規追加） */}
            <motion.button
              onClick={handleContactClick}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="group relative w-14 h-14 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(16,185,129,0.8)] flex items-center justify-center transition-all hover:scale-110"
              whileHover={{ rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Send className="w-6 h-6 text-white" strokeWidth={2.5} />
              
              {/* ツールチップ */}
              <div className="absolute right-full mr-3 px-3 py-1.5 bg-[#0f172a] text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-bold">
                今すぐ相談
              </div>
            </motion.button>

            {/* 電話ボタン */}
            <motion.a
              href="tel:052-698-3003"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="group relative w-14 h-14 bg-gradient-to-br from-[#facc15] to-yellow-500 rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(250,204,21,0.6)] flex items-center justify-center transition-all hover:scale-110"
              whileHover={{ rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-6 h-6 text-[#022c22]" strokeWidth={2.5} />
              
              {/* ツールチップ */}
              <div className="absolute right-full mr-3 px-3 py-1.5 bg-[#0f172a] text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-bold">
                電話で相談
              </div>
            </motion.a>

            {/* LINEボタン */}
            <motion.a
              href="https://lin.ee/G0HzvGh"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.8 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="group relative w-14 h-14 bg-gradient-to-br from-[#06c755] to-[#00b900] rounded-full shadow-lg hover:shadow-[0_0_25px_rgba(6,199,85,0.6)] flex items-center justify-center transition-all hover:scale-110"
              whileHover={{ rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-6 h-6 text-white" strokeWidth={2.5} />
              
              {/* ツールチップ */}
              <div className="absolute right-full mr-3 px-3 py-1.5 bg-[#0f172a] text-white text-sm rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none font-bold">
                LINEで相談
              </div>
            </motion.a>
          </>
        )}
      </AnimatePresence>

      {/* メイントグルボタン - GENBA JINマスコットキャラクター */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`relative w-16 h-16 rounded-full shadow-xl flex items-center justify-center transition-all overflow-hidden ${
          isExpanded 
            ? 'bg-gray-600 hover:bg-gray-700' 
            : 'bg-gradient-to-br from-[#10b981] to-[#059669] hover:shadow-[0_0_30px_rgba(16,185,129,0.8)] border-2 border-white'
        }`}
        whileHover={{ scale: 1.1, rotate: isExpanded ? 0 : 5 }}
        whileTap={{ scale: 0.95 }}
        animate={{ 
          rotate: isExpanded ? 0 : 0,
          y: isExpanded ? 0 : [0, -8, 0]
        }}
        transition={{
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        {isExpanded ? (
          <motion.svg 
            className="w-8 h-8 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            initial={{ rotate: 0 }}
            animate={{ rotate: 45 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
          </motion.svg>
        ) : (
          <div className="w-full h-full p-1.5 flex items-center justify-center">
            {/* GENBA JINマスコットキャラクター */}
            <img 
              src={mascotImage}
              alt="GENBA JINマスコット"
              className="w-full h-full object-contain drop-shadow-lg"
            />
          </div>
        )}
      </motion.button>

      {/* 通知バッジ（新着があることを示す） + テキストラベル */}
      {!isExpanded && (
        <>
          <motion.div
            className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-br from-[#facc15] to-[#eab308] rounded-full border-2 border-white shadow-lg flex items-center justify-center"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <span className="text-[#022c22] text-xs font-black">!</span>
          </motion.div>
          
          {/* 「今すぐ相談」ラベル */}
          <motion.div
            className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-4 py-2 bg-[#10b981] text-white text-sm font-black rounded-lg shadow-lg whitespace-nowrap pointer-events-none"
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: [0.9, 1, 0.9], x: 0 }}
            transition={{ 
              opacity: { duration: 2, repeat: Infinity },
              x: { duration: 0.3 }
            }}
          >
            今すぐ相談 →
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-[#10b981]"></div>
          </motion.div>
        </>
      )}
    </div>
  );
}