"use client";
import React, { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
    <form onSubmit={handleSubmit} className="flex max-md:flex-col gap-3">
      <Input
        required
        autoFocus
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter text here"
      />
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default FloatingTagInputForm;
