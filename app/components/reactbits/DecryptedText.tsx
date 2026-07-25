"use client";

import { useEffect, useState } from "react";

interface DecryptedTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
}

export default function DecryptedText({
  text,
  speed = 55,
  delay = 50,
  className = "",
}: DecryptedTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [isReduced, setIsReduced] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setIsReduced(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setIsReduced(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  useEffect(() => {
    if (isReduced) {
      setDisplayText(text);
      return;
    }

    let isMounted = true;
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#@$&*";
    const textLen = text.length;
    let iteration = 0;

    const startTimeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (!isMounted) return;

        setDisplayText(() =>
          text
            .split("")
            .map((char, index) => {
              if (char === " ") return " ";
              if (index < iteration) {
                return text[index];
              }
              return chars[Math.floor(Math.random() * chars.length)];
            })
            .join("")
        );

        if (iteration >= textLen) {
          clearInterval(interval);
        }
        iteration += 1 / 5;
      }, speed);

      return () => clearInterval(interval);
    }, delay);

    return () => {
      isMounted = false;
      clearTimeout(startTimeout);
    };
  }, [text, speed, delay, isReduced]);

  return <span className={className}>{displayText}</span>;
}
