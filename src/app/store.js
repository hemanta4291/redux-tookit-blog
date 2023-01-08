import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import blogReducer from '../features/Blogs/BlogsSlice'
import tagReducer from '../features/Tags/TagsSlice'
import filterReducer from '../features/filter/FilterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    blogs:blogReducer,
    tags:tagReducer,
    filter: filterReducer,
  },
});
