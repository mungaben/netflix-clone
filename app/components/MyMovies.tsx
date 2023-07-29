
"use client"


import React from 'react'
import MoviesList from './MoviesList'
import MoviesListHook from '@/hooks/MoviesHook'
import Favourite from '@/hooks/Favourite'

const MyMovies = () => {
    const {data} = MoviesListHook()
    const{data:Favourites}=Favourite()
    console.log('====================================');
    console.log(Favourites?.data);
    console.log('====================================');
    return (
    <div className='pb-40 '>
    <MoviesList Title='Trending Now' data={data?.data} />
    <MoviesList Title="My List" data={Favourites?.data} />
    </div>
  )
}

export default MyMovies