const CHECK_STATUS = 'books/src/redux/categories/statuscheck';
const defaultState = [];

// Actions
export const statusCheck = () => ({
  type: 'CHECK_STATUS',
});

// Reducer
export default function categoriesReducer(state = defaultState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
}
