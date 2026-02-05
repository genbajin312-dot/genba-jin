'use client';

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { MessageSquare, FileSearch, Settings, CheckCircle2 } from "lucide-react";

const flowSteps = [
  {
    icon: MessageSquare,
    title: "お問い合わせ・ヒアリング",
    description: "お客様のご要望や現場の状況を詳しくお伺いします。オンライン相談も可能です。"
  },
  {
    icon: FileSearch,
    title: "現地調査・お見積り",
    description: "専門スタッフが現地を調査し、詳細なお見積りを作成いたします。"
  },
  {
    icon: Settings,
    title: "施工開始",
    description: "安全を最優先に、経験豊富な職人が丁寧に施工を進めます。"
  },
  {
    icon: CheckCircle2,
    title: "完成・アフターフォロー",
    description: "お客様に確認いただき、完成。その後のアフターフォローも万全です。"
  },
];

export function ServiceFlow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-100 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#10b981] font-black tracking-[0.3em] text-sm uppercase">
            Service Flow
          </span>
          <h3 className="text-3xl md:text-5xl font-black mt-2 text-[#0f172a]">施工の流れ</h3>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            お問い合わせから完成まで、お客様に寄り添った丁寧な対応を心がけています。
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {flowSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-8 last:mb-0"
              >
                <div className="flex items-start gap-6">
                  {/* Step Number & Icon */}
                  <div className="flex flex-col items-center flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#10b981] to-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg">
                      <Icon className="w-8 h-8" />
                    </div>
                    {index < flowSteps.length - 1 && (
                      <div className="w-0.5 h-20 bg-gradient-to-b from-[#10b981] to-transparent mt-4"></div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-[#10b981]">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[#10b981] font-black text-sm">STEP {index + 1}</span>
                    </div>
                    <h4 className="text-xl font-black mb-3 text-[#0f172a]">{step.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
