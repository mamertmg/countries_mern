import axios from 'axios'

//Get country from API
const getCountry = async(country) =>{
    try{
        const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`)
        return response.data[0]
      } catch(error){
        console.log(error)
      }
}

//Save country in DB
const saveCountry = async(country) =>{

}

//Get all countries from DB
const getAll = async() =>{

}

//Get all countries from DB
const deleteCountry = async(country) =>{

}

const countryActions = {
    getCountry,
    saveCountry,
    getAll,
    deleteCountry
}

export default countryActions