/* eslint-disable import/no-named-as-default */

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import bookReducers from './books';

const rootReducer = combineReducers({
  books: bookReducers,
  //categores: categoriesReducers
});

export const store = configureStore({ reducer: rootReducer });
