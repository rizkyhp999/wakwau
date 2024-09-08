import React from "react";
import Link from "next/link";
// import Image from "next/image";
export default function hero() {
  return (
    <div className="container mx-auto">
      <div className="relative w-full h-[400px]">
        {/* <Image
          src="/hero.png"
          alt="Hero"
          layout="fill"
          objectFit="cover"
          className="absolute inset-0"
        /> */}
        <div className="absolute inset-0 flex flex-col justify-center gap-4 p-4 md:gap-10">
          <div className="grid gap-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-gray-900 dark:text-gray-50">
              TryOut CPNS Terpercaya
            </h1>
            <p className="max-w-[700px] text-gray-500 dark:text-gray-400">
              Raih skor terbaik dengan latihan soal terlengkap dan akurat.
              Tryout online dengan soal terbaru, pembahasan lengkap, dan
              simulasi ujian yang real-time. Daftar sekarang dan wujudkan
              impianmu menjadi bagian dari abdi negara.
            </p>
          </div>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white text-sm font-medium shadow-sm w-24 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            Gabung!
          </Link>
        </div>
      </div>
    </div>
  );
}
