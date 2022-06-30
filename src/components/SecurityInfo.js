import React from 'react'
import {Link} from 'react-router-dom'

export default function SecurityInfo({ info }) {
  
  return (
    <div className='container p-4 '>
      <div className="respnse-title py-8 ">
        <h3 className='text-4xl pb-4 font-bold'>Responsiblity</h3>
      </div>
      {info.res.map((res) => (
        <div className='py-4 px-6 list-disc text-lg' key={res}>
          <li className=''>{res}</li>
        </div>
      ))}

       <div className="skills-title py-8 ">
        <h3 className='text-4xl pb-4 font-bold'>Skills</h3>
      </div>

      {info.skills.map((res) => (
        <div className='py-4 px-6 list-disc text-lg' key={res}>
          {/* Warning: Received `true` for a non-boolean attribute `className`.*/}
          {<li className>{res}</li> }
        </div>
      ))}

      <div className="rate py-4 flex items-center justify-between mb-8">
        <div className="text-4xl font-bold">Hourly Rate</div>
          <div className="text-4xl">£{info.rate}</div>
      </div>

      <div className="book-seasion p-4">
        <p className='text-lg pb-4'>If you are interested and want to book a seassion you can click the button below</p>

        <Link to={''} className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ">
               Book a Seassion
            </Link>

      </div>
     
    </div>
  )
}
