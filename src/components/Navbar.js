import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex justify-center items-center w-full p-4 bg-black text-gray-200 md:justify-start'>
      <div className="title">
        <h1 className='text-base md:text-xl'>Quick Guard</h1>
      </div>
      <ul className='flex gap-6 py-2 ml-10'>
       
        <li className='hover:text-gray-400 cursor-pointer'>
          <Link to="/">Home</Link>
        </li>
        <li className='hover:text-gray-400 cursor-pointer'>
          <Link to="/securityguards">Security Guard</Link>
        </li>
        <li className='hover:text-gray-400 cursor-pointer'>
          <Link to="/apply">Apply</Link>
        </li>
       

      </ul>

    </div>
  )
}
