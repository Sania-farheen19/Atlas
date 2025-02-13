import React from 'react'
import CountryData from '../APIs/CountryData.json'
const About = () => {
  return <section className='container p-10'>
    <h2 className='text-center font-bold text-4xl text-white mb-9'>Here are the Interesting Facts
      <br/>
      we're proud of
    </h2>
        <div className='flex gap-10 justify-center items-center flex-wrap mx-7'>
          
    {CountryData.map((country)=>{

const {id,countryName,capital,population,interestingFact} = country;
  return <div  className='card  border-2 rounded-3xl bg-gray-900 border-gray-700 p-2 w-80 h-72 m-2' key={id}>
  <div className='card-desc p-2'>
    <div className=' p-6'>
      <p className=' text-white text-2xl font-semibold mb-5'>{countryName}</p>
      <p className='text-white'> <span className='text-gray-500'>Capital:
        </span>
        {capital}</p>
        <p className='text-white'> <span className='text-gray-500'>Population:
        </span>
        {population}</p>
        <p className='text-white'> <span className='text-gray-500'>Interesting Fact:
        </span>
        {interestingFact}</p>
    </div>
  </div>
</div>
})}
        </div>

    
  </section>
    
  
}

export default About