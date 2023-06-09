import React ,{useEffect} from 'react'
import ItemImage from './ItemImage'
import {useLocation} from 'react-router-dom'
import {FaArrowLeft} from 'react-icons/fa'
// import {Link} from 'react-router-dom'
import {IoIosCall} from 'react-icons/io'
import {useNavigate} from 'react-router-dom'

function Item() {
  const navigate=useNavigate()
  const location= useLocation();
  const data=location.state
  useEffect(()=>{
    window.scrollTo({top:0,left:0});
  })
  return (
    <div>
      <section className="text-gray-600 body-font overflow-auto font-Blinker">

  <div className="container px-5 py-12 mx-auto">
  <div className='text-morange p-5 cursor-pointer'> 
          <button onClick={()=>navigate(-1)}>     
          <FaArrowLeft />
          </button>  
        </div>
    <div className="lg:w-4/5 mx-auto my-auto flex flex-wrap p-4 border-2 border-y-morange border-x-mwhite rounded-xl overflow-auto">
      <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
       
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-4">{data.name}</h1>
        <div className="flex mb-4">
          <div className="flex-grow text-indigo-500 border-b-2 border-indigo-500 py-2 text-lg px-1">Description
          </div>        
        </div>

        <p className="leading-relaxed mb-4">{data.description}</p>
        <div className="flex">
          
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
          </button>
        
        </div>
        <div className=' bg-morange text-mwhite inline-flex text-2xl p-5'>
          <div>For Enquiries:&nbsp;</div>
             
             <IoIosCall className='mt-1' />
             <div> +91-9007263947</div>
          </div>
      </div>
      
      {/* <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center" src="https://dummyimage.com/400x400" /> */}
      <div className="lg:w-1/2 lg:h-auto object-center">
      <ItemImage images={data.images} />
      </div>
      
    </div>
  </div>
  
</section>
      
    </div>
  )
}

export default Item
