/* eslint-disable no-undef */
/* eslint-disable  import/prefer-default-export */

import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  books: booksReducer,
});

export const store = configureStore({ reducer: rootReducer });
