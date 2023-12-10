import Link from "next/link";
import PRIcon from "./icons/PRIcon";

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

          <div className="flex flex-1 items-center gap-8 justify-end">
            <button
              type="button"
              className="group flex shrink-0 items-center rounded-lg transition"
            >
              <img
                alt="Man"
                src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                className="h-10 w-10 rounded-full object-cover"
              />

              <p className="ms-2 hidden text-left text-xs sm:block">
                <strong className="block font-medium text-white">
                  Eric Frusciante
                </strong>

                <span className="text-gray-500"> eric@frusciante.com </span>
              </p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
