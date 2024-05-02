import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between px-5 pt-6">
      <Link href="/">
        <div className="flex gap-2">
          <h1 className="text-lg font-bold uppercase italic text-[#EA1D2C]">
            Rogério
          </h1>
          <div className="relative h-[30px] w-[50px]">
            <Image
              src="/logo.png"
              alt="Rogério Foods"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Link>
      <Button
        size="icon"
        variant="outline"
        className="border-none bg-transparent"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default Header;
