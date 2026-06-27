"use client";

import { useEffect, useState, useRef } from "react";
import { motion, motionValue } from "framer-motion";

const NUM_DOTS = 15;

function SnakeDot({ index, cursorX, cursorY, isHovering }) {
  const size = Math.max(4, 24 - index * 1.2); 
  const offset = size / 2;
  
  // Calculate a vibrant color based on the dot's index
  const hue = (index * 25) % 360; // Spread colors across the spectrum
  const color = `hsl(${hue}, 100%, 50%)`;
  
  return (
    <motion.div
      className="hidden md:block pointer-events-none z-[10000] fixed top-0 left-0 rounded-full mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        width: size,
        height: size,
        marginLeft: -offset,
        marginTop: -offset,
        backgroundColor: index === 0 ? "#00ff99" : color,
        opacity: 1 - (index * 0.05),
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
  
  const xs = useRef(Array.from({ length: NUM_DOTS }, () => motionValue(-100))).current;
  const ys = useRef(Array.from({ length: NUM_DOTS }, () => motionValue(-100))).current;
  
  const history = useRef([]);

  useEffect(() => {
    let rafId;
    let mouse = { x: -100, y: -100 };

    const moveCursor = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    
    const update = () => {
      // Always push the current mouse position to history to create the trail
      history.current.unshift({ x: mouse.x, y: mouse.y });

      const spacing = 3; // frames between each dot
      
      // Limit history array length
      if (history.current.length > NUM_DOTS * spacing) {
        history.current.length = NUM_DOTS * spacing;
      }

      // Update dots to follow historical positions
      for (let i = 0; i < NUM_DOTS; i++) {
        const histIndex = Math.min(i * spacing, Math.max(0, history.current.length - 1));
        if (history.current[histIndex]) {
           xs[i].set(history.current[histIndex].x);
           ys[i].set(history.current[histIndex].y);
        }
      }

      rafId = requestAnimationFrame(update);
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
    rafId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(rafId);
    };
  }, [xs, ys]);

  return (
    <>
      {Array.from({ length: NUM_DOTS }).map((_, i) => (
        <SnakeDot 
          key={i} 
          index={i} 
          cursorX={xs[i]} 
          cursorY={ys[i]} 
          isHovering={isHovering} 
        />
      ))}
    </>
  );
}
