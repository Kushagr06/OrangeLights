import React,{useState} from 'react'


function ItemImage(props) {
  const data=props.images
  const [pic, setPic] = useState(data[0])
  const num=data.length;

  return (
    <div className='flex flex-col-reverse'> 

    <div className='flex justify-center py-1'>
          <img alt="unavailable" className="w-auto lg:h-[65vh] m-2 p-2 overflow-auto h-[37vh]"src={`https://drive.google.com/uc?export=view&id=${pic}`} />
    </div>

   <div className='flex justify-center'>
    {
    num>1?
    <div className='container bg-morange sm:w-[0.75] h-[10vh] w-auto p-5 m-1  flex justify-center items-center'>
      {data.map(imgs=>(<img src={`https://drive.google.com/uc?export=view&id=${imgs}`} alt="..." className="p-2 flex  duration-200 cursor-pointer  object-scale-down h-[10vh] w-auto overflow-auto hover:scale-110" onClick={ ()=>{setPic(imgs)}} />))}  
  </div>
  :""
}
  </div>    
  </div>

  )
}

export default ItemImage
