import React,{useState} from 'react'

function Navbar() {
   const [toggle, settoggle] = useState('hidden ')

 const prop=` w-full md:block md:w-auto sm:mt-8 ${toggle}`
  return (

  <div className=' overflow-clip pb-28 bg-backcol  '> 
<nav  className="px-2 sm:px-4 py-3 rounded fixed top-0 left-0 right-0 z-10 overflow-hidden bg-morange text-mwhite">
  <div className="container flex flex-wrap items-center justify-between mx-auto">

  <a href="/" className=" md:text-xl block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-50 md:p-0 font-Blinker">
            <button>
            Events
            </button>
            </a>

    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-iemctwhite rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 " aria-controls="navbar-default" aria-expanded="false" onClick={ ()=>{toggle==='hidden'?settoggle(' '):settoggle('hidden') }} 
    >
      
    <svg className="h-8 w-8" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#000000"><line x1="16" y1="32" x2="48" y2="32"/><line x1="16" y1="20" x2="48" y2="20"/><line x1="16" y1="44" x2="48" y2="44"/></svg>
    </button>

    <div className={prop} id="navbar-sticky">
      <ul className="flex flex-col p-4 md:flex-row md:space-x-10 md:text-sm md:font-medium md:border-0 px-16 ">
      
        <li>
          <a href="/events" className=" md:text-xl block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-50 md:p-0">
            <button>
            Events
            </button>
            </a>
        </li>
        <li>
          <a href="/members" className=" md:text-xl block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-50 md:p-0">
            <button>
            Members
            </button>
            </a>
        </li>
        <li>
          <a href="/alumni" className=" md:text-xl block py-2 pl-3 pr-4 text-gray-300 rounded hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-gray-50 md:p-0">
            <button>
            Alumni
            </button>
            </a>
        </li>
      
      </ul>
    </div>

  </div>
</nav>
    </div>
  )
}

export default Navbar
