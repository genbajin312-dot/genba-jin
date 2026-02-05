'use client';

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export function Policy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="relative w-full">
      {/* Top Image Section */}
      <div className="relative h-[800px] w-full">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1714383524999-fa60ce69fd65?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxOYWdveWElMjBjaXR5JTIwc3Vuc2V0JTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NjUwNzIyODV8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Cityscape at sunset"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Text Overlay */}
        <div className="absolute top-[35%] left-0 right-0 flex flex-col items-center text-center px-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[#facc15] text-xl md:text-2xl font-black tracking-[0.2em] mb-6 drop-shadow-md"
          >
            私たちの方針
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-white tracking-wider drop-shadow-lg"
          >
            安全最優先主義
          </motion.h2>
        </div>
      </div>

      {/* Overlapping Center Box */}
      <div className="relative z-10 -mt-64 pb-32 px-4 container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto max-w-4xl bg-[#10b981]/95 shadow-2xl p-12 md:p-20 text-center backdrop-blur-sm border-t-4 border-[#facc15]"
        >
          <h3 className="text-3xl md:text-4xl font-black text-[#facc15] tracking-[0.1em] mb-8 drop-shadow-sm">
            Safety Wasn't Built In A Day.
          </h3>

          <p className="leading-loose text-white text-base md:text-lg font-medium">
            安全は一日にしてならず。
            <br />
            安全とは日々、安全意識を持ち続けることでのみ達成できるもの。
            <br />
            そして積み重ねるのは難しく失うのは簡単なものです。
          </p>
        </motion.div>
      </div>
    </section>
  );
}