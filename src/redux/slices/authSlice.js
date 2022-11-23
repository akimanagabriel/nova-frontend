import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',

    initialState: {
        isLoggedIn: false,
        authUser: {},
    },

    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true
            state.authUser = { ...action.payload }
        },

        logout: (state) => {
            state.isLoggedIn = false;
            state.authUser = {};
            console.log("you're now logged out")
        }
    }
})

export default authSlice