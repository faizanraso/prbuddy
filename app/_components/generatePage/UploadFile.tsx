"use client";

import React, { useEffect, useState } from "react";

interface FileProps {
  fileName: string;
  fileContent: string | ArrayBuffer | null;
}

export default function UploadFile() {
  const [file, setFile] = useState<FileProps>();

  function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files ? e.target.files[0] : null;

    if (!file) return;

    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      setFile({ fileName: file.name, fileContent: reader.result });
    };

    reader.onerror = () => {
      alert(
        "There was an issue reading your file. Please ensure it is a .txt file and try re-uploading it."
      );
    };
  }

  useEffect(() => {
    console.log(file?.fileContent);
  }, [file]);

  return (
    <div key={2} className="flex items-center justify-center w-full">
      <label
        htmlFor="dropzone-file"
        className="flex flex-col items-center justify-center w-full h-64 border-2 border-[#23486F] border-dashed rounded-lg cursor-pointer bg-[#192532] hover:bg-[#23486F]"
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <svg
            className="w-8 h-8 mb-4 text-gray-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          {file?.fileName.length ? (
            <p className="text-sm font-bold text-gray-500">
              {file.fileName} ✅
            </p>
          ) : (
            <>
              {" "}
              <p className="mb-2 text-sm text-gray-500">
                <span className="font-semibold">Click to upload</span> or drag
                and drop
              </p>
              <p className="text-xs text-gray-500">.txt</p>
            </>
          )}
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={(e) => handleFileUpload(e)}
        />
      </label>
    </div>
  );
}
