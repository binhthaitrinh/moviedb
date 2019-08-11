import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/auth';

import { withRouter } from 'react-router-dom';

const Navbar = ({ auth, logout, history }) => {
  const [query, setQuery] = useState('');

  const onChange = e => {
    setQuery(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    history.push(`/search-result/${query}`);
    setQuery('');
  };

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
                Recently added
              </Link>
            </li>
          </ul>
          <div className="menu-profile">
            <form onSubmit={e => onSubmit(e)}>
              <input
                type="text"
                className="menu-search-bar"
                placeholder="Enter something..."
                name="query"
                value={query}
                onChange={onChange}
                autoComplete="off"
              />
              <button className="btn menu-search-btn">
                <i className="fas fa-search" />
              </button>
            </form>

            {auth.isAuthenticated && auth.user ? (
              <div className="profile-avatar">
                <div
                  className="profile-avatar-avatar"
                  style={{
                    backgroundImage: `url(https:${
                      auth.user.credentials.avatar
                    })`
                  }}
                />
                <div className="profile-panel">
                  <h1>{auth.user.credentials.handle}</h1>
                  <p className="long-post">{auth.user.credentials.email}</p>
                  <hr />

                  <Link to="/">
                    <div className="profile-section">
                      <i className="fas fa-user" />
                      <span>My Profile</span>
                    </div>
                  </Link>
                  <Link to="/my-list">
                    <div className="profile-section">
                      <i className="fas fa-list" />
                      <span>My list</span>
                    </div>
                  </Link>

                  <button
                    onClick={() => logout()}
                    className="btn btn-primary-regular"
                    style={{ marginTop: '1rem', marginLeft: '.8rem' }}>
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

export default withRouter(
  connect(
    mapStateToProps,
    { logout }
  )(Navbar)
);
