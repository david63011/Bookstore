const ADD_BOOK = 'bookstore/src/redux/books/addBook';
const REMOVE_BOOK = 'bookstore/src/redux/books/removeBook';

export const defaultState = [
  {
    id: '1',
    title: 'Money Ball',
    author: 'Michael Lewis',
    completed: '32%',
    chapter: '7',
  },
  {
    id: '2',
    title: 'Dune',
    author: 'Frank Herbert',
    completed: '8%',
    chapter: '1',
  },
  {
    id: '3',
    title: 'The Crystal Castle',
    author: 'David Underwood',
    completed: '10%',
    chapter: '3',
  },
];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  id: payload.id,
  title: payload.title,
  author: payload.author,
  completed: payload.completed,
  chapter: payload.chapter,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  id: payload.id,
});

export default function bookReducer(state = defaultState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          author: action.author,
          completed: action.completed,
          chapter: action.chapter,
        },
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
}
