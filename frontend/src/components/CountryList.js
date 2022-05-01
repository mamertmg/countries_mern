import React from 'react'
import CountryCard from './CountryCard'

function CountryList(countries) {

  return (
    <div className='mt-10 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-10'>
      {countries.countries.map((country) => (<CountryCard key={country.name} country={country}/>)) }
    </div>
  )   
}

export default CountryList