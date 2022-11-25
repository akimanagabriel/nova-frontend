import { createSlice } from '@reduxjs/toolkit';

const adminLeftBar = createSlice({
    name: 'admin',
    initialState: {
        leftBar: false
    },
    reducers: {
        show: (state) => {
            state.leftBar = true
        },
        hide: (state) => {
            state.leftBar = false
        },
        toggle: (state) => {
            state.leftBar = !state.leftBar
        }
    }
})

export default adminLeftBar