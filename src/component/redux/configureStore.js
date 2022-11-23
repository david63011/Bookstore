import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { initialState } from './books/books';

const rootReducer = combineReducers({
  books: initialState,
});

const store = configureStore({ reducer: rootReducer });

export default store;
