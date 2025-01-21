"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Logo } from "@/components/Shared/Logo";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export function NavbarDesktop() {
  const scrollPosition = useScrollPosition();

  return (
    <div
      className={cn(
        "z-30 left-0 right-0 top-0 h-16 fixed w-full transition-all duration-300",
        scrollPosition > 20 ? "bg-black" : "bg-transparent"
      )}
    >
      <div className="px-[4%] mx-auto h-full">
        <div className="flex gap-4 justify-between h-full items-center">
          <div className="flex gap-2 items-center">
            <Logo />
          </div>
          <div className="flex gap-4 items-center">
            <Search className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
