"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React from "react";

interface InputAuthProps {
    id?: string;
    Onchange:any;
    value?:string;
    type?:string;
    placeholder?:string;
    label:string
}
const InputAuth:React.FC<InputAuthProps> = ({
    id,
    Onchange,
    value,
    type,
    placeholder,
    label

}) => {

  return (
    <div className=" relative">
      <Input
        type={type}
        value={value}
        onChange={Onchange}
        id={id}
        className=" px-6 focus:outline-none pt-6 text-md focus:ring-0 border-none w-full pb-1 bg-neutral-700 text-white appearance-none peer"
        placeholder=" "
      />
      <Label
        className=" absolute duration-200 
        transform  
         -translate-y-3 z-10 scale-75 
         top-4 peer-focus:-translate-y-3 
         origin-[0] 
        peer-focus:scale-75 
        peer-placeholder-shown:scale-100 
        left-6 peer-placeholder-shown:translate-y-0 
         text-zinc-400"
        htmlFor={id}
      >
       {label}
      </Label>
    </div>
  );
};

export default InputAuth;
