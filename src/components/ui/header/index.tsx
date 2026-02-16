import Image from "next/image";
import { logo } from "@/assets";
import NavBar from "@/components/ui/navBar";

import { FaUserCircle } from "react-icons/fa";
import { IoSearchCircle } from "react-icons/io5";

export default function Header() {
  return (
    <header className="w-full primary-theme p-2 h-16 shadow-2xl fixed top-0 z-10">
      <div className="max-w-7xl h-full mx-auto relative">
        <Image
          className="absolute -top-15 left-1/2 -translate-x-1/2"
          src={logo}
          alt="BrasilNow logo"
          width={250}
          height={250}
        />

        <div className="flex justify-between items-center mt-2">
          <NavBar />
          <div className="flex gap-4 relative">
            <span className="absolute top-[3px] left-1">
              <IoSearchCircle size={25} />
            </span>
            <input
              className="bg-white/40 py-1 px-8 w-0 lg:w-40 outline-none focus:w-60 focus:bg-white rounded-2xl
              transition duration-300"
              type="search"
              placeholder="Buscar"
            />
            <button
              className="lg:bg-white/40 gap-2 py-1 px-2 lg:w-48 rounded-2xl
            flex justify-start items-center cursor-pointer"
            >
              <FaUserCircle size={20} />{" "}
              <span className="hidden lg:inline">Entrar com conta</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
