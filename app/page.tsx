"use client";
import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";

import {
  FloatingTagInputForm,
  FloatingTagsList,
} from "@/lib/domains/floating-tags/components";

import { useFloatingTagsStore } from "@/lib/domains/floating-tags/store";

const HomePage = () => {
  const router = useRouter();
  const { tags, addTag, reset } = useFloatingTagsStore();

  const haveTags = useMemo(() => Boolean(tags.length), [tags]);

  const handleTagSubmit = useCallback(
    (input: string) => {
      if (tags.length >= 5) {
        const removeExistingTags = window.confirm(
          "You can only add 5 tags, do you want to remove existing tags?\n\nAre you sure?"
        );

        if (!removeExistingTags) return;

        reset();
      }

      addTag(input);
      router.push("/floating-tags");
    },
    [addTag, reset, router, tags.length]
  );

  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="mb-3 text-2xl font-semibold">Enter a Phrase</h1>
      <FloatingTagInputForm onSubmit={handleTagSubmit} />
      {haveTags && <FloatingTagsList items={tags} />}
    </div>
  );
};

export default HomePage;
