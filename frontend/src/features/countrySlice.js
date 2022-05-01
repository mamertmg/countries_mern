import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import countryActions from './countryActions'

const initialState = {
    countries: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Get country from API
export const getCountry = createAsyncThunk(
    'country/getCountry',
    async(country, thunkAPI)=>{
        try{
            return await countryActions.getCountry(country)       
        } catch (error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Save country in database
export const saveCountry = createAsyncThunk(
    'country/saveCountry',
    async(country, thunkAPI)=>{
        try{
            return await countryActions.saveCountry(country)       
        } catch (error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)


// Get user countries
export const getAll = createAsyncThunk(
    'country/getAll',
    async(country, thunkAPI)=>{
        try{
            return await countryActions.getAll()       
        } catch (error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Delete country
export const deleteCountry = createAsyncThunk(
    'country/deleteCountry',
    async(country, thunkAPI)=>{
        try{
            return await countryActions.deleteCountry(country)       
        } catch (error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

export const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers:{
        reset: (state) => initialState,
    },
    extraReducers: (builder) => {
        builder
          .addCase(getCountry.pending, (state) => {
            state.isLoading = true
          })
          .addCase(getCountry.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.countries.push(action.payload) 
          })
          .addCase(getCountry.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
      },
})

export const {reset} = countrySlice.actions

export default countrySlice.reducer