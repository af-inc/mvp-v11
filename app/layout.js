import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";
import Image from "next/image";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Aidefunding Inc.",
  description: "The #1 fundraising platform for crypto based projects.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col p-0`}>
        <>
          <div className="">
            <Link href="/v1">
            <Image src="/logo.png" alt="Company Logo" className="p-5" width={200} height={50} />
            </Link>
          </div>
          <Toaster position="top-right" />
          {children}
        </>
      </body>
    </html>
  );
}
