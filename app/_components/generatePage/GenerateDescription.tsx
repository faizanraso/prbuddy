"use client";

import React, { useState } from "react";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import PRIcon from "../icons/PRIcon";

export default function GenerateDescription() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
            <Button className="bg-[#192532] hover:bg-[#23486F] transition duration-150 font-bold text-xs w-32 gap-x-2 items-center justify-center">
              Generate
              <PRIcon className="w-[10px]" />
            </Button>
          ) : (
            <Button disabled className="font-bold text-xs w-32">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
          )}
        </div>
      </div>
      <div className="pt-6 pb-10">
        <Textarea
          placeholder={"longMessage"}
          disabled
          className="bg-[#192532] border-0 h-64"
        />
      </div>
    </div>
  );
}
