'use client';

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Target, Rocket, Heart } from "lucide-react";

const visionData = [
  {
    icon: Target,
    title: "ミッション",
    subtitle: "Mission",
    description: "安全で高品質な施工を通じて、地域社会の発展に貢献し、お客様の夢を形にします。"
  },
  {
    icon: Rocket,
    title: "ビジョン",
    subtitle: "Vision",
    description: "伝統技術と最新テクノロジーを融合させ、建設業界のイノベーションをリードする企業へ。"
  },
  {
    icon: Heart,
    title: "バリュー",
    subtitle: "Value",
    description: "安全第一・品質重視・お客様満足・社員の成長を大切にし、誠実な仕事を追求します。"
  },
];

export function Vision() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#facc15] font-black tracking-[0.3em] text-sm uppercase">
            Our Philosophy
          </span>
          <h3 className="text-3xl md:text-5xl font-black mt-2">企業理念</h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {visionData.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative bg-slate-900/50 border border-white/10 rounded-2xl p-8 hover:border-[#facc15]/50 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-[#10b981]/20 rounded-xl flex items-center justify-center text-[#facc15] mb-6 border border-[#facc15]/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h4 className="text-2xl font-black mb-2 text-white group-hover:text-[#facc15] transition">
                    {item.title}
                  </h4>
                  <div className="text-xs font-black text-[#10b981] tracking-[0.2em] mb-4 uppercase">
                    {item.subtitle}
                  </div>
                  
                  <p className="text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
