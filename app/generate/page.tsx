import React from "react";
import Header from "../_components/Header";

export default function GeneratePage() {
  return (
    <>
      <Header />
      <main className="antialiased flex min-h-screen flex-col items-center justify-center p-24 bg-[#10131C]">
        <h1 className="text-slate-50">Generate Your PR Description</h1>
      </main>
    </>
  );
}
