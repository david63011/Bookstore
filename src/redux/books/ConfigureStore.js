import { combineReducers, configureStore } from '@reduxjs/toolkit';
import bookReducer from './Books';
import categoriesReducer from '../categories/categories';

const rootReducer = combineReducers({
  books: bookReducer,
  categorie: categoriesReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
