
"use client"
import Image from 'next/image'
import Auth from './(Auth)/AuthUser/components/Auth'
import BilBoard from './components/BilBoard'
import MoviesList from './components/MoviesList'
import MyMovies from './components/MyMovies'
import InfoModel from './components/InfoModel'

export default function Home() {
  return (
    < >
    <InfoModel onClose={()=>{}} visible/>
     <BilBoard/>
     <div className='pb-40'>
      <MyMovies/>

     </div>
    </>
  )
}
