import React from 'react';
import { useSelector } from 'react-redux';
import Books from '../component/BooksRender';
import BookActions from '../component/BookActions';

const Firstbook = () => (
    <div className="book-container">
      {useSelector((state) => state.books).map((book) => (
        <Books
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          completed={book.completed}
          chapter={book.chapter}
        />
      ))}
      <BookActions />
    </div>
  );

export default Firstbook;
