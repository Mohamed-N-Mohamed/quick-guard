import React from 'react'

import {Link} from 'react-router-dom'

export default function SecurityLists({guards}) {
  return (
    <div className='guards-list md:flex md:justify-center md:items-center gap-4 md:flex-wrap'>
      {guards.length === 0 && <p className='text-2xl text-red-300'>No Secuirty Guards in the database</p>}

      {guards.map((guard) => {
        if(guard.approved){
          return (
            <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-4" key={guard.id}>
            <img className="rounded-t-lg object-cover" src={guard.image} alt="" />
        <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{guard.first} {guard.last}</h5>
               
            
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{guard.description}.</p>
            <Link to={`/details/${guard.id}`} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
                Find Out More
            </Link>

            <span className='inline-flex items-center  py-2 px-3 text-sm font-medium text-center text-white bg-black rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-8'>
              {guard.location}

            </span>
        </div>
    </div>
          )
        }
        
      })}
            
      
    </div>
  )
}
