import React from 'react';
import PropTypes from 'prop-types';
import RemoveBooks from './Removebook';

const Books = ({ id, title, author }) => (
  <div className="bookSite">
    <div className="info">
      <div className="left-section">
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
          <span>|</span>
          <RemoveBooks id={id} />
          <span>|</span>
          <button className="book-btn" type="button">
            Edit
          </button>
        </div>
      </div>

      <div className="center-section">
        <progress value="60" max="100">
          {' '}
          60
        </progress>
        <span>60%</span>
      </div>
      <div className="right-section">
        <span className="current">Current Chapter</span>
        <span className="chapter">Chapter 17</span>
        <button className="progress-btn" type="button">
          Update Progress
        </button>
      </div>
    </div>
  </div>
);

Books.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Books;
