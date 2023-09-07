"use client";

import React from "react";

import { Movie } from "@/types";
import { isEmpty } from "lodash";
import MovieCard from "./MovieCard";

interface MovieListProps {
  data: Movie[];
  Title: string;
}
const MoviesList: React.FC<MovieListProps> = ({ data, Title }) => {
  if (isEmpty(data)) {
    return null;
  }
  return (
    <div className="px-4 mt-4 space-x-8 md:px-12">
      <div>
        <p className="font-semibold text-white text-md md:text-xl lg:text-2xl">
          {Title}
        </p>
        <div className="grid min-[450px]:grid-cols-4 gap-2  grid-cols-1">
          {data.map((movie: Movie) => (
            <div key={movie.id}>
             <MovieCard movie={movie}/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoviesList;
