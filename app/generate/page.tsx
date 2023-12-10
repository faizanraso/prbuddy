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
              The first step is to generate a "diff" file. This file will
              contain all the changes you've made between two commits (i.e. in
              the PR). To generate this, first you have to get the two commit
              hashes. One will be the commit you made when opening the PR, and
              the second will be the most recent commit in the branch/PR. Check
              out the example below.
            </p>
            <div className="py-2.5">
              <CodeBlock code="Test" />
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
