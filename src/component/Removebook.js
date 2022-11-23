import React from 'react';
import { useDispatch } from 'react-redux';
import { removeBook } from './redux/books';

const RemoveBooks = (id) => {
  const dispatch = useDispatch();
  const newID = id;
  const finalID = newID.id;
  return (
    <button
      onClick={() => {
        dispatch(removeBook(finalID));
      }}
      className="book-btn"
      type="submit"
    >
      Remove Book
    </button>
  );
};

export default RemoveBooks;
