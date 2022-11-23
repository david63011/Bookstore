/* eslint-disable  import/prefer-default-export */
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const rootReducer = combineReducers({
  // books: bookReducers,
  // categores: categoriesReducers
});

export const store = configureStore({ reducer: rootReducer });
