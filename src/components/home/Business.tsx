'use client';

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { Building, Hammer, TreeDeciduous, Check, ArrowRight } from "lucide-react";
import { useNavigation } from "../../contexts/NavigationContext";
import { ScrollReveal } from "../ui/ScrollReveal";
import { RippleButton } from "../ui/RippleButton";
import { WaveDivider } from "../ui/WaveDivider";

const services = [
  {
    title: "土木工事",
    icon: Hammer,
    description:
      "造成から基礎工事まで、精度の高い施工を提供。最新の測量技術を活用し、正確かつ迅速な基盤づくりを行います。",
    image: "https://images.unsplash.com/photo-1636790921342-cbdc4b783de6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjBzaXRlJTIwd29ya2Vyc3xlbnwxfHx8fDE3NjYxMDIwNTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    items: ["宅地造成", "基礎工事", "擁壁工事", "道路改良"],
  },
  {
    title: "建築工事",
    icon: Building,
    description:
      "住宅から商業施設まで。安全性とデザイン性を両立させた建築施工。",
    image: "https://images.unsplash.com/photo-1667604579449-14298726118b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBidWlsZGluZyUyMGNvbnN0cnVjdGlvbnxlbnwxfHx8fDE3NjYxMjYzOTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    items: [],
  },
  {
    title: "外構工事",
    icon: TreeDeciduous,
    description:
      "建物の顔となるエクステリア。機能美と防犯性を兼ね備えた空間提案。",
    image: "https://images.unsplash.com/photo-1759509474971-0f1f35a29efd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGluZyUyMGdhcmRlbiUyMGV4dGVyaW9yfGVufDF8fHx8MTc2NjEzNTIxNnww&ixlib=rb-4.1.0&q=80&w=1080",
    items: [],
  },
];

function ServiceCardLarge({ item }: { item: typeof services[0] }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = item.icon;

  return (
    <ScrollReveal direction="up">
      <motion.div
        ref={ref}
        className="group relative bg-slate-900/50 border border-white/10 rounded-2xl p-8 md:p-12 overflow-hidden hover:border-[#facc15]/50 transition-all hover:shadow-[0_0_40px_rgba(250,204,21,0.2)]"
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#10b981]/20 via-[#facc15]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
          <motion.div 
            className="md:w-1/2 w-full h-64 rounded-xl overflow-hidden relative border border-white/10 group-hover:border-[#facc15]/30 transition"
            whileHover={{ scale: 1.05 }}
          >
            <div className="absolute inset-0 bg-[#022c22]/30 z-10 group-hover:bg-transparent transition"></div>
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
            />
          </motion.div>
          <div className="md:w-1/2">
            <h4 className="text-2xl font-black mb-4 flex items-center text-[#facc15]">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="mr-3 w-6 h-6" />
              </motion.div>
              {item.title}
            </h4>
            <p className="text-slate-300 leading-relaxed mb-6">{item.description}</p>
            {item.items.length > 0 && (
              <ul className="grid grid-cols-2 gap-2 text-sm text-slate-400 font-mono">
                {item.items.map((subItem, idx) => (
                  <motion.li 
                    key={idx} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: idx * 0.1 + 0.3 }}
                    whileHover={{ x: 5, color: "#facc15" }}
                  >
                    <Check className="text-[#facc15] mr-2 w-4 h-4" />
                    {subItem}
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </motion.div>
    </ScrollReveal>
  );
}

function ServiceCardSmall({ item, index }: { item: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative bg-slate-900/50 border border-white/10 rounded-2xl p-8 overflow-hidden hover:border-[#facc15]/50 transition-all"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative z-10">
        <div className="w-12 h-12 bg-[#10b981]/20 rounded-lg flex items-center justify-center text-[#facc15] text-2xl mb-6 border border-[#facc15]/20">
          <Icon className="w-6 h-6" />
        </div>
        <h4 className="text-2xl font-black mb-4 text-white group-hover:text-[#facc15] transition">
          {item.title}
        </h4>
        <p className="text-slate-300 mb-6 text-sm">{item.description}</p>
        <div className="h-48 overflow-hidden rounded-lg">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition duration-500 transform group-hover:scale-110"
          />
        </div>
      </div>
    </motion.div>
  );
}

export function Business({ showButton = true }: { showButton?: boolean }) {
  const { navigateTo } = useNavigation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="service" className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-100"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-end justify-between mb-16"
        >
          <div>
            <span className="text-[#facc15] font-black tracking-[0.3em] text-sm uppercase">
              事業内容
            </span>
            <h3 className="text-3xl md:text-5xl font-black mt-2">事業領域</h3>
          </div>
          <p className="text-slate-400 mt-4 md:mt-0 font-medium border-l-4 border-[#facc15] pl-4">
            伝統の技術と最新のテクノロジー。
            <br />
            3つの柱で街づくりを支えます。
          </p>
        </motion.div>

        <div className="space-y-8">
          {/* Service 1 - Large */}
          <ServiceCardLarge item={services[0]} />

          {/* Service 2 & 3 - Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            <ServiceCardSmall item={services[1]} index={1} />
            <ServiceCardSmall item={services[2]} index={2} />
          </div>
        </div>

        {/* 詳細はこちらボタン */}
        {showButton && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <RippleButton
              onClick={() => navigateTo('service')}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#facc15] text-[#0f172a] font-black rounded-lg hover:bg-[#10b981] hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105"
            >
              事業内容の詳細はこちら
              <ArrowRight className="w-5 h-5" />
            </RippleButton>
          </motion.div>
        )}
      </div>
    </section>
  );
}