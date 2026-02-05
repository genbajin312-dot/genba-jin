'use client';

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { HardHat, ArrowRight } from "lucide-react";
import { useNavigation } from "../../contexts/NavigationContext";

export function RecruitTeaser() {
  const { navigateTo } = useNavigation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="recruit" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#10b981] to-[#022c22]"></div>
      
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#facc15] opacity-20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#10b981] opacity-30 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="glass-card-light rounded-3xl p-8 md:p-16 max-w-5xl mx-auto shadow-2xl border-t-4 border-[#facc15]"
        >
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <span className="inline-block px-4 py-1 bg-[#facc15] text-[#022c22] font-black text-sm rounded-full mb-6 animate-pulse shadow-lg">
                <HardHat className="inline-block w-4 h-4 mr-2" />
                仲間を募集しています
              </span>
              <h3 className="text-4xl md:text-5xl font-black text-[#0f172a] mb-6 leading-tight">
                君の可能性を、
                <br />
                この現場で解き放て。
              </h3>
              <p className="text-slate-700 mb-8 leading-relaxed font-medium">
                「現場」は、もっとカッコよく進化できる。
                <br />
                アナログな職人技と、デジタルの効率化。
                <br />
                その両方を武器に、新しい建設業のスタンダードを一緒に作りませんか？
                <br />
                <br />
                未経験歓迎。情熱だけ持ってきてください。
              </p>
              <button
                onClick={() => navigateTo('recruit' as any)}
                className="inline-flex items-center justify-center px-8 py-4 bg-[#0f172a] text-white font-black text-lg rounded-lg hover:bg-[#facc15] hover:text-[#022c22] transition-all transform hover:scale-105 shadow-xl border-2 border-transparent hover:border-[#0f172a]"
              >
                採用エントリーはこちら <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 border-4 border-white">
                <img
                  src="https://images.unsplash.com/photo-1758798349125-5c297b18b8b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwdGVhbXxlbnwxfHx8fDE3NjYxMjUzMzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  className="w-full h-auto"
                  alt="採用イメージ"
                />
                {/* Overlay Text */}
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                  <p className="font-black flex items-center gap-2">
                    <HardHat className="text-[#facc15] w-5 h-5" /> 20代〜30代中心のチーム
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}