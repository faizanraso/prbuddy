import Link from "next/link";

import PRIcon from "../icons/PRIcon";
import UserNav from "./UserNav";

export default function Header() {
  return (
    <header className="bg-[#10131C] antialiased px-12 sm:px-24 md:px-30 lg:px-56">
      <div className="mx-auto max-w-screen-xl py-8">
        <div className="flex items-center sm:justify-between sm:gap-4">
          <Link href={"/generate"}>
            <div className="relative block">
              <p className="flex flex-row gap-x-2 items-center">
                <span className="text-xl font-bold text-gray-100 ">
                  PR BUDDY
                </span>
                <PRIcon />
              </p>
            </div>
          </Link>
          <UserNav />
        </div>
      </div>
    </header>
  );
}
