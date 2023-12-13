"use client";

import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import PRIcon from "../icons/PRIcon";
import CheckIcon from "../icons/CheckIcon";
import CopyIcon from "../icons/CopyIcon";

interface GenerateDescriptionProps {
  diffFile?: {
    fileName: string;
    fileContent: string | ArrayBuffer | null;
  };
  setDiffFile: any;
}

export default function GenerateDescription({
  diffFile,
  setDiffFile,
}: GenerateDescriptionProps) {
  const [copied, setCopied] = useState<boolean>(false);
  const [response, setResponse] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [copied]);

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

  function generatePRDescription(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!diffFile?.fileContent) {
      toast.error("No diff file uploaded", {
        style: {
          borderRadius: "10px",
          background: "#9A1616 ",
          color: "#fff",
        },
      });
      return;
    }

    // generate
  }

  return (
    <form onSubmit={generatePRDescription}>
      <div className="flex flex-col">
        <div className="w-full flex justify-between">
          <div className="w-full">
            <Input
              placeholder="OpenAI API Key"
              className="bg-[#192532] border-0 text-gray-300 font-medium"
              type="password"
              required
            />
          </div>
          <div className="pl-4">
            {!isLoading ? (
              <Button
                className="bg-[#192532] hover:bg-[#23486F] transition duration-150 font-bold text-sm w-32 gap-x-2 items-center justify-center"
                type="submit"
              >
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
    </form>
  );
}
