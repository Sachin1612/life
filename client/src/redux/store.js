import { configureStore } from '@reduxjs/toolkit';
import bussiness from './slices/bussinessSlice';
import post from './slices/postSlice';

export default configureStore({
    reducer: {
        ...post,
        ...bussiness
    }
});
