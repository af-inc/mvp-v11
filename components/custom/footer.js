import Image from "next/image";
import Link from "next/link";
import { FaDiscord, FaTwitter, FaYelp } from "react-icons/fa6";


export function Footer() {
  return (
    <footer className="bg-indigo-950 text-white rounded-t-3xl rounded-none lg:w-screen py-12 w-[99vw]">
      <div className="container px-4 lg:px-16 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Crowdfund Logo"
                  width={150}
                  height={50}
                />
              </Link>
            </div>
            <p className="text-sm text-gray-400">
              Empowering your ideas. Together, we build the future.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Explore Projects</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/projects/tech">Technology</Link>
              </li>
              <li>
                <Link href="/projects/art">Arts & Design</Link>
              </li>
              <li>
                <Link href="/projects/community">Community</Link>
              </li>
              <li>
                <Link href="/projects/startup">Startups</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/faq">FAQs</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/support">Support</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Connect With Us</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Email: support@aidefunding.com</li>
              <li>Phone: +1 (800) 123-4567</li>
              <div className="flex gap-4 mt-2">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                  aria-label="Facebook"
                >
                  <FaDiscord />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                  aria-label="Twitter"
                >
                  <FaTwitter />

                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white"
                  aria-label="LinkedIn"
                >
                 <FaYelp />

                </a>
              </div>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © Aidefunding 2025 All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
