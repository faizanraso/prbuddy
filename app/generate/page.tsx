"use client";

import React, { useState } from "react";
import Header from "../_components/header/Header";
import { GeneratePageContent } from "../_components/generatePage/GeneratePageContent";
import GeneratePageSection from "../_components/generatePage/GeneratePageSection";
import UploadFile from "../_components/generatePage/UploadFile";
import GenerateDescription from "../_components/generatePage/GenerateDescription";

interface FileProps {
  fileName: string;
  fileContent: string | null;
}

export default function GeneratePage() {
  const [diffFile, setDiffFile] = useState<FileProps>();

  return (
    <div className="min-h-screen">
      <Header />
      <main className="antialiased flex flex-col justify-center px-12 sm:px-24 md:px-30 lg:px-56">
        <div className="pt-3 pb-8">
          {GeneratePageContent.map((section) => (
            <div key={section.sectionNumber}>
              <GeneratePageSection
                key={section.sectionNumber}
                title={section.title}
                content={section.content.join()}
                codeBlock={section.codeBlock}
                code={section.code}
              />
              {section.sectionNumber === 2 ? (
                <UploadFile
                  key={section.sectionNumber}
                  diffFile={diffFile}
                  setDiffFile={setDiffFile}
                />
              ) : null}
              {section.sectionNumber === 3 ? (
                <GenerateDescription
                  key={section.sectionNumber}
                  diffFile={diffFile}
                  setDiffFile={setDiffFile}
                />
              ) : null}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
