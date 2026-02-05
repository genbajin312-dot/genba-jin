'use client';

import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

const stats = [
  { label: "年間施工実績", value: 150, unit: "件", suffix: "+" },
  { label: "お客様満足度", value: 98, unit: "%", suffix: "" },
  { label: "創業からの実績", value: 800, unit: "件", suffix: "+" },
  { label: "リピート率", value: 85, unit: "%", suffix: "" },
];

function AnimatedCounter({ end, duration = 2000 }: { end: number; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return <span ref={ref}>{count}</span>;
}

export function WorksStats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#10b981]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#facc15]/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#facc15] font-black tracking-[0.3em] text-sm uppercase">
            Achievement
          </span>
          <h3 className="text-3xl md:text-5xl font-black mt-2">実績データ</h3>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-slate-900/50 border border-white/10 rounded-2xl p-6 hover:border-[#facc15]/50 transition-all text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
              
              <div className="relative z-10">
                <div className="text-4xl md:text-5xl font-black text-[#facc15] mb-2">
                  <AnimatedCounter end={stat.value} />
                  {stat.unit}
                  {stat.suffix}
                </div>
                <div className="text-sm text-slate-300 font-black tracking-wider">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
