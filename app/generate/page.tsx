"use client";

import React from "react";
import Header from "../_components/header/Header";
import CodeBlock from "../_components/CodeBlock";

export default function GeneratePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="antialiased flex flex-col justify-center px-12 sm:px-24 md:px-30 lg:px-56">
        <div className="py-10">
          <div className="py-2.5">
            <h1 className="font-bold text-2xl text-gray-100 underline py-2.5">
              1. Get the 'diff'
            </h1>
            <p className=" text-gray-300 py-2.5">
              The initial step involves creating a "diff" file that captures all
              the modifications made between two commits, essentially reflecting
              the changes introduced in the Pull Request or branch. To generate
              this file, execute the following command. Ensure that you are on
              the branch associated with the opened PR and adjust the name of
              the "main" branch if it differs.
            </p>
            <div className="py-2.5">
              <CodeBlock code="git --no-pager diff FETCH_HEAD $(git merge-base FETCH_HEAD main) > diff.txt" />
            </div>
          </div>
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
