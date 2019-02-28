import React from 'react';

const ErrorMessage = ({ message }) => {
  return (
    <div className="ui negative message">
      <div className="">{message}</div>
    </div>
  );
};

export default ErrorMessage;
