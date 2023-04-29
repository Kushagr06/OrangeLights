import React,{useState} from 'react'
import Items from './Items'
import info from'../dummy.json'
import catinfo from '../categories.json'

function Products() {
  const [Category, setCategory] = useState(catinfo[0])
  const cat = info.filter((info) =>info.category.includes(Category.id))


  return (
    <>
    <div>
    <header className="text-gray-600 body-font bg-mwhite font-Blinker text-morange border-2 border-morange">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">

        {catinfo.map(data=> <button className={`mr-5 hover:underline px-4`} onClick={()=>{setCategory(data)}}>{data.name}</button>)}
      </nav>
    </div>
  </header>
    </div>
      <div className='font-Blinker py-4 bg-morange'>
        <div className="text-mwhite text-[10vh] font-semibold px-4">
          Our Products 
        </div>
        <div className="text-mwhite text-[6vh] font-semibold px-10">
          Category: {Category.name} 
        </div>
        { cat.length>0 && Category!=null?<Items data={cat} />: <div className='text-2xl p-5 text-mwhite flex justify-center'>No Items currently available</div>}
       
    </div>
    </>
  )
}

export default Products
