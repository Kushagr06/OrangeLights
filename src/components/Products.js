import React from 'react'
import Productbar from './ProductsBar'
import Items from './Items'

function Products() {
  return (
    <>
     <Productbar />
      <div className='font-Blinker py-2 bg-morange'>
        <div className="text-mwhite text-[10vh] font-semibold px-4">
          Our Products
        </div>
        <Items />
    </div>
    </>
  )
}

export default Products
