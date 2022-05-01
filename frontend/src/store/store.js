import { configureStore } from '@reduxjs/toolkit';
import countrySlice from '../features/countrySlice';
import authSlice from '../features/authSlice'

export const store = configureStore({
  reducer: {
    countries: countrySlice,
    auth: authSlice
  },
});