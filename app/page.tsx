import React from "react";
import AuthCard from "./_components/AuthCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#23486F] via-[#192532] to-[#10131C]">
      <AuthCard />
    </main>
  );
}
