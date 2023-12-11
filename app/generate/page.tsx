"use client";

import React from "react";
import Header from "../_components/header/Header";
import { GeneratePageContent } from "../_components/generatePage/GeneratePageContent";
import GeneratePageSection from "../_components/generatePage/GeneratePageSection";

export default function GeneratePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="antialiased flex flex-col justify-center px-12 sm:px-24 md:px-30 lg:px-56">
        <div className="py-10">
          {GeneratePageContent.map((section) => (
            <GeneratePageSection
              title={section.title}
              content={section.content.join()}
              codeBlock={section.codeBlock}
              code={section.code}
            />
          ))}
          <div className="py-2.5">
            <h1 className="font-bold text-2xl text-gray-100 underline">
              2. Upload the diff file
            </h1>
          </div>
          <div className="py-2.5">
            <h1 className="font-bold text-2xl text-gray-100 underline">
              3. Pick what you want
            </h1>
          </div>
          <div className="py-2.5">
            <h1 className="font-bold text-2xl text-gray-100 underline">
              4. Get the PR description
            </h1>
          </div>
        </div>
      </main>
    </div>
  );
}
