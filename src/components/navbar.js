import React,{useState} from 'react'
import {IoIosCall} from 'react-icons/io'

function Navbar() {
   const [toggle, settoggle] = useState('hidden ')

 const prop=` w-full md:block md:w-auto mx-auto ${toggle}`
  return (

  <div className=' overflow-clip'> 
<nav  className="rounded fixed top-0 left-0 right-0 z-10 overflow-hidden bg-mwhite opacity-90">
  
  <div className="container flex flex-wrap items-center justify-between mx-auto">
            <button className='text-secorange font-Blinker font-bold text-xl mx-4 cursor-default'>
            VLIGHT INDUSTRIES
            </button>  
                      
    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-iemctwhite rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false" onClick={ ()=>{toggle==='hidden'?settoggle(' '):settoggle('hidden') }} 
    >
      
    <svg className="h-8 w-8" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#DB3D03"><line x1="16" y1="32" x2="48" y2="32"/><line x1="16" y1="20" x2="48" y2="20"/><line x1="16" y1="44" x2="48" y2="44"/></svg>
    </button>

    <div className={prop} id="navbar-sticky">
      <ul className="flex flex-col p-4 md:flex-row md:space-x-10 md:text-sm md:font-medium md:border-0">
        <li>
          <a href="/events" className="  text-xl container flex flex-wrap items-center justify-between  text-morange font-Blinker hover:underline md:mx-auto md:ml-32">
            <button>
            About
            </button>
            </a>
        </li>
        <li>
          <a href="/members" className=" text-xl  text-gray-300 container flex flex-wrap items-center justify-between text-morange font-Blinker hover:underline md:mx-auto">
            <button>
            Products
            </button>
            </a>
        </li>
        <li>
          <a href="/alumni" className=" text-xl  text-gray-300 container flex flex-wrap items-center justify-between text-morange font-Blinker hover:underline md:mx-auto">
            <button>
           Find Us
            </button>
            </a>
        </li>   
      </ul>
    </div>
             <div>
              <button className='text-mwhite font-Blinker text-xl bg-morange w-auto h-full p-5 inline-flex cursor-default'>
                <div>For Enquiries:&nbsp;</div>
             
            <IoIosCall className='mt-1' />
            <div> +91-9007263947</div>
            
            </button>
            </div>          
  </div>
</nav>
    </div>
  )
}

export default Navbar
