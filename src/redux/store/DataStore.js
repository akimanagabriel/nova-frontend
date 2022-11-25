import { configureStore } from '@reduxjs/toolkit'
import adminLeftBar from '../slices/adminLeftBarSlice';
import authSlice from '../slices/authSlice';

const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        admin: adminLeftBar.reducer
    }
});

export default store