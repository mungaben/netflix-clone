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
interface MovieCardProps {
  movie: Movie;
}
const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <div className=" group bg-zinc-900 col-span relative h-[12vw] text-white ">
      <HoverCard>
        <HoverCardTrigger>
          <Image
            src={movie?.thumbnailUrl}
            alt="movie poster"
            fill
            className=" cursor-pointer object-cover transition  duration-200 shadow-lg rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"
          />
        </HoverCardTrigger>
        <HoverCardContent className="translate-x-[12vw] flex min-w-full scale-150">
            <Image
                src={movie?.thumbnailUrl}
                alt="movie poster"
                fill
                className="object-cover w-full h-[12vw] rounded-md"
            />
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
