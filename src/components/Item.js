import React from 'react'
import ItemImage from './ItemImage'

function Item() {
  return (
    <div>
      <section className="text-gray-600 body-font overflow-auto font-Blinker">

  <div className="container px-5 py-12 mx-auto">
    <div className="lg:w-4/5 mx-auto my-auto flex flex-wrap p-4 border-2 border-y-morange border-x-mwhite rounded-xl overflow-auto">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">CATEGORY</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">Animated Night Hill Illustrations</h1>
        <div className="flex mb-4">
          <div className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description
          </div>        
        </div>

        <p className="leading-relaxed mb-4">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam inxigo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean.</p>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">58.00 INR</span>
          
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
          </button>
        </div>
      </div>

      {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center" src="https://dummyimage.com/400x400" /> */}
      <div className="lg:w-1/2 lg:h-auto h-auto object-center w-auto ">
      <ItemImage />
      </div>
    </div>
  </div>
</section>
      
    </div>
  )
}

export default Item
