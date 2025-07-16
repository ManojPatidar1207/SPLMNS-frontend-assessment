import type { FloatingTag } from "@/lib/domains/floating-tags/typedefs";

export type FloatingTagsStore = {
  tags: FloatingTag[];
  addTag: (tagText: string) => void;
  reset: () => void;
};
