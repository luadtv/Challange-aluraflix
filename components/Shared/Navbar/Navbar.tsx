import { NavbarDesktop } from "@/components/Shared/Navbar/NavbarDesktop/NavbarDesktop";
import { NavbarMobile } from "@/components/Shared/Navbar/NavbarMobile/NavbarMobile";

// import { NavbarProps } from "./Navbar.types";

export function Navbar() {


  return (
    <nav>
      <div className="hidden mx-auto md:block">
        <NavbarDesktop />
      </div>
      <div className="md:hidden">
        <NavbarMobile />
      </div>
    </nav>
  );
}
