/* eslint-disable no-undef */
/* eslint-disable comma-dangle */

import { useDispatch } from 'react-redux';
import { useState } from 'react';
// import { bookReducers } from '';

const BookActions = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  return (
    <form>
      <h2 className="addbook">ADD NEW BOOK</h2>
      <input
        type="text"
        placeholder="Book Title"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Author"
        onChange={(event) => {
          setAuthor(event.target.value);
        }}
      />
      <button
        onClick={(event) => {
          event.preventDefault();
          dispatch(
            bookReducers({
              id: Math.floor(Math.random() * 10000),
              title,
              author,
              compleated: false,
              chapter: 1,
            })
          );
        }}
        className="bookbtn"
        type="submit"
      >
        Add Book
      </button>
    </form>
  );
};

export default BookActions;
