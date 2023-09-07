"use client";

import CurrentUser from "@/hooks/CurrentUser";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { User } from "../../../../types";

const GetUser = () => {
  const { data, isLoading, mutate } = CurrentUser();
  const dataUser = data?.data.user as User;

  console.log('====================================');
  console.log(dataUser);
  console.log('====================================');
  useEffect(() => {}, [dataUser]);
  const route = useRouter();
  return (
    <div className="flex items-center justify-center h-full">
      <div className="flex flex-col">
        <h1 className="text-3xl text-center text-white md:text-5xl">
          who is watching?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10 ">
          <div
            onClick={() => {
              route.push("/");
            }}
          >
            <div className="flex flex-col mx-auto group w-44">
              <div className="overflow-hidden transition-all duration-500 ease-in-out bg-gray-500 border-2 border-gray-300 rounded-md w-44 h-44 group-hover:border-white group-hover:cursor-pointer group-hover:opacity-70">
                <Image
                  height={176}
                  width={176}
                  src="/default-red.png"
                  alt="logo"
                  className=""
                />
              </div>
              <div className="mt-4 text-2xl text-center text-gray-400 group-hover:text-white group-hover:cursor-pointer group-hover:opacity-70">
                {dataUser?.name}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetUser;
