import React from 'react';
import './spinner.css';

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="cube1" />
      <div className="cube2" />
      <div className="label">Loading...</div>
    </div>
  );
};

export default Spinner;
