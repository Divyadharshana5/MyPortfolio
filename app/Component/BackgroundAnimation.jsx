"use client";

import { motion } from "framer-motion";

export default function BackgroundAnimation() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-primary">
      {/* Orb 1 - Neon Green */}
      <motion.div
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full mix-blend-screen filter blur-[100px] opacity-30 bg-[#00ff99]"
        animate={{
          x: ["0%", "20%", "0%"],
          y: ["0%", "30%", "0%"],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Orb 2 - Electric Blue */}
      <motion.div
        className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full mix-blend-screen filter blur-[120px] opacity-20 bg-[#2979ff]"
        animate={{
          x: ["0%", "-30%", "0%"],
          y: ["0%", "-20%", "0%"],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Orb 3 - Deep Violet */}
      <motion.div
        className="absolute top-[30%] left-[20%] w-[40vw] h-[40vw] rounded-full mix-blend-screen filter blur-[90px] opacity-20 bg-[#8a2be2]"
        animate={{
          x: ["0%", "40%", "-20%", "0%"],
          y: ["0%", "-30%", "20%", "0%"],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Grid overlay for texture */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
    </div>
  );
}
