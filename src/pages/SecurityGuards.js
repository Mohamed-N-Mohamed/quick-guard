import React from 'react'
import { useCollection } from '../hooks/useCollection'
import SecurityLists from '../components/SecurityLists'

export default function SecurityGuards() {
  const { documents, error } = useCollection('guards')

  console.log(documents)

  return (
    <div>
     <h2 className='text-2xl text-center font-bold mb-6'>List of Secuirty Guards</h2>
     {error && <div className='error p-8 rounded bg-red-300'> {error}</div>}
     {documents && <SecurityLists guards={documents}/>}
    </div>
    
  )
}
