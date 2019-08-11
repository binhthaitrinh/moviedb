import React, { useState } from 'react';
import { register } from '../../actions/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Alert from '../Layout/Alert';
import { Link } from 'react-router-dom';
import { setAlert } from '../../actions/alert';

const initial = { email: '', password: '', password2: '', handle: '' };

const Register = ({ register, isAuthenticated, user }) => {
  const [formData, setFormData] = useState({ ...initial });
  const { email, password, password2, handle } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Password do not match', 'danger');
    } else {
      register(formData);
    }
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
        <h1 className="text-primary large">Register</h1>
        <form className="form" onSubmit={e => onSubmit(e)}>
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

          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm password"
              name="password2"
              value={password2}
              onChange={onChange}
            />
          </div>

          <div className="form-group">
            <input
              type="text"
              placeholder="User handle"
              name="handle"
              value={handle}
              onChange={onChange}
            />
          </div>

          <button className="btn btn-border-primary">Submit</button>
        </form>
        <p className="long-post">
          Already have an account? <Link to="/login">Log in here</Link>{' '}
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
  { register }
)(Register);
