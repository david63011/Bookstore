const CHECK_STATUS = '/books/src/redux/checkStatus';

export const checkStatus = () => ({
  type: CHECK_STATUS,
});

export default function statusCheck(state = [], action) {
  if (action.type === CHECK_STATUS) {
    return 'Under Construction';
  }
  return state;
}
