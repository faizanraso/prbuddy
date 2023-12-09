"use client";

import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

export default function AuthCard() {
  return (
    <Card className="px-8 py-5 bg-gray-900 border-gray-900 shadow-xl shadow-gray-950">
      <CardHeader className="space-y-1">
        <CardTitle className="text-lg font-bold flex flex-row gap-x-2 pb-2 text-gray-100 ">
          PR BUDDY{" "}
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-gray-100"
          >
            <path
              d="M18 21C19.1046 21 20 20.1046 20 19C20 17.8954 19.1046 17 18 17C16.8954 17 16 17.8954 16 19C16 20.1046 16.8954 21 18 21Z"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="stroke-gray-100"
            ></path>
            <path
              d="M6 21C7.10457 21 8 20.1046 8 19C8 17.8954 7.10457 17 6 17C4.89543 17 4 17.8954 4 19C4 20.1046 4.89543 21 6 21Z"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="stroke-gray-100"
            ></path>
            <path
              d="M6 11V17"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="stroke-gray-100"
            ></path>
            <path
              d="M18 17V7C18 7 18 5 16 5H12"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="stroke-gray-100"
            ></path>
            <path
              d="M4 7.24264L6.12132 5.12132M6.12132 5.12132L8.24264 3M6.12132 5.12132L4 3M6.12132 5.12132L8.24264 7.24264"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="stroke-gray-100"
            ></path>
          </svg>
        </CardTitle>
        <CardDescription className="text-xs text-gray-200">
          Choose one of the sign in methods below to get started
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <div className="flex flex-col justify-between gap-y-4 w-full">
          <Button variant="outline" className="w-full">
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="outline" className="w-full">
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
          <Link href={"/generate"}>
            <Button variant="outline" className="w-full">
              Continue Without Signing In
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
