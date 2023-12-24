"use client";
import React from "react";
import Link from "next/link";
export default function Navbar() {
  const handleHamburger = () => {
    const hamburger = document.querySelector("#hamburger");
    const nav = document.querySelector("#nav-menu");
    if (hamburger != null && nav != null) {
      hamburger.classList.toggle("hamburger-active");
      nav.classList.toggle("hidden");
    }
  };

  return (
    <>
      <header className="bg-primer absolute h-[60px] top-0 left-0 w-full flex items-center z-10">
        <div className="container mx-auto">
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
                onClick={handleHamburger}
              >
                <span className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out origin-top-left"></span>
                <span className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out"></span>
                <span className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>
            </div>
          </div>
          <nav
            id="nav-menu"
            className="hidden bg-primer absolute h-[60px] top-full left-0 w-full items-center"
          >
            <ul>
              <li>
                <Link href="/">Beranda</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}
