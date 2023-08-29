"use client";
import { NavBarArray, NavBarItemType } from "@/components/utils/NavBarAndTypes";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BsCart2 } from "react-icons/bs";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import { GiHamburgerMenu } from "react-icons/gi";
import DropDown from "../subComponents/DropDown";
import Expand from "../subComponents/Expand";
const NavBar = () => {
  const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false);

  function handleNavedChanges() {
    setIsNavBarOpen(!isNavBarOpen);
  }
  return (
    <nav className="">
      <div className="flex items-center justify-between py-6 space-x-10">
        <div className="w-36">
          <Image
            width={500}
            height={500}
            src="/dyneLogo.webp"
            alt="dyne logo"
          ></Image>
        </div>
        <div className=" hidden lg:flex items-center justify-between w-full">
          <ul className="flex justify-between text-lg font-medium gap-x-10">
            {NavBarArray.map((item: NavBarItemType, index: number) => {
              return (
                <li
                  key={index}
                  className="flex  relative cursor-pointer items-baseline group "
                >
                  <Link href={item.href}>{item.label}</Link>
                  {item.isDropdown ? (
                    <MdOutlineArrowDropDown
                      size={25}
                      className="-rotate-180 self-center group-hover:rotate-0 duration-300"
                    />
                  ) : (
                    ""
                  )}
                  {item.isDropdown && (
                    <div className="invisible group-hover:visible group-hover:duration-300 py-2  px-2  text-lg font-light rounded bg-slate-200 absolute top-10 left-0 min-w-[7.8rem]">
                      <DropDown item={item} />
                    </div>
                  )}
                </li>
              );
            })}
          </ul>
          <div className="flex items-center rounded border text-gray-600 justify-center gap-x-2 px-3">
            <BiSearch />
            <input
              type="text"
              className=" w-52 xlg:w-80 py-1 px-2 "
              placeholder="Search"
            />
          </div>
          <div className="w-12 relative h-12 shrink-0 bg-blue-100 rounded-full flex items-center justify-center">
            <div className="w-5 h-5 text-sm items-center flex justify-center bg-red-400 rounded-full shrink-0 absolute top-1 right-2">
              0
            </div>
            <BsCart2 size={25} />
          </div>
          {/* Moile Navbar */}
        </div>
        <div
          onClick={handleNavedChanges}
          className={`lg:hidden flex slide-in ${isNavBarOpen ? "open" : ""}`}
        >
          {isNavBarOpen ? (
            <GrClose size={30} className="cursor-pointer" />
          ) : (
            <GiHamburgerMenu size={25} className="cursor-pointer" />
          )}
        </div>
      </div>
      {isNavBarOpen && (
        <div>
          <MobileNav />{" "}
        </div>
      )}
    </nav>
  );
};

export default NavBar;

const MobileNav = () => {
  return (
    <ul className="w-full px-6 py-4 bg-cyan-100">
      {NavBarArray.map((item: NavBarItemType, index: number) => (
        <div key={index}>
          <Expand item={item} />
        </div>
      ))}
    </ul>
  );
};
