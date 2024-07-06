import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PaymentSuccess = ({ homeUrl }) => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Paypal Success</h1>
      <div className="d-flex justify-content-center mt-5">
        <a href={homeUrl} className="btn btn-primary">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default PaymentSuccess;
