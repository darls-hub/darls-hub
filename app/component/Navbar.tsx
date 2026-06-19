"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/assets";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Client Experience", href: "/client-experience" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-black/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <Link href="/">
          <img
            src={Logo.src}
            alt="Darls Hub"
            className="w-10 h-10 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-white font-semibold">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-[#A8E6CF] transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-md px-6 py-4 flex flex-col gap-5 text-white font-medium">

          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="hover:text-[#A8E6CF] transition-colors"
            >
              {link.name}
            </Link>
          ))}

        </div>
      </div>
    </nav>
  );
}