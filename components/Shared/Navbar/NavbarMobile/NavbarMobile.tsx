import { Menu, Search } from "lucide-react";
import Link from "next/link";

import { FormVideo } from "@/components/Shared/FormVideo";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Logo } from "@/components/Shared/Logo";
// import { NavbarMobileProps } from "./NavbarMobile.types";
// import { SelectorProfile } from "@/components/Shared/SelectorProfile";

export function NavbarMobile() {


  return (
    <div className="p-4 flex justify-between">
      <Logo />

      <Sheet>
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="bg-black">
          <FormVideo isNew/>

          <div className="border-[1px] border-white/70 my-5" />
          <div className="flex justify-between gap-6 mt-4">
            <Search className="cursor-pointer" />

          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
