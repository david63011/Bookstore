/* eslint-enable no-param-reassign*/
import { createSlice } from '@reduxjs/toolkit';
import { BookList } from '../BookList';

export const bookSlice = createSlice({
  name: 'books',
  initialState: { value: BookList },
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
