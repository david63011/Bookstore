const CHECK_STATUS = 'books/src/redux/categories/statuscheck';
const defaultState = [];

export const statusCheck = () => ({
  type: 'CHECK_STATUS',
});

export default function categoriesReducer(state = defaultState, action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
}
