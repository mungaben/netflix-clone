


import React from 'react'
 

interface MobilMenuProps{
    visible?:boolean
}

const MobileMenu:React.FC<MobilMenuProps> = ({visible}) => {
    // not visible return null
    if(!visible) return null
  return (
    <div   
    className='absolute left-0 flex w-56 py-5 text-white border-2 border-gray-800 top-8'
    >
        <div
        className='flex flex-col gap-4 '
        >
            <div className='px-3 text-center text-white hover:underline'>
     Home
            </div>

        </div>
    </div>
  )
}

export default MobileMenu