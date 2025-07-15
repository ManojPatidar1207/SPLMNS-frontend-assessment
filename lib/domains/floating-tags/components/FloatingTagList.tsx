import React from "react";

import type { FloatingTag } from "@/lib/domains/floating-tags/typedefs";

type FloatingTagListProps = {
  items: FloatingTag[];
};

const FloatingTagsList: React.FC<FloatingTagListProps> = ({ items }) => (
  <div className="flex flex-col mt-5 text-sm w-full max-w-md">
    <p className="font-semibold">Previouslly submitted tags:</p>
    <ul className="list-decimal ml-4">
      {items.map((tagItem) => (
        <li key={tagItem.id}>{tagItem.text}</li>
      ))}
    </ul>
  </div>
);

export default FloatingTagsList;
