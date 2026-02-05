'use client';

import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Building2, MapPin, Phone, Mail, Calendar } from "lucide-react";

const companyData = [
  { icon: Building2, label: "会社名", value: "株式会社現場JIN" },
  { icon: Calendar, label: "設立", value: "2015年4月" },
  { icon: MapPin, label: "所在地", value: "愛知県名古屋市瑞穂区" },
  { icon: Phone, label: "電話", value: "052-XXX-XXXX" },
  { icon: Mail, label: "メール", value: "info@genba-jin.co.jp" },
];

function Card3D({ item, index, isInView }: { item: typeof companyData[0]; index: number; isInView: boolean }) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -10;
    const rotateYValue = ((x - centerX) / centerX) * 10;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const Icon = item.icon;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="relative group cursor-pointer"
    >
      <motion.div
        animate={{
          rotateX: rotateX,
          rotateY: rotateY,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{
          transformStyle: "preserve-3d",
        }}
        className="relative bg-gradient-to-br from-white/90 to-white/70 backdrop-blur-xl p-8 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_60px_rgba(16,185,129,0.3)] transition-all duration-500 border border-white/20 overflow-hidden"
      >
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#10b981]/5 to-[#facc15]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        </div>

        {/* Border glow */}
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-[#10b981]/30"></div>

        <div 
          className="relative flex items-start gap-6"
          style={{ transform: "translateZ(20px)" }}
        >
          <motion.div 
            className="w-16 h-16 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-shadow duration-500"
            whileHover={{ scale: 1.1, rotate: 5 }}
            style={{ transform: "translateZ(40px)" }}
          >
            <Icon className="w-8 h-8 text-white" />
          </motion.div>
          <div className="flex-1">
            <div className="text-sm font-black text-gray-500 mb-2 uppercase tracking-wider">{item.label}</div>
            <div className="font-black text-xl text-[#0f172a] group-hover:text-[#10b981] transition-colors duration-300">{item.value}</div>
          </div>
        </div>

        {/* Corner decoration */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#facc15]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </motion.div>

      {/* Shadow layer for depth */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#10b981]/10 to-[#facc15]/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    </motion.div>
  );
}

export function CompanyInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 bg-gradient-to-b from-gray-100 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#10b981]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#facc15]/5 rounded-full blur-3xl"></div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#10b981]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="text-[#10b981] font-black tracking-[0.3em] text-sm uppercase inline-block"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              background: "linear-gradient(90deg, #10b981, #facc15, #10b981)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Company Profile
          </motion.span>
          <h3 className="text-3xl md:text-5xl font-black mt-2 text-[#0f172a]">会社概要</h3>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#10b981] to-[#facc15] mx-auto mt-4 rounded-full"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
          {companyData.map((item, index) => (
            <Card3D key={index} item={item} index={index} isInView={isInView} />
          ))}
        </div>

        {/* Representative Message with enhanced glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-6xl mx-auto group"
          style={{
            transformStyle: "preserve-3d",
            perspective: "1000px",
          }}
        >
          <div className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-10 md:p-14 rounded-3xl shadow-[0_20px_80px_rgba(0,0,0,0.3)] border border-[#facc15]/20 overflow-hidden backdrop-blur-xl">
            {/* Animated gradient background */}
            <motion.div
              className="absolute inset-0 opacity-30"
              style={{
                background: "radial-gradient(circle at 50% 50%, #10b981 0%, transparent 50%)",
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Top corner decoration */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#10b981]/20 to-transparent rounded-br-full"></div>
            
            <div className="relative z-10">
              <motion.h4 
                className="text-2xl md:text-3xl font-black mb-8 bg-gradient-to-r from-[#facc15] to-[#fbbf24] bg-clip-text text-transparent"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                代表メッセージ
              </motion.h4>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* Video/Image Section */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="relative"
                >
                  {/* Video Placeholder - Replace with actual YouTube/Vimeo URL */}
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-800/50 border-2 border-[#10b981]/30 group/video">
                    {/* If you have a video, use this format:
                    <iframe
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                      title="代表メッセージ動画"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                    */}
                    
                    {/* Fallback: Representative Photo */}
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2NTA3MTc2NHww&ixlib=rb-4.1.0&q=80&w=1080"
                      alt="代表取締役"
                      className="w-full h-full object-cover group-hover/video:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent"></div>
                    
                    {/* Play button overlay for video placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/video:opacity-100 transition-opacity">
                      <div className="w-16 h-16 bg-[#facc15]/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                        <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-[#0f172a] border-b-8 border-b-transparent ml-1"></div>
                      </div>
                    </div>

                    {/* Badge */}
                    <div className="absolute top-4 left-4 bg-[#10b981]/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                      <span className="text-xs font-black text-white uppercase tracking-wider">CEO Message</span>
                    </div>
                  </div>

                  {/* Signature */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    className="mt-6 text-center"
                  >
                    <div className="text-4xl font-[cursive] text-[#facc15] mb-2">
                      現場 太郎
                    </div>
                    <div className="text-sm text-slate-400">
                      ※動画を設定する場合は、YouTubeまたはVimeoのURLに差し替えてください
                    </div>
                  </motion.div>
                </motion.div>

                {/* Message Text */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="flex flex-col justify-center"
                >
                  <p className="text-slate-300 leading-relaxed mb-4 text-base md:text-lg">
                    現場JINは、「安全第一、現場から未来へ」という理念のもと、建設業界に新しい価値を提供し続けています。
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-4 text-base md:text-lg">
                    伝統的な建設技術と最新のテクノロジーを融合させ、お客様の期待を超える品質を実現することが私たちの使命です。
                    現場で働く全てのスタッフが安全に、そして誇りを持って仕事ができる環境づくりに力を入れています。
                  </p>
                  <p className="text-slate-300 leading-relaxed text-base md:text-lg">
                    地域社会の発展に貢献し、次世代に誇れる街づくりを実現するため、私たちは日々挑戦を続けています。
                  </p>
                </motion.div>
              </div>
              
              <motion.div 
                className="flex items-center gap-4 pt-6 border-t border-slate-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.9 }}
              >
                <motion.div 
                  className="w-16 h-1 bg-gradient-to-r from-[#facc15] to-[#10b981] rounded-full"
                  animate={{ width: [64, 80, 64] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div>
                  <div className="font-black text-[#facc15] text-lg">代表取締役</div>
                  <div className="text-sm text-slate-400">株式会社現場JIN</div>
                </div>
              </motion.div>
            </div>

            {/* Bottom corner decoration */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-[#facc15]/20 to-transparent rounded-tl-full"></div>
          </div>

          {/* Glow effect */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#10b981]/20 via-[#facc15]/20 to-[#10b981]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>
      </div>
    </section>
  );
}