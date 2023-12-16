// store.js
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from '../featured/searchSlice';

const store = configureStore({
  reducer: {
    search: searchReducer,
    // Add other reducers if any
  },
});

export default store;
