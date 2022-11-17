/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */

import React from 'react';

const Books = ({ title, author }) => {
  return (
    <div className="bookSite">
      <div className="book-info">
        <div className="bookinfocon"></div>
        <ul>
          <li className="genre books">Action</li>
          <div>
            <li className="booktitle books">{title}</li>
          </div>
          <li className="bookauthor books">{author}</li>
        </ul>

        <div className="book-actions">
          <button className="book-btn" type="button">
            Comments
          </button>
          <button className="book-btn" type="button">
            Remove
          </button>
          <button className="book-btn" type="button">
            Edit
          </button>
        </div>
        <div className="progress">
          <progress value="60" max="100">
            {' '}
            60%
          </progress>
          <span>60%</span>
        </div>
      </div>
    </div>
  );
};

export default Books;
