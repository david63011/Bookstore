import React from 'react';
import PropTypes from 'prop-types';

const Books = ({ title, author }) => (
  <div className="bookSite">
    <div className="book-info">
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

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Books;
