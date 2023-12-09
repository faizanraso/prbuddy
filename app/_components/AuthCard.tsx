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
import { signIn, signOut } from "next-auth/react";
import { PR_SVG } from "./pr-svg";

export default function AuthCard() {
  return (
    <Card className="px-8 py-5 bg-gray-900 border-gray-900 shadow-xl shadow-gray-950">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold flex flex-row gap-x-2 pb-2 text-gray-100">
          PR BUDDY {PR_SVG}
        </CardTitle>
        <CardDescription className="text-xs text-gray-200">
          Choose one of the options below to get started
        </CardDescription>
      </CardHeader>
      <CardContent className="">
        <div className="flex flex-col justify-between gap-y-4 w-full">
          <Button
            variant="outline"
            className="w-full hover:bg-gray-200"
            onClick={() => signIn("github")}
          >
            <Icons.gitHub className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button
            variant="outline"
            className="w-full hover:bg-gray-200"
            onClick={() => signIn("google")}
          >
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
          <Link href={"/generate"}>
            <Button variant="outline" className="w-full hover:bg-gray-200">
              Continue Without Signing In
            </Button>
          </Link>
        </div>
        <button onClick={() => signOut}>sign out</button>
      </CardContent>
    </Card>
  );
}
