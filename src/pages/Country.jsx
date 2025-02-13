import React, { useEffect, useState, useTransition } from 'react';
import { getCountryData } from '../APIs/PostApi';
import CountryCard from '../components/UI/CountryCard';
import Loader from '../components/UI/Loader'; // Ensure this is imported
import SearchFilter from '../components/UI/SearchFilter';

const Country = () => {
  const [isPending, startTransition] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await getCountryData();
        if (!res || !res.data) {
          throw new Error('Invalid API Response');
        }
        
        startTransition(() => {
          setCountries(res.data);
        });
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries();
  }, []);

  if (isPending) return <Loader />;

  // console.log(search,filter)

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return true; // Return true instead of the whole country object
  };
  
  // Filter logic
  const filterRegion = (country) => {
    if (filter === "all" || !filter) return true; // Return true instead of country object
    return country.region.toLowerCase() === filter.toLowerCase();
  };
  
  // Main filtering logic
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );
  

  return (
    <section>
      <SearchFilter  search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries} />
      <ul className='grid grid-cols-4 mx-12 mt-8 '>
        {filterCountries .map((curCountry, index) => (
          <CountryCard country={curCountry} key={curCountry.cca3 || index} />
        ))}
      </ul>
    </section>
  );
};

export default Country;
