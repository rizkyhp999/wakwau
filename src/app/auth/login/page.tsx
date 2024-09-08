import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function page() {
  return (
    <div className="flex h-screen items-start md:items-center justify-center">
      <div className="mx-auto max-w-md space-y-6 py-12 text-center">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Selamat Datang</h1>
          <p className="text-muted-foreground">
            Silakan masuk menggunakan akun Google Anda.
          </p>
        </div>
        <Link href="/dashboard">
          <Button
            variant="outline"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-white px-4 py-2 text-sm font-medium text-black shadow-sm transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <ChromeIcon className="h-5 w-5" />
            Masuk dengan Google
          </Button>
        </Link>
      </div>
    </div>
  );
}

function ChromeIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  );
}
