"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Plus, User2Icon } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export function Navigation() {
  return (
    <motion.header
      className="fixed top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex h-16 w-full items-center px-4 md:px-8">
        <div className="flex items-center gap-4 pr-2">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" className="md:hidden text-indigo-700 w-max h-max">
                <Menu className="h-12 w-12" />
                <span className="sr-only"></span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[250px]">
              <nav className="flex flex-col font-bold gap-4">
                <Link href="/v1" className="text-lg font-medium hover:text-indigo-500 transition-colors">
                  Home
                </Link>
                <Link href="/v1/donation" className="text-lg font-medium hover:text-indigo-500 transition-colors">
                  Donation
                </Link>
                <Link href="/v1/how-it-works" className="text-lg font-medium hover:text-indigo-500 transition-colors">
                  How It Works
                </Link>
                <Link href="/v1/about-us" className="text-lg font-medium hover:text-indigo-500 transition-colors">
                  About Us
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/v1" className="ml-[-15px]">
            <Image src="/logo.png" alt="Company Logo" width={150} height={50} />
          </Link>
        </div>

        <nav className="hidden md:flex gap-6 mr-auto p-3 border-l-indigo-100 border-l-2">
          <Link href="/" className="text-md cursor-pointer font-medium hover:text-indigo-500 transition-colors">
            Home
          </Link>
          <Link href="/donation" className="text-md cursor-pointer font-medium hover:text-indigo-500 transition-colors">
            Donation
          </Link>
          <Link href="/how-it-works" className="text-md cursor-pointer font-medium hover:text-indigo-500 transition-colors">
            How It Works
          </Link>
          <Link href="/about-us" className="text-md cursor-pointer font-medium hover:text-indigo-500 transition-colors">
            About Us
          </Link>
        </nav>

      <div className="gap-4 items-center flex ml-auto">
        
        <Button className="bg-indigo-400 text-base md:text-sm p-4 md:p-6 text-white mt-4 md:mt-auto rounded-lg flex lg:hidden hover:bg-indigo-300 mb-4 md:mb-[75px] lg:mr-[50px]">
           <Plus /> <span className="hidden md:flex">Start Campaign</span>
        </Button>
        <Button className="bg-neutral-100 text-black rounded-md flex items-center gap-3 hover:bg-neutral-100 ml-auto">
          <User2Icon /> <span className=" hidden lg:flex">Purple Wavelet</span> 
        </Button>
        <Button className="bg-neutral-200 hidden lg:flex text-black rounded-md hover:bg-neutral-100 ml-auto">
          Signin
        </Button>
        <Button className="bg-indigo-500  hidden lg:flex text-white rounded-md hover:bg-indigo-600 ml-auto">
          Signup
        </Button>
      </div>
      </div>
    </motion.header>
  );
}
