import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => {
  return (
    <div className="spinner-bg">
      <img className="spinner" src={spinner} alt="Loading..." />
    </div>
  );
};

export default Spinner;
