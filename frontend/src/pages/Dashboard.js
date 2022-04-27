import React from 'react'
import CountryForm from '../components/CountryForm'

function Dashboard() {
  return (
		<div className="flex flex-col md:px-12 px-4 bg-background font-poppins items-center min-h-screen">
        <h1 className="md:text-6xl text-4xl font-bold text-primary mt-10">
          <span className="text-active">Countries</span> Visited
        </h1>
        <h2 className="text-primary text-2xl font-light mt-6 font-ebas">
          Track all the countries you have visited
        </h2>
        <CountryForm/>
		</div>
  )
}

export default Dashboard