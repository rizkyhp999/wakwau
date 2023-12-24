import React from "react";
import Link from "next/link";
export default function Navbar() {
  return (
    <header className="bg-primer absolute h-[60px] top-0 left-0 w-full flex items-center z-10">
      <div className="container">
        <div className="flex items-center justify-between relative">
          <div className="px-4">
            <Link href="/" className="block ">
              Home
            </Link>
          </div>
          <div className="flex items-center px-4">
            <button
              className="block absolute right-4"
              id="hamburger"
              name="hamburger"
              type="button"
            >
              <span className="w-[30px] h-[2px] my-2 block bg-black"></span>
              <span className="w-[30px] h-[2px] my-2 block bg-black"></span>
              <span className="w-[30px] h-[2px] my-2 block bg-black"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
