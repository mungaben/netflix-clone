

"use client"
import { Input } from "@/components/ui/input";
import Image from "next/image";

import React, { useState } from "react";
import InputAuth from "./InputAuth";
import ButtonAuth from "./ButtonAuth";

const Auth = () => {
    const [Email, setEmail] = useState("")
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
  return (
    <div className="relative min-h-screen min-w-full  bg-[url('/hero.jpg')] bg-cover bg-no-repeat bg-center bg-fixed lg:opacity-80 bg-black">
      <div className="   ">
        <nav className=" px-12 py-5">
          <Image
            src={"/logo.png"}
            height={100}
            width={100}
            alt="logo"
            className="cursor-pointer"
          />
        </nav>
        <div className=" flex justify-center">
          <div className=" bg-black bg-opacity-70 py-16  px-16 self-center w-full lg:w-2/5 lg:max-w-md rounded-md">
            <h2 className=" text-[#fff] text-4xl font-semibold mb-8">
              Sign In
            </h2>
            <div className=" flex flex-col gap-4">
             <InputAuth
                 id="name"
                 Onchange={(e: { target: { value: React.SetStateAction<string>; }; })=>setname(e.target.value)}
                 value={name}
                 type="name"
                 placeholder=" "
                 label="name"            
             
             />
               <InputAuth
                 id="email"
                 Onchange={(e: { target: { value: React.SetStateAction<string>; }; })=>setEmail(e.target.value)}
                 value={Email}
                 type="email"
                 placeholder=" "
                 label="Email"            
             
             />
                <InputAuth
                    id="password"
                    Onchange={(e: { target: { value: React.SetStateAction<string>; }; })=>setpassword(e.target.value)}
                    value={password}
                    type="password"
                    placeholder=" "
                    label="Password"
                />
            </div>
            <div className="py-3 rounded-md transition mt-10">
            <ButtonAuth/>
            </div>
          

          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
