"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import PRIcon from "../icons/PRIcon";
import CheckIcon from "../icons/CheckIcon";
import CopyIcon from "../icons/CopyIcon";

export default function GenerateDescription() {
  const [copied, setCopied] = useState<boolean>(false);
  const [response, setResponse] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  function handleCopy() {
    setCopied(true);
    navigator.clipboard.writeText(response);
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
    <div className="flex flex-col">
      <div className="w-full flex justify-between">
        <div className="w-full">
          <Input
            placeholder="OpenAI API Key"
            className="bg-[#192532] border-0 text-gray-300 font-medium"
            type="password"
          />
        </div>
        <div className="pl-4">
          {!isLoading ? (
            <Button className="bg-[#192532] hover:bg-[#23486F] transition duration-150 font-bold text-sm w-32 gap-x-2 items-center justify-center">
              Generate
              <PRIcon className="w-[10px]" />
            </Button>
          ) : (
            <Button disabled className="font-bold text-sm w-32">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          )}
        </div>
      </div>
      <div className="pt-6 pb-10 relative">
        <button
          className="absolute top-0 right-0 mt-8 mr-4"
          onClick={handleCopy}
          disabled={copied}
        >
          {!copied ? <CopyIcon /> : <CheckIcon />}
        </button>
        <pre className="bg-[#192532] rounded-lg border-0 h-64 p-4 overflow-scroll text-gray-300">
          {response}
        </pre>
      </div>
    </div>
  );
}
