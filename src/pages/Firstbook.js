import { useSelector } from 'react-redux';
import React from 'react';
import Books from '../component/BooksRender';

const Firstbook = () => {
  const bookList = useSelector((state) => state.books.value);
  return (
    <div className="book-list">
      {bookList.map((book) => (
        <Books
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          completed={book.completed}
          chapter={book.chapter}
        />
      ))}
    </div>
  );
};

export default Firstbook;
