"use client";

import React from "react";
import Header from "../_components/header/Header";
import { GeneratePageContent } from "../_components/generatePage/GeneratePageContent";
import GeneratePageSection from "../_components/generatePage/GeneratePageSection";
import UploadFile from "../_components/generatePage/UploadFile";

export default function GeneratePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="antialiased flex flex-col justify-center px-12 sm:px-24 md:px-30 lg:px-56">
        <div className="py-10">
          {GeneratePageContent.map((section) => (
            <>
              <GeneratePageSection
                key={section.section}
                title={section.title}
                content={section.content.join()}
                codeBlock={section.codeBlock}
                code={section.code}
              />

              {section.section === 2 ? <UploadFile /> : null}
            </>
          ))}
        </div>
      </main>
    </div>
  );
}
