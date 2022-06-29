import React from 'react'
import { useState } from 'react'
import { useAdd } from '../hooks/useAdd'

export default function Apply() {
  //states
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [rate, setRate] = useState(0)
  const [success, setSuccess] = useState(false)

  const {addData, error} = useAdd('guards')

  const handleSubmit = (e) => {
    e.preventDefault()
    //add to database
    addData(first, last, location, description, rate)

    //success 
    setSuccess(true)

    //clear values
    clearValues()

    resetState()
  

  }


  const clearValues = () => {
    setFirst('')
    setLast('')
    setLocation('')
    setDescription('')
    setRate(0)

    // setSuccess(false)
  }

  const resetState = () => {
    setTimeout(() => {
      setSuccess(false)

    }, 3000)
  }


  return (
    <div>

      <form className="px-4 rounded mx-auto max-w-3xl w-full my-32 inputs space-y-6" onSubmit={handleSubmit}>
      <div>
        <h1 className="text-4xl font-bold">Apply here</h1>
        <p className="text-gray-600 mt-4">
        Type your first name, last, hourly rate and location you work at
        </p>
      </div>
      <div className="flex space-x-4">
        <div className="w-1/2">
          <label>First Name</label>
          <input
            className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
            type="text"
            value={first}
            onChange={(e) => setFirst(e.target.value)}
            required
          />
        </div>
        <div className="w-1/2">
          <label htmlFor="lastname">Last Name</label>
          <input
            className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
            type="text"
            value={last}
            onChange={(e) => setLast(e.target.value)}
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="location">Location</label>
        <input
          className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

      </div>

      <div>
        <label htmlFor="description">Description</label>
        <input
          className="border border-gray-400 px-4 py-2 rounded w-full focus:outline-none focus:border-teal-400"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
      
        />

      </div>
      <div>
        <label htmlFor="budget">Hourly Rate</label>
        <div className="flex w-1/4">
          <div className="rounded-l flex text-white items-center px-4 bg-gray-400">
            £
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 fill-current"
              viewBox="0 0 288 512"
            >
         
      
            </svg>
          </div>
          <input
            min="0"
            step="0.01"
            placeholder="0.00"
            className="border border-gray-400 px-4 py-2 rounded-r w-full focus:outline-none focus:border-teal-400"
            type="number"
            name="budget"
            id="budget"
            onChange={(e) => setRate(e.target.value)}
            value={rate}
            required
          />

        
        </div>
      </div>

      <div className="submit-button">
        <button className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mb-6'>
              Submit
            </button>

            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Error - </strong>
            <span className="block sm:inline">{error}</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            
            </span>
            </div>}


            {success && <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">Success - </strong>
            <span className="block sm:inline">Added to database</span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
            
            </span>
            </div>}
          </div>
    </form>
    </div>
  )
}
