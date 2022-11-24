import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => 
    <nav className="navbar">
      <h1 className="logo">
        <Link to="/">David's Bookstore</Link>
      </h1>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            Books
          </Link>
        </li>
        <li>
          <Link to="/categories" className="nav-link">
            Categories
          </Link>
        </li>
      </ul>
    </nav>



export default Navbar;
