import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import Provider from "@/lib/provider";

import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PR Buddy",
  description: "An easier way to write your PR descriptions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
  );
}
