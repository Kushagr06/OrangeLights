import React from 'react'
import {IoIosCall} from 'react-icons/io'
import {GrMail} from 'react-icons/gr'
import indiamart from '../assets/indiamart.png'


function Footer() {
  return (
   
     <div className='font-Blinker py-2'>
        <div className="text-morange text-[10vh] font-semibold px-4 mb-4">
         Find Us
        </div>
        
        <div className='text-[4vh] text-morange font-semibold py-4 ml-5'>
          <span>
        <IoIosCall className='-mt-2 inline-block' /> &nbsp;+91-9009009090
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
        <a href='..' className='hover:cursor-pointer'>
              <img src={indiamart} alt="Indiamart" className='scale-50'/>
        </a>
        </span>
          </div>  
    </div>
    
  )
}

export default Footer
