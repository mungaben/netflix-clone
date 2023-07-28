


import React from 'react'


interface NavbarItemspRops{
    label:string
}

const NavBarItem:React.FC<NavbarItemspRops> = ({label}) => {
  return (
    <div  className='text-white transition cursor-pointer hover:text-gray-300'>{label}</div>
  )
}

export default NavBarItem