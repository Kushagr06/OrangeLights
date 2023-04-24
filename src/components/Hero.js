import React from 'react'
import Logo from '../assets/logo.svg'
import {SlArrowDown} from 'react-icons/sl';

function Hero() {
  return (
    <div className='bg-hero-bgs h-screen w-full bg-no-repeat bg-cover bg-center flex flex-col py-2 text-mwhite font-Blinker items-center justify-between'>

      
      <img src={Logo} alt="OrangeLights Rad-Ium Group" className='sm:scale-[3] lg:scale-[2.6] scale-[2] my-10 sm:mt-96 mt-80 lg:mt-72 ' />
      
      <div className='flex justify-center text-[7vh] flex-col'>
      <button className='cursor-pointer hover:translate-y-2 duration-200'>
        <div>
    Our Products
    </div>
    <div className='flex justify-center text-[7vh]'>
      <SlArrowDown />
    </div>
    </button>
    </div>
    </div>
  )
}

export default Hero
