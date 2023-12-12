"use client";

import React from "react";

import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

export default function GenerateDescription() {
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between">
        <div className="w-5/6">
          <Input
            placeholder="OpenAI API Key"
            className="bg-[#192532] border-0 text-gray-300 font-medium"
            type="password"
          />
        </div>
        <div className="pl-4">
          <Button disabled>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please wait
          </Button>
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
