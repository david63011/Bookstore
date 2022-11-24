import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/Books/Books';

const RemoveBooks = (id) => {
  const dispatch = useDispatch();
  const newID = id;
  const finalID = newID.id;
  return (
    <button
      onClick={() => {
        dispatch(removeBook(id));
      }}
      className="book-btn"
      type="button"
    >
      Remove
    </button>
  );
};

export default RemoveBooks;
