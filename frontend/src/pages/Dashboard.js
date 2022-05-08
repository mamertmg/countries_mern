import React, {useEffect} from 'react'
import { useSelector , useDispatch} from 'react-redux'
import {getAll, reset} from '../features/countrySlice'
import { useNavigate } from 'react-router-dom'
import CountryForm from '../components/CountryForm'
import CountryList from '../components/CountryList'

function Dashboard() {

  const { user } = useSelector((state) => state.auth)
  const {countries, isError, message}= useSelector((state) => state.countries)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getAll())

    return () => {
      dispatch(reset())
    }

  }, [user, navigate, isError, message,dispatch])

  return (
    <React.Fragment>
      <section className="flex flex-col md:px-12 px-4 py-0 bg-background items-center">
          <h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
            <span className="text-active">Countries</span> 
          </h1>
          <h2 className="text-primary text-2xl font-light mt-6 font-ebas">
            Track all your countries
          </h2>
          <CountryForm/>
      </section>
      <section className='flex flex-col md:px-12 px-4 py-0 bg-background items-center'>
        {countries.length > 0 ? 
          <div>
            <CountryList/>
          </div>
          : (
            <h3>You have not visited any country</h3>
          )
        }
      </section>   
      <section>

      </section> 
    </React.Fragment>
  )
}

export default Dashboard