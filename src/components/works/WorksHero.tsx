'use client';

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Parallax } from "../ui/ScrollReveal";

export function WorksHero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative h-[70vh] md:h-[80vh] w-full overflow-hidden bg-[#0f172a]">
      {/* Background Image with Parallax */}
      <Parallax offset={150}>
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ y }}
        >
          <img
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBwcm9qZWN0JTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY2MTAyMDU5fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="施工実績"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/80 via-[#0f172a]/60 to-[#0f172a]/90"></div>
        </motion.div>
      </Parallax>

      {/* Tech Grid Overlay */}
      <div className="absolute inset-0 tech-grid opacity-20 z-10"></div>

      {/* Content */}
      <motion.div 
        className="container relative z-20 mx-auto px-6 h-full flex flex-col justify-center items-center text-center"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-6"
        >
          <span className="inline-block px-6 py-2 bg-[#10b981]/20 border border-[#10b981]/40 rounded-full text-[#10b981] font-black text-sm tracking-[0.3em] uppercase backdrop-blur-sm">
            Our Works
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
        >
          施工実績
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 120 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="h-1 bg-gradient-to-r from-[#10b981] via-[#facc15] to-[#10b981] rounded-full mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl text-slate-300 max-w-3xl leading-relaxed"
        >
          確かな技術と実績で、<br className="hidden md:block" />
          お客様の信頼に応え続けます。
        </motion.p>
      </motion.div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full h-24 z-30">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,0 C300,80 600,80 900,40 C1050,20 1150,60 1200,40 L1200,120 L0,120 Z"
            fill="#0f172a"
          />
        </svg>
      </div>
    </section>
  );
}
