import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

const Navbar = ({ auth, logout }) => {
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
            {/* <div className="profile-avatar" /> */}
            {auth.isAuthenticated ? (
              <div className="profile-avatar">
                <div
                  className="profile-avatar-avatar"
                  style={{
                    backgroundImage: `url(${auth.user.credentials.imageUrl})`
                  }}
                />
                <div className="profile-panel">
                  <ul className="profile-list">
                    <li>{auth.user.credentials.handle}</li>
                    <li>{auth.user.credentials.location}</li>
                  </ul>
                  <hr />
                  <p>Account</p>
                  <button className="btn btn-border">Sign out</button>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <button className="btn btn-primary">Login</button>
              </Link>
            )}
          </div>
        </nav>
      </header>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
