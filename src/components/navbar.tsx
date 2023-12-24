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
      <header className="bg-primer fixed h-[60px] top-0 left-0 w-full flex items-center z-10 lg:px-[100px] ">
        <div className="container mx-auto">
          <div className="flex items-center justify-between relative">
            <div className="px-4">
              <Link href="/" className="block">
                Home
              </Link>
            </div>
            <div className="flex items-center px-4">
              <button
                className="block absolute right-4 lg:hidden "
                id="hamburger"
                name="hamburger"
                type="button"
                onClick={handleHamburger}
              >
                <span className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out origin-top-left"></span>
                <span className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out"></span>
                <span className="w-[30px] h-[2px] my-2 block bg-black transition duration-300 ease-in-out origin-bottom-left"></span>
              </button>
              <nav
                id="nav-menu"
                className="hidden absolute bg-white py-5 shadow-lg rounded-lg max-w-[250px] w-full right-4  top-full lg:block lg:static lg:bg-transparent lg:max-w-full lg:shadow-none lg:rounded-none"
              >
                <ul className="block lg:flex ">
                  <li className="group lg:pl-[40px]">
                    <Link
                      href="/"
                      className="py-2  flex text-justify text-white text-xl font-bold  leading-relaxed"
                    >
                      Beranda
                    </Link>
                  </li>
                  <li className="group lg:pl-[40px]">
                    <Link
                      href="/peta"
                      className="py-2 flex text-justify text-white text-xl font-bold  leading-relaxed"
                    >
                      Peta Status
                    </Link>
                  </li>
                  <li className="group lg:pl-[40px]">
                    <Link
                      href="/indikator"
                      className="py-2 flex text-justify text-white text-xl font-bold  leading-relaxed"
                    >
                      Indikator
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
