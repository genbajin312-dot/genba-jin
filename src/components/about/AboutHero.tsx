'use client';

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Building2, Shield, Zap } from "lucide-react";
import { Parallax } from "../ui/ScrollReveal";

export function AboutHero() {
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
            src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBidWlsZGluZyUyMHNpdGV8ZW58MXx8fHwxNzY1MDcxNzY0fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="会社について"
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
            About Us
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
        >
          会社について
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
          安全第一、現場から未来へ。<br />
          私たち現場JINは、建設業界に新しい価値を提供し続けています。
        </motion.p>

        {/* Feature Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-12 flex flex-wrap justify-center gap-8"
        >
          {[
            { icon: Shield, label: "安全第一" },
            { icon: Building2, label: "確かな技術" },
            { icon: Zap, label: "スピード対応" }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-shadow duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm font-black text-white/80 group-hover:text-[#facc15] transition-colors">
                  {item.label}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>

      {/* Bottom Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full h-24 z-30">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,0 C300,80 600,80 900,40 C1050,20 1150,60 1200,40 L1200,120 L0,120 Z"
            fill="#f3f4f6"
          />
        </svg>
      </div>
    </section>
  );
}