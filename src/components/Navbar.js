import React from 'react'

export default function Navbar() {
  return (

    <div className='flex justify-center items-center w-full p-4 bg-black text-gray-200 md:justify-start'>
      <div className="title">
        <h1 className='text-base md:text-xl'>Quick Guard</h1>
      </div>
      <ul className='flex gap-8 py-2 ml-12 '>
        <li className='hover:text-gray-400 cursor-pointer'>Home</li>
        <li className='hover:text-gray-400 cursor-pointer'>Security</li>
        <li className='hover:text-gray-400 cursor-pointer'>Apply</li>

      </ul>

    </div>
  )
}
