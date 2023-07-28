import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
import { Movie } from "@/types";
import Image from "next/image";
interface MovieCardProps {
    movie: Movie;
}
const MovieCard:React.FC<MovieCardProps> = ({
    movie,
}) => {
  return (
  <div  className=" group bg-zinc-900 col-span relative h-[12vw] ">
   <Image
   src={movie?.thumbnailUrl}
   alt="movie poster"
   fill
   className=" cursor-pointer object-cover transition  duration-200 shadow-lg rounded-md group-hover:opacity-90 sm:group-hover:opacity-0 delay-300 w-full h-[12vw]"
   />
  </div>
  );
};

export default MovieCard;
