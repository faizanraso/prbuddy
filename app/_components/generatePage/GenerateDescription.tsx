"use client";

import React from "react";

import { Input } from "@/components/ui/input";

export default function GenerateDescription() {
  return (
    <div>
      <Input
        placeholder="OpenAI API Key"
        className="bg-[#192532] border-0 text-gray-300 font-medium"
        type="password"
      />
    </div>
  );
}
