import Image from "next/image";
import { logo } from "@/assets";

export default function Header() {
  return (
    <header className="w-full primary-theme p-1">
      <Image src={logo} alt="BrasilNow logo" width={150} height={150} />
    </header>
  );
}
