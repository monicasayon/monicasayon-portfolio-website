"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface EncryptedTextProps {
  text: string;
  className?: string;
  revealDelayMs?: number;
  scrambleSpeedMs?: number;
}

export const EncryptedText = ({
  text,
  className,
  revealDelayMs = 50,
  scrambleSpeedMs = 50,
}: EncryptedTextProps) => {
  const [isMounted, setIsMounted] = useState(false);
  const [displayText, setDisplayText] = useState(text);
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

  // 1. Hydration Fix: Only start logic after mount
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const scramble = useCallback(() => {
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, scrambleSpeedMs);

    return () => clearInterval(interval);
  }, [text, scrambleSpeedMs]);

  useEffect(() => {
    if (!isMounted) return;
    
    const timeout = setTimeout(() => {
      scramble();
    }, revealDelayMs);

    return () => clearTimeout(timeout);
  }, [isMounted, scramble, revealDelayMs]);

  // 2. Server-side Render: Return plain text first to match the server
  if (!isMounted) {
    return (
      <span className={cn("inline-block", className)} suppressHydrationWarning>
        {text}
      </span>
    );
  }

  // 3. Client-side Render: Return the animated version
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={cn("inline-block font-mono", className)}
      suppressHydrationWarning
    >
      {displayText}
    </motion.span>
  );
};