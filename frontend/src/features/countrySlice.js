import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    countries: []
}

export const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers:{

    }
})

export const {addCountry} = countrySlice.actions

export default countrySlice.reducer