import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import blogReducer from '../features/Blogs/BlogsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    blogs:blogReducer
  },
});
