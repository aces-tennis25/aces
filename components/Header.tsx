import React from "react";
import { CiMenuFries } from "react-icons/ci";
import Logo from "@/components/Logo";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import NavLinks from "@/components/NavLinks";

const Header = () => {
  return (
    <div className="2xl:hidden absolute z-40 left-0 top-0 right-0 px-15 py-5">
      <div className="mx-auto">
        <div className="flex items-center justify-between">
          <Logo />
          <Sheet>
            <SheetTrigger className="cursor-pointer">
              <CiMenuFries className="text-white text-3xl" />
            </SheetTrigger>

            <SheetContent
              className="bg-white border-0 flex flex-col items-center"
              side="left"
            >
              <SheetHeader>
                <SheetTitle>
                  <Logo />
                </SheetTitle>
                <SheetDescription className="sr-only">
                  Navigation Menu
                </SheetDescription>
              </SheetHeader>
              <NavLinks />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Header;
