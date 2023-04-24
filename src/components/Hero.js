import React from 'react'
import Logo from '../assets/main_logo.png'
import {SlArrowDown} from 'react-icons/sl';

function Hero() {
  return (
    <div className='bg-hero-bgs h-screen w-full bg-no-repeat bg-cover bg-center flex flex-col py-2 text-mwhite font-Blinker items-center justify-around'>

      
      <img src={Logo} alt="OrangeLights Rad-Ium Group" className='sm:scale-125 scale-100 my-10 mt-48' />
      
      <div className='flex justify-center text-[8vh] flex-col'>
      <button className='cursor-pointer hover:translate-y-2 duration-200'>
        <div>
    Our Products
    </div>
    <div className='flex justify-center'>
      <SlArrowDown />
    </div>
    </button>
    </div>
    </div>
  )
}

export default Hero
