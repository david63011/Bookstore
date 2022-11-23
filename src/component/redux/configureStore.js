import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducers from './books';

const rootReducer = combineReducers({
  books: bookReducers,
  //categores: categoriesReducers
});

const store = configureStore({ reducer: rootReducer });

export default store;
