import {createSlice, createAsyncThunk} from '@reduxjs/toolkit' 
import destinationService from './destinationsService'

const initialState = {
    destinations: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

// Create new destination
export const createDestination = createAsyncThunk('destinations/create', async (destinationData, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await destinationService.createDestination(destinationData, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Get destinations
export const getDestinations = createAsyncThunk('destinations/getAll', async (_, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user.token
        return await destinationService.getDestinations(token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)    
    }
})




export const destinationsSlice = createSlice({
    name: 'destination',
    initialState,
    reducers: {
        reset: (state) => initialState
    },
    extraReduers: (builder) => {
        builder
            .addCase(createDestination.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createDestination.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.destinations.push(action.payload)
            })
            .addCase(createDestination.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = (action.payload)
            })
            .addCase(getDestinations.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getDestinations.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.destinations = action.payload
            })
            .addCase(createDestination.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = (action.payload)
            })
        }
})

export const {reset} = destinationsSlice.actions
export default destinationsSlice.reducer