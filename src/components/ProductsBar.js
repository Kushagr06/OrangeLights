import React from 'react'

function Productbar() {
  return (

    <header className="text-gray-600 body-font bg-mwhite font-Blinker text-morange border-2 border-morange">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:underline px-4 " href="/">First Link</a>
        <a className="mr-5 hover:underline px-4"  href="/">Second Link</a>
        <a className="mr-5 hover:underline px-4"  href="/">Third Link</a>
        <a className="mr-5 hover:underline px-4"  href="/">Fourth Link</a>
      </nav>
    </div>
  </header>
  )
}

export default Productbar
