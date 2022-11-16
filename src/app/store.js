import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import destinationsReducer from '../features/destinations/destinationsSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        destination: destinationsReducer
    },
});