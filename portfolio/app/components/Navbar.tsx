"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/experience", label: "Experience" },
    { href: "/accomplishments", label: "Accomplishments" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const navbarBackground =
    pathname === "/" || "/contact" ? "md:bg-transparent" : "bg-black bg-opacity-100";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 flex items-center justify-between px-6 py-4 text-white z-50 transition-all ${navbarBackground}`}
    >
      <Link href="/" className="flex items-center">
        <img src="/logo.png" alt="Logo" className="h-12" />
      </Link>

      <div className="hidden md:flex space-x-6">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`hover:text-gray-300 transition-all ${
              pathname === href ? "text-blue-500 font-semibold" : ""
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      <button
        className="md:hidden text-white z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
      <div
        className={`fixed top-0 right-0 w-2/3 h-screen bg-black backdrop-blur-lg flex flex-col items-center pt-20 transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute top-5 right-5 text-white"
          onClick={() => setIsOpen(false)}
        >
          <X size={28} />
        </button>

        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`text-white text-lg py-3 hover:text-blue-400 transition-all ${
              pathname === href ? "text-blue-500 font-semibold" : ""
            }`}
            onClick={() => setIsOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
