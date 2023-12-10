"use client";

import { signOut } from "next-auth/react";

export default function SignOutButton() {
  
    function SignOut(e: { preventDefault: () => void }) {
    signOut();
  }

  return (
    <button className="bg-white" onClick={SignOut}>
      test
    </button>
  );
}
