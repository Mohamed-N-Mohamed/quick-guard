import React from 'react'
import Footer from '../components/Footer'

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
        <h3 className='text-center text-2xl font-bold'>Services</h3>
        <div className="services-container md:flex gap-4 md:justify-center md:items-center p-8">
        <div className="service w-80 h-44 md:w-96 md:h-48 bg-gray-300 rounded text-center py-4 mb-4">
          <h3 className='text-2xl mb-5 uppercase font-semibold text-xl text-slate-900'>24 Hour Security</h3>
          <p className='text-sm px-8 text-slate-900'>We provide a high quality static guarding service throughout the UK.</p>
        </div>

        <div className="service w-80 md:w-96 h-44 md:h-48 bg-gray-300 rounded text-center py-4 mb-4">
          <h3 className='text-2xl mb-5 uppercase font-semibold text-xl text-slate-900'>Canine Security / Sniffer Dogs</h3>
          <p className='text-sm px-8 text-slate-900'>Hire K9 Dog Handlers We provide professional SIA dog handlers for hire in London and Nationwide</p>
        </div>

        <div className="service w-80 md:w-96 h-44 md:h-48 bg-gray-300 rounded text-center py-4 mb-4">
          <h3 className='text-2xl mb-5 uppercase font-semibold text-xl text-slate-900'>CCTV Installtion</h3>
          <p className='text-sm px-8 text-slate-900'>Security Guards UK will design, install and maintain CCTV systems for your home or business.</p>
        </div>
        </div>
      </div>



      <div className="consultation p-8">
        <div className="container">
        <div className="consultation-content">
        <h3 className='text-center text-2xl font-bold'>FREE CONSULTATION</h3>
        <div className="px-8 py-2">
          <p className='text-xl'>Quick Guard provide free consultation and advice on most cost effective security solutions for your premises. We offer a free of charge site survey and risk assessment to determine the right security services to protect you and your premises. Feel free to get in touch today and speak to one of our security experts to arrange a site visit.</p>

        </div>

        </div>
        </div>

      </div>

      <Footer/>
      
    </div>
  )
}
