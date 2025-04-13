import NavLinks from "@/app/ui/index/nav-links";
import Image from "next/image";
import LogoIcon from "public/logo.png";

export default function Header() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 gap-10">
      <div className="flex justify-center">
        <Image src={LogoIcon} width={330} height={95} alt="logo" />
        <div></div>
      </div>

      <div className="flex justify-center bg-orange-500 px-20 md:px-10 gap-10 md:gap-5">
        <NavLinks />
      </div>
    </div>
  );
}
