import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addCountry} from '../features/countrySlice'

function CountryForm() {

  const [country, setCountry] = useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) =>{
    e.preventDefault()

    dispatch(addCountry({ country }))
    setCountry('')

  }
  return (
    <form onSubmit={onSubmit} className='flex m-5 p-2 w-full justify-center'>
      <div >
        <input
          className=' border border-gray-500 border-solid mr-4' 
          type="text"
          name="text"
          id='text'
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
      </div>
      <div className='flex items-center'>
        <button type='submit'className='border border-white border-solid rounded bg-black text-white text-base cursor-pointer px-2'>
            Add country
        </button>        
      </div>

    </form>
  )
}

export default CountryForm