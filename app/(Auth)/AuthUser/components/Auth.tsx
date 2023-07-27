

"use client"
import { Input } from "@/components/ui/input";
import Image from "next/image";

import React, { useCallback, useState } from "react";
import InputAuth from "./InputAuth";
import ButtonAuth from "./ButtonAuth";
import CreateAcc from "./CreateAcc";
import { buttonVariants } from "@/components/ui/button";

import axios from "axios";

const Auth = () => {
    const [Email, setEmail] = useState("")
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")


    const [variant, setvariant] = useState("login")

const ToggleVariant=useCallback(()=>{
    if(variant==="login"){
        setvariant("Register") 
    }
    else{
        setvariant("login")
    }
},[variant])


const Register=useCallback(async()=>{
    try {
       const CreateUser= await axios.post("/api/auth/register",{
            name,
            email:Email,
            password
        })
        console.log('====================================');
        console.log(CreateUser);
        console.log('====================================');

        
    } catch (error) {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
    }

},[ name, Email, password])

  return (
    <div className="relative min-h-screen min-w-full  bg-[url('/hero.jpg')] bg-cover bg-no-repeat bg-center bg-fixed lg:opacity-80 bg-black">
      <div className="">
        <nav className="px-12 py-5 ">
          <Image
            src={"/logo.png"}
            height={100}
            width={100}
            alt="logo"
            className="cursor-pointer"
          />
        </nav>
        <div className="flex justify-center ">
          <div className="self-center w-full px-16 py-16 bg-black rounded-md bg-opacity-70 lg:w-2/5 lg:max-w-md">
            <h2 className=" text-[#fff] text-4xl font-semibold mb-8">
              {variant==="login"?"Sign In":"Register"}
            </h2>
            <div className="flex flex-col gap-4 ">
            {variant==="Register"&&
             <InputAuth
                 id="name"
                 Onchange={(e: { target: { value: React.SetStateAction<string>; }; })=>setname(e.target.value)}
                 value={name}
                 type="name"
                 placeholder=" "
                 label="name"            
             
             />
            }
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
            <div className="py-3 mt-10 transition rounded-md">
            <ButtonAuth variant={variant === "login"? "destructive" : "secondary" } label={variant === "login"? "Login" : "Register" } onClick={Register} />
            </div>
            <CreateAcc Onclick={ToggleVariant} variant={variant}/>
          

          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
