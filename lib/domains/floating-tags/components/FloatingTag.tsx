"use client";
import React, { useRef } from "react";

import { useFloatingTagAnimation } from "@/lib/domains/floating-tags/hooks";

import type { FloatingTagItemWithPosition } from "@/lib/domains/floating-tags/typedefs";

type FloatingTagProps = FloatingTagItemWithPosition;

const FloatingTag: React.FC<FloatingTagProps> = ({ id, text, top, left }) => {
  const tagRef = useRef<HTMLDivElement>(null);

  useFloatingTagAnimation(tagRef, left, top);

  return (
    <div
      key={id}
      ref={tagRef}
      className="absolute left-0 top-0 px-3 py-1.5 rounded bg-white text-sm font-normal text-black tracking-wide break-words max-w-[200px]"
      style={{
        willChange: "transform",
      }}
    >
      {text}
    </div>
  );
};

export default FloatingTag;
