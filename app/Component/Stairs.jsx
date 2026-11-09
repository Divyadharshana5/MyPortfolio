"use client";

import { motion } from "framer-motion";

const StairTransitionEffect = () => {
  return (
    <>
      {/* Primary Cyber Shutter Panel */}
      <motion.div
        initial={{ scaleY: 1, originY: 0 }}
        animate={{ scaleY: 0, originY: 0 }}
        exit={{ scaleY: 1, originY: 1 }}
        transition={{
          duration: 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-0 bg-[#16161b] z-50 pointer-events-none"
      />

      {/* Glowing Neon Emerald Trail Bar */}
      <motion.div
        initial={{ scaleY: 1, originY: 0 }}
        animate={{ scaleY: 0, originY: 0 }}
        exit={{ scaleY: 1, originY: 1 }}
        transition={{
          duration: 0.48,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.03,
        }}
        className="fixed inset-0 bg-accent/20 backdrop-blur-sm z-40 pointer-events-none shadow-[0_0_40px_#00ff99]"
      />

      {/* Futuristic Center Status Pill */}
      <motion.div
        initial={{ opacity: 1, y: 0, scale: 1 }}
        animate={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{
          duration: 0.35,
          ease: "easeOut",
          delay: 0.1,
        }}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1c1c22]/90 border border-accent/40 shadow-[0_0_25px_rgba(0,255,153,0.3)] text-accent font-mono text-xs tracking-wider"
      >
        <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
        <span>NAVIGATING...</span>
      </motion.div>
    </>
  );
};

export default StairTransitionEffect;