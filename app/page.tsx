"use client";
import Image from "next/image";
import Auth from "./(Auth)/AuthUser/components/Auth";
import BilBoard from "./components/BilBoard";
import MoviesList from "./components/MoviesList";
import MyMovies from "./components/MyMovies";
import InfoModel from "./components/InfoModel";
import UseInfoModal from "@/hooks/UseInfoModal";

export default function Home() {
  const { isOpen, closeModel } = UseInfoModal();
  return (
    <>
      <InfoModel onClose={closeModel} visible={isOpen} />
      <BilBoard />
      <div className="pb-40">
        <MyMovies />
      </div>
    </>
  );
}
