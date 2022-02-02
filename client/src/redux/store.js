import { configureStore } from '@reduxjs/toolkit';
import post from './slices/postSlice';

export default configureStore({
    reducer: {
        ...post
    }
});
