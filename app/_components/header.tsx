import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between px-5 pt-6">
      <div className="flex gap-1">
        <h1 className="text-lg font-bold uppercase text-[#EA1D2C]">Rogério</h1>
        <Image src="/logo.png" alt="Rogério Foods" height={50} width={60} />
      </div>
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
