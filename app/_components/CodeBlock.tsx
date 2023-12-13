import React, { useEffect, useState } from "react";
import CopyIcon from "./icons/CopyIcon";
import toast from "react-hot-toast";
import CheckIcon from "./icons/CheckIcon";
interface CodeBlockProps {
  code: string;
}

export default function CodeBlock({ code }: CodeBlockProps) {
  const [copied, setCopied] = useState<boolean>(false);

  function handleCopy() {
    setCopied(true);
    navigator.clipboard.writeText(code);
    toast.success("Copied!", {
      style: {
        borderRadius: "10px",
        background: "#10331D",
        color: "#fff",
      },
    });
  }

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [copied]);

  return (
    <div className="relative bg-black rounded-lg overflow-hidden">
      <pre className="text-white text-sm p-4">{code}</pre>
      <button
        className="absolute top-0 right-0 m-4"
        onClick={handleCopy}
        disabled={copied}
      >
        {!copied ? <CopyIcon /> : <CheckIcon />}
      </button>
    </div>
  );
}
