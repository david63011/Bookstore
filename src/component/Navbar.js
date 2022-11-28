import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1 className="title">
      <NavLink className="logo" to="/">
        David's Bookstore
      </NavLink>
    </h1>
    <ul className="nav-links">
      <li>
        <NavLink to="/" className="nav-link">
          Books
        </NavLink>
      </li>
      <li>
        <NavLink to="/categories" className="nav-link">
          Categories
        </NavLink>
      </li>
    </ul>
    <div>
      <FontAwesomeIcon icon={faUser} className="user-icon"></FontAwesomeIcon>;
    </div>
  </nav>
);

export default Navbar;
