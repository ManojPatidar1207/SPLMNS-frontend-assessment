"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import {
  FloatingTagBackground,
  FloatingTag,
} from "@/lib/domains/floating-tags/components";

import { useFloatingTagsStore } from "@/lib/domains/floating-tags/store";

import type { FloatingTagItemWithPosition } from "@/lib/domains/floating-tags/typedefs";

const FloatingTagsPage: React.FC = () => {
  const [positionedTags, setPositionedTags] = useState<
    FloatingTagItemWithPosition[]
  >([]);

  const router = useRouter();
  const tags = useFloatingTagsStore((state) => state.tags);

  useEffect(() => {
    if (tags.length === 0) {
      router.replace("/");
      return;
    }

    const tagsWithPosition = tags.map((tag) => ({
      ...tag,
      top: `${Math.random() * 150}%`,
      left: `${Math.random() * 150}%`,
    }));

    setPositionedTags(tagsWithPosition);
  }, [tags]);

  return (
    <div className="flex items-center justify-center">
      <div className="relative aspect-[16/9] w-full max-w-5xl border border-gray-500 bg-gray-900 overflow-hidden">
        <FloatingTagBackground />
        {positionedTags.map((tag) => (
          <FloatingTag key={tag.id} {...tag} />
        ))}
      </div>
    </div>
  );
};

export default FloatingTagsPage;
