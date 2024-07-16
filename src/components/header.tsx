"use client";

import React from "react";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import useScroll from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

const Header = () => {
  const scrolled = useScroll(5);
  const selectedLayout = useSelectedLayoutSegment();

  return (
    <div
      className={cn(
        `sticky inset-x-0 top-0 z-30 w-full transition-all border-b border-gray-200`,
        {
          "border-b border-gray-200 bg-white/75 backdrop-blur-lg": scrolled,
          "border-b border-gray-200 bg-white": selectedLayout,
        }
      )}
    >
      <div className="flex h-[55px] items-center justify-center px-4">
        <div className="flex items-center md:flex">
          <img src="logoundip.png" style={{ width: "50px", height: "40px" }} />
          <span className="font-semibold text-l ml-3 text-black">
            SISTEM MONITORING UNDIP
          </span>
        </div>
      </div>
    </div>
  );
};

export default Header;
