import React, { useState } from "react";
import CopyIcon from "./icons/CopyIcon";
import toast from "react-hot-toast";
interface CodeBlockProps {
  code: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  function handleCopy() {
    navigator.clipboard.writeText(code);
    toast.success("Copied!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  }

  return (
    <div className="relative bg-black rounded-lg overflow-hidden">
      <pre className="text-white text-sm p-4">{code}</pre>
      <button className="absolute top-0 right-0 m-4" onClick={handleCopy}>
        <CopyIcon />
      </button>
    </div>
  );
}
