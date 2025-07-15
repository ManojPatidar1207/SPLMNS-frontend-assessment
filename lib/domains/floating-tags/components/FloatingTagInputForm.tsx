"use client";
import React, { useCallback, useState } from "react";

type FloatingTagInputFormProps = {
  onSubmit: (value: string) => void;
};

const FloatingTagInputForm: React.FC<FloatingTagInputFormProps> = ({
  onSubmit,
}) => {
  const [input, setInput] = useState("");

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();

      if (input.trim().length) {
        onSubmit(input);
        setInput("");
      }
    },
    [input, onSubmit]
  );

  return (
    <form onSubmit={handleSubmit} className="flex gap-3">
      <input
        required
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="px-4 py-2 rounded border border-gray-300"
        placeholder="Enter text here"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default FloatingTagInputForm;
