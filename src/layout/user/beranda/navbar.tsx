"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Pastikan jalur impor sesuai
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export default function navbar() {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-50 cursor-pointer">
            TryOut CPNS
          </div>
        </Link>
        <div className="flex items-center space-x-6">
          <Link href="/">
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
              Beranda
            </div>
          </Link>
          <Link href="/about">
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
              Tentang
            </div>
          </Link>
          <Link href="/services">
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
              Layanan
            </div>
          </Link>
          <Link href="/contact">
            <div className="text-sm font-medium text-gray-700 dark:text-gray-300 cursor-pointer">
              Kontak
            </div>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <Link href="/">
                  <div className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                    Beranda
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/about">
                  <div className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                    Tentang
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/services">
                  <div className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                    Layanan
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/contact">
                  <div className="text-sm text-gray-700 dark:text-gray-300 cursor-pointer">
                    Kontak
                  </div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
}
