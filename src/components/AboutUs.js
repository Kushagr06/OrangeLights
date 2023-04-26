import React from 'react'
import india from '../assets/india.svg'
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
          We are large scale manufacturers as well as traders of indoor and outdoor lighting having experience of 20 years in the lighting field. Our company can design and supply its products as per our customer's requirements and specifications. We continuously strive for innovation in better products and facilities to give the best to our clients and customers. Our company has been certified with the ISO 9001:2000 quality Authentication Sysytem in 2008. We specialize in distributing to Maharashtra,Gujarat,Goa,Karnataka and all South Indian states but we can fulfill an order from any state in India.
        </div>
        <div className='text-[4vh] text-morange pt-10 font-semibold'>
          GST Number: &nbsp;27AAEFV8363M1ZG
          </div>
        </div>

        <div className='overflow-hidden sm:mx-32 flex flex-col justify-center items-center'>
          <img src={india} alt="india map" className=' w-max-[50vw] mr-14 '/>
          <div className='text-[6vh] text-morange pt-10 font-semibold'>
            Leading Light Distributor all over India.
          </div>
        </div>
        </div>
        <HeroCar />
       
    </div>
  )
}

export default AboutUs
