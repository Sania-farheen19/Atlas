import React from 'react'

const SearchFilter = ({search,setSearch,filter,setFilter,countries,setCountries}) => {

    const handleInputChange = (event)=>{

        event.preventDefault();

        setSearch(event.target.value)

    }

    const handleSelectChange = (event) =>{

        event.preventDefault();
        setFilter(event.target.value)
    }

    const sortCountris = (value) => {

        const sortCountry = [...countries].sort((a,b)=>{
                return value === "asc"
                ? a.name.common.localeCompare(b.name.common)
                : b.name.common.localeCompare(a.name.common);
        });

        setCountries(sortCountry);

    }

    
  return (
    <section className='bg-gray-950 flex justify-around items-center p-3'>


<input type="text " className='bg-gray-800  border-gray-500 w-1/4 px-2 py-2 mx-1 my-2 rounded-xl text-white' placeholder='search' value={search} onChange={handleInputChange} />


<div>
    <button className='bg-gray-800 w-full border border-gray-500 px-2 py-2 mx-1 my-2 rounded-xl text-white active:scale-95' onClick={()=>sortCountris("asc")}>Ascending</button>
</div>
<div>
    <button className='bg-gray-800 w-full border border-gray-500 px-2 py-2 mx-1 my-2 rounded-xl text-white active:scale-95' onClick={()=>sortCountris("desc")}>Descending</button>
</div>

<div>

    <select name="" id="" value={filter} className='bg-gray-800 w-full border border-gray-500 px-2 py-2 mx-1 my-2  text-white ' onChange={handleSelectChange}>
        <option  value="all">All</option>
        <option  value="asia">Asia</option>
        <option  value="africa">Africa</option>
        <option  value="europe">Europe</option>
        <option  value="americas">Americas</option>
        <option  value="oceania">Oceania</option>
    </select>
</div>


    </section>
  )
}

export default SearchFilter