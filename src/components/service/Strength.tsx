'use client';

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Shield, Users, Lightbulb, Award } from "lucide-react";

const strengths = [
  {
    icon: Shield,
    title: "徹底した安全管理",
    description: "全ての現場で安全を最優先。定期的な安全教育と最新の安全設備で、事故ゼロを目指します。"
  },
  {
    icon: Users,
    title: "経験豊富な職人",
    description: "長年の経験を持つベテラン職人が、確かな技術で高品質な施工を実現します。"
  },
  {
    icon: Lightbulb,
    title: "最新技術の導入",
    description: "ドローン測量、3Dモデリングなど、最新技術を積極的に活用し、効率的な施工を行います。"
  },
  {
    icon: Award,
    title: "地域密着の信頼",
    description: "愛知県を中心に、地域のお客様との信頼関係を大切にし、丁寧な対応を心がけています。"
  },
];

export function Strength() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 tech-grid opacity-30"></div>
      <div className="absolute top-20 right-0 w-96 h-96 bg-[#facc15]/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#10b981]/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#facc15] font-black tracking-[0.3em] text-sm uppercase">
            Our Strength
          </span>
          <h3 className="text-3xl md:text-5xl font-black mt-2">現場JINの強み</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {strengths.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative bg-slate-900/50 border border-white/10 rounded-2xl p-6 hover:border-[#facc15]/50 transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="w-14 h-14 bg-[#10b981]/20 rounded-xl flex items-center justify-center text-[#facc15] mb-4 border border-[#facc15]/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  
                  <h4 className="text-xl font-black mb-3 text-white group-hover:text-[#facc15] transition">
                    {item.title}
                  </h4>
                  
                  <p className="text-slate-300 text-sm leading-relaxed">
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
