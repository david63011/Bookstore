const CHECK_STATUS = 'CHECK_STATUS';

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default function categoriesReducer(state = [], action) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
}
