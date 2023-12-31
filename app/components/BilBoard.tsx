"use client";
import UseBillBoard from "@/lib/UseBIlboard";
import React, { useCallback, useEffect } from "react";
import { Movie } from "../../types";
import { Button } from "@/components/ui/button";
import ButtonAuth from "../(Auth)/AuthUser/components/ButtonAuth";
import { AiOutlineInfoCircle } from "react-icons/ai";
import PlayButton from "./PlayButton";
import UseInfoModal from "@/hooks/UseInfoModal";
const BilBoard = () => {
  const { data, isLoading, error } = UseBillBoard();
  const datas = data?.data as Movie;
  const { openModel}=UseInfoModal();
 const handleopenModal=useCallback(()=>{
   openModel( datas?.id);

 },[datas?.id, openModel]);
  useEffect(() => {
       datas
  }, [datas]);
  return (
    <div className="relative h-[56.25vw] bg-white ">
      {/* Video */}
      <video
        poster={datas?.thumbnailUrl}
        className="w-full h-[56.25vw] object-cover brightness-[60%] transition duration-500"
        // autoPlay
        muted
        loop
        playsInline
        src={datas?.videoUrl}
       
      >
        {/* <source src={datas?.videoUrl} /> */}
      </video>
      {/* data */}
      <div className=" absolute top-[38%]  md:to-[40%] ml-4 md:ml-16">
        <p className="text-2xl text-white md:text-5xl h-full w-[58%] lg:text-6xl font-bold drop-shadow-xl ">
          {datas?.title}
        </p>
        <p
          className="text-white 
              mt-3
         md:mt-8
         w-[90%]
         lg:w-[50%]
         md:w-[80%]
         drop-shadow-xl
         font-semibold
         leading-8
        "
        >
          {datas?.description}
        </p>
        <div className="flex flex-row items-center gap-3 mt-3 md:mt-4">
          <PlayButton id={datas?.id} />
          <span onClick={handleopenModal} > 
          <ButtonAuth
            variant="secondary"
            label="More Info"
            icon={AiOutlineInfoCircle}
          />
          </span>
          
        </div>
      </div>
    </div>
  );
};

export default BilBoard;
