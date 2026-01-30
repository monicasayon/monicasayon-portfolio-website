"use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export const CursorSpotlight = () => {
  const [mounted, setMounted] = useState(false);
  
  // These hooks MUST run every single time the component renders
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const background = useMotionTemplate`
    radial-gradient(
      650px circle at ${smoothX}px ${smoothY}px,
      rgba(153, 41, 234, 0.12), 
      transparent 80%
    )
  `;

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // FIX: Always call hooks above, but only return the DIV when mounted
  if (!mounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-30"
      style={{ background }}
    />
  );
};