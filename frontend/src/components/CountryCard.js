import React from 'react'
import ImageCard from './ImageCard'

function CountryCard(country) {

    const {name, capital, region, population, flag} = country.country

    return (
        <div className='rounded shadow-md compact side bg-base-100'>
                <div className='p-2'>
                    <div  >
                        <ImageCard props={flag.png}/>
                    </div>
                </div>
                <div className='p-2'>
                    <h1 className='font-bold mb-1 text-left text-decoration-line'>{name}</h1>
                    <div className='flex'>
                        <h2 className='font-bold mr-1'>Capital:</h2>
                        <h3>{capital}</h3>
                    </div>
                    <div className='flex'>
                        <h2 className='font-bold mr-1'>Region:</h2>  
                        <h3>{region}</h3>  
                    </div>
                    <div className='flex'>
                        <h2 className='font-bold mr-1'>Population:</h2>
                        <h3>{population}</h3>
                    </div>
                </div>
        </div>
    )
}

export default CountryCard