import { motion } from "motion/react";
import { MessageCircle, ArrowRight } from "lucide-react";
import heroImage from "figma:asset/3f0b9a30d519063ca7fb6e09ca096358e004b189.png";

export function Hero() {
  return (
    <section id="hero" className="relative w-full overflow-hidden bg-white md:h-screen md:min-h-[700px] flex flex-col md:block">
      
      {/* --- Image Section --- */}
      {/* Mobile: Relative top block, Height 45vh. Desktop: Absolute full background */}
      <div className="relative w-full h-[45vh] md:absolute md:inset-0 md:h-full z-0 overflow-hidden bg-slate-50">
        
        {/* Desktop Overlay Gradient */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent z-10 w-2/3" />
        
        {/* Mobile Overlay Gradient (Bottom fade for smooth transition) */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white via-white/60 to-transparent md:hidden z-10" />

        <motion.img
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          src={heroImage}
          alt="現場作業の様子 - 株式会社現場ジン"
          // scale-x-[-1] removed to revert flip on mobile
          className="h-full w-full object-cover object-center md:object-center grayscale-[10%]"
        />
        
        {/* Decorative elements */}
        <motion.div 
            animate={{ y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 md:top-20 md:right-20 w-32 h-32 md:w-64 md:h-64 bg-yellow-200/20 rounded-full blur-3xl z-0"
        />
      </div>

      {/* --- Content Section --- */}
      {/* Mobile: Relative block below image. Desktop: Absolute overlay */}
      <div className="relative z-20 w-full px-6 py-8 md:py-0 md:px-12 lg:px-24 container mx-auto flex-1 flex flex-col justify-center md:h-full md:justify-center md:absolute md:inset-0 md:pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          className="text-left max-w-2xl md:pointer-events-auto"
        >
          {/* Tagline */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex items-center gap-3 md:gap-4 mb-3 md:mb-6"
          >
            <span className="h-[2px] md:h-[3px] w-8 md:w-12 bg-[#F2A900] rounded-full"></span>
            <span className="text-[10px] md:text-sm font-bold tracking-[0.2em] text-gray-500 uppercase">
              GENBA JIN
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-[60px] font-black leading-tight md:leading-[1.1] tracking-tight mb-4 md:mb-8 text-slate-900">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="block mb-1 md:mb-0"
            >
              建設現場の監督様へ
            </motion.span>
            <span className="inline-block mt-1 md:mt-2 relative">
              <motion.span 
                className="absolute -inset-1 md:-inset-2 bg-yellow-100/50 -skew-x-6 rounded-lg -z-10"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
              />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F2A900] to-yellow-500 pr-1">
                お困り事
              </span>
              <span className="text-slate-900">
                サポートします
              </span>
            </span>
          </h1>
          
          {/* Description */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-sm md:text-base lg:text-lg text-gray-700 font-medium leading-relaxed max-w-lg mb-6 md:mb-10 tracking-wide"
          >
            名古屋市の土木・建築・外構工事なら<br className="md:hidden" />株式会社現場ジン。<br className="hidden md:inline" />
            「明日までにこれやっておきたい」という<br className="md:hidden" />
            現場の声に即座に応えます。
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
             <motion.a 
                href="https://lin.ee/G0HzvGh" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, rotate: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-6 md:px-8 py-3 md:py-4 bg-[#06C755] text-white text-xs md:text-sm font-bold tracking-widest rounded-full overflow-hidden shadow-lg shadow-green-200/50 flex items-center justify-center gap-2"
             >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 animate-bounce" />
                <span className="relative z-10">LINE相談</span>
             </motion.a>
             <motion.a 
                href="#business" 
                whileHover={{ scale: 1.05, rotate: 2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-6 md:px-8 py-3 md:py-4 bg-white/80 backdrop-blur-sm border-2 border-slate-100 text-slate-900 text-xs md:text-sm font-bold tracking-widest rounded-full hover:border-[#F2A900] transition-colors shadow-sm flex items-center justify-center gap-2"
             >
                <span>VIEW SERVICES</span>
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
             </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Hidden on mobile to save vertical space, visible on desktop */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="hidden md:flex absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 md:left-24 md:translate-x-0 z-20 flex-col items-center gap-2 md:gap-4 text-gray-400"
      >
        <span className="text-[10px] font-bold tracking-widest uppercase">Scroll</span>
        <div className="h-12 md:h-16 w-[2px] bg-gray-200 relative overflow-hidden rounded-full">
            <motion.div 
                className="absolute top-0 left-0 w-full h-1/2 bg-[#F2A900] rounded-full"
                animate={{ y: ["-100%", "250%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            />
        </div>
      </motion.div>
    </section>
  );
}