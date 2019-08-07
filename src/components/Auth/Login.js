import React, { useState } from 'react';
import { login } from '../../actions/auth';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const initial = { email: '', password: '' };

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({ ...initial });
  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div className="header2">
      <form style={{ position: 'relative', top: '100px' }}>
        <input
          type="text"
          placeholder="email"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <button
          onClick={e => {
            e.preventDefault();
            login(formData);
            console.log(formData);
          }}
          className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
