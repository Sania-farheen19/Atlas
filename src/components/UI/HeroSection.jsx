import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'
import Country from '../../pages/Country'

const HeroSection = () => {



 
  return (
    <main className='mx-20 my-10'>
      <div className='grid grid-cols-2 gap-2 p-10 w-full '>
        <div className=' p-14  '><h1 className='text-2xl font-bold text-white'>Explore the World ,One Country at a Time</h1>
        <p className='text-white mt-2'>Discover the history,culture and beauty of every nation. Sort,search and filter through countries to find the details you need.</p>
      
        <NavLink
            to="/country"
            className="mt-8 border-2 rounded-xl text-white font-bold hover:bg-gray-700 py-2  flex  justify-center"
          >
            Start Exploring <FaLongArrowAltRight className="ml-3 mt-2" />
          </NavLink>
       
        </div> 
        <div className=' p-7'>
          <img src='/images/world2.avif  ' className='w-full rounded-xl atlas'></img>
        </div>
      </div>
    </main>
  )
}

export default HeroSection