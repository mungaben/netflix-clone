"use client";

import { Button } from "@/components/ui/button";
import { getSession, signOut } from "next-auth/react";
import Image from "next/image";
import React from "react";

const GetUser = () => {
  const session = getSession();

  const user = async () => {
    const usersession = await session;
    console.log("====================================");
    console.log(usersession?.user?.name);
    console.log("====================================");
  };
  console.log("====================================");
  console.log(user());
  console.log("====================================");
  return (
    <div className="flex items-center justify-center h-full">
    <div className="flex flex-col">
      <h1 className="text-3xl text-center text-white md:text-5xl">
        who is watching?
      </h1>
      <div className="flex items-center justify-center gap-8 mt-10 ">
<div onClick={()=>{}}>
    <div className="flex flex-col mx-auto group w-44">
        <div 
        className="overflow-hidden transition-all duration-500 ease-in-out bg-gray-500 border-2 border-gray-300 rounded-md w-44 h-44 group-hover:border-white group-hover:cursor-pointer group-hover:opacity-70"
        >
            <Image 
             height={176}
             width={176}
            src="/default-red.png"
            alt="logo"
            className=""
            />
        </div>
        <div
         className="mt-4 text-2xl text-center text-gray-400 group-hover:text-white group-hover:cursor-pointer group-hover:opacity-70"
         >
            name

        </div>

    </div>
</div>


      </div>
    </div>
  </div>
  );
};

export default GetUser;
