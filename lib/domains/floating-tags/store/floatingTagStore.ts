import { create } from "zustand";

import type { FloatingTagsStore } from "@/lib/domains/floating-tags/typedefs";

export const useFloatingTagsStore = create<FloatingTagsStore>()((set, get) => ({
  tags: [],
  addTag: (tagText: string) => {
    const newTag = { id: Date.now(), text: tagText };
    const newTags = [...get().tags, newTag];
    set({ tags: newTags });
  },
  reset: () => set({ tags: [] }),
}));
