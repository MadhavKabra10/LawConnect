import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Error = ({ homeUrl }) => {
  return (
    <div className="container">
      <h1 className="text-center mt-5 text-danger">Payment Error</h1>
      <p className="text-center mt-3">An error occurred during the payment. Please try again.</p>
      <div className="d-flex justify-content-center mt-5">
        <a href={homeUrl} className="btn btn-primary">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default Error;
