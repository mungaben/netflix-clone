"use client";

import SingleMoviesHook from "@/hooks/SinglemovieHook";
import UseInfoModal from "@/hooks/UseInfoModal";
import { Movie } from "@prisma/client";
import React, { useCallback, useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import PlayButton from "./PlayButton";
import FavouriteButtons from "./FavouriteButtons";

interface InfoModelProps {
  visible?: boolean;
  onClose?: any;
}

const InfoModel: React.FC<InfoModelProps> = ({ visible, onClose }) => {
  const [isVisible, setisVisible] = useState<boolean>(!!visible);
  const { MovieId } = UseInfoModal();
  const movieID: string | undefined = MovieId;
  const { data, isLoading, error } = SingleMoviesHook({ id: movieID });
  const MovieData: Movie = data?.data[0];
  useEffect(() => {
    setisVisible(!!visible);
  }, [visible]);

  const HandleClose = useCallback(() => {
    setisVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-20 flex items-center justify-center overflow-x-hidden overflow-y-auto transition duration-300 ease-in-out transform bg-black ">
      <div className="relative w-auto max-w-2xl mx-auto overflow-hidden rounded-md ">
        <div
          className={`${
            isVisible ? " scale-100" : "scale-0"
          } transform duration-100 relative fx-auto bg-zinc-900 drop-shadow-md `}
        >
          <div className="relative bg-red-400 h-96">
            <video
              className=" w-full brightness-[60%] object-cover h-full"
              src={MovieData?.videoUrl}
              poster={MovieData?.thumbnailUrl}
              muted
             
            ></video>
            <div
            className="absolute flex items-center justify-center w-10 h-10 bg-black rounded-full cursor-pointer top-3 right-3"
            
            onClick={()=>{}}
            >
                <AiOutlineClose size={25} color="white"/>

            </div>
            <div className="absolute bottom-[100px] left-10">
                <p className="h-full mb-8 text-2xl font-bold text-white md:text-4xl lg:text-5xl">
                    {MovieData?.title}
                </p>
                <div className="flex flex-row items-center gap-4 ">
                    <PlayButton id={MovieData.id} />
                    <FavouriteButtons MovieId={MovieData.id} />

                </div>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoModel;
