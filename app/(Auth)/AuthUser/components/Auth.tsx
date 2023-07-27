import Image from "next/image";
import React from "react";

const Auth = () => {
  return (
    <div className="relative min-h-screen min-w-full  bg-[url('/hero.jpg')] bg-cover bg-no-repeat bg-center bg-fixed lg:opacity-50">
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
      </div>
    </div>
  );
};

export default Auth;
