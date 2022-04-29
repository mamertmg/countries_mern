import React from 'react'
import CountryForm from '../components/CountryForm'
import CountryList from '../components/CountryList'
import CountryMap from '../components/CountryMap';

function Dashboard() {
  return (
    <React.Fragment>
      <section className="flex flex-col md:px-12 px-4 py-0 bg-background items-center">
          <h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
            <span className="text-active">Countries</span> 
          </h1>
          <h2 className="text-primary text-2xl font-light mt-6 font-ebas">
            Track all the countries you have visited in your life
          </h2>
          <CountryForm/>
      </section>
      <section>
        <CountryList/>
      </section>
      <section>
        <CountryMap/>
      </section>      
    </React.Fragment>

  )
}

export default Dashboard