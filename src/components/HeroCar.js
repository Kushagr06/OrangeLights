import React from 'react'
import office from '../assets/office_pics/office.jpg'
import wedding from '../assets/office_pics/weddinglights.jpg'
import street from '../assets/office_pics/streetlight.jpg'
import rest from '../assets/office_pics/restaurant_lights.png'
import land from '../assets/office_pics/land.png'
import out from '../assets/office_pics/outside.png'
// https://unsplash.it/200/200

function HeroCar() {
  return (
<div>
<section className="text-gray-600 body-font mb-2">
  <div className="container px-5 py-12 mx-auto flex flex-wrap">
    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={office} />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={wedding} />
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={street}/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src={rest} />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={land} />
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src={out} />
        </div>
      </div>
    </div>
  </div>
</section>
</div>
  )
}

export default HeroCar
