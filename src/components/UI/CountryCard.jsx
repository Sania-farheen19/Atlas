import React from 'react'

import { NavLink } from 'react-router-dom';

const CountryCard = ({ country }) => {
    

    const {flags, name,population,region,capital} = country;
  return (
    <li  className='text-white flex flex-wrap  items-center justify-center my-10   '>
           <div className="flex flex-col  items-center border-2 rounded-3xl bg-gray-900 border-gray-800 p-4 w-96 h-96 m-2 shadow-lg">
  {/* Image Container */}
  <div className="w-56 h-40">
    <img
      src={country.flags?.svg}
      alt={country.flags?.alt || "Country Flag"}
      className="w-full h-full object-cover rounded"
    />
  </div>

  {/* Country Details */}
  <div className="mt-3 text-center space-y-1">
    <p className="text-yellow-300 text-lg font-semibold my-2">{country.name.common}</p>
    <p className="text-white">
      <span className="text-gray-500">Capital:</span> {country.capital[0]}
    </p>
    <p className="text-white">
      <span className="text-gray-500">Population:</span> {country.population.toLocaleString()}
    </p>
    <p className="text-white mb-2">
      <span className="text-gray-500 ">Region:</span> {country.region}
    </p>
    <NavLink to={`/country/${country.name.common}`}> <button className='mt-4 mx-6 border-gray-700 border-2  text-sm rounded-xl text-white font-bold hover:bg-gray-700 py-1 px-3 flex '>Read More
           
           </button></NavLink>
  </div>

  
</div>


    </li>
  )
}

export default CountryCard