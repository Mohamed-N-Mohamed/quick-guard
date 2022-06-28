import React from 'react'

export default function SecurityLists({guards}) {
  return (
    <div className='guards-list md:flex md:justify-center md:items-center gap-4 md:flex-wrap'>
      {guards.length === 0 && <p className='text-2xl text-red-300'>No Secuirty Guards in the database</p>}

      {guards.map((el) => (
      <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-4">
          <img className="rounded-t-lg object-cover" src={el.image} alt="" />
      <div className="p-5">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{el.first} {el.last}</h5>
          
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{el.description}.</p>
          <a href="#" className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Find Out More
          </a>
      </div>
  </div>

      ))}
            
      
    </div>
  )
}
