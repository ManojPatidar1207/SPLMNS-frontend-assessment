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
  const { tags, addTag } = useFloatingTagsStore();

  const haveTags = useMemo(() => Boolean(tags.length), [tags]);

  const handleTagSubmit = useCallback(
    (input: string) => {
      addTag(input);
      router.push("/floating-tags");
    },
    [addTag, router]
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
