"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // Icon dari shadcn

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <a className="text-xl font-semibold text-gray-800">Brand</a>
            </Link>
          </div>
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/">
              <a className="text-gray-800 hover:text-blue-500">Home</a>
            </Link>
            <Link href="/about">
              <a className="text-gray-800 hover:text-blue-500">About</a>
            </Link>
            <Link href="/services">
              <a className="text-gray-800 hover:text-blue-500">Services</a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-800 hover:text-blue-500">Contact</a>
            </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
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
              <a className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md">
                Home
              </a>
            </Link>
            <Link href="/about">
              <a className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md">
                About
              </a>
            </Link>
            <Link href="/services">
              <a className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md">
                Services
              </a>
            </Link>
            <Link href="/contact">
              <a className="block text-gray-800 hover:bg-gray-100 px-3 py-2 rounded-md">
                Contact
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
