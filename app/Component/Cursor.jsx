"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 20, stiffness: 400, mass: 0.2 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    
    const handleMouseOver = (e) => {
      if (
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.closest('button') ||
        e.target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div
        className="cursor-ring hidden md:flex pointer-events-none z-[9999] fixed top-0 left-0 mix-blend-difference"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ? "rgba(0,255,153,0.1)" : "transparent",
          borderColor: isHovering ? "rgba(0,255,153,0)" : "#00ff99",
        }}
        transition={{ duration: 0.2 }}
      />
      <motion.div
        className="cursor-dot hidden md:block pointer-events-none z-[10000] fixed top-0 left-0 mix-blend-difference"
        style={{
          x: useSpring(cursorX, { ...springConfig, stiffness: 800, mass: 0.1 }),
          y: useSpring(cursorY, { ...springConfig, stiffness: 800, mass: 0.1 }),
        }}
      />
    </>
  );
}
