import React from 'react';
import PropTypes from 'prop-types';
import RemoveBooks from './Removebook';

const Books = ({ id, title, author, completed, chapter }) => (
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
        <span>|</span>
        <RemoveBooks id={id} />
        <span>|</span>
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
  completed: PropTypes.bool.isRequired,
  chapter: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default Books;
