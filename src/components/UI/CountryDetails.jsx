import React, { useEffect, useState, useTransition } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { getCountryIndData } from '../../APIs/PostApi';
import Loader from './Loader';
import CountryCard from './CountryCard';

const CountryDetails = () => {
  const params = useParams();
  
  const [isPending, startTransition] = useTransition();
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await getCountryIndData(params.id);
        if (!res || !res.data) {
          throw new Error('Invalid API Response');
        }
        
        startTransition(() => {
          setCountry(res.data);
        });
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  if (isPending) return <Loader />;

  return (
    <section className="flex justify-center items-center  h-screen bg-gray-900 relative">
  {country?.length > 0 && (
    <div className="w-full h-1/2 p-4 border-2 border-gray-700 bg-gray-800 rounded-lg shadow-lg text-white flex  justify-center gap-8 items-center mx-56 ">
      {/* Country Flag */}
      <img
        src={country[0].flags.png}
        alt={country[0].flags.alt}
        className=" h-48 object-cover rounded-md my-2 mx-1 "
      />
      

      {/* Country Details */}
     
     <div className='mx-4'>
     <h1 className="text-2xl font-bold">{country[0].name.common}</h1>
      <p className="text-gray-400">Official: {country[0].name.official}</p>
      <p className="mt-2">
        <span className="text-gray-400">Capital:</span> {country[0].capital?.[0]}
      </p>
      <p>
        <span className="text-gray-400">Population:</span> {country[0].population.toLocaleString()}
      </p>
      <p>
        <span className="text-gray-400">Region:</span> {country[0].region}
      </p>

      {/* Languages */}
      <p>
        <span className="text-gray-400">Languages:</span>{" "}
        {Object.values(country[0].languages).join(", ")}
      </p>

      {/* Borders (if available) */}
      {country[0].borders && (
        <p>
          <span className="text-gray-400">Borders:</span> {country[0].borders.join(", ")}
        </p>
      )}
     </div>
     



    </div>
    

  )}

<div>
<NavLink to={"/country"}>
  <button className='bg-gray-700 text-white font-bold px-4 py-2 border rounded-md active:scale-90 absolute  bottom-16  right-60'>Go Back</button>
</NavLink>
</div>
  
</section>

  
  );


}

export default CountryDetails