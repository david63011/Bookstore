import React from 'react';
import PropTypes from 'prop-types';
import RemoveBooks from './Removebook';
import { CircularProgressbar } from 'react-circular-progressbar';

const Books = ({ id, title, author }) => (
  <div className="bookSite">
    <div className="info">
      <div className="left-section">
        <ul className="align">
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
        <div className="oval">
          <CircularProgressbar
            value={32}
            text={`${32}%`}
            styles={{
              path: {
                stroke: '#fff',
              },
              text: {
                fill: '#fff',
                fontSize: '14px',
              },
            }}
          />
        </div>
        <div className="right-section">
          <span className="current">Current Chapter</span>
          <span className="chapter">Chapter 17</span>
          <button className="update-btn" type="button">
            Update Progress
          </button>
        </div>
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
