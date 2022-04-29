import React from 'react'
import { Link } from 'react-router-dom'

function CountryCard() {
    return (
        <div className='shadow-md compact side bg-base-100'>
            <div className='flex-row items-center space-x-4 card-body'>
                <div>
                    <div>
                        <div className='rounded-full shadow w-14 h-14'>
                            <img src="" alt='flag' />
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className='font-bold'>Capital:</h2>
                    <h2 className='font-bold'>Region:</h2>
                    <h2 className='font-bold'>Population:</h2>
                </div>
                <br></br>
                <div className='flex justify-center'>
                    <Link className='text-base-content text-opacity-40' to="">
                        Read more
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CountryCard