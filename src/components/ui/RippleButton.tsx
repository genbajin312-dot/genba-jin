'use client';

import { motion } from "motion/react";
import { useState, MouseEvent } from "react";

interface RippleButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
}

export function RippleButton({ 
  children, 
  onClick, 
  variant = 'primary',
  className = '' 
}: RippleButtonProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples([...ripples, { x, y, id }]);

    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== id));
    }, 600);

    onClick?.();
  };

  const baseStyles = "relative px-8 py-4 font-black text-lg rounded overflow-hidden transition-all";
  
  const variantStyles = {
    primary: "bg-[#facc15] text-[#022c22] shadow-[0_0_30px_rgba(250,204,21,0.4)] hover:scale-105 hover:bg-white hover:shadow-[0_0_40px_rgba(250,204,21,0.6)]",
    secondary: "bg-gradient-to-br from-[#10b981] to-[#059669] text-white shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:scale-105 hover:shadow-[0_0_40px_rgba(16,185,129,0.6)]",
    outline: "border-2 border-[#facc15]/50 bg-[#0f172a]/30 backdrop-blur text-white hover:bg-[#facc15]/10 hover:border-[#facc15]"
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* シャイニングエフェクト */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000"></span>
      
      {/* リップルエフェクト */}
      {ripples.map((ripple) => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/50"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0,
          }}
          initial={{ width: 0, height: 0, opacity: 1 }}
          animate={{ 
            width: 400, 
            height: 400, 
            opacity: 0,
            x: -200,
            y: -200
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
      
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
}
