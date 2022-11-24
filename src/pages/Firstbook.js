import React from 'react';
import { useSelector } from 'react-redux';
import Books from '../component/BooksRender';
import BookActions from '../component/BookActions';

const Firstbook = () => (
  <div className="book-container">
    {useSelector((state) => state.books).map((books) => (
      <Books
        key={books.id}
        id={books.id}
        title={books.title}
        author={books.author}
        completed={books.completed}
        chapter={books.chapter}
      />
    ))}
    <BookActions />
  </div>
);

export default Firstbook;
