import Link from "next/link";

import PRIcon from "../icons/PRIcon";
import UserInfo from "./UserInfo";

export default function Header() {
  return (
    <header className="bg-[#10131C] antialiased px-12 sm:px-24 md:px-30 lg:px-56">
      <div className="mx-auto max-w-screen-xl py-8">
        <div className="flex items-center sm:justify-between sm:gap-4">
          <Link href={"/"}>
            <div className="relative block">
              <p className="flex flex-row gap-x-2">
                <span className="text-lg font-bold text-gray-100 ">
                  PR BUDDY
                </span>
                <PRIcon />
              </p>
            </div>
          </Link>

          <UserInfo />
        </div>
      </div>
    </header>
  );
}
