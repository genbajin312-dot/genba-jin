'use client';

import { motion } from "motion/react";

interface WaveDividerProps {
  variant?: 'top' | 'bottom' | 'both';
  colorFrom?: string;
  colorTo?: string;
  flip?: boolean;
}

export function WaveDivider({ 
  variant = 'bottom', 
  colorFrom = '#0f172a',
  colorTo = '#1e293b',
  flip = false 
}: WaveDividerProps) {
  return (
    <div className={`relative w-full ${flip ? 'rotate-180' : ''}`}>
      {(variant === 'top' || variant === 'both') && (
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-12 md:h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradientTop" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: colorFrom, stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: colorTo, stopOpacity: 1 }} />
              </linearGradient>
            </defs>
            <motion.path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="url(#waveGradientTop)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </svg>
        </div>
      )}

      {(variant === 'bottom' || variant === 'both') && (
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-12 md:h-20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="waveGradientBottom" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: '#10b981', stopOpacity: 0.3 }} />
                <stop offset="50%" style={{ stopColor: '#facc15', stopOpacity: 0.3 }} />
                <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 0.3 }} />
              </linearGradient>
            </defs>
            <motion.path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              fill="url(#waveGradientBottom)"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
            />
          </svg>
        </div>
      )}
    </div>
  );
}
