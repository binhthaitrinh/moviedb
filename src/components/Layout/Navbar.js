import React, { Fragment } from 'react';
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
            {auth.isAuthenticated && auth.user ? (
              <div className="profile-avatar">
                <div
                  className="profile-avatar-avatar"
                  style={{
                    backgroundImage: `url(${auth.user.credentials.imageUrl})`
                  }}
                />
                <div className="profile-panel">
                  <h1>{auth.user.credentials.handle}</h1>
                  <p className="long-post">{auth.user.credentials.location}</p>
                  <hr />
                  <p>Account</p>
                  <button onClick={() => logout()} className="btn btn-normal">
                    Sign out
                  </button>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <button
                  style={{ marginLeft: '1rem' }}
                  className="btn btn-primary">
                  Sign in
                </button>
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
