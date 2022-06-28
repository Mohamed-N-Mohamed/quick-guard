import React from 'react'

import Image from '../images/Security-1.jpg'
import Image2 from '../images/Security-2.jpg'

export default function Home() {
  return (
    <div className='home bg-black h-96 bg-cover bg-center relative'>
      <img src={Image} alt="" className='w-full h-full object-cover'/>
      <div className="p-4 text-center md:p-24 absolute top-0 right-0">
      <h3 className='text-white text-6xl font-bold'>Security Guarding Services</h3>
      <h4 className='text-white text-3xl font-light mt-5'>We Are Passionate About Protecting And Serving</h4>
      </div>


      <div className="about p-8 md:flex md:justify-center md:items-center">
        <div className="about-img">
        <img src={Image2} alt="" className='w-full h-full object-cover'/>
          
        </div>

        <div className="about-content px-8">
          <p className='text-2xl font-bold md:px-12'>Welcome to one of the UK's leading security & manned guarding providers with branches across the UK</p>

          <p className='text-2xl md:px-12 mt-5'>
          Our mission at Quick Guard is to deliver the highest level of service to our clients whilst offering a complete cost effective Security Solution.
          </p>
        </div>
      </div>



      <div className="services">
        <h1 className='text-center'>Services</h1>
      </div>

      
    </div>
  )
}
