import { motion } from "motion/react";
import { useEffect, useState } from "react";
import logo from "figma:asset/0e41ff1ef46b722b7d7ddd43e3c37d2e5cde9d91.png";

export function LoadingScreen({ onComplete }: { onComplete?: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          if (onComplete) setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0b1c3e] text-white"
    >
      <div className="relative z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 text-center flex flex-col items-center"
        >
          <img 
            src={logo} 
            alt="株式会社現場ジン Logo" 
            className="w-24 md:w-32 mb-6 object-contain drop-shadow-lg"
          />
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-widest mb-4">
            株式会社現場ジン
          </h1>
          <p className="text-sm md:text-base tracking-[0.2em] opacity-80 text-blue-200">
            GENBA GIN CONSTRUCTION
          </p>
        </motion.div>

        {/* Progress Bar Container */}
        <div className="w-64 h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ ease: "linear", duration: 0.03 }} // Smooth update matching interval
          />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-xs font-mono opacity-50"
        >
          {progress}%
        </motion.div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
         <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 4, repeat: Infinity }}
         />
      </div>
    </motion.div>
  );
}
