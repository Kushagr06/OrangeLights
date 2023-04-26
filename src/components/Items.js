import React from 'react'

function Items() {
  return (
    <div>
      <section className="text-gray-600 body-font font-Blinker">       
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">

{/* Card */}
    <div className="p-4 md:w-1/4">
<div className="h-full border-2 border-gray-200 border-opacity-30 bg-mwhite overflow-hidden hover:bg-secorange duration-200 hover:cursor-pointer">

  <img className="md:h-36 lg:h-56 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />

  <div className="p-6 ">
    <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
    <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
    <div className="flex items-center flex-wrap ">
      <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href="/">Learn More
        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </a>
    </div>
  </div>
</div>
</div>

    </div>
  </div>
</section>   
    </div>
  )
}

export default Items




