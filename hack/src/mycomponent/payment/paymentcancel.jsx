import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PaymentCancelled = ({ homeUrl }) => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Payment Cancelled</h1>
      <div className="d-flex justify-content-center mt-5">
        <a href={homeUrl} className="btn btn-primary">
          Back to Home
        </a>
      </div>
    </div>
  );
};

export default PaymentCancelled;
