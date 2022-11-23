/* eslint-disable spaced-comment*/

const ADD_BOOK = 'books/src/redux/books/addbook';
const REMOVE_BOOK = 'books/src/redux/books/removebook';

export const addbook = () => ({
  type: 'ADD_BOOK',
  payload: {
    id: Math.floor(Math.random() * 10000),
    title: 'title',
    author: 'author',
    compleated: false,
    chapter: 1,
  },
});

export const removebook = (id) => ({
  type: 'REMOVE_BOOK',
  payload: id,
});

const initialState = (state = '', action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default initialState;
