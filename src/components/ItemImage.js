import React from 'react'
import office from '../assets/office_pics/office.jpg'
import wedding from '../assets/office_pics/weddinglights.jpg'
import street from '../assets/office_pics/streetlight.jpg'
import rest from '../assets/office_pics/restaurant_lights.png'
import land from '../assets/office_pics/land.png'
import out from '../assets/office_pics/outside.png'

function ItemImage() {
  return (
    <div className='flex flex-col-reverse'> 

    <div className='flex justify-center py-1'>
          <img alt="ecommerce" className="w-auto h-[72vh] m-2 p-2 overflow-auto" src={out} />
    </div>

   <div className='flex justify-center'>
    <div className='container bg-morange sm:w-[0.75] h-[10vh] w-auto p-5 m-1 rounded-2xl flex justify-center items-center'>
      <img src={office} alt="..." className=" p-2 flex duration-200 cursor-pointer object-scale-down h-[10vh] w-auto overflow-auto"/>
      <img src={wedding} alt="..." className="p-2 flex  duration-200 cursor-pointer  object-scale-down h-[10vh] w-auto overflow-auto"/>
      <img src={street} alt="..." className="p-2 flex duration-200 cursor-pointer object-scale-down h-[10vh] w-auto overflow-auto"/>
      <img src={rest} alt="..." className="p-2 flex duration-200 cursor-pointer object-scale-down h-[10vh] w-auto overflow-auto"/>    
  </div>
  </div>
  </div>

  )
}

export default ItemImage
