"use client"; 
import Link from "next/link";
import { useEffect } from "react";

function Navbar() {
  useEffect(() => {
    const toggleBtn = document.getElementById("menu-toggle");
    const menu = document.getElementById("mobile-menu");

    if (toggleBtn && menu) {
      toggleBtn.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });
    }
  }, []);

  return (
    <nav className="bg-[#096B68] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-extrabold">Super Grocer</div>

        <div className="md:hidden">
          <button id="menu-toggle" className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </button>
        </div>

        <ul
          id="mobile-menu"
          className="hidden md:flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-center md:items-center md:static absolute top-16 left-0 w-full md:w-auto bg-[#096B68] md:bg-transparent z-50"
        >
          <li className="py-2 md:py-0">
            <Link href="/" className="text-white font-medium hover:text-[#C1DBB3] transition duration-300 block px-4">Home</Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/about" className="text-white font-medium hover:text-[#C1DBB3] transition duration-300 block px-4">About</Link>
          </li>
          <li className="py-2 md:py-0">
            <Link href="/contact" className="text-white font-medium hover:text-[#C1DBB3] transition duration-300 block px-4">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
