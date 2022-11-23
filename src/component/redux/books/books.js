/* eslint-disable import/no-anonymous-default-export */
const ADD_BOOK = 'books/src/redux/books/addbook';
const REMOVE_BOOK = 'books/src/redux/books/removebook';

// action to add

const addbook = () => ({
  type: 'ADD_BOOK',
  payload: {
    id: Math.floor(Math.random() * 10000),
    title: 'title',
    author: 'author',
    compleated: false,
    chapter: 1,
  },
});

// action to remove
const removebook = (id) => ({
  type: 'REMOVE_BOOK',
  payload: id,
});

// create reducer
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

export default { addbook, removebook, initialState };
