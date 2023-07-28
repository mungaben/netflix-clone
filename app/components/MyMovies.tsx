
"use client"


import React from 'react'
import MoviesList from './MoviesList'
import MoviesListHook from '@/hooks/MoviesHook'

const MyMovies = () => {
    const {data} = MoviesListHook()
   
    return (
    <>
    <MoviesList Title='Trending Now' data={data?.data} />
    </>
  )
}

export default MyMovies