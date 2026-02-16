"use client";

import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

    const params = useParams();
    const category = params.category as string;

  const linkStyle = 'block px-3 py-2 hover:bg-blue-500';
  const activeLink = 'border-b-2 border-b-blue-500';

  return (
    <nav className="relative w-full">
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
        <div className="w-full bg-white">
          <ul className="flex gap-6 max-w-6xl mx-auto m-0 p-0 list-none">
            <li>
              <Link
                className={`${linkStyle} ${category === 'geral'? activeLink:''}`}
                href="/news/geral"
              >
                Geral
              </Link>
            </li>
            <li>
              <Link
                className={`${linkStyle} ${category === 'economia'? activeLink:''}`}
                href="/news/economia"
              >
                Economia
              </Link>
            </li>
            <li>
              <Link
                className={`${linkStyle} ${category === 'politica'? activeLink:''}`}
                href="/news/politica"
              >
                Política
              </Link>
            </li>
            <li>
              <Link
                className={`${linkStyle} ${category === 'mundo'? activeLink:''}`}
                href="/news/mundo"
              >
                Mundo
              </Link>
            </li>
            <li>
              <Link
                className={`${linkStyle} ${category === 'saude'? activeLink:''}`}
                href="/news/saude"
              >
                Saúde
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
