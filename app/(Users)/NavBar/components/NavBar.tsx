import Image from "next/image";
import React from "react";
import NavBarItem from "./NavBarItem";

import { BsChevronDown } from "react-icons/bs";
import MobileMenu from "./MobileMenu";

const NavBar = () => {
  return (
    <div className="fixed z-40 w-full ">
      <div className="flex flex-row items-center px-4 py-6 transition duration-200 ease-in-out md:px-16 bg-opacity-60 bg-zinc-900">
        <Image src="/logo.png" height={100} width={100} alt="logo" />
        <div className="flex-row hidden ml-8 gap-7 lg:flex">
          <NavBarItem label="Home" />
          <NavBarItem label="Series" />
          <NavBarItem label="New & Popular" />
          <NavBarItem label="Films" />
          <NavBarItem label="MyList" />
          <NavBarItem label="Browse by languages" />
        </div>
        <div className="relative flex flex-row items-center gap-2 ml-8 cursor-pointer lg:hidden">
          <p className="text-sm text-white ">Browse</p> 
          <BsChevronDown  className="text-white transition duration-150 ease-linear "/>
          <MobileMenu visible={true}/>
        </div>

      </div>
    </div>
  );
};

export default NavBar;
