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
            const token = thunkAPI.getState().auth.user.token
            return await countryActions.getCountry(country, token)       
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
            const token = thunkAPI.getState().auth.user.token
            return await countryActions.saveCountry(country, token)       
        } catch (error){
            const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Get user countries
export const getAll = createAsyncThunk(
    'country/getAll',
    async(_, thunkAPI)=>{
        try{
            const token = thunkAPI.getState().auth.user.token
            return await countryActions.getAll(token)       
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
            const token = thunkAPI.getState().auth.user.token
            return await countryActions.deleteCountry(country, token)       
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
            state.isSuccess = false
          })
          .addCase(getCountry.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
          })
          .addCase(getCountry.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
          .addCase(saveCountry.pending, (state) => {
            state.isLoading = true
            state.isSuccess = false
          })
          .addCase(saveCountry.fulfilled, (state,action) => {
            state.isLoading = false
            state.isSuccess = true
          })
          .addCase(saveCountry.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
          .addCase(getAll.pending, (state) => {
            state.isLoading = true
            state.isSuccess = false
          })
          .addCase(getAll.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.countries =action.payload
          })
          .addCase(getAll.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
          .addCase(deleteCountry.pending, (state) => {
            state.isLoading = true
            state.isSuccess = false
          })
          .addCase(deleteCountry.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.ticket = action.payload
          })
          .addCase(deleteCountry.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
          })
      },
})

export const {reset} = countrySlice.actions

export default countrySlice.reducer