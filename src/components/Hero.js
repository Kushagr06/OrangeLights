import React from 'react'
import Logo from '../assets/logo.svg'
import {SlArrowDown} from 'react-icons/sl';
import { Link} from 'react-scroll';


function Hero() {

  return (
    <div className='bg-hero-bgs h-screen w-full bg-no-repeat bg-cover bg-center flex flex-col py-2 text-mwhite font-Blinker items-center justify-between'>

      
      <img src={Logo} alt="OrangeLights Rad-Ium Group" className='sm:scale-[3.2] lg:scale-[2.6] scale-[2] my-10 sm:mt-96 mt-80 lg:mt-72 ' />
      
      <div className='flex justify-center text-[6vh] flex-col hover:translate-y-3 duration-200'>
      <Link 
            activeClass='active'
            to='Products'
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}>
      <button className='cursor-pointer'>
        <div>
    Our Products
    </div>
    <div className="flex justify-center text-[7vh] mb-2">
      <SlArrowDown/>   
    </div>
    </button>
    </Link>
    </div>
    </div>
  )
}

export default Hero
