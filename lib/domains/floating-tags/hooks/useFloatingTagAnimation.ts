"use client";
import { useCallback, useEffect, useRef, type RefObject } from "react";

export const useFloatingTagAnimation = (
  tagRef: RefObject<HTMLDivElement | null>,
  left: string,
  top: string
) => {
  const frameId = useRef<number | null>(null);

  const animateTag = useCallback(() => {
    const el = tagRef.current;
    if (!el) return;
    const container = el.parentElement;
    if (!container) return;

    const bounds = container.getBoundingClientRect();
    const parentWidth = bounds.width;
    const parentHeight = bounds.height;

    const rect = el.getBoundingClientRect();
    const tagWidth = rect.width;
    const tagHeight = rect.height;

    let x = parseFloat(left);
    let y = parseFloat(top);

    let vy = (Math.random() - 0.5) * 4;
    let vx = (Math.random() - 0.5) * 4;

    const moveTag = () => {
      if (y + tagHeight >= parentHeight || y <= 0) vy *= -1;
      if (x + tagWidth >= parentWidth || x <= 0) vx *= -1;

      x += vx;
      y += vy;

      el.style.transform = `translate(${x}px, ${y}px)`;

      frameId.current = requestAnimationFrame(moveTag);
    };

    frameId.current = requestAnimationFrame(moveTag);
  }, [left, tagRef, top]);

  useEffect(() => {
    animateTag();
    window.addEventListener("resize", animateTag);

    return () => {
      window.removeEventListener("resize", animateTag);
      if (frameId.current) {
        cancelAnimationFrame(frameId.current);
      }
    };
  }, [animateTag, left, top]);
};
