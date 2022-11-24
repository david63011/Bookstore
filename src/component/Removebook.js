import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook, fetchBooks } from '../redux/Books/Books';

const RemoveBooks = (id) => {
  const dispatch = useDispatch();
  const newID = id;
  const finalID = newID.id;
  return (
    <button
      onClick={() => {
        dispatch(removeBook(id));
        setTimeout(() => {
          dispatch(fetchBooks());
        }, 500);
      }}
      className="book-btn"
      type="button"
    >
      Remove
    </button>
  );
};

export default RemoveBooks;
