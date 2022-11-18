import React from 'react';

const Bookform = () => {
  return (
    <form>
      <h2 className="addbook">ADD NEW BOOK</h2>
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Author" />
      <button className="bookbtn" type="submit">
        Add Book
      </button>
    </form>
  );
};

export default Bookform;
