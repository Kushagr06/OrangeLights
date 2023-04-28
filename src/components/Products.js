import React from 'react'
import Items from './Items'
import info from'../dummy.json'

function Products() {
  
  return (
    <>
    <div>
    <header className="text-gray-600 body-font bg-mwhite font-Blinker text-morange border-2 border-morange">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <button className="mr-5 hover:underline px-4 ">Category1</button>
        <button className="mr-5 hover:underline px-4" >Category2</button>
        <button className="mr-5 hover:underline px-4" >Category3</button>
        <button className="mr-5 hover:underline px-4"  >Category4</button>
      </nav>
    </div>
  </header>
    </div>
      <div className='font-Blinker py-4 bg-morange'>
        <div className="text-mwhite text-[10vh] font-semibold px-4">
          Our Products 
        </div>
        <div className="text-mwhite text-[6vh] font-semibold px-10">
          Category {info[0].category} 
        </div>
        <Items data={info} />
    </div>
    </>
  )
}

export default Products
