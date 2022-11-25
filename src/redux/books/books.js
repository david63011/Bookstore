import { createAsyncThunk } from '@reduxjs/toolkit';
const ADD_BOOK = 'bookstore/src/redux/books/addBook';
const REMOVE_BOOK = 'bookstore/src/redux/books/removeBook';
const GET_BOOKS = 'bookstore/src/redux/books/getBooks';

export const defaultState = [];

export const getBook = createAsyncThunk(GET_BOOKS, async () => {
  const result = await fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/sppWoQdq6XBTog313fKt/books/',
    {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      },
    }
  );
  const json = result.json();
  return json;
});

export const addBook = createAsyncThunk(ADD_BOOK, (payload) => {
  fetch(
    'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/sppWoQdq6XBTog313fKt/books/',

    {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(payload),
    }
  );
  return payload;
});

export const removeBook = createAsyncThunk(REMOVE_BOOK, (payload) => {
  fetch(
    `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/sppWoQdq6XBTog313fKt/books/${payload}`,
    {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        item_id: payload,
      }),
    }
  );
  return payload;
});

const booksReducer = (state = defaultState, action) => {
  const list = [];
  switch (action.type) {
    case `${ADD_BOOK}/fulfilled`:
      return [...state, action.payload];
    case `${REMOVE_BOOK}/fulfilled`:
      return state.filter((book) => book.item_id !== action.payload);
    case `${GET_BOOKS}/fulfilled`:
      Object.keys(action.payload).forEach((element) => {
        const book = action.payload[element][0];
        book.item_id = element;
        list.push(book);
      });
      return list;
    default:
      return state;
  }
};

export default booksReducer;
