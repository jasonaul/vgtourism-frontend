import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService'

// Thunk functions accept two arguments: Redux store 'dispatch' method, and 'getState' method. They aren't called directly by the app, but are instead passed to store.dispatch()

// Here we are getting a user from localStorage
const user = JSON.parse(localStorage.getItem('user'))
    //localStorage can only have strings, so we need to parse it

const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Reigstering a user
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await authService.register(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

// Login a user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
    try {
        return await authService.login(user)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})

//Logout function

export const logout = createAsyncThunk('auth/logout', async (user, thunkAPI) => {
    await authService.logout(user)
})

export const authSlice = createSlice({
    name: 'auth', 
    initialState,
    reducers: {
        // to reset the state to the default values
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
            
    },
    extraReducers: (builder) => {
        builder 
            .addCase(register.pending, (state) => {
                state.isLoading = true // true because it is pending/fetchingg data
            })
            .addCase(register.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
                    //returning the payloading coming back from our register function
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true //true because this is an error.
                state.message = action.payload 
                state.user = null
            })
            .addCase(login.pending, (state) => {
                state.isLoading = true // true because it is pending/fetchingg data
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
                    //returning the payloading coming back from our login function
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true //true because this is an error.
                state.message = action.payload 
                state.user = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
    },
})

export const { reset } = authSlice.actions
export default authSlice.reducer

