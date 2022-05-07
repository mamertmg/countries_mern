import React, {useEffect} from 'react'
import { useSelector } from 'react-redux'
import CountryCard from './CountryCard'

function CountryList() {

  const {countries}= useSelector((state) => state.countries)
  
  return (
    <div className='mt-10 grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 gap-10'>
      {countries.map((country) => (<CountryCard key={country.name} country={country}/>)) }
    </div>
  )   
}

export default CountryList