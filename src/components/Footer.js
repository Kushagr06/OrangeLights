import React from 'react'
import {IoIosCall} from 'react-icons/io'
import {GrMail} from 'react-icons/gr'
import indiamart from '../assets/indiamart.png'


function Footer() {
  return (
   
     <div className='font-Blinker py-2'>
         <div className="text-morange text-[10vh] font-semibold px-4 flex lg:justify-start justify-center">
          Find Us
        </div>
        
        <div className='sm:text-[4vw] text-[5vw] text-morange font-semibold ml-3 mt-8'>
          <span className=''>
        <IoIosCall className='inline-block' /> &nbsp;+91-9009009090
        </span>
        <br />
        <span>
        <IoIosCall className='-mt-2 inline-block' /> &nbsp;+91-9009009090
        </span>
        <br />
        <span>
        <IoIosCall className='-mt-2 inline-block' /> &nbsp;+91-9009009090
        </span>
        <br />
        <span>
        <a href='mailto:nkushagr@gmail.com'>
        <GrMail className='-mt-2 inline-block' /> &nbsp;nkushagr@gmail.com
        </a>
        </span>
        <br />
        <span>
        <a href='mailto:shahJay@gmail.com'>
        <GrMail className='-mt-2 inline-block' /> &nbsp;shahJay@gmail.com
        </a>
        </span>
        <span>
        <a href='/' className='hover:cursor-pointer bg-mwhite border-2 border-mwhite'>
              <img src={indiamart} alt="Indiamart" className='w-auto sm:h-[7vw] h-[10vw]'/>
        </a>
        </span>
          </div>  
    </div>
    
  )
}

export default Footer
