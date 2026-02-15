"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className="relative">
      <button
        onClick={handleToggleMenu}
        className="flex items-center gap-2 text-white font-bold cursor-pointer"
      >
        {isMenuOpen ? <IoClose size={25} /> : <RxHamburgerMenu size={25} />}
        <span className="hidden lg:inline">Menu</span>
      </button>

      <div
        className={`absolute left-0 w-full top-12 
    transition-all duration-300
    ${
      isMenuOpen
        ? "opacity-100 translate-y-0 pointer-events-auto"
        : "opacity-0 -translate-y-2 pointer-events-none"
    }`}
      >
        <ul className="flex gap-6 px-6 py-3">
          <li>
            <Link href="/news/geral">Geral</Link>
          </li>
          <li>
            <Link href="/news/economia">Economia</Link>
          </li>
          <li>
            <Link href="/news/politica">Política</Link>
          </li>
          <li>
            <Link href="/news/mundo">Mundo</Link>
          </li>
          <li>
            <Link href="/news/saude">Saúde</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

// geral: "https://g1.globo.com/rss/g1/",
// economia: "https://g1.globo.com/rss/g1/economia",
// politica: "https://g1.globo.com/rss/g1/politica",
// mundo: "https://g1.globo.com/rss/g1/mundo",
// saude: "https://g1.globo.com/rss/g1/ciencia-e-saude",
