'use client';

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigation } from "../../contexts/NavigationContext";
import { ScrollReveal, Parallax } from "../ui/ScrollReveal";
import { RippleButton } from "../ui/RippleButton";
import { WaveDivider } from "../ui/WaveDivider";

export function Philosophy({ showButton = true }: { showButton?: boolean }) {
  const { navigateTo } = useNavigation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gray-100">
      {/* 波型の区切り - 上部 */}
      <div className="absolute top-0 left-0 w-full h-24 pointer-events-none rotate-180">
        <WaveDivider />
      </div>

      <Parallax offset={100}>
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1694522362256-6c907336af43?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25zdHJ1Y3Rpb24lMjB3b3JrZXJzJTIwc2l0ZSUyMHNhZmV0eSUyMGhlbG1ldHxlbnwxfHx8fDE3NjUwNzE3NjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Safety Philosophy"
            className="h-full w-full object-cover"
          />
        </div>
      </Parallax>

      <div className="container relative z-10 mx-auto px-6 h-full flex items-center">
        <ScrollReveal direction="left">
          <motion.div
            ref={ref}
            className="max-w-2xl bg-[#0f172a]/95 p-8 md:p-12 text-white shadow-2xl backdrop-blur-md border-l-4 border-[#facc15] hover:shadow-[0_0_50px_rgba(250,204,21,0.3)] transition-shadow duration-500"
            whileHover={{ scale: 1.02, x: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.h2
              className="mb-6 text-3xl md:text-4xl lg:text-5xl font-black leading-tight tracking-[0.05em] uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              安全第一、現場から未来へ
            </motion.h2>

            <motion.div
              className="my-6 h-1 bg-[#facc15]"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />

            <motion.h3
              className="mb-4 text-xl font-black text-[#facc15]"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              安全を最優先する。
            </motion.h3>

            <motion.p
              className="leading-relaxed opacity-90 text-sm md:text-base mb-8"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 0.9 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              私たち現場ジンは建設会社として安全という最も基本的で大切にしなければいけないことに拘り、最優先することで他社との違いを生み、私たち現場ジンの文化を形作っています。安全とは私たち現場ジンにとって最も大切で守るべきものです。
            </motion.p>

            {showButton && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <RippleButton
                  onClick={() => navigateTo('about')}
                  variant="primary"
                  className="inline-flex items-center gap-2"
                >
                  会社について詳しく見る
                  <ArrowRight className="w-5 h-5" />
                </RippleButton>
              </motion.div>
            )}
          </motion.div>
        </ScrollReveal>
      </div>

      {/* 波型の区切り - 下部 */}
      <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none">
        <WaveDivider />
      </div>
    </section>
  );
}