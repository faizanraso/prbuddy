"use client";

import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import {
  createParser,
  ParsedEvent,
  ReconnectInterval,
} from "eventsource-parser";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import PRIcon from "../icons/PRIcon";
import CheckIcon from "../icons/CheckIcon";
import CopyIcon from "../icons/CopyIcon";

interface GenerateDescriptionProps {
  diffFile?: {
    fileName: string;
    fileContent: string | null;
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
  const [userProvidedAPIKey, setUserProvidedAPIKey] = useState<string>("");

  const responseRef = useRef<HTMLDivElement | null>(null);

  const promptBase = [
    "Generate a concise Pull Request (PR) description based on the changes made in the current branch. ",
    "Be sure to divide it into sections if needed. Consider the following git diff: \n",
  ];

  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => {
      setCopied(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [copied]);

  const prompt = diffFile?.fileContent
    ? promptBase.join().concat(diffFile?.fileContent)
    : "";

  function scrollToResponse() {
    if (responseRef)
      responseRef.current?.scrollIntoView({ behavior: "smooth" });
  }

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

  function handleApiKeyInput(e: React.ChangeEvent<HTMLInputElement>) {
    setUserProvidedAPIKey(e.target.value);
  }

  async function generatePRDescription(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);
    setResponse("");

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

    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
        userProvidedAPIKey,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const onParse = (event: ParsedEvent | ReconnectInterval) => {
      if (event.type === "event") {
        const data = event.data;
        try {
          const text = JSON.parse(data).text ?? "";
          setResponse((prev) => prev + text);
        } catch (e) {
          console.error(e);
        }
      }
    };

    // https://web.dev/streams/#the-getreader-and-read-methods
    const reader = data.getReader();
    const decoder = new TextDecoder();
    const parser = createParser(onParse);
    let done = false;
    let counter = 0;
    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      parser.feed(chunkValue);
      counter++;
    }

    scrollToResponse();
    setIsLoading(false);

    if (counter > 2) {
      toast.success("Completed", {
        style: {
          borderRadius: "10px",
          background: "#9A1616 ",
          color: "#fff",
        },
      });
    } else {
      toast.error("Check your API key and try again", {
        style: {
          borderRadius: "10px",
          background: "#9A1616 ",
          color: "#fff",
        },
      });
    }
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
              onChange={handleApiKeyInput}
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
          <div className="w-full" ref={responseRef}>
            <pre className="bg-[#192532] rounded-lg border-0 h-64 p-4 overflow-scroll text-gray-300 text-sm font-semibold scroll-auto">
              {response}
            </pre>{" "}
          </div>
        </div>
      </div>
    </form>
  );
}
