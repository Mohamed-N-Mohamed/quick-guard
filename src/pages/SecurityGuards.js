import React, { useEffect, useState } from 'react'
import { useCollection } from '../hooks/useCollection'
import SecurityLists from '../components/SecurityLists'
import Footer from '../components/Footer'

export default function SecurityGuards() {
  const { documents, error } = useCollection('guards')
  const [search, setSearch] = useState('')
  const getSearchTerm = (e) => {
    setSearch(e.target.value)

  }
  return (
    <div>
     <h2 className='text-2xl text-center font-bold mb-6'>List of Security Guards</h2>
     <div className="search-bar flex justify-end mr-4 items-center py-4">
      <input type="search" className=' w-1/2 md:w-96 px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none' placeholder='Search Locations...' onChange={(e) => getSearchTerm(e)}/>
       
     </div>
     
     {documents && <SecurityLists guards={documents} key={documents.id} search={search}/>}
     {error && <div className='error p-4 rounded bg-red-300'> {error}</div>}
     <Footer/>
    </div>
    
  )
}
