import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <Fragment>
      <header>
        <nav className="menu">
          <ul className="menu-nav">
            <div className="menu-branding">
              <Link to="/">
                <h1>movieDB</h1>
              </Link>
            </div>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Discover
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                My List
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Recently added
              </Link>
            </li>
          </ul>
          <div className="menu-profile">
            <form>
              <input
                type="text"
                className="menu-search-bar"
                placeholder="Enter something..."
              />
              <Link to="/" className="btn menu-search-btn">
                <i className="fas fa-search" />
              </Link>
            </form>
            <div className="profile-avatar" />
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

export default Navbar;
