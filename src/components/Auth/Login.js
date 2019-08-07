import React, { useState } from 'react';
import { login } from '../../actions/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Alert from '../Layout/Alert';
import { Link } from 'react-router-dom';

const initial = { email: '', password: '' };

const Login = ({ login, isAuthenticated, user }) => {
  const [formData, setFormData] = useState({ ...initial });
  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div
      className="header2"
      style={{
        backgroundImage:
          'url(https://images.pexels.com/photos/32237/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
      <div className="content">
        <Alert />
        <h1 className="text-primary large">Login</h1>
        <form className="form">
          <div className="form-group">
            <input
              type="text"
              placeholder="email"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </div>

          <button
            onClick={e => {
              e.preventDefault();
              login(formData);
              console.log(formData);
            }}
            className="btn btn-border-primary">
            Submit
          </button>
        </form>
        <p className="long-post">
          New to MovieDB? <Link to="/register">Register here </Link>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
