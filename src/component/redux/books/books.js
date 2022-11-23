/* eslint-enable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'books',
  initialState: { value: [] },
  reducers: {
    bookReducers: (state, action) => {
      state.value.push(action.payload);
    },
    removeBook: (state, action) => {
      state.value = state.value.filter((book) => book.id !== action.payload);
    },
  },
});

export const { bookReducers, removeBook } = bookSlice.actions;
export default bookSlice.reducer;
