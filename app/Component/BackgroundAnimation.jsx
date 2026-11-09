"use client";

import { motion } from "framer-motion";

const BackgroundAnimation = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#16161b]"
    >
      {/* 1. Futuristic Tech Grid with subtle Emerald / Cyan tint */}
      <div
        className="absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_35%,#000_60%,transparent_100%)]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 255, 153, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 255, 153, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* 2. Floating Ambient Glowing Orb 1 - Top-Left Emerald (#00ff99) */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -50, 60, 0],
          scale: [1, 1.25, 0.9, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full bg-[#00ff99]/25 blur-[100px]"
      />

      {/* 3. Floating Ambient Glowing Orb 2 - Right-Side Cyan Glow Behind Profile */}
      <motion.div
        animate={{
          x: [0, -70, 50, 0],
          y: [0, 70, -40, 0],
          scale: [0.9, 1.2, 1, 0.9],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 -right-20 w-[520px] h-[520px] rounded-full bg-[#00e5ff]/20 blur-[110px]"
      />

      {/* 4. Floating Ambient Glowing Orb 3 - Bottom-Center Deep Indigo Glow */}
      <motion.div
        animate={{
          x: [0, 50, -60, 0],
          y: [0, -40, 50, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-32 left-1/3 w-[560px] h-[560px] rounded-full bg-[#6366f1]/20 blur-[120px]"
      />

      {/* 5. Glowing Floating Particle Dots with Staggered Motion */}
      <div className="absolute inset-0">
        {[
          { top: "12%", left: "15%", size: 4, duration: 5, delay: 0 },
          { top: "22%", left: "78%", size: 5, duration: 7, delay: 1 },
          { top: "38%", left: "30%", size: 3, duration: 6, delay: 2 },
          { top: "52%", left: "88%", size: 4, duration: 8, delay: 0.5 },
          { top: "68%", left: "12%", size: 5, duration: 6.5, delay: 1.5 },
          { top: "75%", left: "65%", size: 4, duration: 7.5, delay: 2.5 },
          { top: "88%", left: "25%", size: 3, duration: 9, delay: 3 },
          { top: "45%", left: "55%", size: 4, duration: 8.5, delay: 1.8 },
        ].map((particle, index) => (
          <motion.div
            key={index}
            className="absolute rounded-full bg-[#00ff99] shadow-[0_0_12px_#00ff99]"
            style={{
              top: particle.top,
              left: particle.left,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }}
            animate={{
              y: [0, -35, 0],
              opacity: [0.3, 0.9, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BackgroundAnimation;