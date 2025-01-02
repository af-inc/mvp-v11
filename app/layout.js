import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "@/components/custom/navigation";

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col w-screen p-0 overflow-x-hidden`}>
        <>
          <Navigation/>
          <Toaster position="top-right" />
          {children}
        </>
      </body>
    </html>
  );
}
