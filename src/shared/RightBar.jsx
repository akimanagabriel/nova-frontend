import React from 'react'
import { NavLink } from 'react-router-dom'
import { services } from './menuLinks'

function RightBar() {
  return (
    <div className='w-full md:w-3/12 bg-gray-100 px-3 justify-self-end hidden lg:block'>
      <h1 className='text-lg md:text-2xl font-bold text-sky-900 my-2'>Services</h1>
      <ul className='space-y-2'>
        {
          services.map((service) => (
            <li>
              <NavLink to={service.url} className='hover:underline'> {service.title} </NavLink>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default RightBar
