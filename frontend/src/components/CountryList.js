import React from 'react'
import CountryCard from './CountryCard'

function CountryList() {
  return (
    <div className='grid grid-cols-1 gal-8 xl:grid-cols-6 lg:grid-cols-3 md:grid-cols-2'>
      <CountryCard/>
    </div>
  )   
}

export default CountryList