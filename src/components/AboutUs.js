import React from 'react'
import india from '../assets/india.png'
import HeroCar from './HeroCar'

function AboutUs() {
  return (
    <div className='font-Blinker py-2'>
        <div className="text-morange text-[10vh] font-semibold px-4">
          About Us
        </div>
        <div className='m-3 flex lg:flex-row flex-col-reverse'>
        <div className='text-[3vh] lg:w-1/2 p-4'>
          <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nostrum corporis cumque iure veniam sequi atque adipisci quisquam, harum magni officiis, magnam assumenda a accusamus natus 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nostrum corporis cumque iure veniam sequi atque adipisci quisquam, harum magni officiis, magnam assumenda a accusamus natus 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nostrum corporis cumque iure veniam sequi atque adipisci quisquam, harum magni officiis, magnam assumenda a accusamus natus 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, nostrum corporis cumque iure veniam sequi atque adipisci quisquam, harum magni officiis, magnam assumenda a accusamus natus 
        </div>
        <div className='text-[4vh] text-morange pt-10 font-semibold'>
          GST Number:
          </div>
        </div>

        <div className='overflow-hidden sm:mx-32 flex flex-col justify-center items-center'>
          <img src={india} alt="india map" className=' w-max-[50vw] mr-14 '/>
          <div className='text-[6vh] text-morange pt-10 font-semibold'>
            Leading Light Distributor all over India.
          </div>
        </div>
        </div>
    </div>
  )
}

export default AboutUs
