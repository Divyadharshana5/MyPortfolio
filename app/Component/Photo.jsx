"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import MyImg from "../assets/pic.png";

const Photo = () => {
  return (
    <div className="relative mx-auto aspect-square w-[min(80vw,360px)] select-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: {
            delay: 0.2,
            duration: 0.5,
            ease: "easeOut",
          },
        }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 overflow-hidden rounded-full border-2 border-accent/30 shadow-[0_0_35px_rgba(0,255,153,0.18)]">
          <Image
            src={MyImg}
            priority
            quality={100}
            fill
            alt="Divyadharshana"
            className="rounded-full object-cover object-center"
          />
        </div>

        <motion.svg
          className="pointer-events-none absolute -inset-2 h-[calc(100%+16px)] w-[calc(100%+16px)]"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="https://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [0, 360],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default Photo;
