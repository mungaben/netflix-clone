

"use client"


import SingleMoviesHook from '@/hooks/SinglemovieHook';
import { Movie } from '@prisma/client';
import { useRouter } from 'next/navigation';
import React from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const WatchPage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const { id } = params;
  // pass id to SingleMOvieHook  adnd get the data loadiong all stuff

  const { data, error, isLoading } = SingleMoviesHook({id});
  
  const MovieData:Movie= data?.data && data?.data[0]

  return (
    <div className='w-screen h-screen bg-black '>

  
    <div className='fixed z-20 flex flex-row items-center w-full gap-8 p-4 bg-black bg-opacity-70'>
      <AiOutlineArrowLeft onClick={()=>router.push("/")} size={40} color="white" className="cursor-pointer "/>
      <p className='text-xl font-bold text-white md:text-2xl'>
        <span  className='font-light '>
           watching

        </span>
        { MovieData?.title}
      </p>
    </div>
    <video className='w-full h-full ' controls autoPlay src={MovieData?.videoUrl}></video>
    </div>
  );
};

export default WatchPage;
