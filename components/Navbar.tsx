"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ChevronDown } from "lucide-react";

type Category = {
  name: string;
  items: { name: string; price: string; img: string }[];
};

const categories: Record<string, Category["items"]> = {
  Food: [
    { name: "Pizza", price: "$10", img: "/pizza.jpg" },
    { name: "Burger", price: "$8", img: "/burger.jpg" },
  ],
  Drinks: [
    { name: "Coke", price: "$2", img: "/coke.jpg" },
    { name: "Juice", price: "$3", img: "/juice.jpg" },
  ],
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo + Store Name */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Logo" width={32} height={32} />
          <span className="font-bold text-xl">My Online Store</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          {/* Categories Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button className="flex items-center space-x-1 font-medium hover:text-blue-600">
              <span>Categories</span>
              <ChevronDown className="w-4 h-4" />
            </button>
            {dropdownOpen && (
              <div className="absolute top-full mt-2 w-40 bg-white border rounded-md shadow-lg">
                {Object.keys(categories).map((cat) => (
                  <Link
                    key={cat}
                    href={`/category/${cat.toLowerCase()}`}
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/about" className="font-medium hover:text-blue-600">
            About
          </Link>
          <Link href="/contact" className="font-medium hover:text-blue-600">
            Contact
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col space-y-2 p-4">
            {/* Categories Dropdown (Mobile) */}
            <div>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center justify-between w-full font-medium"
              >
                Categories
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    dropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {dropdownOpen && (
                <div className="mt-2 space-y-2 pl-4">
                  {Object.keys(categories).map((cat) => (
                    <Link
                      key={cat}
                      href={`/category/${cat.toLowerCase()}`}
                      className="block py-1 hover:text-blue-600"
                    >
                      {cat}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/about" className="font-medium hover:text-blue-600">
              About
            </Link>
            <Link href="/contact" className="font-medium hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
