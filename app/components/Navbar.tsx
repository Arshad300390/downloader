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
    <nav className="fixed top-0 w-full backdrop-blur bg-gray-900/60 border-b border-gray-800 z-50">
      <div className="max-w-5xl mx-auto flex items-center justify-between py-4">
        <h1 className="text-xl font-bold">Arshad.dev</h1>

        <ul className="flex gap-6">
          {links.map(link => (
            <li key={link.href}>
              <Link
                className={`hover:text-cyan-400 transition ${
                  path === link.href ? "text-cyan-400 font-semibold" : ""
                }`}
                href={link.href}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
