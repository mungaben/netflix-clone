
"use client"
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import { Movie } from "@/types";
import Image from "next/image";
import { BsFillPlayFill } from "react-icons/bs";
import FavouriteButtons from "./FavouriteButtons";
import { useRouter } from "next/navigation";
interface MovieCardProps {
  movie: Movie;
}
const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const router=useRouter()
  return (
    <div className=" group bg-zinc-900 col-span relative h-[12vw] text-white ">
      <HoverCard>
        <HoverCardTrigger>
          <Image
            src={movie?.thumbnailUrl}
            alt="movie poster"
            fill
            className=" cursor-pointer object-cover transition  duration-200 shadow-lg rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-200 w-full h-[12vw]"
          />
        </HoverCardTrigger>
        <HoverCardContent className="translate-x-[12vw] flex min-w-full scale-150">
          {/* <Image
                src={movie?.thumbnailUrl}
                alt="movie poster"
                fill
                className="object-cover rounded-md"
            /> */}
          <Card>
            <CardContent>
              <div className="flex items-center justify-center gap-4 ">
                <Image
                  src={movie?.thumbnailUrl}
                  alt="movie poster"
                  fill
                  className="object-cover rounded-md"
                />
                <div
                  onClick={() => {}}
                  className="absolute bottom-0 left-0 z-50 w-full p-2 text-transparent transition shadow-lg bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 lg:p-4 rounded-b-md"
                >
                  <div className="flex items-center justify-center gap-4">
                    <span  onClick={()=>router.push(`/watch/${movie.id}`)} className="flex items-center justify-center p-2 rounded-full bg-slate-50" >
                    <BsFillPlayFill size={30} color={"white"}  className="p-2 bg-black rounded-full"/>
                    </span>
                    
                    <FavouriteButtons MovieId={movie.id}/> 
                    <hr className="items-center justify-center w-full bg-slate-100" />
                  </div>
                  <div className="flex flex-col items-start justify-center ml-8">
                    <p className="ml-4 font-semibold text-green-400 flex-flex-row ">
                      Time
                      <span className="text-white ">
                       
                        {new Date().getFullYear()}
                      </span>
                    </p>
                    <div className="flex flex-row items-center gap-2 mt-4 ">
                      <p className=" text-white text-[10px] lg:text-sm">
                        {movie?.duration}
                      </p>
                    </div>
                    <div className="flex flex-row items-center gap-2 mt-4 ">
                      <p className=" text-white text-[10px] lg:text-sm">
                        {movie?.genre}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </HoverCardContent>
      </HoverCard>

      {/* <Image
        src={movie?.thumbnailUrl}
        alt="movie poster"
        fill
        className=" cursor-pointer object-cover transition  duration-200 shadow-lg rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"
      />
      <div
        className="  opacity-0
        absolute
        top-0
        transition
        duration-200
        z-10
        
        sm:visible
        delay-300
        w-full
        bg-red-300
        scale-0
        group-hover:scale-110
        group-hover:-translate-y-[6vw]
        group-hover:translate-x-[2vw]
        group-hover:opacity-100"
      >
        <Image
          className="  
          cursor-pointer
    object-cover
    transition
    duration
    shadow-xl
    rounded-t-md
    w-full
    h-[12vw]"
          src={movie?.thumbnailUrl}
          alt="movie poster"
          fill
        />
      </div> */}
    </div>
  );
};

export default MovieCard;
