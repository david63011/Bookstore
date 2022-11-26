import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { addBook } from '../redux/books/books';

const BookActions = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  return (
    <form>
      <h2 className="addbook">ADD NEW BOOK</h2>
      <input
        className="inputs"
        type="text"
        placeholder="Book Title"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      <input
        className=".inputs"
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
            addBook({
              id: Math.floor(
                Math.random() * Math.floor(Math.random() * Date.now())
              ),
              author,
              title,
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
