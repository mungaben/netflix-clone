


"use client"
import React, { useCallback } from "react";
import { AiOutlineCheckCircle, AiOutlinePlusCircle } from "react-icons/ai";
import axios from "axios";
import CurrentUser from "@/hooks/CurrentUser";
import Favourite from "@/hooks/Favourite";

interface FavouriteButtonsProps {
  MovieId: string;
}

const FavouriteButtons: React.FC<FavouriteButtonsProps> = ({ MovieId }) => {
  const { data, mutate } = CurrentUser();
  const { data: Favourites, mutate: MutateFav } = Favourite();








  const IsFavourite = useCallback(() => {

    const list = data?.data?.favoriteIds || [];
    console.log('====================================');
    console.log("favorlite movies ",list);
    console.log('====================================');
    return list.includes(MovieId);
  }, [data?.data?.favoriteIds, MovieId]);
  console.log('====================================');
  console.log("is favourite ", IsFavourite());
  console.log('====================================');

  const favourite:boolean=IsFavourite();





  // toogle favourite
  const toogleFavourite = useCallback(async (event: React.MouseEvent<HTMLElement>) => {

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




   console.log('====================================');
   console.log("favourite", favourite);
   console.log('====================================');

    const UpdatedFavouriteIds = response?.data?.favoriteIds;



    mutate({
      ...data?.data,
      favoriteIds: UpdatedFavouriteIds,
    });





    MutateFav();
  }, [IsFavourite, mutate, data?.data, MutateFav, MovieId]);










  // Change icons
  const Icon = IsFavourite() ? AiOutlineCheckCircle : AiOutlinePlusCircle;

  return (
    <div
      onClick={(e)=>{toogleFavourite(e)}}
      className="transition border-2 border-white rounded-full cursor-pointer hover:border-neutral-100"
    >
      <Icon size={30} color="white" className="p-2 bg-black rounded-full" />
    </div>
  );
};

export default FavouriteButtons;
