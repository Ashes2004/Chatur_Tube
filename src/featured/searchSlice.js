// searchSlice.js
import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    searchInput: '',
  },
  reducers: {
    setSearchInput: (state, action) => {
      state.searchInput = action.payload;
    },
  },
});

export const { setSearchInput } = searchSlice.actions;
// searchSlice.js
export const selectSearchInput = (state) => state?.search?.searchInput;

export default searchSlice.reducer;
