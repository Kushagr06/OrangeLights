import React,{useState} from 'react'
import wedding from '../assets/office_pics/weddinglights.jpg'
import street from '../assets/office_pics/streetlight.jpg'
import rest from '../assets/office_pics/restaurant_lights.png'
import out from '../assets/office_pics/outside.png'

function ItemImage() {
  const [pic, setPic] = useState(out)
  const num=1;
  
  return (
    <div className='flex flex-col-reverse'> 

    <div className='flex justify-center py-1'>
          <img alt="ecommerce" className="w-auto lg:h-[65vh] m-2 p-2 overflow-auto h-[37vh]" src={pic} />
    </div>

   <div className='flex justify-center'>
    {
    num?
    <div className='container bg-morange sm:w-[0.75] h-[10vh] w-auto p-5 m-1  flex justify-center items-center'>
      <img src={wedding} alt="..." className="p-2 flex  duration-200 cursor-pointer  object-scale-down h-[10vh] w-auto overflow-auto hover:scale-110" onClick={ ()=>{setPic(wedding)}} />
      <img src={street} alt="..." className="p-2 flex duration-200 cursor-pointer object-scale-down h-[10vh] w-auto overflow-auto hover:scale-110" onClick={ ()=>{setPic(street)}}/>
      <img src={rest} alt="..." className="p-2 flex duration-200 cursor-pointer object-scale-down h-[10vh] w-auto overflow-auto hover:scale-110" onClick={ ()=>{setPic(rest)}}/>    
      <img src={out} alt="..." className="p-2 flex duration-200 cursor-pointer object-scale-down h-[10vh] w-auto overflow-auto hover:scale-110" onClick={ ()=>{setPic(out)}}/>    
  </div>
  :""
}
  </div>    
  </div>

  )
}

export default ItemImage
