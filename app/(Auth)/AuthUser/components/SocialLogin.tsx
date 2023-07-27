"use client";

import { signIn } from "next-auth/react";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div className="flex flex-row items-center justify-center gap-4 ">
      <div onClick={()=>signIn('google',{callbackUrl:'/'})} className="flex items-center justify-center w-10 h-10 transition duration-200 ease-in-out bg-white rounded-full cursor-pointer hover:opacity-80">
        <FcGoogle size={30} />
      </div>

      <div onClick={()=>signIn('github',{callbackUrl:'/'})} className="flex items-center justify-center w-10 h-10 transition duration-200 ease-in-out bg-white rounded-full cursor-pointer hover:opacity-80">
        <FaGithub size={30} />
      </div>
    </div>
  );
};

export default SocialLogin;
