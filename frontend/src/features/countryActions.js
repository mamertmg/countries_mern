import axios from 'axios'
const DB_URL = '/api/countries/'

//Get country from API
const getCountry = async(country, token) =>{
    try{
        const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`)
        const res ={
          name: response.data[0].name.official,
          capital: response.data[0].capital.toString( ),
          region: response.data[0].region,
          population: new Intl.NumberFormat('de-DE').format(response.data[0].population),
          maps: response.data[0].maps,
          flags: response.data[0].flags
        }
        saveCountry(res, token)
        return res
      } catch(error){
        console.log(error.response)
    }

}

//Save country in DB
const saveCountry = async(country, token) =>{
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
    const response = await axios.post(DB_URL, country, config)

  return response.data
}

//Get all countries from DB
const getAll = async(token) =>{
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(DB_URL, config)

  return response.data
}

//Get all countries from DB
const deleteCountry = async(country, token) =>{
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(DB_URL + country, config)

  return response.data
}

const countryActions = {
    getCountry,
    saveCountry,
    getAll,
    deleteCountry
}

export default countryActions