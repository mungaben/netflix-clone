
"use client"

import React from 'react'

interface CreateAccProps {
    Onclick:any;
    variant?:string;
}

const CreateAcc:React.FC<CreateAccProps> = ({
    Onclick,
    variant
}) => {
  return (
    <p className=' text-neutral-500 mt-12'>
       {variant === "login"?"New to Netflix? ":"Already have Account"} <span onClick={Onclick} className='text-white ml-1 hover:underline font-semibold cursor-pointer'>
              {variant === "login"?"Register Now.":"Sign In now."}
       </span>
    </p>
  )
}

export default CreateAcc
