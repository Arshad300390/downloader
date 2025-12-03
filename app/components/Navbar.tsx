"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const path = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        {/* Logo */}
        <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-blue-500">
          Arshad.dev
        </h1>

        {/* Nav Links */}
        <ul className="flex gap-6">
          {links.map(link => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`
                  relative px-1 py-1 font-semibold transition
                  ${
                    path === link.href
                      ? "text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-blue-500"
                      : "text-gray-800 hover:text-cyan-500"
                  }
                `}
              >
                {link.label}
                {/* Optional underline animation */}
                <span
                  className={`
                    absolute left-0 -bottom-1 w-full h-0.5 bg-cyan-500 transition-all
                    ${path === link.href ? "scale-x-100" : "scale-x-0"}
                    origin-left
                  `}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
