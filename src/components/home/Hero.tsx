'use client';

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useRef, useEffect } from "react";
import { useNavigation } from "../../contexts/NavigationContext";
import { RippleButton } from "../ui/RippleButton";
import { WaveDivider } from "../ui/WaveDivider";

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { navigateTo } = useNavigation();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let particles: Particle[] = [];
    let animationFrameId: number;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
        this.color = Math.random() > 0.5 ? '#10b981' : '#facc15';
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < 60; i++) {
      particles.push(new Particle());
    }

    // Mouse interaction
    let mouse = { x: 0, y: 0 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, index) => {
        p.update();
        p.draw();

        // Connect particles
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 150) {
            if (!ctx) return;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(16, 185, 129, ${0.5 - dist / 300})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Connect to mouse
        if (mouse.x) {
          const distMouse = Math.hypot(p.x - mouse.x, p.y - mouse.y);
          if (distMouse < 250) {
            if (!ctx) return;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(250, 204, 21, ${0.8 - distMouse / 250})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 opacity-60"
      />

      {/* Background Image Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center mix-blend-overlay opacity-20"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80)'
        }}
      />

      <div className="container mx-auto px-4 md:px-12 relative z-10 text-center md:text-left pt-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 bg-[#0f172a]/50 backdrop-blur-sm border border-[#facc15] text-[#facc15] font-black px-4 py-1.5 mb-6 rounded-full shadow-[0_0_15px_rgba(250,204,21,0.3)]"
        >
          <motion.span 
            className="w-2 h-2 rounded-full bg-[#facc15]"
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-xs md:text-sm tracking-[0.15em]">次世代の建設現場へ</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-7xl font-black text-white leading-tight mb-8 tracking-tight drop-shadow-2xl"
        >
          未来と現場を<br />
          <motion.span 
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] via-[#facc15] to-yellow-200 glow-text"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
            }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            style={{ backgroundSize: '200% 200%' }}
          >
            つなぐ力
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-slate-200 text-lg md:text-xl font-medium mb-12 max-w-2xl leading-relaxed"
        >
          確かな技術と、未来を拓く若き力。<br />
          AI時代の建設業をリードする、<span className="text-[#facc15] font-black border-b-2 border-[#facc15]">株式会社現場ジン</span>。
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col md:flex-row gap-5"
        >
          <RippleButton
            onClick={() => navigateTo('contact' as any)}
            variant="primary"
          >
            プロジェクトを相談する →
          </RippleButton>
          <RippleButton
            onClick={() => navigateTo('home' as any, 'about')}
            variant="outline"
          >
            もっと詳しく知る
          </RippleButton>
        </motion.div>

        {/* 実績統計 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 grid grid-cols-3 gap-6 md:gap-8 max-w-2xl"
        >
          {[
            { number: "500+", label: "施工実績" },
            { number: "15年", label: "業界経験" },
            { number: "95%", label: "満足度" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className="text-2xl md:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#facc15] mb-2"
                whileHover={{ scale: 1.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-xs md:text-sm text-white/60 tracking-wider group-hover:text-white/90 transition-colors">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* 波型の区切り - 下部 */}
      <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none">
        <WaveDivider />
      </div>
    </section>
  );
}