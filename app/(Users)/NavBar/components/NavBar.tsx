"use client";
import Image from "next/image";
import React, { use, useCallback, useEffect, useState } from "react";
import NavBarItem from "./NavBarItem";

import { BsBell, BsChevronDown, BsSearch } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import AccountMenu from "./AccountMenu";
 const TOP_OFFSET=60;
const NavBar = () => {
  const [ShowMobileMenu, setShowMobileMenu] = useState(false);
  const [ShowAccountMenu, setShowAccountMenu] = useState(false)
   const [showBackground, setshowBackground] = useState(false)
  const TagglemobileMenu = useCallback(() => {
    setShowMobileMenu((prev) => !prev);
  }, []);
  const TaggleAccountMenu = useCallback(() => {
    setShowAccountMenu((prev) => !prev);
  }, []);
  useEffect(() => {
    const handlescroll=()=>{
      if(window.scrollY>TOP_OFFSET){
        setshowBackground(true)
      }
      else{
        setshowBackground(false)
      }
    }
    window.addEventListener("scroll",handlescroll)
    return () => {
      window.removeEventListener("scroll",handlescroll)
    }
  }, []);

  return (
    <div className="fixed z-40 w-full ">
      <div className={`flex flex-row items-center px-4 py-6 transition duration-200 ease-in-out md:px-16 ${showBackground ? "bg-zinc-900 bg-opacity-90":""} `}>
        <Image src="/logo.png" height={100} width={100} alt="logo" />
        <div className="flex-row hidden ml-8 gap-7 lg:flex">
          <NavBarItem label="Home" />
          <NavBarItem label="Series" />
          <NavBarItem label="New & Popular" />
          <NavBarItem label="Films" />
          <NavBarItem label="MyList" />
          <NavBarItem label="Browse by languages" />
        </div>
        <div
          onClick={() => TagglemobileMenu()}
          className="relative flex flex-row items-center gap-2 ml-8 cursor-pointer lg:hidden"
        >
          <p className="text-sm text-white ">Browse</p>
          <BsChevronDown className={`text-white transition duration-150 ease-linear ${ShowMobileMenu ? "rotate-180 ease-out duration-300":" rotate-0"} ` }/>
          <MobileMenu visible={ShowMobileMenu} />
        </div>
        <div className="flex flex-row items-center gap-4 ml-auto cursor-pointer ">
          <div className="text-gray-200 cursor-pointer hover:text-gay-300">
            <BsSearch />
          </div>
          <div className="text-gray-200 cursor-pointer hover:text-gay-300">
            <BsBell />
          </div>
          <div  onClick={()=>TaggleAccountMenu()} className="relative flex flex-row items-center gap-2 cursor-pointer ">
            <div className="w-6 h-6 overflow-hidden rounded-md lg :w-10 lg-h-10">
              <Image
                src={"/default-blue.png"}
                alt="logo"
                height={100}
                width={100}
              />
            </div>
            <BsChevronDown className={`text-white transition duration-150 ease-linear ${ShowAccountMenu ? "rotate-180 ease-in-out":"rotate-0"} `} />
            
            <div className="">
            <AccountMenu visible={ShowAccountMenu} />
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
