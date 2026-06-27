"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const NUM_DOTS = 10;

function SnakeDot({ index, cursorX, cursorY, isHovering }) {
  const stiffness = Math.max(100, 600 - index * 50); 
  const mass = 0.1 + index * 0.05;
  const damping = 15 + index * 2;
  
  const springX = useSpring(cursorX, { stiffness, mass, damping });
  const springY = useSpring(cursorY, { stiffness, mass, damping });
  
  const size = Math.max(4, 24 - index * 2); 
  const offset = size / 2;
  
  return (
    <motion.div
      className="hidden md:block pointer-events-none z-[10000] fixed top-0 left-0 rounded-full mix-blend-difference"
      style={{
        x: springX,
        y: springY,
        width: size,
        height: size,
        marginLeft: -offset,
        marginTop: -offset,
        backgroundColor: "#00ff99",
        opacity: 1 - (index * 0.08),
      }}
      animate={{
        scale: isHovering && index === 0 ? 1.8 : isHovering ? 1.2 : 1,
      }}
      transition={{ duration: 0.2 }}
    />
  );
}

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
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
      {Array.from({ length: NUM_DOTS }).map((_, i) => (
        <SnakeDot 
          key={i} 
          index={i} 
          cursorX={cursorX} 
          cursorY={cursorY} 
          isHovering={isHovering} 
        />
      ))}
    </>
  );
}
