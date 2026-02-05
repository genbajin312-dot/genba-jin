'use client';

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Users, Network, Shield } from "lucide-react";

const reasons = [
  {
    icon: Users,
    number: "01.",
    title: "熟練×若手の融合",
    subtitle: "ハイブリッドなチーム",
    description:
      "ベテランの「匠の技」をデジタルネイティブな若手が継承。AIやドローン活用にも積極的な、進化する職人集団です。",
  },
  {
    icon: Network,
    number: "02.",
    title: "強固なネットワーク",
    subtitle: "確かな協力体制",
    description:
      "名古屋市内外の信頼できるパートナー企業との連携により、大規模案件から特殊工事までワンストップで対応します。",
  },
  {
    icon: Shield,
    number: "03.",
    title: "圧倒的な誠実さ",
    subtitle: "安全と品質を重視",
    description:
      "安全管理と整理整頓は品質の基本。デジタルツールを用いた進捗共有で、お客様に「見える安心」を提供します。",
  },
];

function ReasonCard({ item, index }: { item: typeof reasons[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-[#facc15]/50 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#facc15]/10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-150"></div>
      <motion.div
        className="w-16 h-16 bg-gradient-to-br from-[#10b981] to-[#022c22] text-white rounded-xl flex items-center justify-center text-3xl mb-6 shadow-lg group-hover:from-[#facc15] group-hover:to-[#eab308] group-hover:text-[#022c22] transition-all"
        whileHover={{ rotate: 12, scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Icon className="w-8 h-8" />
      </motion.div>
      <h4 className="text-xl font-black text-[#0f172a] mb-4 flex items-center gap-2">
        <span className="text-[#eab308] text-sm tracking-wider">{item.number}</span>
        {item.title}
      </h4>
      <p className="text-slate-600 leading-relaxed text-sm mb-4">
        <strong className="text-[#0f172a] border-b-2 border-[#facc15]/50">{item.subtitle}。</strong>
        <br />
        {item.description}
      </p>
    </motion.div>
  );
}

export function Reason() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-12 transform translate-x-32 z-0"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#facc15]/5 rounded-full blur-3xl z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-[#10b981] font-black tracking-[0.3em] text-sm uppercase block mb-2">
            Why Genbajin?
          </span>
          <h3 className="text-3xl md:text-5xl font-black text-[#0f172a]">
            現場ジンが選ばれる
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#eab308]">
              3つの理由
            </span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <ReasonCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}