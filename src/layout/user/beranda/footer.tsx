import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button"; // Sesuaikan path impor

export default function footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-50">
      <div className="container mx-auto px-4 py-8 flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-2">TryOut CPNS</h2>
          <p className="text-sm">
            Latihan soal terlengkap dan akurat untuk mempersiapkan ujian CPNS.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Navigasi</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/">
                <div className="cursor-pointer text-sm text-gray-600 dark:text-gray-300 hover:underline">
                  Beranda
                </div>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <div className="cursor-pointer text-sm text-gray-600 dark:text-gray-300 hover:underline">
                  Tentang
                </div>
              </Link>
            </li>
            <li>
              <Link href="/services">
                <div className="cursor-pointer text-sm text-gray-600 dark:text-gray-300 hover:underline">
                  Layanan
                </div>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <div className="cursor-pointer text-sm text-gray-600 dark:text-gray-300 hover:underline">
                  Kontak
                </div>
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-lg font-semibold mb-2">Hubungi Kami</h3>
          <p className="text-sm mb-2">Email: support@tryoutcpns.com</p>
          <Button variant="outline" className="w-full md:w-auto">
            <Link href="/contact">
              <div className="cursor-pointer">Kirim Pesan</div>
            </Link>
          </Button>
        </div>
      </div>
      <div className="bg-gray-200 dark:bg-gray-700 text-center py-4">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} TryOut CPNS. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
