import React from 'react'
import Logo from '../assets/main_logo.png'

function Hero() {
  return (
    <div className='bg-hero-bgs h-screen w-full bg-no-repeat bg-cover bg-center flex justify-center items-center py-2'>
      <img src={Logo} alt="OrangeLights Rad-Ium Group" className='sm:scale-150 scale-100' />
    </div>
  )
}

export default Hero
