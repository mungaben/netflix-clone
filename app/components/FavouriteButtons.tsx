"use client";
import React, { useCallback } from "react";
import { AiOutlineCheckCircle, AiOutlinePlusCircle } from "react-icons/ai";
import axios from "axios";
import CurrentUser from "@/hooks/CurrentUser";
import Favourite from "@/hooks/Favourite";
import { Movie } from "@prisma/client";

interface FavouriteButtonsProps {
  MovieId: string;
}

const FavouriteButtons: React.FC<FavouriteButtonsProps> = ({ MovieId }) => {
  const { data, mutate } = CurrentUser();
  const { data: Favourites, mutate: MutateFav } = Favourite();

  const IsFavourite = useCallback(() => {
    // check if favorite includes movieId
    return Favourites?.data?.map((item: Movie) => item.id).includes(MovieId);
  }, [Favourites?.data, MovieId]);

  const favourite: boolean = IsFavourite();

  // toogle favourite
  const toogleFavourite = useCallback(
    async (event: React.MouseEvent<HTMLElement>) => {
      event.preventDefault();
      let response;
      if (favourite) {
        // check if movie is in favourite list

        console.log("in favourite", MovieId);
        response = await axios.delete(`/api/MovieList/${MovieId}`);
      } else {
        // check if movie is in favourite list

        response = await axios.post(`/api/MovieList/${MovieId}`);
      }

      const UpdatedFavouriteIds = response?.data?.favoriteIds;

      mutate({
        ...data?.data,
        favoriteIds: UpdatedFavouriteIds,
      });

      MutateFav();
    },
    [favourite, mutate, data?.data, MutateFav, MovieId]
  );

  // Change icons
  const Icon = favourite ? AiOutlineCheckCircle : AiOutlinePlusCircle;
  const color = favourite ? "red" : "white";
  return (
    <div
      onClick={(e) => {
        toogleFavourite(e);
      }}
      className="transition border-2 border-white rounded-full cursor-pointer hover:border-neutral-100"
    >
      <Icon size={40} color={color} className="p-2 bg-black rounded-full" />
    </div>
  );
};

export default FavouriteButtons;
