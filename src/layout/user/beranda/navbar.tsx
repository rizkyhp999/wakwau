"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icon dari shadcn

import { Button } from "@/components/ui/button"; // Import komponen button dari shadcn
// import { useTheme } from "next-themes"; // Untuk mengelola tema dari next-themes
// import { SunIcon, MoonIcon } from "lucide-react"; // Import ikon Sun dan Moon

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // const { theme, setTheme } = useTheme(); // Akses tema saat ini dan fungsi untuk mengganti tema

  // const toggleTheme = () => {
  //   setTheme(theme === "light" ? "dark" : "light"); // Toggle antara light dan dark
  // };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <h1 className="text-xl font-semibold text-gray-800">
                Wakwau Tryout
              </h1>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/">
              <h1 className="text-gray-800 hover:text-blue-500">Beranda</h1>
            </Link>
            <Link href="/materi">
              <h1 className="text-gray-800 hover:text-blue-500">Materi</h1>
            </Link>
            <Link href="/dashboard">
              <h1 className="text-gray-800 hover:text-blue-500">Tryout</h1>
            </Link>
            <Link href="/testimoni">
              <h1 className="text-gray-800 hover:text-blue-500">Testimoni</h1>
            </Link>
            <Link href="/kontak">
              <h1 className="text-gray-800 hover:text-blue-500">Kontak</h1>
            </Link>

            <Button asChild>
              <Link href="/auth/login">Masuk</Link>
            </Button>
            {/* <Button variant="outline" size="icon" onClick={toggleTheme}>
              <SunIcon
                className={`h-[1.2rem] w-[1.2rem] transition-all ${
                  theme === "dark" ? "rotate-90 scale-0" : "rotate-0 scale-100"
                }`}
              />
              <MoonIcon
                className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
                  theme === "dark" ? "rotate-0 scale-100" : "rotate-90 scale-0"
                }`}
              />
              <span className="sr-only">Toggle theme</span>
            </Button> */}
          </div>

          <div className="-mr-2 flex md:hidden">
            <div className="mr-2 flex md:hidden  items-center ">
              <Button asChild>
                <Link href="/auth/login">Masuk</Link>
              </Button>
            </div>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-800 focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/">
              <h1 className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md">
                Beranda
              </h1>
            </Link>
            <Link href="/materi">
              <h1 className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md">
                Materi
              </h1>
            </Link>
            <Link href="/dashboard">
              <h1 className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md">
                Tryout
              </h1>
            </Link>
            <Link href="/testimoni">
              <h1 className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md">
                Testimoni
              </h1>
            </Link>
            <Link href="/kontak">
              <h1 className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md">
                Kontak
              </h1>
            </Link>
            {/* <div className="px-3 py-2">
              <Button variant="outline" size="icon" onClick={toggleTheme}>
                <SunIcon
                  className={`h-[1.2rem] w-[1.2rem] transition-all ${
                    theme === "dark"
                      ? "rotate-90 scale-0"
                      : "rotate-0 scale-100"
                  }`}
                />
                <MoonIcon
                  className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
                    theme === "dark"
                      ? "rotate-0 scale-100"
                      : "rotate-90 scale-0"
                  }`}
                />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
}
