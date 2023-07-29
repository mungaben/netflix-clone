
"use client"


import React from 'react'
import { BsFillPlayFill } from 'react-icons/bs'
import ButtonAuth from '../(Auth)/AuthUser/components/ButtonAuth'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
// interface for id
interface PlayButtonProps {
  id: string
}
const PlayButton:React.FC<PlayButtonProps> = ({
  id,
}) => {
    const router=useRouter()
    // onclick push roter to "watch"
  return (
    <Button onClick={()=>router.push(`/watch/${id}`)} variant="secondary" className='flex flex-row items-center w-auto px-2 py-1 text-xs font-semibold transition bg-white rounded-md md:py-2 md:px-4 lg:text-lg hover:bg-neutral-300'>
        <BsFillPlayFill size={25}  className="mr-1"/>

    </Button>
  )
}

export default PlayButton